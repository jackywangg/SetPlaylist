import { useState } from "react";
import { Music, Calendar, Users, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative">
      {/* Header */}
      <nav className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">
          <Music className="h-10 w-10 text-green-400" />
          <h1 className="text-3xl font-bold">SetPlaylist</h1>
        </div>
        <button
          onClick={() => setShowLoginModal(true)}
          className="bg-green-500 px-10 py-4 rounded-full text-white"
        >
          <span className="text-xl font-bold"> Login / Sign Up </span>
        </button>
      </nav>

      {/* Title */}
      <div className="text-center px-6 py-20">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Turn Concert <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Setlists</span><br />
          Into Playlists
        </h2>
        <p className="text-2xl text-gray-200 mb-14">
          Relive your favorite concerts by creating Spotify playlists from their setlists.
        </p>

        {/* Search Section */}
        <div className="flex justify-center">
          <div className="flex w-full max-w-md">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search artist or concert..."
                className="bg-white/10 border border-white/20 text-white placeholder-gray-400 pl-10 pr-4 py-3 rounded-l-lg w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyUp={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>
            <button
              onClick={handleSearch}
              className="bg-green-500 px-6 py-3 rounded-r-lg text-white hover:bg-green-600"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 pb-20 max-w-5xl mx-auto">
        <div className="bg-white/10 p-6 rounded-lg text-center backdrop-blur-md hover:bg-white/20 transition-all duration-300">
          <Music className="h-14 w-14 mx-auto text-green-400 mb-5" />
          <h3 className="text-2xl font-bold mb-2">Create Playlists</h3>
          <p className="text-gray-300">Turn concert setlists into personalized Spotify playlists.</p>
        </div>

        <div className="bg-white/10 p-6 rounded-lg text-center backdrop-blur-md hover:bg-white/20 transition-all duration-300">
          <Calendar className="h-14 w-14 mx-auto text-blue-400 mb-5" />
          <h3 className="text-2xl font-bold mb-2">Track Concerts</h3>
          <p className="text-gray-300">Keep a calendar of concerts and view setlists all in one place.</p>
        </div>

        <div className="bg-white/10 p-6 rounded-lg text-center hover:bg-white/20 transition-all duration-300">
          <Users className="h-14 w-14 mx-auto text-purple-400 mb-5" />
          <h3 className="text-2xl font-bold mb-2">Share & Discover</h3>
          <p className="text-gray-300">Share playlists and discover new music from other fans.</p>
        </div>
      </div>

      {/* Login / Signup Popup */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-lg relative text-black">
            <button
              onClick={() => setShowLoginModal(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center">Login / Sign Up</h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-6 border border-gray-300 rounded"
            />
            <button className="bg-green-500 text-white w-full py-3 rounded hover:bg-green-600">
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
