import React from "react";
import { useDispatch } from "react-redux";
import DiskImage from "../../asset/disk.jpg";
import { addToFavourite } from "../../store/playListReducer";

type Props = {
  image: string;
  name: string;
  ele: any;
};

const Card: React.FunctionComponent<Props> = ({ image, name, ele }) => {
  const dispatch = useDispatch();

  // const Card = ({data:any}) => {
  return (
    <div style={{ height: "230px", width: "150px", margin: "10px 20px" }}>
      <div
        className="border rounded position-relative"
        style={{ height: "150px", width: "150px" }}
      >
        <button
          type="button"
          data-toggle="tooltip"
          data-placement="right"
          title="Add to favourite"
          onClick={() => dispatch(addToFavourite(ele))}
          className="btn position-absolute"
          style={{ top: "-20px", left: "125px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#ffc107"
            className="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        </button>

        <img
          src={image || DiskImage}
          alt="disk"
          style={{ height: "150px", width: "150px" }}
        />
        <button
          type="button"
          className="btn btn-success position-absolute rounded-circle"
          style={{ top: "100px", left: "90px" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="black" className="bi bi-play-fill" viewBox="0 0 16 16">
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
          </svg>
        </button>
      </div>
      <h6 className="text-center py-3">{name}</h6>
    </div>
  );
};

export default Card;
