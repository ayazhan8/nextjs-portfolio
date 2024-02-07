import fullStackImg from "@/public/full-stack.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Project1",
    description:
      "Weather app with AI integration. AI uses data from WeatherAPI to generate a forecast for the day.",
    tags: ["React", "Next.js", "Tailwind", "Prisma"],
    imageUrl: fullStackImg,
  },
  {
    title: "Project2",
    description:
      "Personal blog website. It has features like filtering and sorting posts and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: fullStackImg,
  },
  {
    title: "Project3",
    description:
      "Full-stack e-commerce app with features like cart shopping, filtering, sorting, searching for products, etc.",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: fullStackImg,
  },
] as const;
