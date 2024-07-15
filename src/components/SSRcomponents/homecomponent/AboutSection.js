import React from "react";
import styles from "./css/aboutsection.module.css";
import img from "../../../../public/web-statice-img/about us.webp";
import Image from "next/image";
import Link from "next/link";
export default function AboutSection() {
  return (
    <div className={styles.container}>
      <div className={styles.image_section}>
        <Image
          src={img}
          width={200}
          height={200}
          className={styles.imag_style}
        />
      </div>
      <div className={styles.contnet_section}>
        <h2>Imperial Service apartmnet In Gurgaon</h2>
        <div>
          <p className="content_md_text">
            There is always time for a bit of luxury in your life, and that is
            why Imperial Apartments have made it our mission to provide you with
            the most exclusive apartments for rent in Gurgaon. We offer homes
            with all the amenities and comforts you’d expect from any other
            five-star hotel. Our exquisite apartments have elegant interiors and
            are designed in so many different styles that you can find the
            perfect accommodation. There are many luxurious features to choose
            from, such as a fully-equipped kitchenette, living room with
            fireplace, designer bathroom and large balconies with stunning views
            over the city. Just step into one of our fabulous apartments, and
            you’ll immediately fall in love with it.
          </p>
        </div>
        <div className={styles.section_linkBtn}>
          <Link href={"#"} className="link_style">
            Read More...
          </Link>
        </div>
      </div>
    </div>
  );
}
