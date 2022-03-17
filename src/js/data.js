import {
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  GithubOutlined,
} from '@ant-design/icons-svg';

import image from 'url:../images/me-large.png';
import projectImage from 'url:../images/projects/*.webp';

export const heroData = {
  greetings: 'Hello there, I am',
  name: 'Jan Kenneth Sajo',
  position: 'A self-taught Web Developer',
  description:
    'An Information Technology graduate from Lyceum Alabang and an aspiring Full Stack Web Developer from the Philippines. I create things that live on the web.',
  floatingLinks: [
    {
      id: 'github',
      link: 'https://github.com/nethsajo',
      icon: GithubOutlined,
    },
    {
      id: 'ig',
      link: 'https://www.instagram.com/nethsajo_',
      icon: InstagramOutlined,
    },
    {
      id: 'ig',
      link: 'https://www.linkedin.com/in/jan-kenneth-sajo/',
      icon: LinkedinOutlined,
    },
  ],
};

export const popupLinks = [
  {
    id: 'gmail',
    title: 'Gmail',
    link: 'mailto:jankennethsajo@gmail.com',
    icon: MailOutlined,
  },
  {
    id: 'instagram',
    title: 'Instagram',
    link: 'https://www.instagram.com/nethsajo_',
    icon: InstagramOutlined,
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jan-kenneth-sajo/',
    icon: LinkedinOutlined,
  },
];

export const aboutData = {
  name: 'Jan Kenneth Sajo',
  position: 'Front-end Developer',
  image,
  techStacks: [
    {
      id: 'html',
      name: 'html5',
      svg: 'icon-html5',
    },
    {
      id: 'css',
      name: 'css',
      svg: 'icon-css3',
    },
    {
      id: 'sass',
      name: 'sass',
      svg: 'icon-sass',
    },
    {
      id: 'js',
      name: 'javascript',
      svg: 'icon-javascript',
    },
    {
      id: 'github',
      name: 'github',
      svg: 'icon-github-skill',
    },
    {
      id: 'git',
      name: 'git',
      svg: 'icon-git',
    },
  ],
};

export const projects = [
  {
    id: 1,
    name: 'Villa Lancaster',
    images: {
      img640: projectImage['project-1-640w'],
      img828: projectImage['project-1-828w'],
      img1200: projectImage['project-1-1200w'],
      img1920: projectImage['project-1-1920w'],
      img2048: projectImage['project-1-2048w'],
      img3840: projectImage['project-1-3840w'],
    },
    description:
      'A real estate landing page that you will see a list of available properties.',
    languages: ['HTML', 'SASS'],
    links: {
      github: 'https://github.com/nethsajo/responsive-realestate-website',
      live: 'https://villalancaster.netlify.app/',
    },
    type: 'Website Landing Page',
  },
  {
    id: 2,
    name: 'Bankify',
    images: {
      img640: projectImage['project-2-640w'],
      img828: projectImage['project-2-828w'],
      img1200: projectImage['project-2-1200w'],
      img1920: projectImage['project-2-1920w'],
      img2048: projectImage['project-2-2048w'],
      img3840: projectImage['project-2-3840w'],
    },
    description:
      'A digital banking landing page that you will see their services and operations.',
    languages: ['HTML', 'SASS', 'JavaScript'],
    links: {
      github: 'https://github.com/nethsajo/responsive-bankify-website',
      live: 'https://bankify-js.netlify.app/',
    },
    type: 'Website Landing Page',
  },
  {
    id: 3,
    name: 'CookBook',
    images: {
      img640: projectImage['project-3-640w'],
      img828: projectImage['project-3-828w'],
      img1200: projectImage['project-3-1200w'],
      img1920: projectImage['project-3-1920w'],
      img2048: projectImage['project-3-2048w'],
      img3840: projectImage['project-3-3840w'],
    },
    description:
      "A recipe web application where you can discover recipes, cooks and how to's on the food you love.",
    languages: ['HTML', 'SASS', 'JavaScript', 'API'],
    links: {
      github: 'https://github.com/nethsajo/cookbook',
      live: 'https://cookbook-js.netlify.app/',
    },
    type: 'Website Application',
  },
];

export const contact = {
  heading: "Let's get in touch. It would make my day to hear from",
  message:
    "Feel free to connect with me, I will definitely reply. I'm always open to opportunities to be part of your visions.",
  link: 'mailto:jankennethsajo@gmail.com',
};
