import { useState } from "react"
import { RevealOnScroll } from "../RevealOnScroll"

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="min-h-screen flex items-center justify-center py-20 bg-gray-100 dark:bg-black">
            <RevealOnScroll>
                <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-500 dark:to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        Get In Touch
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded px-4 py-3 text-gray-800 dark:text-white transition focus:outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-blue-500/5"
                                placeholder="Name..."
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded px-4 py-3 text-gray-800 dark:text-white transition focus:outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-blue-500/5"
                                placeholder="example@gmail.com"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="relative">
              <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded px-4 py-3 text-gray-800 dark:text-white transition focus:outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-blue-500/5"
                  placeholder="Your Message..."
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 dark:bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </div>
    )
}

