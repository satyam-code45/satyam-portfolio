import { mySocials } from "@/constants"

const Footer = () => {
    return (
        <secton className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
            <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

            <div className="flex items-center gap-2 text-sm text-neutral-500">
                <span>&copy; 2025 Satyam. All rights reserved.</span>
            </div>

            <div
                className="flex gap-3"
            >
                {mySocials.map((social, idx) => (
                    <a href={social.href} key={idx}>
                        <img src={social.icon} className="w-5 h-5" alt={social.name} />
                    </a>
                ))}
            </div>
        </secton>
    )
}

export default Footer