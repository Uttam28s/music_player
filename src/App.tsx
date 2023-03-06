import "./App.css";
import FavoriteSection from "./Pages/FavouriteSection";
import HomeSection from "./Pages/home";
import SearchSection from "./Pages/SearchSection";
import "bootstrap/dist/css/bootstrap.min.css";
import PlaylistSection from "./Pages/PlaylistSection";
// import { getSongList } from "./store/playlist/action";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/Login";
import PrivateRoute from "./helpers/PrivateRoute";
import { useEffect } from "react";
// import { useKeycloak } from "@react-keycloak/web";

function App() {
  // const [section, setSection] = useState("home");
  useEffect(() => {
    // let response = getSongList();
    // console.log("🚀 ~ file: App.tsx:33 ~ useEffect ~ response:", response);
  }, []);
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <HomeSection />
                </PrivateRoute>
              }
            />
            <Route
              path="/search"
              element={
                <PrivateRoute>
                  <SearchSection />
                </PrivateRoute>
              }
            />
            <Route
              path="/playlists"
              element={
                <PrivateRoute>
                  <PlaylistSection />
                </PrivateRoute>
              }
            />
            <Route
              path="/favorites"
              element={
                <PrivateRoute>
                  <FavoriteSection />
                </PrivateRoute>
              }
            />
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </Router>
      </Provider>
    </ReactKeycloakProvider>
  );
}

export default App;
