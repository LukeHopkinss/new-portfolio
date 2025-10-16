import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "tracker",
    title: "Multi-Object Tracker",
    description:
      "OpenCV + DeepSORT/YOLO with Flask UI and re-detection via template matching.",
    image: "/images/tracker.jpg",
    href: "https://github.com/yourname/multi-object-tracker",
  },
  {
    id: "vista",
    title: "Vista Kids Dental",
    description:
      "Next.js + Tailwind site; forms, SEO, and ongoing improvements.",
    image: "/images/vista.jpg",
    href: "https://vistakidsdental.example.com",
  },
  {
    id: "mycelium",
    title: "Mycelium Lab",
    description:
      "Automation for indoor greenhouse; sensors + data viz, sustainable biomaterials.",
    image: "/images/mycelium.jpg",
    href: "https://github.com/yourname/mycelium-lab",
  },
  {
    id: "disco",
    title: "Disco Veggies",
    description:
      "AI-controlled LED spectra to optimize growth of tulip & poppy hydroponics.",
    image: "/images/disco.jpg",
    href: "https://github.com/yourname/disco-veggies",
  },
];
