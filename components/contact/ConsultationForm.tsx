"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Transition,
  type Variants,
} from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { PRACTICE_AREAS } from "@/lib/site";
import DraftSuccess from "./DraftSuccess";
import {
  EMPTY,
  MESSAGE_MAX,
  URGENCY,
  compose,
  mailtoHref,
  validate,
  type Draft,
  type Field,
  type Values,
} from "./consultationFields";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const EASE = [0.22, 1, 0.36, 1] as const;

const LABEL =
  "text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-soft sm:text-[11px]";

const INPUT =
  "mt-2.5 w-full border-b border-rule-firm bg-transparent pb-2.5 font-serif text-lg text-ink transition-colors focus:border-accent focus:outline-none";

const ORDER: Field[] = [
  "name",
  "organisation",
  "email",
  "phone",
  "discipline",
  "urgency",
  "message",
  "clear",
];

function FieldShell({
  id,
  label,
  optional,
  error,
  describedBy,
  className = "",
  t,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  describedBy?: string;
  className?: string;
  t: Transition;
  children: React.ReactNode;
}) {
  return (
    <motion.div variants={item} transition={t} className={className}>
      <label htmlFor={id} className={LABEL}>
        {label}
        {optional ? (
          <span className="ml-2 text-faint normal-case">optional</span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p id={describedBy} className="mt-2 text-xs leading-relaxed text-accent">
          {error}
        </p>
      ) : null}
    </motion.div>
  );
}

