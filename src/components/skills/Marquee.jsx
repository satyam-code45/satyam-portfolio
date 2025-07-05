import { twMerge } from "tailwind-merge";
import { Marquee } from "../magicui/marquee";
import { mySkills } from "@/constants/skills";


const firstRow = mySkills.slice(0, mySkills.length / 2);
const secondRow = mySkills.slice(mySkills.length / 2);

const ReviewCard = ({
    img,
    name
}) => {
    return (
        <figure
            className={twMerge(
                "relative h-full w-fit cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-2xl">
                        {name}
                    </figcaption>
                </div>
            </div>
        </figure>
    );
};

export function MarqueeDemo() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            {/* Left fade - only on medium and up */}
            <div className="pointer-events-none absolute inset-y-0 left-0 hidden md:block w-[40%] bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>

            {/* Right fade - only on medium and up */}
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden md:block w-[40%] bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>



        </div>
    );
}
