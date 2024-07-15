import React from "react";
import styles from "./css/galleryCard.module.css";
import Image from "next/image";
import dumyImg from "../../../../public/projectthublin/project-thumblin-1720522257857-International Day Against Drug Abuse-1.jpg";
export default function GalleryCard(props) {
  const { apiImages, deleteApiImage, dataFor } = props;
  console.log(apiImages);

  const handelDeleteApiImg = async (imageId) => {
    try {
      const res = await deleteApiImage(dataFor, { imageId });
      console.log(res);
    } catch (error) {}
  };
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card_titleBox}>
        <p>upload Image</p>
      </div>
      <div className={styles.card}>
        <div className={styles.card_body}>
          <div className={styles.imagesCard_wrapper}>
            {apiImages.map((el, index) => {
              return (
                <div className={styles.image_card}>
                  <Image
                    src={`/projectGalley/${el.url}`}
                    width={200}
                    height={200}
                    className={styles.img_style}
                  />
                  <div
                    className={styles.remove_iconBox}
                    onClick={() => handelDeleteApiImg(el._id)}
                  >
                    x{" "}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
