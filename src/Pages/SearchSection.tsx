import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import HomeLayout from "../Component/HomeLayout";
import Card from "../Component/SubComponent/Card";
import type { AppDispatch, RootState } from "../store";
import { fetchSearchList } from "../store/playListReducer";

const trackData1 = [
  {
    track: {
      layout: "5",
      type: "MUSIC",
      key: "20066955",
      title: "Kiss the Rain",
      subtitle: "Billie Myers",
      share: {
        subject: "Kiss the Rain - Billie Myers",
        text: "I used Shazam to discover Kiss the Rain by Billie Myers.",
        href: "https://www.shazam.com/track/20066955/kiss-the-rain",
        image:
          "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/02/74/5a/02745ac2-cbfb-a90a-b970-7449be5d4c42/06UMGIM10734.rgb.jpg/400x400cc.jpg",
        twitter: "I used @Shazam to discover Kiss the Rain by Billie Myers.",
        html: "https://www.shazam.com/snippets/email-share/20066955?lang=en-US&country=US",
        avatar:
          "https://is5-ssl.mzstatic.com/image/thumb/Features124/v4/4e/0d/1f/4e0d1ff5-9f2e-0170-0ec9-3dbe25f3a471/pr_source.png/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/20066955",
      },
      images: {
        background:
          "https://is5-ssl.mzstatic.com/image/thumb/Features124/v4/4e/0d/1f/4e0d1ff5-9f2e-0170-0ec9-3dbe25f3a471/pr_source.png/800x800cc.jpg",
        coverart:
          "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/02/74/5a/02745ac2-cbfb-a90a-b970-7449be5d4c42/06UMGIM10734.rgb.jpg/400x400cc.jpg",
        coverarthq:
          "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/02/74/5a/02745ac2-cbfb-a90a-b970-7449be5d4c42/06UMGIM10734.rgb.jpg/400x400cc.jpg",
        joecolor: "b:fffffdp:0b0a08s:313029t:3c3b39q:5a5954",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/ios/v5/applemusic_{scalefactor}.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1444027955",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a7/44/d7/a744d7c6-d06c-17a2-ad19-cd01b46a8cbd/mzaf_8512763237108905867.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/kiss-the-rain/1444027943?i=1444027955&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/kiss-the-rain/1444027943?i=1444027955&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/ios/v5/overflow-open-option_{scalefactor}.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/ios/v5/applemusic-overflow_{scalefactor}.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
          {
            caption: "BUY",
            actions: [
              {
                type: "uri",
                uri: "https://itunes.apple.com/us/album/kiss-the-rain/1444027943?i=1444027955&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=itunes&itsct=Shazam_ios",
              },
            ],
            beacondata: {
              type: "buy",
              providername: "itunes",
            },
            image:
              "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
            type: "buy",
            listcaption: "Buy on iTunes",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
            colouroverflowimage: false,
            providername: "itunes",
          },
        ],
        providers: [
          {
            caption: "Open in Spotify",
            images: {
              overflow:
                "https://images.shazam.com/static/icons/hub/ios/v5/spotify-overflow_{scalefactor}.png",
              default:
                "https://images.shazam.com/static/icons/hub/ios/v5/spotify_{scalefactor}.png",
            },
            actions: [
              {
                name: "hub:spotify:searchdeeplink",
                type: "uri",
                uri: "spotify:search:Kiss%20the%20Rain%20Billie%20Myers",
              },
            ],
            type: "SPOTIFY",
          },
          {
            caption: "Open in Deezer",
            images: {
              overflow:
                "https://images.shazam.com/static/icons/hub/ios/v5/deezer-overflow_{scalefactor}.png",
              default:
                "https://images.shazam.com/static/icons/hub/ios/v5/deezer_{scalefactor}.png",
            },
            actions: [
              {
                name: "hub:deezer:searchdeeplink",
                type: "uri",
                uri: "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Kiss+the+Rain%27%20artist%3A%27Billie+Myers%27%7D",
              },
            ],
            type: "DEEZER",
          },
        ],
        explicit: false,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          id: "42",
          adamid: "99951",
        },
      ],
      url: "https://www.shazam.com/track/20066955/kiss-the-rain",
    },
    snippet: "Kiss the rain (Kiss the rain)",
  },
  {
    track: {
      layout: "5",
      type: "MUSIC",
      key: "40099833",
      title: "Kiss The Rain",
      subtitle: "Yiruma",
      share: {
        subject: "Kiss The Rain - Yiruma",
        text: "I used Shazam to discover Kiss The Rain by Yiruma.",
        href: "https://www.shazam.com/track/40099833/kiss-the-rain",
        image:
          "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/0a/d1/e8/0ad1e89c-df29-a43e-9852-eb6ece2dd556/21UMGIM24785.rgb.jpg/400x400cc.jpg",
        twitter: "I used @Shazam to discover Kiss The Rain by Yiruma.",
        html: "https://www.shazam.com/snippets/email-share/40099833?lang=en-US&country=US",
        avatar:
          "https://is4-ssl.mzstatic.com/image/thumb/Features115/v4/3f/84/4e/3f844e97-8c23-b64d-87f1-d536e99f80e9/mzl.rsxdpqqq.jpg/800x800cc.jpg",
        snapchat: "https://www.shazam.com/partner/sc/track/40099833",
      },
      images: {
        background:
          "https://is4-ssl.mzstatic.com/image/thumb/Features115/v4/3f/84/4e/3f844e97-8c23-b64d-87f1-d536e99f80e9/mzl.rsxdpqqq.jpg/800x800cc.jpg",
        coverart:
          "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/0a/d1/e8/0ad1e89c-df29-a43e-9852-eb6ece2dd556/21UMGIM24785.rgb.jpg/400x400cc.jpg",
        coverarthq:
          "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/0a/d1/e8/0ad1e89c-df29-a43e-9852-eb6ece2dd556/21UMGIM24785.rgb.jpg/400x400cc.jpg",
        joecolor: "b:0f1513p:f6f1ees:d7d6d1t:c7c5c2q:afafab",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/ios/v5/applemusic_{scalefactor}.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "1576663126",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/b5/71/fd/b571fdea-62b9-64e8-1531-3d845cf6ee58/mzaf_8999534599011571502.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/kiss-the-rain/1576662868?i=1576663126&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/kiss-the-rain/1576662868?i=1576663126&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/ios/v5/overflow-open-option_{scalefactor}.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/ios/v5/applemusic-overflow_{scalefactor}.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
          {
            caption: "BUY",
            actions: [
              {
                type: "uri",
                uri: "https://itunes.apple.com/us/album/kiss-the-rain/1576662868?i=1576663126&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=itunes&itsct=Shazam_ios",
              },
            ],
            beacondata: {
              type: "buy",
              providername: "itunes",
            },
            image:
              "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
            type: "buy",
            listcaption: "Buy on iTunes",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
            colouroverflowimage: false,
            providername: "itunes",
          },
        ],
        providers: [
          {
            caption: "Open in Spotify",
            images: {
              overflow:
                "https://images.shazam.com/static/icons/hub/ios/v5/spotify-overflow_{scalefactor}.png",
              default:
                "https://images.shazam.com/static/icons/hub/ios/v5/spotify_{scalefactor}.png",
            },
            actions: [
              {
                name: "hub:spotify:searchdeeplink",
                type: "uri",
                uri: "spotify:search:Kiss%20The%20Rain%20Yiruma",
              },
            ],
            type: "SPOTIFY",
          },
          {
            caption: "Open in Deezer",
            images: {
              overflow:
                "https://images.shazam.com/static/icons/hub/ios/v5/deezer-overflow_{scalefactor}.png",
              default:
                "https://images.shazam.com/static/icons/hub/ios/v5/deezer_{scalefactor}.png",
            },
            actions: [
              {
                name: "hub:deezer:searchdeeplink",
                type: "uri",
                uri: "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Kiss+The+Rain%27%20artist%3A%27Yiruma%27%7D",
              },
            ],
            type: "DEEZER",
          },
        ],
        explicit: false,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          id: "42",
          adamid: "73406786",
        },
      ],
      url: "https://www.shazam.com/track/40099833/kiss-the-rain",
    },
  },
  {
    track: {
      layout: "5",
      type: "MUSIC",
      key: "116727774",
      title: "Falling In the Sky",
      subtitle: "Kiss The Rain",
      share: {
        subject: "Falling In the Sky - Kiss The Rain",
        text: "I used Shazam to discover Falling In the Sky by Kiss The Rain.",
        href: "https://www.shazam.com/track/116727774/falling-in-the-sky",
        image:
          "https://is2-ssl.mzstatic.com/image/thumb/Music4/v4/ae/74/6f/ae746f79-c0e7-bd13-bdf0-a39cb5fefe12/5051813914621_cover.jpg/400x400cc.jpg",
        twitter:
          "I used @Shazam to discover Falling In the Sky by Kiss The Rain.",
        html: "https://www.shazam.com/snippets/email-share/116727774?lang=en-US&country=US",
        snapchat: "https://www.shazam.com/partner/sc/track/116727774",
      },
      images: {
        background:
          "https://is2-ssl.mzstatic.com/image/thumb/Music4/v4/ae/74/6f/ae746f79-c0e7-bd13-bdf0-a39cb5fefe12/5051813914621_cover.jpg/400x400cc.jpg",
        coverart:
          "https://is2-ssl.mzstatic.com/image/thumb/Music4/v4/ae/74/6f/ae746f79-c0e7-bd13-bdf0-a39cb5fefe12/5051813914621_cover.jpg/400x400cc.jpg",
        coverarthq:
          "https://is2-ssl.mzstatic.com/image/thumb/Music4/v4/ae/74/6f/ae746f79-c0e7-bd13-bdf0-a39cb5fefe12/5051813914621_cover.jpg/400x400cc.jpg",
        joecolor: "b:fdf7ebp:0c0d10s:313230t:3c3c3bq:5a5955",
      },
      hub: {
        type: "APPLEMUSIC",
        image:
          "https://images.shazam.com/static/icons/hub/ios/v5/applemusic_{scalefactor}.png",
        actions: [
          {
            name: "apple",
            type: "applemusicplay",
            id: "881889881",
          },
          {
            name: "apple",
            type: "uri",
            uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/12/7a/d7/127ad718-2046-f2ca-26fd-98417504218c/mzaf_16992176741366153247.plus.aac.ep.m4a",
          },
        ],
        options: [
          {
            caption: "OPEN",
            actions: [
              {
                name: "hub:applemusic:deeplink",
                type: "applemusicopen",
                uri: "https://music.apple.com/us/album/falling-in-the-sky/881889861?i=881889881&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios",
              },
              {
                name: "hub:applemusic:deeplink",
                type: "uri",
                uri: "https://music.apple.com/us/album/falling-in-the-sky/881889861?i=881889881&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios",
              },
            ],
            beacondata: {
              type: "open",
              providername: "applemusic",
            },
            image:
              "https://images.shazam.com/static/icons/hub/ios/v5/overflow-open-option_{scalefactor}.png",
            type: "open",
            listcaption: "Open in Apple Music",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/ios/v5/applemusic-overflow_{scalefactor}.png",
            colouroverflowimage: false,
            providername: "applemusic",
          },
          {
            caption: "BUY",
            actions: [
              {
                type: "uri",
                uri: "https://itunes.apple.com/us/album/falling-in-the-sky/881889861?i=881889881&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=itunes&itsct=Shazam_ios",
              },
            ],
            beacondata: {
              type: "buy",
              providername: "itunes",
            },
            image:
              "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
            type: "buy",
            listcaption: "Buy on iTunes",
            overflowimage:
              "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
            colouroverflowimage: false,
            providername: "itunes",
          },
        ],
        providers: [
          {
            caption: "Open in Spotify",
            images: {
              overflow:
                "https://images.shazam.com/static/icons/hub/ios/v5/spotify-overflow_{scalefactor}.png",
              default:
                "https://images.shazam.com/static/icons/hub/ios/v5/spotify_{scalefactor}.png",
            },
            actions: [
              {
                name: "hub:spotify:searchdeeplink",
                type: "uri",
                uri: "spotify:search:Falling%20In%20the%20Sky%20Kiss%20The%20Rain",
              },
            ],
            type: "SPOTIFY",
          },
          {
            caption: "Open in Deezer",
            images: {
              overflow:
                "https://images.shazam.com/static/icons/hub/ios/v5/deezer-overflow_{scalefactor}.png",
              default:
                "https://images.shazam.com/static/icons/hub/ios/v5/deezer_{scalefactor}.png",
            },
            actions: [
              {
                name: "hub:deezer:searchdeeplink",
                type: "uri",
                uri: "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Falling+In+the+Sky%27%20artist%3A%27Kiss+The+Rain%27%7D",
              },
            ],
            type: "DEEZER",
          },
        ],
        explicit: false,
        displayname: "APPLE MUSIC",
      },
      artists: [
        {
          id: "42",
          adamid: "881889878",
        },
      ],
      url: "https://www.shazam.com/track/116727774/falling-in-the-sky",
    },
  },
];

