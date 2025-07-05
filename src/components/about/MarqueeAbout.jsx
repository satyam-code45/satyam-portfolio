import { Marquee } from "@/components/magicui/marquee";
import { mySkills } from "@/constants/skills";
import { twMerge } from "tailwind-merge";


const firstRow = mySkills.slice(0, mySkills.length / 2);
const secondRow = mySkills.slice(mySkills.length / 2);
const thirdRow = mySkills.slice(0, mySkills.length / 2);
const fourthRow = mySkills.slice(mySkills.length / 2);

const ReviewCard = ({ img, name }) => {
    return (
        <figure
            className={twMerge(
                "relative h-10 w-30 cursor-pointer overflow-hidden rounded-xl border p-2",
                "border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation"
            )}
        >
            <div className="flex flex-row items-center justify-center gap-2">
                <img className="rounded-full" width="16" height="16" alt={name} src={img} />
                <div className="flex flex-col">
                    <figcaption>{name}</figcaption>
                </div>
            </div>
        </figure>
    );
};

export default function Marquee3D() {
    return (
        <div className="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
            <div
                className="flex flex-row items-center gap-4"
                style={{
                    transform:
                        "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
                }}
            >
                <Marquee pauseOnHover vertical className="[--duration:20s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.name} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
                    {secondRow.map((review) => (
                        <ReviewCard key={review.name} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
                    {thirdRow.map((review) => (
                        <ReviewCard key={review.name} {...review} />
                    ))}
                </Marquee>
                <Marquee pauseOnHover className="[--duration:20s]" vertical>
                    {fourthRow.map((review) => (
                        <ReviewCard key={review.name} {...review} />
                    ))}
                </Marquee>
            </div>

            {/* Fade edges - match 2D style */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10"></div>
            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/90 to-transparent z-10"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>
        </div>
    );
}
