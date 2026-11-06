import { FIRM, PRACTICE_AREAS } from "@/lib/site";

export type Values = {
  name: string;
  organisation: string;
  email: string;
  phone: string;
  discipline: string;
  urgency: string;
  message: string;
  clear: boolean;
};

export type Field = keyof Values;

export type Draft = { subject: string; body: string };

export const EMPTY: Values = {
  name: "",
  organisation: "",
  email: "",
  phone: "",
  discipline: "",
  urgency: "",
  message: "",
  clear: false,
};

// The order is the triage question: how soon the exposure becomes real.
export const URGENCY = [
  {
    value: "24h",
    label: "Within 24 hours",
    note: "Action already taken against you, or about to be.",
  },
  {
    value: "week",
    label: "This week",
    note: "A deadline, a signing date or a response due.",
  },
  {
    value: "open",
    label: "Exploratory",
    note: "Structuring, or weighing whether to act at all.",
  },
];

export const MESSAGE_MAX = 1200;

export function validate(v: Values): Partial<Record<Field, string>> {
  const errors: Partial<Record<Field, string>> = {};

  if (v.name.trim().length < 2) errors.name = "Give the name we should address.";
  if (v.organisation.trim().length < 2) {
    errors.organisation = "Which entity is instructing us?";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) {
    errors.email = "A working reply address, not a shared inbox you cannot see.";
  }
  if (v.phone.trim() && v.phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Either leave this blank or give a number we can call back.";
  }
  if (!v.urgency) errors.urgency = "Choose how soon this becomes real.";
  if (v.message.trim().length < 40) {
    errors.message =
      "Forty characters at least. A sentence of what happened tells us more than a category.";
  }
  if (!v.clear) {
    errors.clear = "Confirm you have not included privileged material.";
  }
  return errors;
}

export function compose(v: Values): Draft {
  const area = PRACTICE_AREAS.find((a) => a.slug === v.discipline);
  const urgency = URGENCY.find((u) => u.value === v.urgency);

  const subject = `Enquiry — ${v.organisation.trim() || v.name.trim()}`;

  const body = [
    v.message.trim(),
    "",
    `Timing: ${urgency?.label ?? "not stated"}`,
    area
      ? `Discipline: ${area.title}`
      : "Discipline: not identified — please route on the facts",
    "",
    `${v.name.trim()}`,
    `${v.organisation.trim()}`,
    `${v.email.trim()}`,
    v.phone.trim() ? `${v.phone.trim()}` : "",
  ]
    .filter((line) => line !== "")
    .join("\n");

  return { subject, body };
}

export function mailtoHref(draft: Draft) {
  return `mailto:${FIRM.email}?subject=${encodeURIComponent(
    draft.subject,
  )}&body=${encodeURIComponent(draft.body)}`;
}
