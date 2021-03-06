import {
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  GithubOutlined,
} from '@ant-design/icons-svg';

import meSmall from 'url:../images/me-small.png';
import meLarge from 'url:../images/me-large.png';

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
  name: 'Jan Kenneth V. Sajo',
  position: 'Front-end Developer',
  image: {
    large: meLarge,
    small: meSmall,
  },
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
      id: 'tailwind',
      name: 'tailwind css',
      svg: 'icon-tailwind',
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
      img640: new URL(
        `../images/projects/project-1.webp?width=640`,
        import.meta.url
      ),
      img828: new URL(
        `../images/projects/project-1.webp?width=828`,
        import.meta.url
      ),
      img1200: new URL(
        `../images/projects/project-1.webp?width=1200`,
        import.meta.url
      ),
      img1920: new URL(
        `../images/projects/project-1.webp?width=1920`,
        import.meta.url
      ),
      img2048: new URL(
        `../images/projects/project-1.webp?width=2048`,
        import.meta.url
      ),
      img3840: new URL(
        `../images/projects/project-1.webp?width=3840`,
        import.meta.url
      ),
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
      img640: new URL(
        `../images/projects/project-2.webp?width=640`,
        import.meta.url
      ),
      img828: new URL(
        `../images/projects/project-2.webp?width=828`,
        import.meta.url
      ),
      img1200: new URL(
        `../images/projects/project-2.webp?width=1200`,
        import.meta.url
      ),
      img1920: new URL(
        `../images/projects/project-2.webp?width=1920`,
        import.meta.url
      ),
      img2048: new URL(
        `../images/projects/project-2.webp?width=2048`,
        import.meta.url
      ),
      img3840: new URL(
        `../images/projects/project-2.webp?width=3840`,
        import.meta.url
      ),
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
      img640: new URL(
        `../images/projects/project-3.webp?width=640`,
        import.meta.url
      ),
      img828: new URL(
        `../images/projects/project-3.webp?width=828`,
        import.meta.url
      ),
      img1200: new URL(
        `../images/projects/project-3.webp?width=1200`,
        import.meta.url
      ),
      img1920: new URL(
        `../images/projects/project-3.webp?width=1920`,
        import.meta.url
      ),
      img2048: new URL(
        `../images/projects/project-3.webp?width=2048`,
        import.meta.url
      ),
      img3840: new URL(
        `../images/projects/project-3.webp?width=3840`,
        import.meta.url
      ),
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
  {
    id: 4,
    name: 'Cozy',
    images: {
      img640: new URL(
        `../images/projects/project-4.webp?width=640`,
        import.meta.url
      ),
      img828: new URL(
        `../images/projects/project-4.webp?width=828`,
        import.meta.url
      ),
      img1200: new URL(
        `../images/projects/project-4.webp?width=1200`,
        import.meta.url
      ),
      img1920: new URL(
        `../images/projects/project-4.webp?width=1920`,
        import.meta.url
      ),
      img2048: new URL(
        `../images/projects/project-4.webp?width=2048`,
        import.meta.url
      ),
      img3840: new URL(
        `../images/projects/project-4.webp?width=3840`,
        import.meta.url
      ),
    },
    description:
      'A shopping web application where you can browse and shop furnitures.',
    languages: ['HTML', 'Tailwind', 'JavaScript', 'API'],
    links: {
      github: 'https://github.com/nethsajo/cozy-store',
      live: 'https://cozystore.vercel.app/',
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
