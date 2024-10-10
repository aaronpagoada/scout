import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-green-600">Scout</div>
          <nav className="flex space-x-4">
            <a href="/" className="text-gray-600 hover:text-green-600">Home</a>
            <a href="/trips" className="text-gray-600 hover:text-green-600">My Trips</a>
            <a href="/journal" className="text-gray-600 hover:text-green-600">Journal</a>
            <a href="/friends" className="text-gray-600 hover:text-green-600">Friends</a>
            <a href="/profile" className="text-gray-600 hover:text-green-600">Profile</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('https://yourimageurl.com')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
          <h1 className="text-white text-5xl font-bold mb-4">Adventure Awaits with Scout</h1>
          <p className="text-white text-lg mb-6">Plan, journal, and share your outdoor experiences.</p>
          <div className="flex space-x-4">
            <a href="/signup" className="bg-green-600 text-white px-4 py-2 rounded-lg">Get Started</a>
            <a href="/features" className="bg-white text-green-600 px-4 py-2 rounded-lg">Learn More</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why Scout?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img src="https://yourfeatureimageurl.com" alt="Trip Planning" className="mx-auto mb-4 h-24" />
            <h3 className="text-xl font-bold text-gray-800">Plan Your Adventures</h3>
            <p className="text-gray-600">Create detailed plans for your hiking, camping, or climbing trips.</p>
          </div>
          {/* Feature 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img src="https://yourfeatureimageurl.com" alt="Journal" className="mx-auto mb-4 h-24" />
            <h3 className="text-xl font-bold text-gray-800">Capture Your Experiences</h3>
            <p className="text-gray-600">Record memories and reflections in your personal outdoor journal.</p>
          </div>
          {/* Feature 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img src="https://yourfeatureimageurl.com" alt="Friends" className="mx-auto mb-4 h-24" />
            <h3 className="text-xl font-bold text-gray-800">Share with Friends</h3>
            <p className="text-gray-600">Let friends see your plans and share your experiences with them.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <p className="text-gray-600 italic">"Scout made planning my trip so easy! I love the journal feature."</p>
              <p className="text-gray-800 mt-4 font-bold">- Alex M.</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <p className="text-gray-600 italic">"I always share my hiking plans with friends now. It's a great app!"</p>
              <p className="text-gray-800 mt-4 font-bold">- Jordan P.</p>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <p className="text-gray-600 italic">"Scout helped me keep track of my outdoor adventures. Highly recommend!"</p>
              <p className="text-gray-800 mt-4 font-bold">- Taylor S.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-green-600 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Scout Today</h2>
          <p className="text-lg mb-6">Start planning your next adventure and journaling your experiences.</p>
          <a href="/signup" className="bg-white text-green-600 px-6 py-3 rounded-lg">Sign Up for Free</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Scout. All rights reserved.</p>
          <p className="text-gray-400">Explore more with Scout.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home