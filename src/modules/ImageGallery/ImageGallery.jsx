import React from "react";
import styles from "./Gallery.module.scss";
import Masonry from "react-masonry-css";
// import Pegg from "../Pegg";
const breakpointColumnsObj = {
  default: 3,
  3000: 3,
  2000: 3,
  1200: 2,
  1000: 2,
  500: 1,
};

function ImageGallery({ data }) {
  return (
    <div className={styles.gallery}>
      {/* <Pegg /> */}
      <Masonry
        className={styles.masonry}
        breakpointCols={breakpointColumnsObj}
        columnClassName={styles.masonryColumn}
      >
        {data.photos.map((image) => (
          <img src={image.src.large} alt="" key={image.src.medium} />
        ))}
      </Masonry>
    </div>
  );
}

export default ImageGallery;
