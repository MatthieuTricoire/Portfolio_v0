import imageTest from "../../../assets/worlde_1.png";
import imageTest1 from "../../../assets/wordle_2.png";

import bleuvert1 from "../../../assets/bleuvert_1.png";

import { FaCss3Alt, FaReact } from "react-icons/fa";

import { ReactNode } from "react";

export interface IProject {
  id: number;
  images: string[];
  title: string;
  category: string;
  description: string;
  icons?: ReactNode[];
  live: boolean;
  git: string;
}

export interface IProjectFilter {
  name: string;
}

export const projectsData: IProject[] = [
  {
    id: 1,
    images: [imageTest, imageTest1],
    title: "Wordle Clone",
    category: "Web",
    description:
      "Création d'une clone du jeu Wordle (Motus) pour mettre en place la logique.",
    icons: [<FaReact />, <FaCss3Alt />],
    git: "https://github.com/MatthieuTricoire/Wordle-Clone",
    live: false,
  },
  {
    id: 2,
    images: [bleuvert1],
    title: "Bleuvert",
    description:
      "Refonte d'un site web existant pour un client. Objectif : le connecter à un backoffice (Strapi) pour pouvoir ajouter facilement du contenu.",
    category: "Mobile",
    git: "https://github.com/MatthieuTricoire/bleuvert",
    live: false,
  },
];

export const projectsNav: IProjectFilter[] = [
  { name: "Tous" },
  { name: "Web" },
  { name: "Mobile" },
];
