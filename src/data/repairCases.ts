export interface EstimateLine {
  label: string;
  amount: string;
}

export interface DiagnosisStep {
  step: string;
  finding: string;
}

export interface RepairCase {
  slug: string;
  date: string;
  dateISO: string;
  applianceType: string;
  brand: string;
  model: string;
  area: string;
  areaSlug: string;
  issueShort: string;
  estimateRange: string;
  repairTotal: string;
  seoTitle: string;
  metaDesc: string;
  heroTitle: string;
  heroSub: string;
  techImage: string;
  applianceImage: string;
  customerProblemSummary: string;
  customerProblemBullets: string[];
  diagnosisSteps: DiagnosisStep[];
  rootCause: string;
  estimateLines: EstimateLine[];
  estimateTotalNote: string;
  techNotes: string[];
  result: string;
  review: { text: string; author: string; location: string };
  maintenanceTip: string;
  relatedService: { label: string; href: string };
  relatedBrand: { label: string; href: string };
  relatedSymptom: { label: string; href: string };
}

// Repair cases now live as standalone pages under /repairs/*.
// This array is empty; the [slug].astro template is kept for potential future use.
export const repairCases: RepairCase[] = [];

export function getRepairCase(slug: string): RepairCase | undefined {
  return repairCases.find(c => c.slug === slug);
}
