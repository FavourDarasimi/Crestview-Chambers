import {
  Briefcase01Icon,
  CourtHouseIcon,
  GavelIcon,
  JusticeScale01Icon,
  LegalDocument01Icon,
  Shield01Icon,
} from "@hugeicons/core-free-icons";

type PracticeIcon = typeof JusticeScale01Icon;

export type PracticeArea = {
  slug: string;
  title: string;
  /** Column and card label where the full title is too long to fit. */
  short: string;
  /** Mega-menu and card blurb. */
  blurb: string;
  /** Page lede. */
  summary: string;
  icon: PracticeIcon;
  capabilities: string[];
  sectors: string[];
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    slug: "corporate-ma",
    title: "Corporate & Cross-Border M&A",
    short: "Corporate",
    blurb:
      "Complex mergers, sovereign investments, and institutional governance.",
    summary:
      "We act for acquirers, targets, and financing parties on transactions where the regulatory perimeter crosses more than one jurisdiction, and where getting the sequence wrong costs the deal.",
    icon: Briefcase01Icon,
    capabilities: [
      "Public and private takeovers, schemes of arrangement",
      "Joint ventures and minority investment structures",
      "Sovereign and state-owned enterprise participation",
      "Antitrust and foreign-investment clearance coordination",
      "Board and special-committee advice during contested bids",
    ],
    sectors: ["Energy", "Financial Services", "Infrastructure", "Technology"],
  },
  {
    slug: "dispute-resolution",
    title: "Commercial Dispute & Litigation",
    short: "Disputes",
    blurb:
      "Supreme court representation, LCIA arbitration, and white-collar defense.",
    summary:
      "Our advocacy teams are instructed where the sum at stake justifies a full hearing, and where an adverse first-instance result cannot be absorbed. We are equally comfortable in arbitration and before the senior courts.",
    icon: GavelIcon,
    capabilities: [
      "Institutional and ad hoc arbitration, including LCIA and ICC",
      "Trial and appellate advocacy in the commercial courts",
      "Freezing, disclosure and interim injunctive relief",
      "Regulatory enforcement and parallel criminal exposure",
      "Post-dispute recovery and judgment enforcement",
    ],
    sectors: [
      "Banking",
      "Commodities",
      "Construction",
      "Fraud and asset tracing",
    ],
  },
  {
    slug: "banking-finance",
    title: "Banking & Financial Regulation",
    short: "Banking",
    blurb:
      "Structured finance, capital markets, and international banking compliance.",
    summary:
      "We advise lenders, issuers and regulators on the balance-sheet and market-structure questions that turn on how a transaction is classified, and on who is permitted to hold the resulting risk.",
    icon: CourtHouseIcon,
    capabilities: [
      "Syndicated, acquisition and real-estate finance",
      "Securitisation and structured credit programmes",
      "Debt and equity capital markets issuance",
      "Bank licensing, permissions and supervisory engagement",
      "Client asset, leverage and liquidity rules",
    ],
    sectors: ["Banks", "Asset managers", "Insurers", "Development finance"],
  },
  {
    slug: "intellectual-property",
    title: "Intellectual Property & Technology",
    short: "Intellectual Property",
    blurb:
      "Patents, technology transactions, and emerging AI regulatory frameworks.",
    summary:
      "Technology work for us is rarely about registering the right. It is about who may commercialise what, for how long, and under whose liability — which is where most platform and model deployments fail.",
    icon: LegalDocument01Icon,
    capabilities: [
      "Patent, design and trade-secret strategy and litigation",
      "Licensing, co-existence and portfolio transactions",
      "Data protection and cross-border transfer mechanisms",
      "AI system governance, model liability and procurement terms",
      "Open-source compliance and supply-chain warranties",
    ],
    sectors: ["Software", "Life sciences", "Media", "Advanced manufacturing"],
  },
  {
    slug: "private-wealth",
    title: "Private Wealth & Sovereign Estates",
    short: "Private Wealth",
    blurb:
      "Family office preservation, trusts, and multinational estate planning.",
    summary:
      "We act for families, trustees, and foundation councils whose assets span several tax residences, and where the governing question is succession of control rather than succession of value.",
    icon: Shield01Icon,
    capabilities: [
      "Trust, foundation and holding-company structuring",
      "Cross-border estate and forced-heirship analysis",
      "Family governance, constitutions and dispute mediation",
      "Residence, domicile and non-dom advisory",
      "Philanthropic and endowment structures",
    ],
    sectors: ["Family offices", "Foundations", "Private offices", "Royalty"],
  },
  {
    slug: "regulatory-compliance",
    title: "Regulatory Compliance & Risk",
    short: "Regulatory Compliance",
    blurb:
      "Cross-border antitrust, trade sanctions compliance, and crisis management.",
    summary:
      "Sanctions and competition exposure are now board-level operational risks. We map the perimeter, test whether controls actually hold, and manage the response when a counterparty is designated mid-transaction.",
    icon: JusticeScale01Icon,
    capabilities: [
      "Sanctions screening, licensing and designation response",
      "Export control and dual-use classification",
      "Antitrust compliance programmes and dawn-raid readiness",
      "Financial crime, AML and beneficial-ownership reviews",
      "Investigations and regulatory self-reporting strategy",
    ],
    sectors: ["Shipping", "Commodities", "Defence", "Digital assets"],
  },
];

