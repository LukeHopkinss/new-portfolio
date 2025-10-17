import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "site-1",
    title: "Awesome SaaS",
    description: "Billing, auth, and dashboards for creators.",
    href: "https://example-saas.live",
    preview: { type: "iframe", src: "https://example-saas.live" }
  },
  {
    id: "site-2",
    title: "Docs Platform",
    description: "MDX-powered docs with search.",
    href: "https://docs.example.com",
    preview: { type: "iframe", src: "https://docs.example.com" }
  },
  {
    id: "repo-1",
    title: "Open Source CLI",
    description: "A tiny CLI to scaffold apps quickly.",
    href: "https://github.com/your/repo",
    preview: {
      type: "image",
      src: "/projects/cli-thumb.jpg",
      alt: "CLI screenshot"
    }
  }
];
