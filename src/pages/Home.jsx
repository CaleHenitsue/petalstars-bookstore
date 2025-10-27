import React, { lazy, Suspense } from "react";
import BookCard from "../components/BookCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Home.css";

const Home = () => {
  const featuredBooks = [
    {
      id: 1,
      title: "Myanmar Fairy Princess",
      description:
        "A magical tale of courage and kindness from ancient Myanmar",
      price: "MMK 8,500",
      emoji: "🧚‍♀️",
      megaLink: "https://mega.nz/file/example1#samplekey1", // Replace with actual MEGA link
    },
    {
      id: 2,
      title: "The Golden Elephant",
      description: "An adventure through Myanmar's beautiful landscapes",
      price: "MMK 7,200",
      emoji: "🐘",
      megaLink: "https://mega.nz/file/example2#samplekey2", // Replace with actual MEGA link
    },
    {
      id: 3,
      title: "Temples & Tales",
      description: "Discover Myanmar's rich cultural heritage through stories",
      price: "MMK 9,800",
      emoji: "🏛️",
      megaLink: "https://mega.nz/file/example3#samplekey3", // Replace with actual MEGA link
    },
    {
      id: 4,
      title: "Magical Pagoda Stories",
      description: "Enchanting stories from Myanmar's sacred pagodas",
      price: "MMK 6,800",
      emoji: "⛩️",
      megaLink: null, // No download available yet
    },
    {
      id: 5,
      title: "Dragon Boat Adventures",
      description: "Exciting water adventures on Myanmar's rivers",
      price: "MMK 7,500",
      emoji: "🐉",
      megaLink: "https://mega.nz/file/example5#samplekey5", // Replace with actual MEGA link
    },
    {
      id: 6,
      title: "Festival of Lights",
      description: "Celebrate Myanmar's beautiful festivals through stories",
      price: "MMK 8,200",
      emoji: "🏮",
      megaLink: "https://mega.nz/file/example6#samplekey6", // Replace with actual MEGA link
    },
  ];

  return (
    <div className="page-wrapper">
      <Header />
      <main className="content">
        <section
          id="home"
          className="gradient-bg petal-pattern min-h-screen flex items-center"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white/80 p-6 rounded-2xl shadow-lg">
                <div className="sparkle text-6xl mb-4 text-purple-800">✨</div>
                <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-800">
                  Dive into the Magic of{" "}
                  <span className="text-yellow-600">Myanmar</span>
                </h2>
                <p className="text-xl mb-8 text-gray-700">
                  Explore enchanting fairy tales, colorful picture books, and
                  fun activities for kids. Download eBooks instantly and spark
                  your child's imagination! 🌸📚
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                    Shop Now 🛒
                  </button>
                  <button className="border-2 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300">
                    Browse eBooks 📖
                  </button>
                </div>
              </div>
              <div className="floating">
                <div className="relative">
                  <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl p-6 text-white text-center">
                        <div className="text-4xl mb-2">📚</div>
                        <div className="font-bold">Fairy Tales</div>
                      </div>
                      <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 text-white text-center">
                        <div className="text-4xl mb-2">🎨</div>
                        <div className="font-bold">Picture Books</div>
                      </div>
                      <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-6 text-white text-center">
                        <div className="text-4xl mb-2">🎯</div>
                        <div className="font-bold">Activities</div>
                      </div>
                      <div className="bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl p-6 text-white text-center">
                        <div className="text-4xl mb-2">🏆</div>
                        <div className="font-bold">Award Winners</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="books" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">
                Featured Myanmar Stories
              </h3>
              <p className="text-xl text-gray-600">
                Discover our most beloved children's books - now with instant
                eBook downloads!
              </p>
            </div>
            <Suspense
              fallback={
                <div className="text-center py-20">Loading books...</div>
              }
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredBooks.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            </Suspense>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-bold text-gray-800 mb-6">
                  About PetalStars
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  At PetalStars Book Store, we're passionate about bringing
                  Myanmar's rich cultural heritage to children through
                  enchanting stories, colorful illustrations, and engaging
                  activities.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our carefully curated collection includes fairy tales, picture
                  books, activity books, and award-winning stories that spark
                  imagination and celebrate Myanmar's beautiful traditions.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">
                      500+
                    </div>
                    <div className="text-gray-600">Books Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">
                      10K+
                    </div>
                    <div className="text-gray-600">Happy Families</div>
                  </div>
                </div>
              </div>
              <div className="floating">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="text-4xl">📚</div>
                    <div className="text-4xl">🌸</div>
                    <div className="text-4xl">✨</div>
                    <div className="text-4xl">🎨</div>
                    <div className="text-4xl">🏛️</div>
                    <div className="text-4xl">🐘</div>
                    <div className="text-4xl">🧚‍♀️</div>
                    <div className="text-4xl">📖</div>
                    <div className="text-4xl">🌟</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="sparkle text-5xl mb-6">💌</div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Stay Updated with PetalStars!
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Get the latest Myanmar children's books, special offers, and
              magical stories delivered to your inbox.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
              />
              <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Subscribe Now 📧
              </button>
              <p className="text-sm text-gray-500 mt-4">
                10% off your first order when you subscribe!
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
