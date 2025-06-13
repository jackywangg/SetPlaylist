import { useState } from "react";
import { Music, Calendar, Users } from "lucide-react";

function LandingPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      console.log("Searching for:", searchTerm);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <nav className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">
          <Music className="h-10 w-10 text-green-400" />
          <h1 className="text-3xl font-bold">SetPlaylist</h1>
        </div>
        <button className="bg-green-500 px-10 py-4 rounded-full text-white">
          <hl className="text-1xl font-bold"> Login / Sign Up </hl>
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
          <input
            type="text"
            placeholder="Search artist or concert..."
            className="p-4 rounded-l-lg w-64 text-black placeholder-gray-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyUp={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="bg-green-500 px-7 py-5 rounded-r-lg text-white"
          >
            Search
          </button>
        </div>
      </div>

      {/* Feature Cards */}
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
    </div>
  );
}

export default LandingPage;


