export type NavLink = {
  href: string;
  label: string;
};

export type Feature = {
  title: string;
  body: string;
};

export type Product = {
  title: string;
  category: string;
  price: string;
  image: string;
  tag?: string;
};

export type StoryCard = {
  title: string;
  body: string;
  meta: string;
  image: string;
};

export type ContentPage = {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
  leadImage: string;
  sections: Feature[];
};

export type CollectionPage = {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
  image: string;
  products: Product[];
  quote?: string;
  pillars?: Feature[];
  spotlight?: {
    title: string;
    body: string;
    image: string;
  };
};

export const navLinks: NavLink[] = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/campaign", label: "Campaign" },
  { href: "/journal", label: "Journal" },
];

export const footerShopLinks: NavLink[] = [
  { href: "/collections/new-arrivals", label: "New Arrivals" },
  { href: "/collections/men", label: "Men" },
  { href: "/collections/women", label: "Women" },
  { href: "/collections/limited-edition", label: "Limited Edition" },
];

export const footerCompanyLinks: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export const footerConnectLinks: NavLink[] = [
  { href: "/newsletter", label: "Newsletter" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/shipping", label: "Shipping" },
];

export const heroVideo =
  "https://assets.mixkit.co/videos/preview/mixkit-woman-walking-through-an-underground-passage-43862-large.mp4";

export const featuredProducts: Product[] = [
  {
    title: "The Atelier Coat",
    category: "Outerwear",
    price: "$680",
    image:
      "https://images.pexels.com/photos/35587808/pexels-photo-35587808.jpeg?auto=compress&cs=tinysrgb&w=900",
    tag: "New",
  },
  {
    title: "Structured Wool Trouser",
    category: "Tailoring",
    price: "$320",
    image:
      "https://images.pexels.com/photos/8505246/pexels-photo-8505246.jpeg?auto=compress&cs=tinysrgb&w=900",
    tag: "New",
  },
  {
    title: "Heavyweight Crew",
    category: "Essentials",
    price: "$140",
    image:
      "https://images.pexels.com/photos/17590615/pexels-photo-17590615.jpeg?auto=compress&cs=tinysrgb&w=900",
    tag: "Best Seller",
  },
  {
    title: "Raw Hem Denim",
    category: "Denim",
    price: "$260",
    image:
      "https://images.pexels.com/photos/26274786/pexels-photo-26274786.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    title: "Cashmere Overshirt",
    category: "Limited Edition",
    price: "$540",
    image:
      "https://images.pexels.com/photos/29923243/pexels-photo-29923243.jpeg?auto=compress&cs=tinysrgb&w=900",
    tag: "Limited",
  },
];

export const journalStories: StoryCard[] = [
  {
    title: "The Discipline of Fewer Pieces",
    body:
      "A closer look at building a wardrobe around permanence instead of weekly novelty.",
    meta: "Essay · 6 min read",
    image:
      "https://images.pexels.com/photos/19317139/pexels-photo-19317139.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    title: "Inside the SS26 Campaign",
    body:
      "Lighting, tailoring, and restraint came together to define the visual language of the season.",
    meta: "Campaign Notes · 4 min read",
    image:
      "https://images.pexels.com/photos/29923243/pexels-photo-29923243.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    title: "How We Source for Longevity",
    body:
      "The mills, finishes, and fabrication choices behind garments built to stay in rotation.",
    meta: "Materials · 5 min read",
    image:
      "https://images.pexels.com/photos/35587808/pexels-photo-35587808.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
];

export const contentPages: Record<string, ContentPage> = {
  shop: {
    slug: "shop",
    title: "Shop the MORAL wardrobe",
    eyebrow: "Collection Index",
    intro:
      "A refined edit of tailoring, essentials, and limited drops built around the same editorial restraint as the home page.",
    leadImage:
      "https://images.pexels.com/photos/8505246/pexels-photo-8505246.jpeg?auto=compress&cs=tinysrgb&w=1400",
    sections: [
      {
        title: "New arrivals",
        body:
          "Fresh garments cut with the same permanent silhouette language: heavier fabrics, cleaner lines, quieter branding.",
      },
      {
        title: "Essentials",
        body:
          "The base layer of the wardrobe. Dense knits, structured tees, and trousers meant to repeat without fatigue.",
      },
      {
        title: "Limited edition",
        body:
          "Small-run statements for clients who want rarity without spectacle.",
      },
    ],
  },
  about: {
    slug: "about",
    title: "Founded on conviction",
    eyebrow: "About MORAL",
    intro:
      "MORAL began with a refusal to treat clothing as disposable. The brand language is quiet, but the position is direct: fewer garments, made better, kept longer.",
    leadImage:
      "https://images.pexels.com/photos/26274786/pexels-photo-26274786.jpeg?auto=compress&cs=tinysrgb&w=1400",
    sections: [
      {
        title: "Purpose",
        body:
          "Each collection is built around permanence, not speed. Materials and silhouettes are selected to stay useful beyond trend cycles.",
      },
      {
        title: "Craft",
        body:
          "Construction is deliberate: weight where structure matters, softness where wearability matters, and restraint everywhere else.",
      },
      {
        title: "Values",
        body:
          "Integrity, permanence, conscience, and restraint remain the operating principles behind every release.",
      },
    ],
  },
  campaign: {
    slug: "campaign",
    title: "The SS26 campaign",
    eyebrow: "Visual World",
    intro:
      "A monochrome editorial study of conviction, motion, and silhouette. The campaign extends the home page mood into a fuller narrative.",
    leadImage:
      "https://images.pexels.com/photos/29923243/pexels-photo-29923243.jpeg?auto=compress&cs=tinysrgb&w=1400",
    sections: [
      {
        title: "Direction",
        body:
          "The campaign is built on contrast: black and bone, hard structure and soft movement, closeness and distance.",
      },
      {
        title: "Casting",
        body:
          "Subjects were styled to feel composed rather than theatrical, allowing the garments and posture to carry the story.",
      },
      {
        title: "Output",
        body:
          "Still imagery, motion loops, and editorial fragments translate the collection beyond standard ecommerce presentation.",
      },
    ],
  },
  journal: {
    slug: "journal",
    title: "Notes from the studio",
    eyebrow: "Journal",
    intro:
      "Essays, campaign notes, sourcing decisions, and the thinking behind the garments.",
    leadImage:
      "https://images.pexels.com/photos/19317139/pexels-photo-19317139.jpeg?auto=compress&cs=tinysrgb&w=1400",
    sections: [
      {
        title: "Editorial perspective",
        body:
          "We publish the reasoning behind each collection, not just the outcome. That includes materials, fit direction, and styling intent.",
      },
      {
        title: "Process",
        body:
          "From supplier conversations to finishing choices, the journal documents what usually stays hidden.",
      },
      {
        title: "Community",
        body:
          "The journal is also where the audience sees the wardrobe in use, beyond the controlled frame of campaign imagery.",
      },
    ],
  },
  newsletter: {
    slug: "newsletter",
    title: "Join the inner circle",
    eyebrow: "Newsletter",
    intro:
      "Early access to numbered drops, private previews, and the reasoning behind every release.",
    leadImage:
      "https://images.pexels.com/photos/35587808/pexels-photo-35587808.jpeg?auto=compress&cs=tinysrgb&w=1400",
    sections: [
      {
        title: "What you receive",
        body:
          "Drop alerts, product previews, and short editorial dispatches that stay aligned with the restraint of the brand.",
      },
      {
        title: "Why it matters",
        body:
          "Limited releases move quickly. The list exists to create direct access without noise.",
      },
      {
        title: "Cadence",
        body:
          "Only release-driven updates. No filler campaigns, no inflated weekly sending schedule.",
      },
    ],
  },
  contact: {
    slug: "contact",
    title: "Contact the studio",
    eyebrow: "Contact",
    intro:
      "For client support, wholesale conversations, press requests, and production inquiries.",
    leadImage:
      "https://images.pexels.com/photos/17590615/pexels-photo-17590615.jpeg?auto=compress&cs=tinysrgb&w=1400",
    sections: [
      {
        title: "Client care",
        body:
          "Sizing, order updates, exchanges, and general support are handled with the same clarity as the product itself.",
      },
      {
        title: "Partnerships",
        body:
          "Wholesale and editorial requests should include region, timeline, and intended use so the studio can respond precisely.",
      },
      {
        title: "Response times",
        body:
          "Most messages receive a reply within two business days.",
      },
    ],
  },
  sustainability: {
    slug: "sustainability",
    title: "Sustainability through permanence",
    eyebrow: "Responsibility",
    intro:
      "MORAL approaches sustainability through durability, reduced churn, and more deliberate sourcing decisions.",
    leadImage:
      "https://images.pexels.com/photos/29923243/pexels-photo-29923243.jpeg?auto=compress&cs=tinysrgb&w=1400",
    sections: [
      {
        title: "Longer wear",
        body:
          "The most direct reduction in waste comes from garments that remain relevant and serviceable for years.",
      },
      {
        title: "Selective sourcing",
        body:
          "Fabric partners are chosen for consistency, handle, and traceability rather than novelty alone.",
      },
      {
        title: "Measured output",
        body:
          "Limited collections and tighter edits help avoid the overproduction model that defines most fast turnover fashion.",
      },
    ],
  },
  privacy: {
    slug: "privacy",
    title: "Privacy policy",
    eyebrow: "Legal",
    intro:
      "This page outlines the type of customer information MORAL may collect and how it is used to operate the store responsibly.",
    leadImage:
      "https://images.pexels.com/photos/8505246/pexels-photo-8505246.jpeg?auto=compress&cs=tinysrgb&w=1400",
    sections: [
      {
        title: "Information collected",
        body:
          "Contact details, order data, and communication preferences may be stored to fulfil purchases and provide support.",
      },
      {
        title: "Usage",
        body:
          "Information is used for fulfilment, customer service, fraud prevention, and release communication when a customer opts in.",
      },
      {
        title: "Control",
        body:
          "Customers can request access, correction, or deletion of stored personal data through support channels.",
      },
    ],
  },
  terms: {
    slug: "terms",
    title: "Terms of service",
    eyebrow: "Legal",
    intro:
      "The terms define the rules for purchasing, using the site, and interacting with MORAL releases and services.",
    leadImage:
      "https://images.pexels.com/photos/26274786/pexels-photo-26274786.jpeg?auto=compress&cs=tinysrgb&w=1400",
    sections: [
      {
        title: "Orders",
        body:
          "Orders are subject to availability, payment verification, and review for accuracy before dispatch.",
      },
      {
        title: "Product representation",
        body:
          "We aim for accurate colour, sizing, and material presentation, though minor variation may occur between screens and production batches.",
      },
      {
        title: "Use of site",
        body:
          "Users may not misuse the store, interfere with operations, or reproduce protected brand materials without permission.",
      },
    ],
  },
  shipping: {
    slug: "shipping",
    title: "Shipping and delivery",
    eyebrow: "Fulfilment",
    intro:
      "Clear dispatch windows, shipment visibility, and packaging that matches the restraint of the product.",
    leadImage:
      "https://images.pexels.com/photos/35587808/pexels-photo-35587808.jpeg?auto=compress&cs=tinysrgb&w=1400",
    sections: [
      {
        title: "Dispatch",
        body:
          "Ready-to-ship orders typically leave the studio within two business days. Limited runs may include stated handling windows.",
      },
      {
        title: "Tracking",
        body:
          "Tracking details are issued as soon as the parcel enters carrier flow.",
      },
      {
        title: "International delivery",
        body:
          "Transit times vary by region, and local import duties may apply depending on destination.",
      },
    ],
  },
};

export const collectionPages: Record<string, CollectionPage> = {
  "new-arrivals": {
    slug: "new-arrivals",
    title: "New Arrivals",
    eyebrow: "Collection",
    intro:
      "The latest pieces to enter the MORAL wardrobe. Quietly directional, materially grounded, and designed to stay relevant.",
    image:
      "https://images.pexels.com/photos/35587808/pexels-photo-35587808.jpeg?auto=compress&cs=tinysrgb&w=1400",
    products: featuredProducts,
  },
  men: {
    slug: "men",
    title: "Men",
    eyebrow: "Collection",
    intro:
      "Tailoring, outerwear, and elevated essentials built around precision and restraint.",
    image:
      "https://images.pexels.com/photos/8505246/pexels-photo-8505246.jpeg?auto=compress&cs=tinysrgb&w=1400",
    quote: "A wardrobe sharpened by line, weight, and quiet authority.",
    pillars: [
      {
        title: "Tailoring first",
        body:
          "Structured trousers, measured shoulders, and longer silhouettes define the base of the edit.",
      },
      {
        title: "Quiet essentials",
        body:
          "Dense jerseys, knit layers, and understated denim keep the wardrobe repeatable across seasons.",
      },
      {
        title: "Controlled palette",
        body:
          "Black, charcoal, bone, and softened neutrals maintain the editorial clarity established on the home page.",
      },
    ],
    spotlight: {
      title: "Built for repetition",
      body:
        "The men’s collection is designed to move between formal structure and daily wear without changing its tone. Every garment is meant to layer cleanly and age with use.",
      image:
        "https://images.pexels.com/photos/35587808/pexels-photo-35587808.jpeg?auto=compress&cs=tinysrgb&w=1400",
    },
    products: featuredProducts.slice(0, 4),
  },
  women: {
    slug: "women",
    title: "Women",
    eyebrow: "Collection",
    intro:
      "A wardrobe of sculpted layers, softened structure, and controlled volume.",
    image:
      "https://images.pexels.com/photos/26274786/pexels-photo-26274786.jpeg?auto=compress&cs=tinysrgb&w=1400",
    quote: "Soft movement, precise structure, and permanence over novelty.",
    pillars: [
      {
        title: "Sculpted layering",
        body:
          "Long coats, overshirts, and soft tailoring are combined to create volume without excess.",
      },
      {
        title: "Refined proportion",
        body:
          "The collection balances drape and structure so each piece feels composed in motion and stillness.",
      },
      {
        title: "Editorial restraint",
        body:
          "Details stay minimal. Fabric, line, and silhouette do the work instead of overt ornament.",
      },
    ],
    spotlight: {
      title: "A quieter silhouette language",
      body:
        "The women’s edit follows the same home-page discipline: monochrome framing, deliberate texture, and garments that feel current without being trend-bound.",
      image:
        "https://images.pexels.com/photos/29923243/pexels-photo-29923243.jpeg?auto=compress&cs=tinysrgb&w=1400",
    },
    products: [
      featuredProducts[0],
      featuredProducts[1],
      featuredProducts[3],
      featuredProducts[4],
    ],
  },
  "limited-edition": {
    slug: "limited-edition",
    title: "Limited Edition",
    eyebrow: "Collection",
    intro:
      "Numbered, reduced, and intentionally scarce pieces for the most selective releases.",
    image:
      "https://images.pexels.com/photos/29923243/pexels-photo-29923243.jpeg?auto=compress&cs=tinysrgb&w=1400",
    products: [featuredProducts[4], featuredProducts[0], featuredProducts[2]],
  },
};
