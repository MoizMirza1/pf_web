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
  // import Project1 from './assets/img/projects/p1.webp';
  // import Project2 from './assets/img/projects/p2.webp';
  // import Project3 from './assets/img/projects/p3.webp';
  // import Project4 from './assets/img/projects/p4.webp';
  // import Project5 from './assets/img/projects/p5.webp';
  // import Project6 from './assets/img/projects/p6.webp';
  
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
  // import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
  // import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
  // import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';
  
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
      name: 'testimonials',
      href: 'testimonials',
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
  
  // projects
  // export const projectsData = [
  //   {
  //     id: '1',
  //     image: Project1,
  //     name: 'project name 1',
  //     category: 'UI/UX design',
  //   },
  //   {
  //     id: '2',
  //     image: Project2,
  //     name: 'project name 2',
  //     category: 'web development',
  //   },
  //   {
  //     id: '3',
  //     image: Project3,
  //     name: 'project name 3',
  //     category: 'UI/UX design',
  //   },
  //   {
  //     id: '4',
  //     image: Project4,
  //     name: 'project name 4',
  //     category: 'branding',
  //   },
  //   {
  //     id: '5',
  //     image: Project5,
  //     name: 'project name 5',
  //     category: 'web development',
  //   },
  //   {
  //     id: '6',
  //     image: Project6,
  //     name: 'project name 6',
  //     category: 'web development',
  //   },
  // ];
  
  // // projects
  // export const projectsNav = [
  //   {
  //     name: 'all',
  //   },
  //   {
  //     name: 'UI/UX Design',
  //   },
  //   {
  //     name: 'web development',
  //   },
  //   {
  //     name: 'branding',
  //   },
  // ];
  
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
      name: 'Branding',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    {
      icon: <FiTag />,
      name: 'SEO',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
  ];
  
  // testimonials
  // export const testimonials = [
  //   {
  //     authorImg: TestiImage1,
  //     authorText:
  //       'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
  //     authorName: 'Olivia Doe',
  //     authorPosition: 'Head of Design, Google',
  //   },
  //   {
  //     authorImg: TestiImage2,
  //     authorText:
  //       'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
  //     authorName: 'Olivia Doe',
  //     authorPosition: 'Head of Design, Google',
  //   },
  //   {
  //     authorImg: TestiImage3,
  //     authorText:
  //       'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
  //     authorName: 'Olivia Doe',
  //     authorPosition: 'Head of Design, Google',
  //   },
  // ];
  
  // contact
  export const contact = [
    {
      icon: <FiMail />,
      title: 'Have a question?',
      subtitle: 'I am here to help you.',
      description: 'Email me at hello@youremail.com',
    },
    {
      icon: <FiMapPin />,
      title: 'Current Location',
      subtitle: 'Bucharest, Romania',
      description: 'Serving clients worldwide',
    },
  ];