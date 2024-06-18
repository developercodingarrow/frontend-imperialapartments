"use client";

import React, { useContext } from "react";
import styles from "./userlist.module.css";
import Image from "next/image";
import adminLogo from "../../../../../public/web-statice-img/dummy logo.png";
import Link from "next/link";
import { FaBars } from "../../../../components/ApplicationIcon";
import { AdminContext } from "../../../../contextApi/AdminContextApi";

export default function UserListPage() {
  const { asideDrawer, handelAsidDrawerToggle } = useContext(AdminContext);

  return (
    <div className={styles.man_container}>
      <div className={styles.inner_container}>
        <div
          className={`${styles.dashBoard_drawer} ${
            asideDrawer ? styles.drawer_open : styles.drawer_closed
          }`}
        >
          <div className={styles.drawer_header}>
            <Link href={"/"} className={styles.logo_link}>
              <Image src={adminLogo} width={800} className={styles.log_style} />
            </Link>
          </div>
        </div>

        <div
          className={`${styles.content_container} ${
            asideDrawer ? styles.container_open : styles.container_close
          }`}
        >
          <header
            className={`${styles.navbar_container} ${
              asideDrawer ? styles.navbar_open : styles.navbar_close
            }`}
          >
            <div className={styles.left_side}>
              <div
                className={styles.toggle_box}
                onClick={handelAsidDrawerToggle}
              >
                <FaBars />
              </div>
            </div>
            <div className={styles.right_side}>user</div>
          </header>
          <div className={styles.dashbord_layout_container}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse feugiat lobortis orci, in aliquam leo lobortis a.
              Donec imperdiet consectetur erat vel pretium. Maecenas accumsan
              convallis ultricies. Integer rhoncus, ipsum et mattis varius, erat
              arcu elementum ligula, at efficitur odio magna non nibh. Nulla
              facilisi. Nulla vulputate odio ut diam dignissim, quis malesuada
              orci dignissim. Nulla facilisi. Etiam venenatis lectus ipsum, nec
              volutpat dui lacinia tincidunt. Sed sed arcu mi. Donec porta
              vulputate felis, vitae congue diam convallis a. In eu luctus est.
              Aenean erat nunc, scelerisque in dapibus id, tempor et velit.
              Aenean interdum nibh at metus dignissim luctus. Quisque commodo,
              ipsum sed fermentum iaculis, ipsum leo faucibus felis, eu dictum
              risus tellus vel diam. Sed tristique tortor et felis ullamcorper
              blandit. Cras condimentum turpis ut ante ullamcorper sollicitudin.
              Aenean porta ipsum ante, sed mollis arcu vulputate sed.
              Pellentesque mollis lacinia augue. In sit amet vehicula tellus.
              Aliquam nulla arcu, efficitur vitae gravida vitae, pharetra non
              purus. Sed sem massa, fermentum ut efficitur ut, lobortis sit amet
              ante. Vivamus eget pulvinar dolor. Donec dapibus iaculis est at
              dignissim. Quisque dui tortor, placerat vel eleifend vel, maximus
              quis augue. Pellentesque rutrum tempus neque id posuere.
              Pellentesque cursus odio at vestibulum malesuada. In quis commodo
              est, ut pulvinar ligula. Mauris viverra, felis a eleifend aliquet,
              enim est suscipit libero, elementum mattis nibh nibh et orci.
              Etiam blandit vitae urna eu ornare. In sodales blandit aliquet.
              Duis aliquet, risus id consectetur lacinia, metus leo condimentum
              leo, eget dignissim augue velit vitae orci. Quisque mi elit,
              eleifend sit amet placerat auctor, pulvinar ac velit. Praesent
              quis tincidunt nisi. Integer rhoncus, mauris eu laoreet ultrices,
              dui lacus aliquam lectus, nec posuere orci lectus ac est. Aliquam
              et purus blandit, sagittis diam et, egestas nibh. Nulla volutpat
              lorem vestibulum fringilla porttitor. Proin nec massa nec ante
              malesuada malesuada ac vitae tortor. Mauris at massa ultricies
              sapien volutpat ullamcorper ac eget sapien. Phasellus leo risus,
              malesuada sit amet hendrerit non, elementum eu urna. Vestibulum
              tincidunt mollis vehicula. Vivamus tincidunt magna a massa
              condimentum hendrerit. Sed tellus velit, ultrices at vulputate ut,
              laoreet quis velit. Aenean porta arcu non urna eleifend, sed
              malesuada erat euismod. Pellentesque ut justo elit. Nullam rhoncus
              libero et nibh ultrices, eu lacinia nisl pellentesque. Nullam
              tincidunt luctus tempus. Cras lobortis libero ac ornare efficitur.
              Sed lobortis nibh nec eros hendrerit, id sollicitudin ante
              venenatis. Aliquam erat volutpat. Etiam venenatis scelerisque nunc
              vitae fermentum. Phasellus vitae lorem sit amet odio finibus
              volutpat. Cras molestie ante eu magna finibus accumsan. Etiam
              luctus diam eu ligula posuere luctus. Fusce et luctus lorem.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse feugiat lobortis orci, in aliquam leo lobortis a.
              Donec imperdiet consectetur erat vel pretium. Maecenas accumsan
              convallis ultricies. Integer rhoncus, ipsum et mattis varius, erat
              arcu elementum ligula, at efficitur odio magna non nibh. Nulla
              facilisi. Nulla vulputate odio ut diam dignissim, quis malesuada
              orci dignissim. Nulla facilisi. Etiam venenatis lectus ipsum, nec
              volutpat dui lacinia tincidunt. Sed sed arcu mi. Donec porta
              vulputate felis, vitae congue diam convallis a. In eu luctus est.
              Aenean erat nunc, scelerisque in dapibus id, tempor et velit.
              Aenean interdum nibh at metus dignissim luctus. Quisque commodo,
              ipsum sed fermentum iaculis, ipsum leo faucibus felis, eu dictum
              risus tellus vel diam. Sed tristique tortor et felis ullamcorper
              blandit. Cras condimentum turpis ut ante ullamcorper sollicitudin.
              Aenean porta ipsum ante, sed mollis arcu vulputate sed.
              Pellentesque mollis lacinia augue. In sit amet vehicula tellus.
              Aliquam nulla arcu, efficitur vitae gravida vitae, pharetra non
              purus. Sed sem massa, fermentum ut efficitur ut, lobortis sit amet
              ante. Vivamus eget pulvinar dolor. Donec dapibus iaculis est at
              dignissim. Quisque dui tortor, placerat vel eleifend vel, maximus
              quis augue. Pellentesque rutrum tempus neque id posuere.
              Pellentesque cursus odio at vestibulum malesuada. In quis commodo
              est, ut pulvinar ligula. Mauris viverra, felis a eleifend aliquet,
              enim est suscipit libero, elementum mattis nibh nibh et orci.
              Etiam blandit vitae urna eu ornare. In sodales blandit aliquet.
              Duis aliquet, risus id consectetur lacinia, metus leo condimentum
              leo, eget dignissim augue velit vitae orci. Quisque mi elit,
              eleifend sit amet placerat auctor, pulvinar ac velit. Praesent
              quis tincidunt nisi. Integer rhoncus, mauris eu laoreet ultrices,
              dui lacus aliquam lectus, nec posuere orci lectus ac est. Aliquam
              et purus blandit, sagittis diam et, egestas nibh. Nulla volutpat
              lorem vestibulum fringilla porttitor. Proin nec massa nec ante
              malesuada malesuada ac vitae tortor. Mauris at massa ultricies
              sapien volutpat ullamcorper ac eget sapien. Phasellus leo risus,
              malesuada sit amet hendrerit non, elementum eu urna. Vestibulum
              tincidunt mollis vehicula. Vivamus tincidunt magna a massa
              condimentum hendrerit. Sed tellus velit, ultrices at vulputate ut,
              laoreet quis velit. Aenean porta arcu non urna eleifend, sed
              malesuada erat euismod. Pellentesque ut justo elit. Nullam rhoncus
              libero et nibh ultrices, eu lacinia nisl pellentesque. Nullam
              tincidunt luctus tempus. Cras lobortis libero ac ornare efficitur.
              Sed lobortis nibh nec eros hendrerit, id sollicitudin ante
              venenatis. Aliquam erat volutpat. Etiam venenatis scelerisque nunc
              vitae fermentum. Phasellus vitae lorem sit amet odio finibus
              volutpat. Cras molestie ante eu magna finibus accumsan. Etiam
              luctus diam eu ligula posuere luctus. Fusce et luctus lorem.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse feugiat lobortis orci, in aliquam leo lobortis a.
              Donec imperdiet consectetur erat vel pretium. Maecenas accumsan
              convallis ultricies. Integer rhoncus, ipsum et mattis varius, erat
              arcu elementum ligula, at efficitur odio magna non nibh. Nulla
              facilisi. Nulla vulputate odio ut diam dignissim, quis malesuada
              orci dignissim. Nulla facilisi. Etiam venenatis lectus ipsum, nec
              volutpat dui lacinia tincidunt. Sed sed arcu mi. Donec porta
              vulputate felis, vitae congue diam convallis a. In eu luctus est.
              Aenean erat nunc, scelerisque in dapibus id, tempor et velit.
              Aenean interdum nibh at metus dignissim luctus. Quisque commodo,
              ipsum sed fermentum iaculis, ipsum leo faucibus felis, eu dictum
              risus tellus vel diam. Sed tristique tortor et felis ullamcorper
              blandit. Cras condimentum turpis ut ante ullamcorper sollicitudin.
              Aenean porta ipsum ante, sed mollis arcu vulputate sed.
              Pellentesque mollis lacinia augue. In sit amet vehicula tellus.
              Aliquam nulla arcu, efficitur vitae gravida vitae, pharetra non
              purus. Sed sem massa, fermentum ut efficitur ut, lobortis sit amet
              ante. Vivamus eget pulvinar dolor. Donec dapibus iaculis est at
              dignissim. Quisque dui tortor, placerat vel eleifend vel, maximus
              quis augue. Pellentesque rutrum tempus neque id posuere.
              Pellentesque cursus odio at vestibulum malesuada. In quis commodo
              est, ut pulvinar ligula. Mauris viverra, felis a eleifend aliquet,
              enim est suscipit libero, elementum mattis nibh nibh et orci.
              Etiam blandit vitae urna eu ornare. In sodales blandit aliquet.
              Duis aliquet, risus id consectetur lacinia, metus leo condimentum
              leo, eget dignissim augue velit vitae orci. Quisque mi elit,
              eleifend sit amet placerat auctor, pulvinar ac velit. Praesent
              quis tincidunt nisi. Integer rhoncus, mauris eu laoreet ultrices,
              dui lacus aliquam lectus, nec posuere orci lectus ac est. Aliquam
              et purus blandit, sagittis diam et, egestas nibh. Nulla volutpat
              lorem vestibulum fringilla porttitor. Proin nec massa nec ante
              malesuada malesuada ac vitae tortor. Mauris at massa ultricies
              sapien volutpat ullamcorper ac eget sapien. Phasellus leo risus,
              malesuada sit amet hendrerit non, elementum eu urna. Vestibulum
              tincidunt mollis vehicula. Vivamus tincidunt magna a massa
              condimentum hendrerit. Sed tellus velit, ultrices at vulputate ut,
              laoreet quis velit. Aenean porta arcu non urna eleifend, sed
              malesuada erat euismod. Pellentesque ut justo elit. Nullam rhoncus
              libero et nibh ultrices, eu lacinia nisl pellentesque. Nullam
              tincidunt luctus tempus. Cras lobortis libero ac ornare efficitur.
              Sed lobortis nibh nec eros hendrerit, id sollicitudin ante
              venenatis. Aliquam erat volutpat. Etiam venenatis scelerisque nunc
              vitae fermentum. Phasellus vitae lorem sit amet odio finibus
              volutpat. Cras molestie ante eu magna finibus accumsan. Etiam
              luctus diam eu ligula posuere luctus. Fusce et luctus lorem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
