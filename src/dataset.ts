import expressjs from "@/assets/techs/expressjs.svg";
import nextjs from "@/assets/techs/nextjs.svg";
import discordgo from "@/assets/techs/discordgo.svg";

export interface TechsProps {
  title?: string;
  imageUrl?: string;
  alt?: string;
}

export interface ProjectsCardsProps {
  projectTitle?: string;
  description?: string;
  iconUrl?: Array<string>;
  alt?: string;
  repoIcon?: string;
  repoLink: string;
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

const projectsCardsSet: Array<ProjectsCardsProps> = [
  {
    iconUrl: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
      expressjs,
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg",
    ],
    projectTitle: "E-wallet Transctions - Backend",
    alt: "Icones de tecnologia",
    description: `Aplicação que consiste em dois microsserviços integrados entre uma base de dados de usuarios e uma base de dados de 
      transações, onde o usuário poderia fazer livres transações de credito e debito de forma independente e desacoplada.`,
    repoLink: "https://github.com/Leoff00/ilia-nodejs-challenge",
    repoIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    iconUrl: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      nextjs,
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    ],
    projectTitle: "Plataforma de cursos - Fullstack (Freelancer)",
    alt: "Icones de tecnologia",
    description: `
      Responsável tanto pelo front quanto pelo backend de uma plataforma de cursos online, onde o cliente se cadastrava tanto como professor/instrutor tanto como aluno para assistir as aulas.
    `,
    repoLink: "Privado",
    repoIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    iconUrl: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
      expressjs,
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    ],
    projectTitle: "Gerador de template APIGEE para Claro Brasil - Backend",
    alt: "Icones de tecnologia",
    description: `
    Aplicação que consistia em ler corpo e arquivos de uma requisição enviada para o cliente e devolver uma estrutura de pastas com o template e padrão TMForum, com integração e 
    deploy contínuo (CI/CD) com Jenkins, hospedada no EC2 da aws, para a empresa Claro Brasil.`,
    repoLink: "Privado",
    repoIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    iconUrl: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
      expressjs,
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    ],
    projectTitle: "Olebet apostas - Backend (Freelancer)",
    alt: "Icones de tecnologia",
    description: `
      Aplicação construida para fazer apostas com o intuito de recreação, ou seja, não 
      há transferencias bancárias. Responsável por implementar funcionalidades como: 
      Fazer apostas,
      Buscar jogos disponiveis,
      Criar apostas,
      Criação de times
      Criação e recursos de rotas de administrador.
    `,
    repoLink: "Privado",
    repoIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    iconUrl: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
      discordgo,
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    ],
    projectTitle: "Diego BOT - Backend ",
    alt: "Icones de tecnologia",
    description: `
    Bot de discord 100% interativo feito em Golang, utilizando a biblioteca
    Discordgo, que faz a integração direta com a API do discord, este Bot tem
    implementado os seguintes comandos: 
    Busca de imagens, limpeza de chat, menção de membros, contador de usuários, etc.
    Esta app também possui CI/CD e esta hospedado no EC2 com Autoscaling.
    `,
    repoLink: "https://github.com/Leoff00/go-diego-bot",
    repoIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    iconUrl: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
    ],
    projectTitle: "App de Votação - Backend",
    alt: "Icones de tecnologia",
    description: `
      Este projeto consiste num estudo de arquitetura limpa, 
      design patterns, TDD e boas práticas de programação para minha
      melhoria continua no backend, se trata de uma aplicação de votação,
      onde o usuário possui 10 votos iniciais e dado uma competição, caso ocorra
      o usuário pode votar 10 vezes em 1 ou vários competidores. 
    `,
    repoLink: "https://github.com/Leoff00/clean-arch-vote-vote",
    repoIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
];

const dataSet: Array<TechsProps> = [
  {
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    title: "HTML5",
    alt: "HTML5",
  },
  {
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    title: "CSS3",
    alt: "CSS3",
  },
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
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    title: "Google Firebase",
    alt: "Google Firebase",
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
    title: "PostgresSQL",
    alt: "PostgresSQL",
  },
  {
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    title: "MongoDB",
    alt: "MongoDB",
  },
  {
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    title: "Jenkins",
    alt: "Jenkins",
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

export { dataSet, SocialLinks, projectsCardsSet };
