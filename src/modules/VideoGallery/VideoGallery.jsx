import React from "react";
import styles from "./Gallery.module.scss";
import Masonry from "react-masonry-css";
import Link from "next/link";
const breakpointColumnsObj = {
  default: 3,
  3000: 3,
  2000: 3,
  1200: 2,
  1000: 2,
  500: 1,
};
// interface ImageObject {
//   id: number;
//   width: number;
//   height: number;
//   urls: { large: string; regular: string; raw: string; small: string };
//   color: string | null;
//   user: {
//     username: string;
//     name: string;
//   };
// }

// eslint-disable-next-line react/prop-types
function VideoGallery({ data }) {
  // console.log(data.videos);
  // data.videos[0].video_files.map((i) => console.log(i));

  //   const [galleryImage, setGalleryImage] = useState([]);
  //   useEffect(() => {
  //     fetch(
  //       "https://api.unsplash.com/photos/?query=cars&per_page=30&client_id=_KTrCuRqtCtKC5eW6WzAfEVcstyEU8_IIu9VjHMidjg"
  //     )
  //       .then((response) => response.json())
  //       // 4. Setting *dogImage* to the image url that we received from the response above
  //       .then((data) => {
  //         // console.log(data);
  //         setGalleryImage(data);
  //         console.log(data);
  //       });

  //     console.log(galleryImage);
  //   }, []);

  // function instanceOfVideoObject(data: any): data is VideoObject {
  //   return "videos" in data;
  // }
  // function instanceOfImageObject(data: any): data is ImageObject {
  //   return "videos" in data;
  // }

  return (
    <div className={styles.gallery}>
      <Masonry
        className={styles.masonry}
        breakpointCols={breakpointColumnsObj}
        columnClassName={styles.masonryColumn}
      >
        {data.videos.map((video) => (
          <Link key={video.id} href={`/video-page/${video.id}`}>
            <video src={video.video_files[0].link} />
          </Link>
        ))}
        {/* <video src="/assets/videos/test.mp4" />
        <video src="/assets/videos/test2.mp4" />
        <video src="/assets/videos/test3.mp4" />
        <video src="/assets/videos/full video.mp4" />
        <video src="/assets/videos/test2.mp4" />
        <video src="/assets/videos/test3.mp4" />
        <video src="/assets/videos/test.mp4" />
        <video src="/assets/videos/full video.mp4" />
        <video src="/assets/videos/test2.mp4" />
        <video src="/assets/videos/test3.mp4" />
        <video src="https://www.pexels.com/video/smiling-woman-looking-to-the-side-7298666/" /> */}
      </Masonry>
    </div>
  );
}

export default VideoGallery;