export default function ConsultationForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [draft, setDraft] = useState<Draft | null>(null);

  const reduceMotion = useReducedMotion() === true;
  const t = reduceMotion ? { duration: 0 } : { duration: 0.5, ease: EASE };

  const editedAfterSend = useRef(false);

  useEffect(() => {
    if (draft || !editedAfterSend.current) return;
    editedAfterSend.current = false;
    // AnimatePresence mounts this subtree only after the success panel has
    // finished exiting, so the field does not exist yet at this point.
    const deadline = performance.now() + 1200;
    const attempt = () => {
      const el = document.getElementById("name");
      if (el) el.focus({ preventScroll: true });
      else if (performance.now() < deadline) requestAnimationFrame(attempt);
    };
    attempt();
  }, [draft]);

  function set<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate(values);
    setErrors(next);

    const first = ORDER.find((key) => next[key]);
    if (first) {
      // Every control carries the id of its field key, including the urgency
      // group wrapper, which is focusable only so this can reach it.
      document.getElementById(first)?.focus();
      return;
    }
    setDraft(compose(values));
  }

  const errorCount = ORDER.filter((key) => errors[key]).length;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-rule bg-ink-deep px-5 py-9 shadow-menu sm:px-9 sm:py-12 lg:px-11">
      {/* The ember rule across the top is the only thing that announces the
          panel; it draws left to right once, on mount. */}
      <motion.span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px origin-left bg-accent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.9, ease: EASE }}
      />

      <AnimatePresence mode="wait">
        {draft ? (
          <motion.div
            key="sent"
            role="status"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={t}
          >
            <DraftSuccess
              draft={draft}
              href={mailtoHref(draft)}
              onEdit={() => {
                editedAfterSend.current = true;
                setDraft(null);
              }}
            />
          </motion.div>
        ) : (
          <motion.form
            key="draft"
            variants={container}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -12 }}
            transition={t}
            onSubmit={onSubmit}
            // Native bubbles would pre-empt the composed error copy below, and
            // validate() already covers required plus the email shape.
            noValidate
            className="grid gap-7 sm:gap-8"
          >
            {errorCount > 0 ? (
              <motion.div
                variants={item}
                transition={t}
                role="alert"
                className="border-l-2 border-accent bg-accent-tint px-4 py-3"
              >
                <p className="text-[11px] font-semibold tracking-[0.14em] text-ink uppercase">
                  {errorCount} {errorCount === 1 ? "answer needs" : "answers need"}{" "}
                  attention
                </p>
                <ul className="mt-2 space-y-1 text-xs leading-relaxed text-body">
                  {ORDER.filter((key) => errors[key]).map((key) => (
                    <li key={key}>{errors[key]}</li>
                  ))}
                </ul>
              </motion.div>
            ) : null}

            <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
              <FieldShell
                t={t}
                id="name"
                label="Your name"
                error={errors.name}
                describedBy="name-error"
              >
                <input
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={(e) => set("name", e.target.value)}
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  autoComplete="name"
                  required
                  className={INPUT}
                />
              </FieldShell>

              <FieldShell
                t={t}
                id="organisation"
                label="Entity instructing us"
                error={errors.organisation}
                describedBy="organisation-error"
              >
                <input
                  id="organisation"
                  name="organisation"
                  value={values.organisation}
                  onChange={(e) => set("organisation", e.target.value)}
                  aria-invalid={errors.organisation ? true : undefined}
                  aria-describedby={
                    errors.organisation ? "organisation-error" : undefined
                  }
                  autoComplete="organization"
                  required
                  className={INPUT}
                />
              </FieldShell>

              <FieldShell
                t={t}
                id="email"
                label="Reply address"
                error={errors.email}
                describedBy="email-error"
              >
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={(e) => set("email", e.target.value)}
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  autoComplete="email"
                  required
                  className={INPUT}
                />
              </FieldShell>

              <FieldShell
                t={t}
                id="phone"
                label="Direct number"
                optional
                error={errors.phone}
                describedBy="phone-error"
              >
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  aria-invalid={errors.phone ? true : undefined}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  autoComplete="tel"
                  className={`${INPUT} font-mono text-base`}
                />
              </FieldShell>
            </div>

            <FieldShell
              t={t}
              id="discipline"
              label="Which discipline you think it touches"
              optional
              describedBy="discipline-hint"
            >
              <div className="relative">
                <select
                  id="discipline"
                  name="discipline"
                  value={values.discipline}
                  onChange={(e) => set("discipline", e.target.value)}
                  aria-describedby="discipline-hint"
                  className={`${INPUT} appearance-none pr-8`}
                >
                  <option value="">Not sure — leave it to the facts</option>
                  {PRACTICE_AREAS.map((area) => (
                    <option key={area.slug} value={area.slug}>
                      {area.title}
                    </option>
                  ))}
                </select>
                <svg
                  aria-hidden
                  viewBox="0 0 12 8"
                  className="pointer-events-none absolute right-1 bottom-3 h-2 w-3 text-faint"
                >
                  <path
                    d="M1 1.5 6 6.5l5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <p id="discipline-hint" className="mt-2 text-xs text-faint">
                Wrong guesses cost us nothing. This only orders the file.
              </p>
            </FieldShell>

            <motion.fieldset
              variants={item}
              transition={t}
              className="border-0 p-0"
            >
              <legend className={LABEL}>How soon does this become real</legend>
              <div
                id="urgency"
                tabIndex={-1}
                className="mt-3 grid gap-px bg-rule outline-none sm:grid-cols-3"
              >
                {URGENCY.map((option) => (
                  <label
                    key={option.value}
                    className="block cursor-pointer border-2 border-transparent bg-ink-deep p-4 transition-colors has-[:checked]:border-accent has-[:checked]:bg-accent-tint has-[:focus-visible]:border-accent"
                  >
                    <input
                      type="radio"
                      name="urgency"
                      value={option.value}
                      checked={values.urgency === option.value}
                      onChange={() => set("urgency", option.value)}
                      className="peer sr-only"
                    />
                    <span className="block text-sm font-medium text-ink-soft transition-colors peer-checked:text-ink">
                      {option.label}
                    </span>
                    <span className="mt-1.5 block text-xs leading-relaxed text-faint">
                      {option.note}
                    </span>
                  </label>
                ))}
              </div>
              {errors.urgency ? (
                <p id="urgency-error" className="mt-2 text-xs leading-relaxed text-accent">
                  {errors.urgency}
                </p>
              ) : null}
            </motion.fieldset>

            <FieldShell
              t={t}
              id="message"
              label="What happened"
              error={errors.message}
              describedBy="message-error"
            >
              <textarea
                id="message"
                name="message"
                rows={5}
                maxLength={MESSAGE_MAX}
                value={values.message}
                onChange={(e) => set("message", e.target.value)}
                aria-invalid={errors.message ? true : undefined}
                aria-describedby={errors.message ? "message-error" : undefined}
                required
                className={`${INPUT} resize-y leading-relaxed`}
              />
              <p className="mt-2 font-mono text-[11px] text-faint">
                {values.message.length}/{MESSAGE_MAX}
              </p>
            </FieldShell>

            <motion.div variants={item} transition={t}>
              <label className="flex cursor-pointer items-start gap-3.5">
                <input
                  type="checkbox"
                  id="clear"
                  name="clear"
                  checked={values.clear}
                  onChange={(e) => set("clear", e.target.checked)}
                  aria-invalid={errors.clear ? true : undefined}
                  aria-describedby={errors.clear ? "clear-error" : undefined}
                  className="peer sr-only"
                />
                <span
                  aria-hidden
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-rule-firm transition-colors peer-checked:border-accent peer-checked:bg-accent peer-focus-visible:border-accent"
                >
                  <svg
                    viewBox="0 0 12 12"
                    className={`h-3 w-3 ${values.clear ? "opacity-100" : "opacity-0"}`}
                    fill="none"
                    stroke="var(--on-ink)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M2.5 6.2 5 8.7 9.5 3.4" />
                  </svg>
                </span>
                <span className="max-w-[52ch] text-sm leading-relaxed text-body">
                  No privileged or confidential material is in this note. Email
                  is not a confidential channel until an engagement letter is in
                  place.
                </span>
              </label>
              {errors.clear ? (
                <p id="clear-error" className="mt-2 text-xs leading-relaxed text-accent">
                  {errors.clear}
                </p>
              ) : null}
            </motion.div>

            <motion.div
              variants={item}
              transition={t}
              className="mt-1 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-xl bg-accent px-6 py-3 text-sm font-medium text-on-ink transition-colors hover:bg-accent-deep active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink-deep"
              >
                Compose the note
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={15}
                  color="currentColor"
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </button>
              <p className="max-w-[34ch] text-xs leading-relaxed text-faint">
                This writes the enquiry. It does not transmit it — the next step
                is your own mail client.
              </p>
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
