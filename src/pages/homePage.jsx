// import React, { useRef, useState } from "react";
import React from "react";
// import Navbar from "../common/components/Navbar";
import NavbarLayout from "../common/components/NavbarLayout/NavbarLayout";
// import styles from "./homePage.module.scss";
// import ReactPlayer from "react-player";
// import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { createClient } from "pexels";
// import VideoGallery from "../modules/VideoGallery";
import ImageGallery from "../modules/ImageGallery";
// import * as labels from "../../labels.json";

export default function homePage({ images }) {
  // export default function homePage({ videos }) {
  //   let vidRef = useRef(null);

  //   handlePause = () => {
  //     console.log("onPause");
  //     this.setState({ playing: false });
  //   };
  //   handlePause = (e) => {
  //     this.setState({ seeking: false });
  //     this.player.seekTo(parseFloat(e.target.value));
  //   };

  //   labels.

  // const getTags = (time)=>{
  //  const allTags= labelObj.filter(label=>{
  //     label.miliseconds=== time;

  //     setTagArray(allTags);
  //   })

  // }

  // const metadata = videos.videos[0].video_files[3];

  return (
    <div>
      <NavbarLayout>
        {/* <VideoGallery data={images} /> */}
        {/* <VideoGallery data={videos} /> */}
        <ImageGallery data={images} />
      </NavbarLayout>
    </div>
  );
}

// export default homePage;

export async function getServerSideProps() {
  const client = createClient(`${process.env.API_KEY}`);

  // try {
  //   const videos = await client.videos.popular({ per_page: 20 });
  //   return { props: { videos } };
  // } catch (error) {
  //   console.log(error);
  // }

  try {
    const images = await client.photos.curated({ per_page: 30 });
    return { props: { images } };
  } catch (error) {
    console.log(error);
  }
}
