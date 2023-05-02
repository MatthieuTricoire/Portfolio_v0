// Interactive rating img
import rating1 from "../../../assets/img/rating/fm-interactive-rating-1.png";
import rating2 from "../../../assets/img/rating/fm-interactive-rating-2.png";

// Calculatrice img
import calc1 from "../../../assets/img/calculator/fm-calc-1.png";
import calc2 from "../../../assets/img/calculator/fm-calc-2.png";
import calc3 from "../../../assets/img/calculator/fm-calc-3.png";

// Kalculo img
import kalculo1 from "../../../assets/img/kalculo/Kalculo-1.png";
import kalculo2 from "../../../assets/img/kalculo/Kalculo-2.png";

// Draw shape img
import drawshape1 from "../../../assets/img/drawshape/drawshape1.png";

// React icons
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

import { ReactNode } from "react";

export interface IProject {
  id: number;
  images: string[];
  title: string;
  category: "Web" | "Mobile";
  description: string;
  icons?: ReactNode[];
  live: boolean;
  git: string;
  liveUrl?: string;
}

export interface IProjectFilter {
  name: string;
}

export const projectsData: IProject[] = [
  {
    id: 1,
    images: [calc1, calc2, calc3],
    title: "Calculatrice",
    category: "Web",
    description:
      "Reproduction d'une calculatrice. Mise en place d'un useReducer pour gérer les états.",
    icons: [<FaReact />, <SiTypescript />, <FaCss3Alt />],
    git: "https://github.com/MatthieuTricoire/fm-calculator",
    live: true,
    liveUrl: "https://musical-taiyaki-3c8c23.netlify.app/",
  },
  {
    id: 2,
    images: [rating1, rating2],
    title: "Composant de notations",
    category: "Web",
    description: "Intégration d'une maquette pour attribuer une notation.",
    icons: [<FaReact />, <SiTypescript />, <FaCss3Alt />],
    git: "https://github.com/MatthieuTricoire/fm-calculator",
    live: true,
    liveUrl: "https://musical-taiyaki-3c8c23.netlify.app/",
  },
  // {
  //   id: 3,
  //   images: [bleuvert1],
  //   title: "Bleuvert",
  //   description: "Création d'une site vitrine connecté à Strapi",
  //   category: "Mobile",
  //   git: "https://github.com/MatthieuTricoire/bleuvert",
  //   live: false,
  // },
  {
    id: 3,
    images: [kalculo1, kalculo2],
    title: "Kalculo",
    description:
      "Création d'une application mobile en groupe lors des deux dernières semaines du bootcamp",
    category: "Mobile",
    git: "https://github.com/KalculoProject",
    live: false,
  },
  {
    id: 4,
    images: [drawshape1],
    title: "Dessine moi une forme",
    description:
      "Manipulation de la position du curseur dans la fenêtre pour l'ajout d'un élement.",
    category: "Web",
    git: "https://github.com/MatthieuTricoire/Add-shapes-by-clicking",
    live: true,
    liveUrl: "https://lambent-rabanadas-8d111f.netlify.app/",
  },
];

export const projectsNav: IProjectFilter[] = [
  { name: "Tous" },
  { name: "Web" },
  { name: "Mobile" },
];
