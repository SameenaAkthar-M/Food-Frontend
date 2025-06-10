import React from "react";

const ContactUs = () => {
  return (
    <div id="contact-us" className="px-4 sm:px-8 py-10">
      <h1 className="text-3xl font-bold text-center text-[#002244] mb-6">
        Contact Me
      </h1>
      <form
        action="https://formspree.io/f/mgvkawon"
        method="POST"
       className="max-w-md mx-auto p-6 sm:p-8 bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl flex flex-col gap-5 border-2 border-[#DC143C]"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-lg bg-white/80 focus:bg-white focus:outline-none focus:border-[#DC143C] focus:ring-2 focus:ring-[#DC143C]
 text-gray-900"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-lg bg-white/80 focus:bg-white focus:outline-none focus:border-[#DC143C] focus:ring-2 focus:ring-[#DC143C]
 text-gray-900"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="w-full p-3 rounded-lg bg-white/80 focus:bg-white focus:outline-none focus:border-[#DC143C] focus:ring-2 focus:ring-[#DC143C]
 text-gray-900 resize-none"
        ></textarea>
        <button
          type="submit"
          className="text-sm border-2 border-[#DC143C] px-4 py-2 rounded-3xl hover:bg-[#DC143C] hover:text-white font-semibold transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
