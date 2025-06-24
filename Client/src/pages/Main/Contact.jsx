import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* IMAGE SECTION */}
      <div className="md:w-1/2 w-full">
        <img
          src="https://images.unsplash.com/photo-1525186402429-b4ff38bedec6"
          alt="Contact Us"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* FORM SECTION */}
      <div className="md:w-1/2 w-full">
        <h1 className="text-4xl font-bold text-green-400 mb-6">Contact Us</h1>
        <p className="text-gray-400 mb-6">
          Have a question, suggestion, or just want to say hi? We'd love to hear from you.
        </p>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
          <button
            type="submit"
            className="bg-green-400 hover:bg-transparent hover:text-white hover:border hover:border-green-400 transition-all duration-200 text-gray-900 font-semibold py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
