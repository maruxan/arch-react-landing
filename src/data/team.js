import jakeImg from '../assets/images/about/desktop/avatar-jake.jpg';
import jacksonImg from '../assets/images/about/desktop/avatar-jackson.jpg';
import mariaImg from '../assets/images/about/desktop/avatar-maria.jpg';
import thompsonImg from '../assets/images/about/desktop/avatar-thompson.jpg';

const team = [
  {
    id: Math.random(),
    name: 'Jake Richards',
    role: 'Chief Architect',
    image: jakeImg,
  },
  {
    id: Math.random(),
    name: 'Thompson Smith',
    role: 'Head of Finance',
    image: thompsonImg,
  },
  {
    id: Math.random(),
    name: 'Jackson Rourke',
    role: 'Lead Designer',
    image: jacksonImg,
  },
  {
    id: Math.random(),
    name: 'Maria Simpson',
    role: 'Senior Architect',
    image: mariaImg,
  },
];

export default team;
