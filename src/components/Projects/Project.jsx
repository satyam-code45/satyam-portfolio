import { useState } from "react"
import { InteractiveHoverButton } from "../magicui/interactive-hover-button"
import ProjectCard from "./ProjectCard"

const Project = ({title, description, subDescription, live, github, image, tags,setPreview}) => {

    const [isHidden, setIsHidden] = useState(false)

    return (
        <>
            <div 
                className='flex flex-col sm:flex-row items-start sm:items-center py-6 sm:py-10 justify-between gap-4 sm:gap-0'
                onMouseEnter={() => window.innerWidth >= 640 && setPreview(image)}
                onMouseLeave={() => window.innerWidth >= 640 && setPreview(null)}
            >
                <div className="w-full sm:w-auto">
                    <p className='text-xl sm:text-2xl'>{title}</p>
                    <div className='flex flex-wrap gap-3 sm:gap-5 mt-2 text-sand text-sm sm:text-base'>
                        {tags.map((tag) => (
                            <span key={tag.name}>{tag.name}</span>
                        ))}
                    </div>
                </div>
                <div className="w-full sm:w-auto">
                    <InteractiveHoverButton onClick={()=>setIsHidden(true)} className="w-full sm:w-auto">
                        Read More
                    </InteractiveHoverButton>
                </div>
            </div>
            <div className="bg-gradient-to-r from-transparent via-neutral-700 h-[1px] w-full" />

            {isHidden && (<ProjectCard 
                description={description}
                github={github}
                live={live}
                image={image}
                subDescription={subDescription}
                tags={tags}
                title={title}
                closeCard={() => setIsHidden(false)}
            />)}
        </>
    )
}

export default Project