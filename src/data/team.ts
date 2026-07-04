export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  background: string;
}

export const team: TeamMember[] = [
  {
    id: 'jasmine',
    name: 'Jasmine',
    role: 'Founder & Creator',
    bio: 'Student-athlete, swim instructor, and biochemistry enthusiast on a mission to make sports psychology accessible to every young athlete.',
    background:
      'Growing up as a competitive swimmer, Jasmine struggled with performance anxiety and burnout. She discovered that understanding the science behind stress, recovery, and mindset completely changed her athletic journey. Now she combines her backgrounds in sports, psychology, and biochemistry to help other young athletes thrive—not just succeed.',
  },
];

export const mission =
  'Empowering youth athletes by making the science of stress, recovery, and mindset understandable and usable.';

export const vision =
  'A world where young athletes understand their bodies, trust their minds, and perform with confidence and wellbeing at the center.';
