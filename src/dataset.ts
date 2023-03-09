import expressjs from "./assets/techs/expressjs.svg";
import nextjs from "./assets/techs/nextjs.svg";

export interface CardProps {
  title?: string;
  imageUrl?: string;
  alt?: string;
}

interface SocialLinkProps {
  linkedin: string;
  github: string;
  discord: string;
}

const SocialLinks: SocialLinkProps = {
  linkedin: "https://www.linkedin.com/in/leonardo-ferreira-253a60173/",
  github: "https://github.com/Leoff00",
  discord: "https://discord.com/users/241680344791646209",
};

const dataSet: Array<CardProps> = [
  {
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    title: "NodeJS",
    alt: "NodeJS",
  },
  {
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
    title: "Typescript",
    alt: "Typescript",
  },
  {
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
    title: "Golang",
    alt: "Golang",
  },

  { imageUrl: expressjs, title: "ExpressJS", alt: "ExpressJS" },
  {
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
    title: "NestJS",
    alt: "NestJS",
  },
  {
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    title: "ReactJS",
    alt: "ReactJS",
  },
  {
    imageUrl: nextjs,
    title: "NextJS",
    alt: "NextJS",
  },

  {
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg",
    title: "Docker",
    alt: "Docker",
  },
  {
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg",
    title: "Postgres",
    alt: "Postgres",
  },
  {
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    title: "MongoDB",
    alt: "MongoDB",
  },
  {
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    title: "GraphQL",
    alt: "GraphQL",
  },
  {
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    title: "AWS",
    alt: "AWS",
  },
];

export { dataSet, SocialLinks };
