import iranCitizenImg from '../assets/irancitizen.png';
import iranJournalistImg from '../assets/iranjournalist.png';
import usJournalistImg from '../assets/usjournalist.png';

export const STORYLINES = [
  {
    key: 'iranian',
    name: 'Nasrin',
    role: 'Iranian Journalist',
    description: 'Reporting on the front lines where basic information is unstable and truth has a high cost.',
    storyTitle: 'The Price of Truth',
    image: iranJournalistImg,
    imageAlt: 'Iranian journalist in green hooded jacket with camera',
  },
  {
    key: 'us',
    name: 'Daniel',
    role: 'US Journalist',
    description: 'Documenting contradictions between official statements and on-the-ground reality.',
    storyTitle: 'The Institutional Lens',
    image: usJournalistImg,
    imageAlt: 'Blonde male journalist with camera in brown coat',
  },
  {
    key: 'civilian',
    name: 'Parisa',
    role: 'Iranian Citizen',
    description: 'Witnessing atrocities firsthand while navigating a landscape of propaganda and risk.',
    storyTitle: 'A Citizen\'s Witness',
    image: iranCitizenImg,
    imageAlt: 'Woman in hijab and blue robe',
  },
];
