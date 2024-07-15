import React from "react";
import styles from "./css/photoshowcase.module.css";
import Image from "next/image";
import largImg from "../../../../public/web-statice-img/squar image.jpg";
export default function PhotoShowCase(props) {
  const { container } = props;
  return (
    <div className={styles[container]}>
      <div className={styles.large_photo}>
        <Image
          src={largImg}
          width={500}
          height={300}
          className={styles.large_img_style}
        />
        <div className={styles.text_box}>
          <div className={styles.text_wrapper}>
            <h3>service apartmnet</h3>
            <p className="small_text">
              service apartment in gurgaon for long stay on budget price with
              complemnetery
            </p>
          </div>
        </div>
      </div>
      <div className={styles.photos_wrapper}>
        <div className={styles.small_photo_wrapper}>
          <div className={styles.small_photo}>
            <Image
              src={largImg}
              width={500}
              height={500}
              className={styles.large_img_style}
            />
            <div className={styles.text_box}>
              <div className={styles.text_wrapper}>
                <h3>service apartmnet</h3>
                <p className="small_text">
                  service apartment in gurgaon for long stay on budget price
                  with complemnetery
                </p>
              </div>
            </div>
          </div>
          <div className={styles.small_photo}>
            <Image
              src={largImg}
              width={500}
              height={500}
              className={styles.large_img_style}
            />
            <div className={styles.text_box}>
              <div className={styles.text_wrapper}>
                <h3>service apartmnet</h3>
                <p className="small_text">
                  service apartment in gurgaon for long stay on budget price
                  with complemnetery
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.small_photo_wrapper}>
          <div className={styles.small_photo}>
            <Image
              src={largImg}
              width={500}
              height={500}
              className={styles.large_img_style}
            />
            <div className={styles.text_box}>
              <div className={styles.text_wrapper}>
                <h3>service apartmnet</h3>
                <p className="small_text">
                  service apartment in gurgaon for long stay on budget price
                  with complemnetery
                </p>
              </div>
            </div>
          </div>
          <div className={styles.small_photo}>
            <Image
              src={largImg}
              width={500}
              height={500}
              className={styles.large_img_style}
            />
            <div className={styles.text_box}>
              <div className={styles.text_wrapper}>
                <h3>service apartmnet</h3>
                <p className="small_text">
                  service apartment in gurgaon for long stay on budget price
                  with complemnetery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
