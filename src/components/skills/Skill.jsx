import { MarqueeDemo } from './Marquee';

const Skill = () => {
  return (
    <section className="relative c-space section-spacing">
      <h2 className="text-heading mb-10">Skills</h2>

      <MarqueeDemo />

      <div className="mt-10 space-y-4 text-sm sm:text-base text-white/80">
        <div className="rounded-xl border border-white/10 bg-gradient-to-r from-[#0a0a0a] to-transparent p-5 shadow">
          <strong className="text-white">Front-End:</strong> React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Responsive Design, UI/UX.
        </div>
        <div className="rounded-xl border border-white/10 bg-gradient-to-r from-[#0a0a0a] to-transparent p-5 shadow">
          <strong className="text-white">Back-End:</strong> Node.js, Express.js, WebSockets (Socket.io), JWT Authentication.
        </div>
        <div className="rounded-xl border border-white/10 bg-gradient-to-r from-[#0a0a0a] to-transparent p-5 shadow">
          <strong className="text-white">Databases:</strong> PostgreSQL, MongoDB, Prisma ORM.
        </div>
        <div className="rounded-xl border border-white/10 bg-gradient-to-r from-[#0a0a0a] to-transparent p-5 shadow">
          <strong className="text-white">Tools & Testing:</strong> Vercel, Git, GitHub, Docker.
        </div>
        <div className="rounded-xl border border-white/10 bg-gradient-to-r from-[#0a0a0a] to-transparent p-5 shadow">
          <strong className="text-white">Programming Languages:</strong> JavaScript, TypeScript, SQL, C++, Python.
        </div>
        <div className="rounded-xl border border-white/10 bg-gradient-to-r from-[#0a0a0a] to-transparent p-5 shadow">
          <strong className="text-white">Soft Skills:</strong> Debugging, Technical Documentation, Cross-Team Collaboration, Task Prioritization.
        </div>
      </div>
    </section>
  );
};

export default Skill;
