import logoSrc from "@/assets/vetrivel-logo.png";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

export const SITE = {
  name: "Vetrivel Constructions",
  tagline: "Trust is the base of our Business",
  phoneDisplay: "+91 94427 69333",
  phoneRaw: "+91 9442769333",
  phoneNumbers: ["+91 94427 69333", "+91 94427 79333", "+91 86439 99333"],
  whatsappRaw: "91 9442769333",
  email: "vetrivelconsultancy@gmail.com",
  address: "1G/892, Rajagopal Nagar 4th Street (West), Thoothukudi - 628 008",
  hours: "Mon – Sat · 9:00 AM – 7:00 PM",
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    youtube: "#",
  },
};

export const LOGO_URL = logoSrc;

export const HERO_IMAGES = [hero1, hero2, hero3, hero4, hero5];

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Packages", to: "/packages" },
  { label: "Services", to: "/services" },
  { label: "Our Works", to: "/works" },
  { label: "Joint Venture", to: "/joint-venture" },
  { label: "Contact", to: "/contact" },
] as const;

export type Package = {
  slug: string;
  name: string;
  tier: string;
  pricePerSqft: string;
  summary: string;
  features: string[];
  highlights: string[];
};

export const PACKAGES: Package[] = [
  {
    slug: "basic",
    name: "Essential",
    tier: "Basic Package",
    pricePerSqft: "₹1,650 / sqft",
    summary:
      "A reliable, no-compromise build for first homes — engineered structure, branded materials and clean finishes.",
    features: [
      "RCC framed structure as per IS code",
      "UltraTech / Ramco OPC 53 grade cement",
      "TMT Fe-500 grade steel",
      "Vitrified flooring (₹55/sqft allowance)",
      "Standard sanitary & CP fittings",
      "Internal & external emulsion painting",
    ],
    highlights: ["12-month free service", "Soil test included", "Structural warranty"],
  },
  {
    slug: "standard",
    name: "Classic",
    tier: "Standard Package",
    pricePerSqft: "₹1,950 / sqft",
    summary:
      "Our most chosen package — premium finishes, modular kitchen provisioning and elevated façade design.",
    features: [
      "RCC framed structure with shear walls",
      "Premium branded cement & TMT steel",
      "Vitrified / wooden flooring (₹85/sqft)",
      "Branded CP & sanitary (Jaquar / Cera)",
      "Modular kitchen provisioning",
      "Designer false ceiling in living area",
    ],
    highlights: ["18-month free service", "3D elevation design", "Site supervision daily"],
  },
  {
    slug: "premium",
    name: "Premium",
    tier: "Premium Package",
    pricePerSqft: "₹2,350 / sqft",
    summary:
      "Designed for discerning homeowners — Italian marble accents, smart switches and bespoke interiors.",
    features: [
      "Premium RCC with anti-termite treatment",
      "Italian marble in living & dining",
      "Imported CP & sanitary fittings",
      "Smart switches & home automation ready",
      "Full modular kitchen with chimney",
      "Designer false ceiling throughout",
    ],
    highlights: ["24-month free service", "Interior designer consultation", "Premium finishes"],
  },
  {
    slug: "luxury",
    name: "Signature Luxury",
    tier: "Luxury Package",
    pricePerSqft: "₹2,950 / sqft",
    summary:
      "The pinnacle of craftsmanship — concierge project management, imported materials and turn-key interiors.",
    features: [
      "Earthquake-resistant RCC design",
      "Imported marble, oak & walnut wood",
      "Designer wardrobes & vanities",
      "Full home automation & security",
      "Landscaped exteriors & lighting",
      "Turn-key interiors handed over",
    ],
    highlights: ["36-month free service", "Dedicated project manager", "Concierge handover"],
  },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  benefits: string[];
  image: string;
};

