import React from "react";
import Header from "./Header";
import { Sidebar } from "./SideBar";

export const SideMenu = [
  {
    key: "home",
    title: "Home",
    url: "/home",
  },
  {
    key: "searchSection",
    title: "Search",
    url: "/search",
  },
  {
    key: "favoriteSection",
    title: "Favorites",
    url: "/favorites",
  },
  {
    key: "playlistSection",
    title: "Playlists",
    url: "/playlists",
  },
];

type Props = {
  children: any;
};

const HomeLayout: React.FunctionComponent<Props> = ({ children }) => {
  const handleScroll = (val: string) => {
    const element = document.getElementById(val);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="d-flex w-100">
      <Sidebar list={SideMenu} handleScroll={handleScroll} />
      <div className="w-100">
        <div style={{ height: "20%" }}>
          <Header />
        </div>
        <div style={{ height: "80%" }}>{children}</div>
      </div>
    </div>
  );
};

export default HomeLayout;
