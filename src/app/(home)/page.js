import React from "react";
import styles from "./homepage.module.css";
import BoxCard from "../../components/cards/BoxCard";
import higlightBanner from "../../../public/web-statice-img/higlight-banner.jpg";
import Image from "next/image";
import FeaturePost from "../../components/homepagesections/FeaturePost";
import FeatureCategories from "../../components/homepagesections/FeatureCategories";
import FeatureBlogs from "../../components/homepagesections/FeatureBlogs";
import ProjectBoxCard from "../../components/SSRcomponents/cards/ProjectBoxCard";
import PhotoShowCase from "../../components/SSRcomponents/static components/PhotoShowCase";
import AboutSection from "../../components/SSRcomponents/homecomponent/AboutSection";
import BlogCard from "../../components/SSRcomponents/cards/BlogCard";
import FaqCard from "../../components/SSRcomponents/homecomponent/FaqCard";
import { homepageFAQ } from "../../JsonData/faqData";
import InteractiveFaqCard from "../../components/clientComponents/elements/InteractiveFaqCard";

export default function HomePage() {
  console.log("page compoent");
  return (
    <div className={styles.container}>
      <section className={styles.section_wrapper}>
        <div className="section_heading_Wrapeer">
          <h2>Recommended Featured Listing to stay for your next trip! </h2>
        </div>
        <div className="section_card_wrapper">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, index) => {
            return <ProjectBoxCard key={index} />;
          })}
        </div>
      </section>

      <section className={styles.section_wrapper}>
        <div className="section_heading_Wrapeer">
          <h2>Stay at our top unique properties </h2>
        </div>
        <div className="bottom_space">
          <PhotoShowCase container="container" />
        </div>
        <div className="bottom_space">
          <PhotoShowCase container="reverse_container" />
        </div>
      </section>

      <section className={styles.section_wrapper}>
        <div className="section_heading_Wrapeer">
          <h2>About :- Imperial Apartmnets </h2>
        </div>
        <div className="bottom_space">
          <AboutSection />
        </div>
      </section>

      <section className={styles.section_wrapper}>
        <div className="section_heading_Wrapeer">
          <h2>Blogs :- Read the Latest updates </h2>
        </div>
        <div className="section_card_wrapper">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
            return <BlogCard />;
          })}
        </div>
      </section>

      <section className={styles.section_wrapper}>
        <InteractiveFaqCard faqs={homepageFAQ} />;
      </section>
    </div>
  );
}