export function getPracticeArea(slug: string): PracticeArea | undefined {
  return PRACTICE_AREAS.find((area) => area.slug === slug);
}

export type NavLink = { label: string; href: string; hasDropdown?: boolean };

export const NAV_LINKS: NavLink[] = [
  { label: "Practice Areas", href: "/practice", hasDropdown: true },
  { label: "Our Chambers", href: "/about" },
  { label: "Attorneys", href: "/attorneys" },
  { label: "Insights & Briefs", href: "/insights" },
  { label: "Global Offices", href: "/offices" },
];

/** Labels differ between breakpoints; the destinations must not. */
export const MOBILE_NAV_LINKS: NavLink[] = [
  { label: "Our Chambers & History", href: "/about" },
  { label: "Partners & Attorneys", href: "/attorneys" },
  { label: "Insights, Briefs & Rulings", href: "/insights" },
  { label: "Global Offices & Locations", href: "/offices" },
  { label: "Secure Client Portal", href: "/portal" },
];

export type Office = {
  city: string;
  role: string;
  address: string[];
  phone: string;
  hours: string;
};

export const OFFICES: Office[] = [
  {
    city: "London",
    role: "Principal seat",
    address: ["Chancery Lane", "London WC2A 3ED", "United Kingdom"],
    phone: "+44 20 7946 0100",
    hours: "GMT / BST",
  },
  {
    city: "New York",
    role: "US transactions and litigation",
    address: ["450 Park Avenue", "New York, NY 10022", "United States"],
    phone: "+1 212 554 0100",
    hours: "EST / EDT",
  },
  {
    city: "Geneva",
    role: "Arbitration and private wealth",
    address: ["Rue du Rhône 62", "1204 Geneva", "Switzerland"],
    phone: "+41 22 555 0100",
    hours: "CET / CEST",
  },
  {
    city: "Singapore",
    role: "Asia-Pacific corporate and funds",
    address: ["One Raffles Quay, North Tower", "Singapore 048583"],
    phone: "+65 6555 0100",
    hours: "SGT",
  },
];

export const FIRM = {
  name: "Crestview Chambers",
  email: "counsel@crestviewchambers.com",
  emergencyEmail: "crisis@crestviewchambers.com",
  switchboard: "+44 20 7946 0100",
  founded: 1987,
};

export type Attorney = {
  name: string;
  role: string;
  practiceSlug: string;
  admitted: string;
  focus: string;
  email: string;
};