export const SERVICES: Service[] = [
  {
    slug: "residential-construction",
    title: "Residential Construction",
    short: "Individual homes engineered to last generations.",
    description:
      "From soil testing to handover, we deliver homes built around your family's life — with structural rigour, thoughtful spatial planning and finishes you can be proud of.",
    features: [
      "Architectural & structural design",
      "MEP coordination",
      "Vaastu-aligned planning",
      "Daily on-site supervision",
      "Material procurement",
      "Quality audits at every stage",
    ],
    benefits: [
      "Fixed-price contract — zero surprises",
      "Branded materials only",
      "Up to 36 months of free service",
      "Transparent weekly progress reports",
    ],
    image: p3,
  },
  {
    slug: "commercial-construction",
    title: "Commercial Construction",
    short: "Office towers, retail and mixed-use, delivered on schedule.",
    description:
      "We build commercial assets that perform — engineered for occupancy efficiency, code compliance and a façade that signals brand strength.",
    features: [
      "G+15 and high-rise capability",
      "Fast-track scheduling",
      "Glass & ACP façades",
      "MEP, HVAC & fire systems",
      "Statutory approvals end-to-end",
      "Tenant-fit-out coordination",
    ],
    benefits: [
      "On-time delivery, contractually guaranteed",
      "BIM-led coordination",
      "Lower operating cost over lifecycle",
      "Single point of accountability",
    ],
    image: p2,
  },
  {
    slug: "villa-construction",
    title: "Villa Construction",
    short: "Bespoke luxury villas with imported finishes.",
    description:
      "Each villa we build is a one-off — sculpted to the site, designed for the family, and detailed down to the last fixture by a dedicated project lead.",
    features: [
      "Custom architectural design",
      "Imported marble & woodwork",
      "Pool, landscape & lighting",
      "Smart home automation",
      "Interior styling included",
      "Concierge handover",
    ],
    benefits: [
      "One villa, one project manager",
      "36-month structural warranty",
      "Curated material library",
      "End-to-end interiors",
    ],
    image: p3,
  },
  {
    slug: "interior-design",
    title: "Interior Design",
    short: "Interiors that feel as good as they look.",
    description:
      "Our in-house interior studio crafts spaces that balance proportion, light and material — modular, durable and unmistakably tailored to you.",
    features: [
      "Modular kitchens & wardrobes",
      "False ceiling & lighting design",
      "Wall panelling & accent walls",
      "Custom furniture",
      "Soft furnishings & styling",
      "3D walkthroughs",
    ],
    benefits: [
      "Single contractor for build + interiors",
      "Branded modular hardware",
      "Lifetime hardware warranty",
      "On-time room-by-room handover",
    ],
    image: p6,
  },
  {
    slug: "renovation",
    title: "Renovation & Remodelling",
    short: "Transform existing homes into modern showpieces.",
    description:
      "We re-engineer existing structures — opening up plans, upgrading services and refreshing finishes — with minimal disruption to your life.",
    features: [
      "Structural retrofitting",
      "Plumbing & electrical re-routing",
      "Façade upgrades",
      "Kitchen & bath remodels",
      "Vastu corrections",
      "Phase-wise execution",
    ],
    benefits: [
      "Live-in renovation scheduling",
      "Dust-controlled site practices",
      "Fixed timeline & cost",
      "Insurance-backed workmanship",
    ],
    image: p1,
  },
  {
    slug: "turnkey-projects",
    title: "Turnkey Projects",
    short: "Hand us the keys to your land. We hand back a finished home.",
    description:
      "A single contract, a single team — from architectural concept to landscaped handover. You move in. We handle everything in between.",
    features: [
      "Design + Build + Interiors",
      "Statutory approvals",
      "Vendor & material management",
      "Quality & safety audits",
      "Snag-list completion",
      "1-year warranty + 2-year service",
    ],
    benefits: [
      "One contract, one accountability",
      "Fixed lump-sum price",
      "Faster delivery vs. multi-vendor",
      "Move-in ready handover",
    ],
    image: p4,
  },
];

