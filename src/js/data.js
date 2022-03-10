import {
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  GithubOutlined,
} from '@ant-design/icons-svg';

import {
  siHtml5,
  siCss3,
  siJavascript,
  siSass,
  siGit,
  siGithub,
} from 'simple-icons/icons';

import image from 'url:../images/me.jpg';
import projectOne from 'url:../images/project-1.webp';
import projectTwo from 'url:../images/project-2.webp';
import projectThree from 'url:../images/project-3.webp';

export const heroData = {
  greetings: 'Hello there, I am',
  name: 'Jan Kenneth Sajo',
  position: 'A self-taught Web Developer',
  description:
    'An Information Technology graduate and an aspiring Full Stack Engineer from the Philippines. I create stuffs that live on the web.',
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
      icon: siHtml5.svg,
    },
    {
      id: 'css',
      name: 'css',
      icon: siCss3.svg,
    },
    {
      id: 'sass',
      name: 'sass',
      icon: siSass.svg,
    },
    {
      id: 'js',
      name: 'javascript',
      icon: siJavascript.svg,
    },
    {
      id: 'github',
      name: 'github',
      icon: siGithub.svg,
    },
    {
      id: 'git',
      name: 'git',
      icon: siGit.svg,
    },
  ],
};

export const projects = [
  {
    id: 1,
    name: 'Villa Lancaster',
    image: projectOne,
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
    image: projectTwo,
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
    image: projectThree,
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
