import HomeLayout from "../Component/HomeLayout";
import Card from "../Component/SubComponent/Card";
import { useEffect,useState } from 'react'
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
const FavoriteSection = () => {
  const dispatch: AppDispatch = useDispatch();
  const [favourite, setFavourite] = useState([])
  useEffect(() => {
    let data = localStorage.getItem("favourite_music");
    if (data) {
      setFavourite(JSON.parse(data));
    }
  }, [dispatch]);

  return (
    <HomeLayout>
      <section id="FavoriteSection" className="mx-5 my-3 mainBody">
        <div className="title">FavoriteSection</div>
        <div className="d-flex flex-wrap mt-3" style={{ marginLeft: "30px" }}>
          {favourite.map((ele: any) => {
            return (
              <Card
                ele={ele}
                image={ele?.share?.avatar || ele?.track?.share?.image}
                name={ele?.title || ele?.track?.title}
              />
            );
          })}
        </div>
      </section>
    </HomeLayout>
  );
};

export default FavoriteSection;
