import React, { useEffect, useState } from "react";
import "./App.css";
import HomeLayout from "./Component/HomeLayout";
import FavouriteSection from "./Pages/FavouriteSection";
import HomeSection from "./Pages/home";
import SearchSection from "./Pages/SearchSection";
import "bootstrap/dist/css/bootstrap.min.css";
import PlaylistSection from "./Pages/PlaylistSection";
// import { getSongList } from './store/playlist/action';
import { Provider } from "react-redux";
import { store } from "./store";
import Test from "./test";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/Login";

export const SideMenu = [
  {
    key: "home",
    title: "Home",
  },
  {
    key: "searchSection",
    title: "Search",
  },
  {
    key: "favouriteSection",
    title: "Favourites",
  },
  {
    key: "playlistSection",
    title: "Playlists",
  },
];

function App() {
  const [section, setSection] = useState("home");
  // useEffect(() => {
  //   let response = getSongList()
  //   console.log("🚀 ~ file: App.tsx:33 ~ useEffect ~ response:", response)
  // },[])
  return (
    <Provider store={store}>
      <Router>
        <Routes>
        <Route path="/home" element={<div className="App">
              {/* <Test /> */}
              <header className="App-header">
                <HomeLayout list={SideMenu} setSection={setSection}>
                  {section === "home" && <HomeSection />}
                  {section === "searchSection" && <SearchSection />}
                  {section === "playlistSection" && <PlaylistSection />}
                  {section === "favouriteSection" && <FavouriteSection />}
                </HomeLayout>
              </header>
            </div>} />

          <Route path="/login" element={<LoginPage />} />
            
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
