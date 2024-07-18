import Navbar from "./Navbar/Navbar";
import Navbar_second from "./Navbar/Navbar_second";
import emailjs from "@emailjs/browser";
import React, { useState, useEffect } from "react";


const Contact = () => {

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [msg, setMsg] = useState("");

    useEffect(() => {
        emailjs.init("P8dGm3IeIYRGmEEx3");
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send form data via EmailJS
        emailjs
            .sendForm("service_vfjt0xw", "template_oc2xozk", e.target)
            .then(
                () => {
                    setMsg("Email Sent");
                    setFormState({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                    });
                },
                (error) => {
                    setMsg("Not Sent! Sign Up with EmailJS.");
                }
            );
    };

    return (

        <>
            <Navbar />
            <Navbar_second/>
            <section className="contact py-10">
                <div className="px-2 sm:px-6 lg:px-8" data-aos="zoom-in">
                    <div className="contact-heading-container mb-3">
                        <h2 className="font-open-sans text-[34px] font-bold text-center mt-5 text-black">
                            Contact Us
                        </h2>
                    </div>
                    <p className="text-black text-center">
                        For any further clarification, do not hesitate to contact us</p>
                </div>

                <div className="relative flex items-top mt-2 justify-center min-h-screen  sm:items-center sm:pt-0 w-11/12 m-auto" data-aos="zoom-in">
                    <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                        <div className="mt-5 overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
                                <div className="p-6 contact-text mr-2 bg-gray-100 dark:bg-white rounded-lg">
                                    <h1 className="text-3xl sm:text-3xl text-gray-800 dark:text-black text-center font-open-sans">
                                        Get in Touch
                                    </h1>
                                    <p className="text-center text-lg sm:text-xl font-medium text-gray-600 dark:text-black my-2">
                                        Fill in the form to start a conversation

                                    </p>
                                    <p className="mt-2 text-2xl text-SecondColor font-open-sans">Türkiye</p>
                                    <div className="flex items-center pb-5 mt-2 text-gray-600 dark:text-gray-400">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-black">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <div className="ml-4 text-md tracking-wide font-semibold">
                                            GÜZELYURT MAH. HARAMIDERE CAD. NO: 13 İÇ KAPI NO: 19 ESENYURT/ İSTANBUL 34488

                                        </div>
                                    </div>

                                    <div className="flex items-center pb-5  text-gray-600 dark:text-gray-400">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-black">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <div className="ml-4 text-md tracking-wide font-semibold" >
                                            +905446546062
                                        </div>
                                    </div>

                                    <div className="flex items-center pb-5  text-gray-600 dark:text-gray-400">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-black">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <div className="ml-4 text-md tracking-wide font-semibold ">
                                            sales@emtecheg.com
                                        </div>
                                    </div>


                                    {/* UAE */}
                                    <p className="mt-2 text-2xl text-SecondColor">UAE</p>
                                    <div className="flex items-center pb-5 mt-2 text-gray-600 dark:text-gray-400">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-black">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <div className="ml-4 text-md tracking-wide font-semibold">
                                            Business Center, SPC Free Zone, Sharjah, UAE, 73111
                                        </div>
                                    </div>

                                    <div className="flex items-center pb-5  text-gray-600 dark:text-gray-400">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-black">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <div className="ml-4 text-md tracking-wide font-semibold">
                                            +971506015463
                                        </div>
                                    </div>

                                    <div className="flex items-center pb-5  text-gray-600 dark:text-gray-400">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-black">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <div className="ml-4 text-md tracking-wide font-semibold ">
                                            sales@emtecheg.com
                                        </div>
                                    </div>
                                    {/* Egypt */}
                                    <p className="mt-2 text-2xl text-SecondColor">Egypt</p>
                                    <div className="flex items-center pb-5 mt-2 text-gray-600 dark:text-gray-400">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-black">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <div className="ml-4 text-md tracking-wide font-semibold">
                                            Office(9), Building (3), El Batraa Mall, 10th of Ramadan, 44635

                                        </div>
                                    </div>

                                    <div className="flex items-center pb-5  text-gray-600 dark:text-gray-400">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-black">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <div className="ml-4 text-md tracking-wide font-semibold ">

                                            +201110122012
                                        </div>
                                    </div>

                                    <div className="flex items-center pb-5  text-gray-600 dark:text-gray-400">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-black">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <div className="ml-4 text-md tracking-wide font-semibold ">
                                            sales@emtecheg.com
                                        </div>
                                    </div>

                                </div>
                                <form action="#" className="space-y-8 bg-white py-4 rounded-lg" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-black dark:text-black"> Full Name </label>
                                        <input type="text" id="name" name="name" value={formState.name}
                                            onChange={handleChange} className="shadow-sm navbar border border-gray-300 text-black text-sm rounded-lg focus:ring-SecondColor-500 focus:border-SecondColor-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-SecondColor-500 dark:focus:border-SecondColor-500 dark:shadow-sm-light" required />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-black dark:text-black"> Email Address </label>
                                        <input type="email" id="email" name="email" value={formState.email}
                                            onChange={handleChange} className="shadow-sm navbar border border-gray-300 text-black text-sm rounded-lg focus:ring-SecondColor-500 focus:border-SecondColor-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-SecondColor-500 dark:focus:border-SecondColor-500 dark:shadow-sm-light" placeholder="" required />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-black dark:text-black"> Phone </label>
                                        <input type="number" id="phone" name="phone" value={formState.phone}
                                            onChange={handleChange} className="shadow-sm navbar border border-gray-300 text-black text-sm rounded-lg focus:ring-SecondColor-500 focus:border-SecondColor-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-SecondColor-500 dark:focus:border-SecondColor-500 dark:shadow-sm-light" required />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"> Subject </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formState.subject}
                                            onChange={handleChange}
                                            className="block p-3 w-full navbar text-sm text-black  rounded-lg border border-gray-300"
                                            placeholder=""
                                            required />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                                            Message
                                        </label>
                                        <textarea id="message" rows="6" name="message" value={formState.message} required
                                            onChange={handleChange} className="block navbar p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300" placeholder=""></textarea>
                                    </div>
                                    <button type="submit" className="btn-form py-3 hvr-grow px-5 text-sm  bg-blue-500 font-medium text-center text-white rounded-lg  sm:w-fit">
                                        Send Message
                                    </button>
                                    <div className="form-message">{msg && <span>{msg}</span>}</div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact;
