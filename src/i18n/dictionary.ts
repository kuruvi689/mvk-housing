export type Lang = "en" | "ta";

// NOTE: Tamil strings below are a first-pass placeholder translation, not
// yet reviewed by a native speaker or the client. Confirm before launch.

/**
 * Interface-chrome strings only (nav, shared CTAs). Full bilingual project
 * data is NOT built yet — pending client decision on full-parallel vs
 * interface-only Tamil (see app-flow spec §5c). Do not assume project
 * descriptions are translated just because this dictionary exists.
 */
export const dictionary: Record<Lang, Record<string, string>> = {
  en: {
    navProjects: "Projects",
    navBuyer: "Buyer",
    navSeller: "Seller",
    navAbout: "About",
    navContact: "Contact",
    getInTouch: "WhatsApp Enquire",
    heroEyebrow: "Construction & Resale · Chennai Region",
    heroTitleLine1: "Building Spaces.",
    heroTitleLine2: "Made for Living.",
    heroDesc:
      "Construction, renovation, resale and land consultation across Chennai, Kanchipuram, Chengalpattu and Thiruvallur.",
    heroCtaPrimary: "Explore Projects →",
    heroCtaSecondary: "WhatsApp Enquire",
    stagePlot: "Plot",
    stageBlueprint: "Blueprint",
    stageStructure: "Structure",
    stageFinished: "Finished",
    portalsEyebrow: "Two Ways to Work With Us",
    portalsTitle: "Dual Portals of Engagement",
    portalsSubtitle: "Tailored pathways for acquisitions and asset divestment.",
    forkTagBuyer: "FOR BUYERS",
    forkTagSeller: "FOR SELLERS",
    forkHeadlineBuyer: "Find your home",
    forkHeadlineSeller: "Sell your property",
    forkCtaBuyer: "Browse Projects →",
    forkCtaSeller: "List Your Property →",
    projectsEyebrow: "Our Portfolio",
    projectsTitle: "Our Projects",
    footerTagline: "Building better lives across Chennai, Kanchipuram, Chengalpattu & Thiruvallur.",
    footerCredit: "Concept & build: Teddy³",
  },
  ta: {
    navProjects: "திட்டங்கள்",
    navBuyer: "வாங்குபவர்",
    navSeller: "விற்பவர்",
    navAbout: "எங்களைப் பற்றி",
    navContact: "தொடர்பு",
    getInTouch: "WhatsApp தொடர்பு",
    heroEyebrow: "கட்டுமானம் & மறுவிற்பனை · சென்னை பகுதி",
    heroTitleLine1: "வாழ்விடங்களை",
    heroTitleLine2: "கட்டிஎழுப்பது.",
    heroDesc:
      "சென்னை, காஞ்சிபுரம், செங்கல்பட்டு, திருவள்ளூர் பகுதிகளில் கட்டுமானம், புனர்புனரமைப்பு, மற்றும் நில ரீதியான ஆலோசனை.",
    heroCtaPrimary: "திட்டங்களைப் பார்யுங்கள் →",
    heroCtaSecondary: "WhatsApp தொடர்பு",
    stagePlot: "நிலம்",
    stageBlueprint: "திட்டம்",
    stageStructure: "கட்டமைப்பு",
    stageFinished: "முடிந்தது",
    portalsEyebrow: "எங்களுடன் வேலை செய்வதற்கான இரண்டு வழிகள்",
    portalsTitle: "இரண்டு வலைப்புகள்",
    portalsSubtitle: "வாங்குவதற்கும் விற்பதற்கும் தனிய்யான பாதைகள்.",
    forkTagBuyer: "வாங்குபவர்களுக்கு",
    forkTagSeller: "விற்பவர்களுக்கு",
    forkHeadlineBuyer: "உங்கள் வீட்டைக் கண்டறியுங்கள்",
    forkHeadlineSeller: "உங்கள் சொத்தை விற்கவும்",
    forkCtaBuyer: "திட்டங்களைப் பாருங்கள் →",
    forkCtaSeller: "உங்கள் சொத்தைப் பதிவு செய்யுங்கள் →",
    projectsEyebrow: "எங்கள் தொகுப்பு",
    projectsTitle: "எங்கள் திட்டங்கள்",
    footerTagline: "சென்னை, காஞ்சிபுரம், செங்கல்பட்டு, திருவள்ளூர் பகுதிகளில் சிறந்த வாழ்க்கையைக் கட்டியெழுப்புகிறோம்.",
    footerCredit: "கருத்து & உருவாக்கம்: Teddy³",
  },
};
