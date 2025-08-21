import { MarqueeDemo } from './Marquee';

const Skill = () => {
  return (
    <section className="relative c-space section-spacing">
      <h2 className="text-heading mb-10">Skills</h2>

      <MarqueeDemo />

      <div className="mt-10 space-y-4 text-sm sm:text-base text-white/80 px-4 sm:px-0">
        <div className="rounded-xl border border-white/10 bg-gradient-to-r from-[#0a0a0a] to-transparent p-4 sm:p-5 shadow">
          <strong className="text-white block sm:inline">Front-End:</strong> 
          <span className="block sm:inline sm:ml-1">React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Responsive Design, UI/UX.</span>
        </div>
        <div className="rounded-xl border border-white/10 bg-gradient-to-r from-[#0a0a0a] to-transparent p-4 sm:p-5 shadow">
          <strong className="text-white block sm:inline">Back-End:</strong> 
          <span className="block sm:inline sm:ml-1">Node.js, Express.js, WebSockets (Socket.io), JWT Authentication.</span>
        </div>
        <div className="rounded-xl border border-white/10 bg-gradient-to-r from-[#0a0a0a] to-transparent p-4 sm:p-5 shadow">
          <strong className="text-white block sm:inline">Databases:</strong> 
          <span className="block sm:inline sm:ml-1">PostgreSQL, MongoDB, Prisma ORM.</span>
        </div>
        <div className="rounded-xl border border-white/10 bg-gradient-to-r from-[#0a0a0a] to-transparent p-4 sm:p-5 shadow">
          <strong className="text-white block sm:inline">Tools & Testing:</strong> 
          <span className="block sm:inline sm:ml-1">Vercel, Git, GitHub, Docker.</span>
        </div>
        <div className="rounded-xl border border-white/10 bg-gradient-to-r from-[#0a0a0a] to-transparent p-4 sm:p-5 shadow">
          <strong className="text-white block sm:inline">Programming Languages:</strong> 
          <span className="block sm:inline sm:ml-1">JavaScript, TypeScript, SQL, C++, Python.</span>
        </div>
        <div className="rounded-xl border border-white/10 bg-gradient-to-r from-[#0a0a0a] to-transparent p-4 sm:p-5 shadow">
          <strong className="text-white block sm:inline">Soft Skills:</strong> 
          <span className="block sm:inline sm:ml-1">Debugging, Technical Documentation, Cross-Team Collaboration, Task Prioritization.</span>
        </div>
      </div>
    </section>
  );
};

export default Skill;
