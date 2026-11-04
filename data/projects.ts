export const projectCategories = ["IT Support", "Designer", "Marketing"] as const;

export const itProjects = [
  {
    title: "Migrasi Infrastruktur Jaringan",
    problem: "Jaringan sering down dan lambat.",
    solution: "Optimasi router, switch, dan VLAN.",
    result: "TODO: Validasi klaim downtime turun 90% dan performa naik 3×.",
    context: "TODO: Peran, lokasi atau jenis organisasi, jumlah pengguna/perangkat, durasi, dan metode pengukuran sebelum–sesudah.",
    tools: ["Router", "Switch", "VLAN"],
  },
  {
    title: "Helpdesk Management",
    problem: "Tidak ada tracking permintaan IT.",
    solution: "Implementasi ticketing system.",
    result: "TODO: Validasi klaim waktu respons 15 menit.",
    context: "TODO: Peran, durasi, jumlah tiket per bulan, dan cara menghitung waktu respons.",
    tools: ["TODO: Nama tools ticketing"],
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
