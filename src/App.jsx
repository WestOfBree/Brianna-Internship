import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";
import Author from "./pages/Author";
import ItemDetails from "./pages/ItemDetails";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [newItems, setNewItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      axios
        .get(
          "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems"
        )
        .then((response) => {
  
          setNewItems(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setIsLoading(false);
        });
    }, []);
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home newItems={newItems} isLoading={isLoading} />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/author/:authorId" element={<Author authorId={newItems.authorId} />} />
        <Route path="/item-details/:nftId" element={<ItemDetails newItems={newItems} isLoading={isLoading} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
