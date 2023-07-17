import React, { useState, useEffect } from "react";
import SearchBar from "../src/components/SearchBar";
import SearchTabs from "../src/components/SearchTabs";
import Cards from "../src/components/Cards";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTab, setSearchTab] = useState("all");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Simulate fetching search results from an API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/${searchTab}`
        );
        const data = await response.json();
        console.log('Data fetched:', data);
        setSearchResults(Array.isArray(data) ? data : []);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [searchTab, searchQuery]);

  console.log('Search results:', searchResults);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSearchTab("all");
  };

  const handleTabChange = (tab) => {
    setSearchTab(tab);
  };

  const filteredResults =
    searchTab === "all"
      ? searchResults.filter(
          (item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : searchResults.filter(
          (item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
            item.type === searchTab
        );

  return (
    <div>
      <h1>hello world!</h1>
      <SearchBar onSearch={handleSearch} />
      <SearchTabs activeTab={searchTab} onTabChange={handleTabChange} />
      <Cards data={filteredResults} />
    </div>
  );
}

export default App;
