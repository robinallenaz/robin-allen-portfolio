import { ReactTyped } from 'react-typed';

export default function TypedTitle() {
  const roles = [
    'Full Stack Developer',
    'React Specialist',
    'Node.js Engineer',
    'UI/UX Enthusiast'
  ];

  return (
    <div className="space-y-1">
      <h1 className="text-3xl md:text-5xl font-bold pride-gradient pride-glow">
        Robin Allen
      </h1>
      <div className="text-xl md:text-3xl font-bold pride-gradient font-['Fira_Code']">
        <ReactTyped
          strings={roles}
          typeSpeed={50}
          backSpeed={30}
          backDelay={1500}
          loop
          cursorChar="█"
        />
      </div>
    </div>
  );
}