export const ATTORNEYS: Attorney[] = [
  {
    name: "Helena Marchetti",
    role: "Senior Partner",
    practiceSlug: "corporate-ma",
    admitted: "England & Wales, New York",
    focus:
      "Contested takeovers and sovereign participation in outbound European acquisitions.",
    email: "h.marchetti@crestviewchambers.com",
  },
  {
    name: "Daniel Okonjo",
    role: "Partner",
    practiceSlug: "dispute-resolution",
    admitted: "England & Wales, Singapore",
    focus:
      "Institutional arbitration and appellate advocacy in cross-border fraud and asset recovery.",
    email: "d.okonjo@crestviewchambers.com",
  },
  {
    name: "Clare Ashworth",
    role: "Partner",
    practiceSlug: "banking-finance",
    admitted: "England & Wales",
    focus:
      "Structured credit, securitisation programmes and supervisory engagement with the PRA.",
    email: "c.ashworth@crestviewchambers.com",
  },
  {
    name: "Yusuf Demir",
    role: "Partner",
    practiceSlug: "intellectual-property",
    admitted: "England & Wales, European Patent Office",
    focus:
      "Patent litigation, standard-essential licensing, and liability allocation in AI procurement.",
    email: "y.demir@crestviewchambers.com",
  },
  {
    name: "Isabelle Roux",
    role: "Partner",
    practiceSlug: "private-wealth",
    admitted: "England & Wales, Geneva",
    focus:
      "Succession of control in multi-jurisdiction family enterprises and foundation structures.",
    email: "i.roux@crestviewchambers.com",
  },
  {
    name: "Gavin Whitfield",
    role: "Partner",
    practiceSlug: "regulatory-compliance",
    admitted: "England & Wales, New York",
    focus:
      "Sanctions designation response, export classification and parallel internal investigations.",
    email: "g.whitfield@crestviewchambers.com",
  },
];

export function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

/** Display figures derived from the catalog, so the home page and the
 *  chambers page cannot report different numbers about the same fiction. */
export const FIRM_NUMBERS = [
  { value: String(FIRM.founded), label: "Founded, London" },
  { value: String(OFFICES.length), label: "Principal seats" },
  { value: String(PRACTICE_AREAS.length), label: "Practice disciplines" },
  { value: "Band 1", label: "Chambers Global ranking" },
];

export function telHref(phone: string) {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

export type Brief = {
  title: string;
  category: string;
  date: string;
  summary: string;
  readMinutes: number;
};

// Dates are ISO so they sort; rendered with an explicit locale for stability.
export const BRIEFS: Brief[] = [
  {
    title: "Designation mid-transaction: what the closing conditions do not cover",
    category: "Regulatory Risk",
    date: "2026-10-28",
    summary:
      "Most acquisition agreements allocate sanctions risk to the buyer between signing and closing. Few define what happens when the target's counterparty is designated during a funded earn-out.",
    readMinutes: 9,
  },
  {
    title: "Model liability under the EU AI Act after the first conformity decisions",
    category: "Technology",
    date: "2026-10-09",
    summary:
      "Deployer obligations are now settled in form but not in practice. The procurement terms that survive scrutiny are the ones that allocate verification cost, not those that allocate fault.",
    readMinutes: 12,
  },
  {
    title: "Non-dom residence: three years of case law in one decision",
    category: "Private Wealth",
    date: "2026-09-22",
    summary:
      "The tribunal's treatment of workplace attendance rewrites the practical test for families who assumed continuity of residence was a matter of days counted.",
    readMinutes: 7,
  },
  {
    title: "Interim relief in LCIA arbitrations seated outside London",
    category: "Dispute Resolution",
    date: "2026-08-30",
    summary:
      "Emergency arbitrator awards remain difficult to enforce where the assets sit in jurisdictions that have not settled their approach to the seat's supervisory court.",
    readMinutes: 11,
  },
  {
    title: "Liquidity rules and the securitisation retention exemption",
    category: "Banking & Finance",
    date: "2026-08-14",
    summary:
      "Synthetic risk transfer structures are being re-underwritten against a retention test the supervisory guidance never formally amended.",
    readMinutes: 10,
  },
  {
    title: "Minority protections that a board can actually enforce",
    category: "Corporate & M&A",
    date: "2026-07-31",
    summary:
      "Reserved matters clauses routinely fail because the veto attaches to a decision the board is free to restructure. drafting the obligation as a funding condition performs better.",
    readMinutes: 8,
  },
];

export function formatBriefDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