const SearchSection = () => {
  const [searchText, setSearchText] = useState("kiss the rain");
  const [data, setdata] = useState([]);
  const dispatch: AppDispatch = useDispatch();
  const searchResult = useSelector(
    (state: RootState) => state.playList.searchResult
  );

  useEffect(() => {
    if(searchResult?.tracks?.hits){
      setdata(searchResult?.tracks?.hits);
    }
  }, [dispatch, searchResult]);

  return (
    <HomeLayout>
      <section id="searchSection" className="mx-5 my-3 mainBody">
        <div className="title">SearchSection</div>
        <div className="d-flex justify-content-between">
          <input
            className="searchbox mx-5 my-3 p-2 border  border-primary rounded"
            type="text"
            onChange={(e: any) => setSearchText(e.target.value)}
            placeholder="Search"
          />
          <button
            type="button"
            className="btn btn-outline-dark mx-5 my-3 p-2"
            onClick={() => dispatch(fetchSearchList({ term: searchText }))}
          >
            Search
          </button>
        </div>
        Result
        <div className="d-flex flex-wrap">
          {(data?.length === 0 ? trackData1:  data)?.map((ele: any) => {
            return (
              <Card
                ele={ele}
                image={ele?.track?.share?.image}
                name={ele?.track?.share?.subject}
              />
            );
          })}
        </div>
        {/* TrackData */}
        {/* <div className="d-flex">
       {
        trackData.map((ele:any) => {
          return <Card ele={ele} image={ele?.track?.share} name={ele?.track?.name}  /> 

        })
       }
      </div>
       */}
      </section>
    </HomeLayout>
  );
};

export default SearchSection;
