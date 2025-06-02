import { useState } from "react"
import { InteractiveHoverButton } from "../magicui/interactive-hover-button"
import ProjectCard from "./ProjectCard"

const Project = ({title, description, subDescription, live, github, image, tags,setPreview}) => {

    const [isHidden, setIsHidden] = useState(false)

    return (
        <>
            <div 
                className='flex-wrap items-center py-10 justify-between space-y-14 sm:flex sm:space-y-0'
                onMouseEnter={()=>setPreview(image)}
                onMouseLeave={()=>setPreview(null)}
            >
                <div>
                    <p className='text-2xl'>{title}</p>
                    <div className='flex gap-5 mt-2 text-sand'>
                        {tags.map((tag) => (
                            <span>{tag.name}</span>
                        ))}
                    </div>
                </div>
                <InteractiveHoverButton onClick={()=>setIsHidden(true)}>
                    Read More
                </InteractiveHoverButton>
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