export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  category: 'Client' | 'Personal' | 'Personal Project' | string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  liveUrl?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: 'the-shadow-bridge',
    number: '01',
    name: 'THE SHADOW BRIDGE',
    category: 'PERSONAL PROJECT',
    // TODO: Only 2 screenshots were provided for The Shadow Bridge. 
    // col1Image1 is set to the mission screenshot, col1Image2 and col2Image showcase the hero screenshot.
    // Replace with a 3rd distinct screenshot (e.g. services, consultation, or contact page) when available.
    col1Image1: '/projects/shadow-bridge-cutouts.png',
    col1Image2: '/projects/shadow-bridge-classroom.png',
    col2Image: '/projects/shadow-bridge-hands.png',
    liveUrl: 'https://www.theshadowbridge.com/',
  },
];
