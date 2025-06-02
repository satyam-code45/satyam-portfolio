import { useState } from "react";
import { motion } from "motion/react";

const CopyEmail = () => {

    const [copied, setCopied] = useState(false);
    const email = "satyam45.dev@gamil.com";
    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 5000);
    }


    return (
        <motion.button
            onClick={copyToClipboard}
            whileHover={{y:-5}}
            whileTap={{scale:1.1}}
            className="realative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden">
            {copied ? (
                <p className="flex items-center justify-center gap-2">
                    <img
                        src="assets/copy-done.svg"
                        className="w-5"
                        alt="copyIcon"
                    />
                    Email has copied!
                </p>
            ) :
                (<p className="flex items-center justify-center gap-2">
                    <img
                        src="assets/copy.svg"
                        className="w-5"
                        alt="copyIcon"
                    />
                    Copy Email Address
                </p>)}
        </motion.button>
    )
}

export default CopyEmail