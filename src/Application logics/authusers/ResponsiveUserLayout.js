// Function to get class names based on uDSideBarToggle value
export const getClassName = (drawerToggel, styles) => {
  const dynimicSideBar = drawerToggel
    ? styles.side_barDrawer
    : styles.close_side_barDrawer;

  const dynimicContainer = drawerToggel
    ? styles.content_container
    : styles.close_content_container;
  return {
    dynimicSideBar,
    dynimicContainer,
  };
};
