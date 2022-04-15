import Image from "next/image";
import React from "react";
import styles from "../styles/Featured.module.css";

const Featured = () => {
  const images = [
    "/img/Featured.png",
    "/img/Featured2.png",
    "/img/Featured3.png",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer}>
        <Image src="/img/arrowl.png" alt="arrowleft" layout="fill" />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          {images.map((img, i) => (
            <Image
              src={img}
              key={i}
              alt="featured"
              layout="fill"
              objectFit="contain"
            />
          ))}
        </div>
      </div>
      <div className={styles.arrowContainer}>
        <Image src="/img/arrowr.png" alt="arrow" layout="fill" />
      </div>
    </div>
  );
};

export default Featured;
