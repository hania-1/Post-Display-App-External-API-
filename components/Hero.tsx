const Hero = () => {
    return (
      <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 w-full h-[40rem] flex flex-col items-center justify-center px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Explore the Universe of Knowledge
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl m-10">
          Dive into a curated collection of articles that inform, entertain, and
          inspire. Lets make learning exciting and engaging!
        </p>
        <div className="mt-8">
          <button className="px-8 py-4 bg-purple-600 text-white rounded-lg text-lg font-medium hover:bg-purple-700 transition">
            Get Started
          </button>
        </div>
      </div>
    );
  };
  
  export default Hero;
  