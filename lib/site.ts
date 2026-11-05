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
