const theme = () => {
  const mainColor = "#3498db";
  const secondaryColor = "#ea0";
  const thirdColor = "#aa00ee";
  const fourthColor = "#aea";
  const lightColor = "#fefefe";
  const darkColor = "#2c3e50";
  const ctoSuccess = "#0f0";
  const ctoDelete = "#ff5555";

  return {
    tinMarinbg: mainColor,
    tinMarinBorder: lightColor,
    headerbg: "transparent",
    aboutbg: lightColor,
    aboutBorder: fourthColor,
    darkColor,
    lightColor,
    hoverLinks: fourthColor,
    activeLinks: secondaryColor,
    linksColor: lightColor,
    fontLightColor: lightColor,
    fontDarkColor: darkColor,
    listBG: darkColor,
    listBottomBorder: thirdColor,
    selectedOptionBg: ctoSuccess,
    optionBg: thirdColor,
    deleteBtnBg: ctoDelete,
    deleteBtnBgHover: "#f33",
    deleteBtnBorder: "#aa0000",
    removeOptionBtn: "#ff1111",
    removeOptionBtnHover: "#e22",
    selectBtn: ctoSuccess,
    selectBtnHover: "#090",
    addBtn: secondaryColor,
    addBtnHover: "#fa1"
  };
};

export default theme;
