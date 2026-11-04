export const projectCategories = ["IT Support", "Designer", "Marketing"] as const;

type ItProject = {
  title: string;
  problem: string;
  solution: string;
  context?: string;
  tools: string[];
  result?: string;
  measurement?: string;
};

export const itProjects: ItProject[] = [
  {
    title: "Migrasi Infrastruktur Jaringan",
    problem: "Jaringan sering down dan lambat.",
    solution: "Optimasi router, switch, dan VLAN.",
    // TODO: Isi context (peran, organisasi, skala, durasi), result, dan measurement. Validasi angka 90% dan 3×.
    tools: ["Router", "Switch", "VLAN"],
  },
  {
    title: "Helpdesk Management",
    problem: "Tidak ada tracking permintaan IT.",
    solution: "Implementasi ticketing system.",
    // TODO: Isi context (peran, durasi, tiket per bulan), tools, result, dan measurement. Validasi angka 15 menit.
    tools: [],
  },
];

export type GalleryTab = Exclude<(typeof projectCategories)[number], "IT Support">;

export type GalleryWork = {
  tab: GalleryTab;
  image: string;
  title: string;
  category: string;
  description: string;
  videoUrl?: string;
};

// TODO: Tambahkan hanya karya asli dengan aset di public/portfolio/.
export const galleryWorks: GalleryWork[] = [];
