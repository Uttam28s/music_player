import Card from "../Component/SubComponent/Card";
import DiskImage from "../asset/disk.jpg";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useDispatch } from "react-redux";
import { addToFavourite, clearState, fetchPlayList } from "../store/playListReducer";
import {useEffect, useState } from 'react'
import type { AppDispatch } from '../store';

const data2 = [
  {
    artist: {
      avatar:
        "https://is3-ssl.mzstatic.com/image/thumb/Features124/v4/4e/0d/1f/4e0d1ff5-9f2e-0170-0ec9-3dbe25f3a471/pr_source.png/800x800bb.jpg",
      name: "Billie Myers",
      verified: false,
      weburl: "https://music.apple.com/us/artist/billie-myers/99951",
      adamid: "99951",
    },
  },
  {
    artist: {
      avatar:
        "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/a3/0f/07/a30f0744-d6a3-5e89-34c2-90db76b6b3c5/5054316029410_cover.jpg/800x800ac.jpg",
      name: "Kiss The Rain",
      verified: false,
      weburl: "https://music.apple.com/us/artist/kiss-the-rain/881889878",
      adamid: "881889878",
    },
  },
  {
    artist: {
      avatar:
        "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/3f/84/4e/3f844e97-8c23-b64d-87f1-d536e99f80e9/mzl.rsxdpqqq.jpg/800x800bb.jpg",
      name: "Yiruma",
      verified: false,
      weburl: "https://music.apple.com/us/artist/yiruma/73406786",
      adamid: "73406786",
    },
  },
];

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3];
const HomeSection = () => {
  const [favourite, setFavourite] = useState([])
  const [dataReccomad, setRecommandedData] = useState([])
  const dispatch: AppDispatch = useDispatch();
  const favouriteList = useSelector((state : RootState) => state.playList.favourite);
  const list = useSelector((state : RootState) => state.playList.list);

  useEffect(() => {
      let data = localStorage.getItem('favourite_music')
      // dispatch(fetchPlayList())
      if(data){
        setFavourite(JSON.parse(data))  
      }

  },[])

  useEffect(() => {
    setRecommandedData(list?.tracks)
    console.log("🚀 ~ file: home.tsx:63 ~ useEffect ~ list:", list)
  },[list])

  return (
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
          return <Card ele={ele} image={ele?.images?.background} name={ele?.title} />;
        })}
      </div>
      <h3 className="my-5 title">User Favourite Music</h3>
      <div className="d-flex" style={{ marginLeft: "30px" }}>
        {favouriteList.map((ele: any) => {
          return <Card ele={ele} image={ele?.artist?.avatar} name={ele?.artist?.name} />;
        })}
      </div>
    </section>
  );
};

export default HomeSection;
