import { useState } from "react"

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message:""
    })

    const handleChange = (e) =>{
        setFormData({...formData,[e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
        
    }

    return (
        <section className="relative flex items-center c-space section-spacing">
            <div
                className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary"
            >
                <div
                    className="flex flex-col items-start w-full gap-5 mb-10"
                >
                    <h2 className="text-heading">
                        Ready to Build Something Amazing?
                    </h2>
                    <p className="font-normal text-neutral-400">
                        Whether you need a brand-new website, a fresh redesign, or a bold idea brought to life — I’ve got your back.
                    </p>
                </div>
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="name" className="field-label">
                            Full Name
                            <span className="text-red-600">*</span>
                        </label>
                        <input 
                            id="name"
                            name="name"
                            type="text"
                            className="field-input field-input-focus"
                            placeholder="satyam"
                            required
                            autoComplete="name"
                            onChange={handleChange}
                            value={formData.name}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="field-label">
                            Email
                            <span className="text-red-600">*</span>
                        </label>
                        <input 
                            id="email"
                            name="email"
                            type="text"
                            className="field-input field-input-focus"
                            placeholder="abc@gmail.com"
                            required
                            autoComplete="email"
                            onChange={handleChange}
                            value={formData.email}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message" className="field-label">
                            Message
                            <span className="text-red-600">*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            type="text"
                            rows="4"
                            className="field-input field-input-focus"
                            placeholder="Message...."
                            required
                            autoComplete="message"
                            onChange={handleChange}
                            value={formData.message}
                        />
                    </div>
                    <button 
                        type="submit"
                        className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
                    >
                        Send
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact