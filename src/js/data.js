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
