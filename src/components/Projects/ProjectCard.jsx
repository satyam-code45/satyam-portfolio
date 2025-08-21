import { motion } from "motion/react";

const ProjectCard = ({
  title,
  description,
  subDescription,
  live,
  github,
  image,
  tags,
  closeCard,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto backdrop-blur-sm p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 my-auto"
      >
        <button
          onClick={closeCard}
          className="absolute p-2 rounded-sm top-2 right-2 sm:top-5 sm:right-5 bg-midnight hover:bg-gray-500 z-10"
        >
          <img
            src="/assets/close.svg"
            className="w-4 h-4 sm:w-6 sm:h-6"
            alt="Close"
          />
        </button>

        {/* This is the line you need to change */}
        <img
          src={image}
          alt={title}
          className="w-full rounded-t-2xl hidden sm:block"
        />

        <div className="p-4 sm:p-5">
          <h5 className="mb-2 text-xl sm:text-2xl font-bold text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-neutral-400 text-sm sm:text-base">
            {description}
          </p>

          {subDescription.map((subdec, index) => (
            <p
              key={index}
              className="mb-3 font-normal text-neutral-400 text-sm sm:text-base"
            >
              {subdec}
            </p>
          ))}

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
            <div className="flex gap-2 sm:gap-3 flex-wrap">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg w-8 h-8 sm:w-10 sm:h-10 hover-animation"
                />
              ))}
            </div>

            <div className="flex gap-4 w-full sm:w-auto">
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1 font-medium text-white hover-animation text-sm sm:text-base bg-midnight/50 p-2 rounded-lg"
              >
                View Live
                <img
                  src="/assets/arrow-up.svg"
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  alt="Live"
                />
              </a>

              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1 font-medium text-white hover-animation text-sm sm:text-base bg-midnight/50 p-2 rounded-lg"
              >
                Source Code
                <img
                  src="/assets/websitelogos/github.png"
                  className="w-4 h-4 sm:w-6 sm:h-6"
                  alt="GitHub"
                />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
