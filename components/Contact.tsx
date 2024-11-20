'use client';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 flex items-center justify-center">
      <div className="p-8 bg-white shadow-md rounded-md max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-blue-800 text-center">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">
              Message:
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
