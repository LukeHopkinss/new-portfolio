export type Project = {
  id: string;
  title: string;
  description: string;
  href: string; // live site or repo
  repoHref?: string;
  preview:
    | { type: "image"; src: string; alt?: string }
    | { type: "iframe"; src: string; alt?: string };
};
