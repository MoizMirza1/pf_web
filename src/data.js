//  icons
import {
    FiYoutube,
    FiInstagram,
    FiGithub,
    FiDribbble,
    FiLayout,
    FiSettings,
    FiPenTool,
    FiTag,
    FiMail,
    FiMapPin,
    FiFacebook,
  } from 'react-icons/fi';
  
  // companies icons

  import LinkedInIcon from './assets/img/brands/LinkedIn.png';
  import UpworkBrandIcon from './assets/img/brands/Upwork.png';
  import FiverBrandIcon from './assets/img/brands/Fiverr.png';
  import BehanceBrandIcon from './assets/img/brands/Behance.png';
  import FacebookBrandIcon from './assets/img/brands/Facebook.png';
  
  // projects images
  import Project1 from './assets/img/projects/gamingwebsite.jpg';
  import Project2 from './assets/img/projects/githubImg.jpg';
  import Project3 from './assets/img/projects/login.jpg';
  import Project4 from './assets/img/projects/WatchImg.png';
  import Project5 from './assets/img/projects/Store.png';
  import Project6 from './assets/img/projects/tictactoe.png';
  import Project7 from './assets/img/projects/tictactoe.png';
  
  // skills images
  import SkillImg1 from './assets/img/skills/html-5.png';
  import SkillImg2 from './assets/img/skills/css-3.png';
  import SkillImg3 from './assets/img/skills/js.png';
  import SkillImg4 from './assets/img/skills/science.png';
  import SkillImg5 from './assets/img/skills/tailwindcss.png';
  import SkillImg6 from './assets/img/skills/mongodb.png';
  import SkillImg7 from './assets/img/skills/express.png';
  import SkillImg8 from './assets/img/skills/giticon.png';
  import SkillImg9 from './assets/img/skills/nodejs.png';
  
  // testimonial images
  import TestiImage1 from './assets/img/testimonials/review1.jpg';
  import TestiImage2 from './assets/img/testimonials/review2.jpg';
  import TestiImage3 from './assets/img/testimonials/review3.jpg';
  
  // navigation
  export const navigation = [
    {
      name: 'home',
      href: 'home',
    },
    {
      name: 'about',
      href: 'about',
    },
    {
      name: 'portfolio',
      href: 'portfolio',
    },
    {
      name: 'services',
      href: 'services',
    },
    {
      name: 'Reviews',
      href: 'Reviews',
    },
    {
      name: 'contact',
      href: 'contact',
    },
  ];
  
  // social
  export const social = [
    {
      icon: <FiYoutube />,
      href: '',
    },
    {
      icon: <FiInstagram />,
      href: '',
    },
    {
      icon: <FiGithub />,
      href: '',
    },
    {
      icon: <FiFacebook />,
      href: '',
    },
  ];
  
  // companies
  export const brands = [
    {
      name : 'LinkedIn',
      img: LinkedInIcon,
      href: '',
    },
    {
      name: 'Upwork',
      img: UpworkBrandIcon,
      href: '',
    },
    {
      name: 'Fiverr',
      img: FiverBrandIcon,
      href: '',
    },
    {
      name: 'Behance',
      img: BehanceBrandIcon,
      href: '',
    },
    {
      name: 'Facebook',
      img: FacebookBrandIcon,
      href: '',
    },
  ];
  
  // // projects
  export const projectsData = [
    {
      id: '1',
      image: Project1,
      name: ' Gaming Accessories Website',
      category: 'UI/UX design',
      link: "https://gameverse.netlify.app/",
      site : "Visit live"
    },
    {
      id: '2',
      image: Project2,
      name: 'Github Finder',
      category: 'web development',
      link: "",
      site : "Visit live"
    },
    {
      id: '3',
      image: Project3,
      name: 'Login Form with Express and MongoDB',
      category: 'Designing',
      link: "",
      site : "Coming soon"
    },
    {
      id: '4',
      image: Project4,
      name: 'SmartX Watches Store',
      category: 'branding',
      link : '',
      site : "Coming Soon"
    },
    {
      id: '5',
      image: Project5,
      name: 'Ecormmerce WebStore',
      category: 'web development',
      link: '',
      site : "Coming soon"
    },
    {
      id: '6',
      image: Project6,
      name: 'Tic Tac Toe Game',
      category: 'web development',
      link : '',
      site : "Visit live"
    },
  ];
  
  // projects
  export const projectsNav = [
    {
      name: 'all',
    },
    {
      name: 'UI/UX Design',
    },
    {
      name: 'Web development',
    },
    {
      name: 'Designing',
    },
  ];
  
  // // skill
  export const skills = [
    {
      image: SkillImg1,
      level: 90,
      name: 'HTML',
      color: '#fcba03',
      txtColor: 'black',
      

    },
    {
      image: SkillImg2,
      level: 80,
      name: 'CSS',
      
      color: '#264de4',
      txtColor: '#fff',

    },
    {
      image: SkillImg3,
      level: 60,
      name: 'JavaScript',
      color: '#f0db4f',
      txtColor: '#000',
      
      
    },
    {
      image: SkillImg4,
      level: 70,
      name: 'React',
      color: 'darkcyan',
      txtColor: '#000',

    },
    {
      image: SkillImg5,
      level: 70,
      name: 'Tailwind CSS',
      color: '#06b6d4',
      txtColor: 'black',

    },
    {
      image: SkillImg6,
      level: 40,
      name : 'MongoDB',
      color: '#13aa52',
      txtColor : '#fff',
    },
    {
      image: SkillImg7,
      level: 30,
      name: 'Express',
      color: 'purple',
      txtColor: '#fff',

    },
    {
      image: SkillImg8,
      level: 90,
      name: 'Git',
      color: '#f34f29',
      txtColor: '#fff',

    },
    {
      image: SkillImg9,
      level: 50,
      name: 'NodeJs',
      color: '#3c873a',
      txtColor: '#fff',

    },
  ];
  
  // services
  export const services = [
    {
      icon: <FiLayout />,
      name: 'Web Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    {
      icon: <FiSettings />,
      name: 'Web Development',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    {
      icon: <FiPenTool />,
      name: 'Graphic Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    {
      icon: <FiTag />,
      name: 'Advetising Animation (2D) ', 
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
  ];
  
  // testimonials
  export const testimonials = [
    {
      authorImg: TestiImage1,
      authorText:
        'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
      authorName: 'Alex',
      authorPosition: 'CEO, ABC Company',
    },
    {
      authorImg: TestiImage2,
      authorText:
        'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
      authorName: 'Myers michel',
      authorPosition: 'Web Developer, Engineer',
    },
    {
      authorImg: TestiImage3,
      authorText:
        'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
      authorName: 'Oliver',
      authorPosition: 'Designer, ABC Company ',
    },
  ];
  
  // contact
  export const contact = [
    {
      icon: <FiMail />,
      title: 'Have a question?',
      subtitle: 'I am here to help you.',
      description: 'Email me at moizmirza212@gmail.com',
    },
    {
      icon: <FiMapPin />,
      title: 'Current Location',
      subtitle: 'Karachi, Pakistan',
      description: 'Serving Mern Stack Development Services',
    },
  ];