
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "../components/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/card";
import { Input } from "../components/input";
import { Music, Search, ArrowLeft, Calendar, MapPin } from "lucide-react";

const mockSearchResults = [
    {
      id: "1",
      artist: "Radiohead",
      venue: "Royal Albert Hall",
      city: "London",
      date: "2024-05-01",
      setlistPreview: ["Paranoid Android", "Karma Police", "Idioteque"],
    },
    {
      id: "2",
      artist: "Tame Impala",
      venue: "Hollywood Bowl",
      city: "Los Angeles",
      date: "2024-06-15",
      setlistPreview: ["Let It Happen", "The Less I Know The Better", "Elephant"],
    },
  ];
  
const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const query = searchParams.get("q") || "";

  useEffect(() => {
    setSearchTerm(query);
  
    if (query) {
      const filtered = mockSearchResults.filter(result =>
        result.artist.toLowerCase().includes(query.toLowerCase()) ||
        result.venue.toLowerCase().includes(query.toLowerCase()) ||
        result.city.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query]);
  
  
  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  const viewSetlist = (concertId) => {
    navigate(`/setlist/${concertId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <nav className="flex justify-between items-center p-6 border-b border-white/10">
        <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="text-white hover:bg-white/10 text-lg px-4 py-3"
        >
            <ArrowLeft className="h-6 w-6 mr-2" />
            <span className="text-2xl font-semibold">Back</span>
        </Button>

        <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="text-white hover:bg-white/10 text-lg px-4 py-3"
        >
        <span className="text-2xl font-semibold">Home</span>
        </Button>
    </nav>
      <div className="p-6">
        <div className="max-w-6xl mx-auto">
          {/* Search Section */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search artist, venue, or city..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:border-green-400 focus:ring-green-400"
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />
                </div>
                <Button 
                  onClick={handleSearch}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-2"
                >
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              Search Results for "{query}"
            </h2>
            <p className="text-gray-300">
              Found {results.length} concert{results.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((concert) => (
              <Card key={concert.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{concert.artist}</CardTitle>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{concert.venue}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{concert.date} • {concert.city}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-green-400 text-sm font-semibold mb-2">Preview:</p>
                    <div className="text-gray-300 text-sm">
                      {concert.setlistPreview.join(" • ")}
                    </div>
                  </div>
                  <Button 
                    onClick={() => viewSetlist(concert.id)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                  >
                    View Full Setlist
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {results.length === 0 && query && (
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-12 text-center">
                <Music className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                <p className="text-gray-300">
                  Try searching for a different artist, venue, or city
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;