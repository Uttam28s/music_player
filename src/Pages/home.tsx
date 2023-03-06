import Card from "../Component/SubComponent/Card";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useDispatch } from "react-redux";
import {
  fetchPlayList,
} from "../store/playListReducer";
import { useEffect, useState } from "react";
import type { AppDispatch } from "../store";
import HomeLayout from "../Component/HomeLayout";
import { useKeycloak } from "@react-keycloak/web";

const HomeSection = () => {
  const { keycloak } = useKeycloak();
  const [dataReccomad, setRecommandedData] = useState([]);
  const dispatch: AppDispatch = useDispatch();
  const list = useSelector((state: RootState) => state.playList.list);

  useEffect(() => {
    dispatch(fetchPlayList())
  }, [dispatch]);

  useEffect(() => {
    setRecommandedData(list?.tracks);
  }, [list?.tracks]);

  return (
    <HomeLayout>
      <section id="home" className="mx-5 my-3 mainBody">
        <div className="d-flex justify-content-between">
          <h3 className="title">User PlayList</h3>
          <div className="d-flex w-100px">
            <h6 className="mx-3">Prev</h6>
            <h6>Next</h6>
          </div>
        </div>
        <div className="d-flex flex-wrap" style={{ marginLeft: "30px" }}>
          {dataReccomad?.slice(0, 8).map((ele: any, index: any) => {
            return (
              <Card
                ele={ele}
                image={ele?.images?.background}
                name={ele?.title}
              />
            );
          })}
        </div>
       
        {keycloak && !keycloak.authenticated && (
          <button
            type="button"
            className="text-blue-800"
            onClick={() => keycloak.login()}
          >
            Login
          </button>
        )}
      </section>
    </HomeLayout>
  );  
};

export default HomeSection;
