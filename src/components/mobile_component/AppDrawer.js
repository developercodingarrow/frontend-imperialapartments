import React from "react";
import styles from "./css/appdrawer.module.css";
import userImage from "../../../public/web-statice-img/dummy-user.png";
import Image from "next/image";
import Link from "next/link";
import { main_menu, feature_links } from "../../JsonData/pagelinks";
import {
  TiSocialFacebook,
  FaLinkedin,
  IoLogoInstagram,
  FaSquareXTwitter,
} from "../ApplicationIcon";

export default function AppDrawer() {
  return (
    <div className={styles.main_container}>
      <div className={styles.Drawer_header}>
        <div className={styles.user_profileBox}>
          <Image
            src={userImage}
            width={100}
            height={100}
            className={styles.user_imageStyle}
          />
        </div>
        <div>
          <div>Welcome</div>
          <div>
            <Link href={"/login"} className={styles.link_style}>
              Login you account
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.link_container}>
        <div className={styles.page_linksBox}>
          {main_menu.map((el, i) => {
            return (
              <Link href={"/"} className={styles.pageLink_style}>
                {el.name}
              </Link>
            );
          })}
        </div>

        <div className={styles.sortcut_linksBox}>
          <div className={styles.linkBox_sub_heading}>
            <h4>Feature Categories</h4>
          </div>
          <div className={styles.link_wrapper}>
            {feature_links.map((el, i) => {
              return (
                <Link href={"/"} className={styles.pageLink_style}>
                  {el.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div className={styles.Drawer_footer}>
          <div className={styles.social_mediaBox}>
            <div className={styles.page_linkHeading}>
              <h4>Follow our social meida</h4>
            </div>
            <div className={styles.social_mediaWrapper}>
              <div className={styles.social_linkBox}>
                <div className={styles.social_iconBox}>
                  <TiSocialFacebook />
                </div>
                <div className={styles.social_name}>Facbook</div>
              </div>
              <div className={styles.social_linkBox}>
                <div className={styles.social_iconBox}>
                  <FaLinkedin />
                </div>
                <div className={styles.social_name}>Linkedin</div>
              </div>
              <div className={styles.social_linkBox}>
                <div className={styles.social_iconBox}>
                  <IoLogoInstagram />
                </div>
                <div className={styles.social_name}>Instgram</div>
              </div>

              <div className={styles.social_linkBox}>
                <div className={styles.social_iconBox}>
                  <FaSquareXTwitter />
                </div>
                <div className={styles.social_name}>X</div>
              </div>
            </div>
          </div>
          <div className={styles.privacy_links}>
            <Link href={"/"}>privacy policy</Link>
            <Link href={"/"}>terms and conditions</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
