import {motion } from "motion/react"

const ProjectCard = ({ title, description, subDescription, live, github, image, tags, closeCard }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
      >
        <button
          onClick={closeCard}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <img src="/assets/close.svg" className="w-6 h-6" alt="Close" />
        </button>

        <img src={image} alt={title} className="w-full rounded-t-2xl" />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>

          {subDescription.map((subdec, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">
              {subdec}
            </p>
          ))}

          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3 flex-wrap">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>

            <div className="flex gap-4 mt-4 sm:mt-0">
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-white hover-animation"
              >
                View Live
                <img src="/assets/arrow-up.svg" className="size-4" alt="Live" />
              </a>

              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-white hover-animation"
              >
                Source Code
                <img src="/assets/websitelogos/github.png" className="size-6" alt="GitHub" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
