'use client';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-400 flex items-center justify-center">
      <div className="p-8 bg-white shadow-md rounded-md max-w-3xl text-center">
        <h1 className="text-3xl font-bold mb-4 text-purple-800">About Us</h1>
        <p className="text-gray-700 text-lg leading-7">
          Welcome to our website! We are dedicated to providing the best
          services and content for our users. Our team works hard to ensure a
          smooth and enjoyable experience for everyone.
        </p>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2 text-purple-600">Our Mission</h2>
          <p className="text-gray-600">
            To empower individuals and organizations with tools and resources
            that inspire innovation and creativity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
