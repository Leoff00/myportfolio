import nodejs from "./assets/techs/nodejs.svg";
import ts from "./assets/techs/ts.svg";
import expressjs from "./assets/techs/expressjs.svg";
import nestjs from "./assets/techs/nestjs.svg";
import react from "./assets/techs/react.svg";
import nextjs from "./assets/techs/nextjs.svg";
import golang from "./assets/techs/golang.svg";
import docker from "./assets/techs/docker.svg";
import aws from "./assets/techs/aws.svg";
import postgres from "./assets/techs/postgres.svg";
import mongodb from "./assets/techs/mongodb.svg";
import graphql from "./assets/techs/graphql.svg";

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
    imageUrl: nodejs,
    title: "NodeJS",
    alt: "NodeJS",
  },
  { imageUrl: ts, title: "Typescript", alt: "Typescript" },
  { imageUrl: expressjs, title: "ExpressJS", alt: "ExpressJS" },
  { imageUrl: nestjs, title: "NestJS", alt: "NestJS" },
  { imageUrl: react, title: "ReactJS", alt: "ReactJS" },
  { imageUrl: nextjs, title: "NextJS", alt: "NextJS" },
  { imageUrl: golang, title: "Golang", alt: "Golang" },
  { imageUrl: docker, title: "Docker", alt: "Docker" },
  { imageUrl: postgres, title: "Postgres", alt: "Postgres" },
  { imageUrl: mongodb, title: "MongoDB", alt: "MongoDB" },
  { imageUrl: graphql, title: "GraphQL", alt: "GraphQL" },
  { imageUrl: aws, title: "AWS", alt: "AWS" },
];

export { dataSet, SocialLinks };
