import React from "react";
import { Link } from "react-router-dom";

type Props = {
  list: Array<{ key: string; title: string; url: string }>;
  handleScroll: Function;
};

export const Sidebar: React.FC<Props> = ({ list, handleScroll }) => {
  return (
    <div
      className="min-vh-100 bg-secondary bg-gradient text-white"
      style={{ width: "15%", position: "static" }}
    >
      <div className="mt-5 d-flex align-items-center flex-column">
        {list.map((val) => (
          <Link
            to={val.url}
            className="my-3 text-decoration-none text-white"
            onClick={() => {
              handleScroll(val?.key);
            }}
          >
            {val.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
