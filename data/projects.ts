export type ProjectCategory = "website" | "database" | "creative" | "application";
export type Project = {
  id: string;
  category: ProjectCategory;
  title: string;
  titleFa: string;
  description: string;
  descriptionFa: string;
  liveUrl?: string;
  status: "live" | "concept";
  visual: "fitness" | "ai" | "gym" | "commerce" | "portfolio" | "pharmacy";
};

/** Real project links below were supplied by the business owner. Concept entries are marked. */
export const projects: Project[] = [
  { id: "befit", category: "website", title: "BeFit — Fitness Platform", titleFa: "BeFit — پلتفرم ورزشی", description: "Fitness programs and an online experience.", descriptionFa: "برنامه‌های ورزشی و تجربه آنلاین.", liveUrl: "https://befit-hekmat.vercel.app/", status: "live", visual: "fitness" },
  { id: "ai", category: "website", title: "Hikmat AI — AI Assistant", titleFa: "Hikmat AI — دستیار هوشمند", description: "An interactive AI assistant website.", descriptionFa: "ویب‌سایت تعاملی دستیار هوشمند.", liveUrl: "https://hekmat-wp61xv9hl-hekmatbarakzai.vercel.app/", status: "live", visual: "ai" },
  { id: "gym", category: "database", title: "Gym Management System", titleFa: "سیستم مدیریت باشگاه", description: "Membership and fee-management software.", descriptionFa: "نرم‌افزار مدیریت اعضا و پرداخت فیس.", liveUrl: "https://gym-management-system-e28b.onrender.com/", status: "live", visual: "gym" },
  { id: "store", category: "creative", title: "Digital Storefront Concept", titleFa: "طرح مفهومی فروشگاه آنلاین", description: "An e-commerce interface exploration.", descriptionFa: "یک طرح نمایشی برای فروشگاه اینترنتی.", status: "concept", visual: "commerce" },
  { id: "folio", category: "creative", title: "Creative Portfolio Concept", titleFa: "طرح مفهومی پورتفولیو", description: "Editorial portfolio interface study.", descriptionFa: "طرح نمایشی پورتفولیو با دیزاین خاص.", status: "concept", visual: "portfolio" },
  { id: "pharmacy", category: "application", title: "Pharmacy Dashboard Concept", titleFa: "طرح مفهومی داشبورد دواخانه", description: "Illustrative inventory software preview.", descriptionFa: "نمایش مفهومی نرم‌افزار موجودی دواخانه.", status: "concept", visual: "pharmacy" }
];