export type Project = {
  slug: string;
  name: string;
  category: "Residential" | "Commercial" | "Villas" | "Interiors" | "Industrial";
  location: string;
  type: string;
  year: string;
  area: string;
  client: string;
  scope: string;
  description: string;
  image: string;
  gallery: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "skyline-residences",
    name: "Skyline Residences",
    category: "Residential",
    location: "OMR, Chennai",
    type: "G+12 Apartments",
    year: "2024",
    area: "1,80,000 sqft",
    client: "Skyline Developers Pvt. Ltd.",
    scope: "Design, Build & Interiors",
    description:
      "A landmark 12-storey residential tower of 96 premium apartments on Chennai's IT corridor. Delivered three weeks ahead of schedule with a tenant-ready amenities deck.",
    image: p4,
    gallery: [p4, p1, p2, p6],
  },
  {
    slug: "marina-corporate-tower",
    name: "Marina Corporate Tower",
    category: "Commercial",
    location: "Mount Road, Chennai",
    type: "G+15 Office Tower",
    year: "2023",
    area: "3,20,000 sqft",
    client: "Marina Holdings",
    scope: "Construction & MEP",
    description:
      "A Grade-A office tower clad in unitised glass façade, anchored by a triple-height lobby and capable of housing 3,000 professionals across 15 floors.",
    image: p2,
    gallery: [p2, p1, p4, p5],
  },
  {
    slug: "the-palms-villa",
    name: "The Palms Villa",
    category: "Villas",
    location: "ECR, Chennai",
    type: "Private Villa",
    year: "2024",
    area: "8,500 sqft",
    client: "Private Client",
    scope: "Turnkey — Design to Interiors",
    description:
      "A beachfront villa designed around an infinity pool — Italian marble, full home automation and landscaped gardens, handed over fully furnished.",
    image: p3,
    gallery: [p3, p6, p1, p4],
  },
  {
    slug: "lumiere-penthouse",
    name: "Lumière Penthouse",
    category: "Interiors",
    location: "Nungambakkam, Chennai",
    type: "Penthouse Interiors",
    year: "2024",
    area: "6,200 sqft",
    client: "Private Client",
    scope: "Interior Design & Execution",
    description:
      "A skyline-facing penthouse interior, balancing book-matched marble, oak veneers and ambient lighting across an open-plan layout.",
    image: p1,
    gallery: [p1, p6, p3, p4],
  },
  {
    slug: "northgate-logistics",
    name: "Northgate Logistics Park",
    category: "Industrial",
    location: "Sriperumbudur",
    type: "Warehousing Facility",
    year: "2023",
    area: "4,50,000 sqft",
    client: "Northgate Industries",
    scope: "Design–Build",
    description:
      "A pre-engineered warehouse facility with 14m clear height, dock-leveller loading bays and a Grade-A automation-ready floor plate.",
    image: p5,
    gallery: [p5, p2, p4, p1],
  },
  {
    slug: "amaravati-villas",
    name: "Amaravati Villa Enclave",
    category: "Villas",
    location: "Thiruvanmiyur, Chennai",
    type: "Gated Villa Community",
    year: "2023",
    area: "2,40,000 sqft (12 villas)",
    client: "Amaravati Estates",
    scope: "Master Plan + Build",
    description:
      "A gated enclave of twelve luxury villas, each individually designed yet unified by a coherent material palette and landscape language.",
    image: p3,
    gallery: [p3, p4, p6, p1],
  },
  {
    slug: "harmony-apartments",
    name: "Harmony Apartments",
    category: "Residential",
    location: "Velachery, Chennai",
    type: "G+5 Apartments",
    year: "2022",
    area: "75,000 sqft",
    client: "Harmony Builders",
    scope: "Construction",
    description:
      "A boutique residential project of 40 units, executed on a constrained urban site with zero neighbour complaints — a hallmark of our site discipline.",
    image: p4,
    gallery: [p4, p1, p6, p3],
  },
  {
    slug: "veridian-retail",
    name: "Veridian Retail Plaza",
    category: "Commercial",
    location: "Anna Nagar, Chennai",
    type: "Retail + Office",
    year: "2024",
    area: "1,10,000 sqft",
    client: "Veridian Group",
    scope: "Design–Build",
    description:
      "A mixed-use retail and office block with double-height storefronts, executed turn-key in 14 months including all tenant fit-outs.",
    image: p2,
    gallery: [p2, p5, p1, p4],
  },
];

export const TESTIMONIALS = [
  {
    name: "Ramesh Kumar",
    role: "Homeowner, ECR Villa",
    quote:
      "Vetrivel delivered our villa three weeks ahead of schedule, exactly on budget, and the finish quality is genuinely better than what we'd seen in show homes. Rare in this industry.",
  },
  {
    name: "Priya Subramanian",
    role: "Managing Director, Marina Holdings",
    quote:
      "We've worked with five contractors in twenty years. None match Vetrivel for site discipline, weekly reporting transparency, and the calibre of their senior project leads.",
  },
  {
    name: "Arjun Iyer",
    role: "Director, Skyline Developers",
    quote:
      "A 12-storey tower handed over with a snag list of fewer than ten items per floor. That's the kind of execution that lets us sell at a premium.",
  },
  {
    name: "Lakshmi Narayanan",
    role: "Homeowner, Nungambakkam",
    quote:
      "From the first sketch to the final touch-up, the same project manager stayed with us. The interiors team understood our taste better than we did.",
  },
];

export const STATS = [
  { value: 250, suffix: "+", label: "Projects Completed" },
  { value: 1800, suffix: "+", label: "Happy Clients" },
  { value: 22, suffix: "", label: "Years of Experience" },
  { value: 140, suffix: "+", label: "Team Members" },
];
