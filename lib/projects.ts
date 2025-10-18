import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "site-1",
    title: "ZLB Studio",
    description: "Full-stack site for creative consulting studio with a Node/Next.js API layer and a PostgreSQL datastore for contact submissions, featuring schema-validated endpoints and a typed client on the frontend.",
    href: "https://zlbstudio.com",
    preview: { type: "iframe", src: "https://zlbstudio.com" }
  },
  {
    id: "site-2",
    title: "Vista Kids Dental",
    description: "Production-ready website for a pediatric dental practice on Next.js + TypeScript + Tailwind with server-side rendering, image optimization, and API integration for lead capture and scheduling workflows.",
    href: "https://vistakidsdental.com",
    preview: { type: "iframe", src: "https://vistakidsdental.com" }
  },
  {
    id: "repo-1",
    title: "Squat Form Tracker",
    description: "Edge-friendly Python + OpenCV pipeline that performs real-time pose/motion analysis for squat form tracking, optimized for low-latency camera input.",
    href: "https://github.com/LukeHopkinss/squat-tracker",
    preview: {
      type: "image",
      src: "/projects/squat-tracker.jpg",
      alt: "Squat form tracker screenshot"
    }
  },
  {
    id: "site-4",
    title: "Multi-Object Tracker",
    description: "Python/OpenCV + Flask app that extends single-target tracking to multi-target with a lightweight web UI, packaged for straightforward deployment.",
    href: "https://multi-object-tracker.onrender.com",
    preview: { type: "iframe", src: "https://multi-object-tracker.onrender.com" }
  },
  {
    id: "site-5",
    title: "Museum of Luke",
    description: "Fast, minimal Vite + vanilla JS microsite showcasing experiments and content, with modular components and zero-framework runtime overhead",
    href: "https://museumofluke.netlify.app/",
    preview: { type: "iframe", src: "https://museumofluke.netlify.app/" }
  },
  {
    id: "site-6",
    title: "Astronomy Picture of the Day",
    description: "Client-side Vite + JS app that consumes NASA’s APOD REST API, handling remote fetch, response parsing, and resilient image/media rendering with basic caching.",
    href: "https://astropotd.netlify.app/",
    preview: { type: "iframe", src: "https://astropotd.netlify.app/" }
  },
  {
    id: "site-7",
    title: "Productivity-Maxxing",
    description: "React CRUD list demonstrating component state, derived computations, and Netlify-ready static deployment with an efficient build pipeline.",
    href: "https://productivitymaxxing.netlify.app/",
    preview: { type: "iframe", src: "https://productivitymaxxing.netlify.app/" }
  },
  {
    id: "repo-1",
    title: "Peeyew.Net",
    description: "Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion: a playful, gallery-forward site featuring an MS Paint-style HTML5 canvas, created for Converse All-Stars Scholar Program.",
    href: "https://github.com/LukeHopkinss/peeyew-net",
    preview: {
      type: "image",
      src: "/projects/peeyew-net.png",
      alt: "peeyew-net screenshot"
    }
  }
];
