import {
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  FacebookOutlined,
  GithubOutlined,
} from '@ant-design/icons-svg';

export const heroData = {
  greetings: 'Hello there, I am',
  name: 'Jan Kenneth Sajo',
  position: 'A self-taught Web Developer',
  description:
    'An Information Technology graduate. I love building responsive and beautiful websites.',
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
