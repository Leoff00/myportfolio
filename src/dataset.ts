import expressjs from "@/assets/techs/expressjs.svg";
import fyne from "@/assets/techs/fyne.png";
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
      "https://img.icons8.com/color/48/google-cloud.png",
    ],
    projectTitle: "Lottery Vizo Dev (Freelancer)",
    alt: "Icones de tecnologia",
    description: `
    Projeto freelance que participei na parte de backend, fui responsável 
    por implementar a funcionalidade de integração de pagamentos via PIX e cartões
    de credito utilizando Serverless um aplicativo de sorteios contratado 
    pela empresa Vizo Dev. 
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
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg",
    ],
    projectTitle: "E-wallet Transctions",
    alt: "Icones de tecnologia",
    description: `Aplicação que consiste em dois microsserviços integrados com base de dados distintas, onde o 
    usuário poderia fazer livres transações de credito e debito de forma independente e desacoplada.`,
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
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      nextjs,
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    ],
    projectTitle: "Plataforma de cursos (Freelancer)",
    alt: "Icones de tecnologia",
    description: `
      Responsável tanto pelo front quanto pelo backend de uma plataforma de 
      cursos online, onde o cliente se cadastra tanto como professor/instrutor quanto aluno 
      para assistir as video-aulas e também cadastrar uma nova video-aula.
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
    projectTitle: "Gerador de template APIGEE para Claro Brasil",
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
    projectTitle: "Olebet apostas (Freelancer)",
    alt: "Icones de tecnologia",
    description: `
      Aplicação construida para fazer apostas. 
      Responsável por implementar funcionalidades como: 
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
    projectTitle: "Diego BOT ",
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
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
      fyne,
    ],
    projectTitle: "Gofastypo",
    alt: "Icones de tecnologia",
    description: `
     Projeto feito por mim em Golang utilizando o fyne toolkit, um framework
     para construção de app desktop GUI e mobile, construi uma especie de clone 
     minificado do http://www.typingtest.com que é um medidor de palavras digitadas 
     por minuto (wpm). 
    `,
    repoLink: "https://github.com/Leoff00/gofastypo",
    repoIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    iconUrl: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
    ],
    projectTitle: "Gocheckitout",
    alt: "Icones de tecnologia",
    description: `
     Aplicação construida para medir a performance da linguagem, esta aplicação
     consegue fazer 50 requisições simultaneas dado uma entrada de dados com 
     as URLS e processa uma saída retornando o status code das mesmas. 
    `,
    repoLink: "https://github.com/Leoff00/gocheckitout",
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
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
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
    title: "PostgreSQL",
    alt: "PostgreSQL",
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
  {
    imageUrl: "https://img.icons8.com/color/48/google-cloud.png",
    title: "Google Cloud Platform",
    alt: "Google Cloud Platform",
  },
];

export { dataSet, SocialLinks, projectsCardsSet };
