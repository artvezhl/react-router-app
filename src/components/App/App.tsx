import React, { useEffect, useState } from "react";
import "./App.css";
import { MainPage, NewsPage, NotFoundPage } from "../../Pages";
import { Routes, Route } from "react-router-dom";

function App() {
  const [newsPosts, setNewsPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((res) => res.json())
      .then((data) => setNewsPosts(data));
  }, []);

  return (
    <div className="container-fluid align-items-center p-2">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/news" element={<NewsPage news={newsPosts} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
