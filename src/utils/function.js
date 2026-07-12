import { produce } from "immer";

export const themeSwitch = (theme = "default", attributes) =>
  produce(attributes, (draft) => {
    draft["themes"]["theme"] = theme;

    switch (theme) {
      case "default":
        draft["prefixColor"] = "#333";
        draft["suffixColor"] = "#333";
        draft["prefixText"] = "We create";
        draft["suffixText"] = " ";
        draft["backDelay"] = 500;
        draft["background"]["color"] = "transparent";
        draft["typingContentsTypo"]["fontSize"] = {
          desktop: "22",
          tablet: "20",
          mobile: "18",
        };
        draft["padding"] = { vertical: "10px", horizontal: "15px" };
        draft["animatedSize"]["width"] = {
          desktop: "100%",
          tablet: "",
          mobile: "",
        };
        draft["animatedSize"]["height"] = {
          desktop: "200px",
          tablet: "",
          mobile: "",
        };
        draft["prefixTypo"]["fontSize"] = {
          desktop: "22",
          tablet: "20",
          mobile: "18",
        };
        draft["border"] = {
          radius: "0px",
          width: "0px",
          style: "solid",
          color: "#000000",
        };
        draft["textAlign"] = "center";
        break;
      case "terminal":
        draft["prefixColor"] = "#F75270";
        draft["suffixColor"] = "#0BA6DF";
        draft["prefixText"] = "We create super ";
        draft["suffixText"] = " for your business.";
        draft["backDelay"] = 500;
        draft["background"]["color"] = "#fff";
        draft["typingContentsTypo"]["fontSize"] = {
          desktop: "20",
          tablet: "18",
          mobile: "16",
        };
        draft["padding"] = { vertical: "10px", horizontal: "15px" };
        draft["animatedSize"]["width"] = {
          desktop: "100%",
          tablet: "",
          mobile: "",
        };
        draft["animatedSize"]["height"] = {
          desktop: "200px",
          tablet: "",
          mobile: "",
        };
        draft["prefixTypo"]["fontSize"] = {
          desktop: "22",
          tablet: "20",
          mobile: "18",
        };
        draft["prefixTypo"]["fontWeight"] = 400;
        draft["border"] = {
          radius: "10px",
          width: "0px",
          style: "solid",
          color: "#000000",
        };
        draft["textAlign"] = "left";
        break;
      case "starFlower":
        draft["prefixColor"] = "#fff";
        draft["suffixColor"] = "#fff";
        draft["prefixText"] = "We create ";
        draft["suffixText"] = " ";
        draft["backDelay"] = 1500;
        draft["background"]["color"] = "#22292C";
        draft["typingContentsTypo"]["fontSize"] = {
          desktop: "30",
          tablet: "25",
          mobile: "20",
        };
        draft["padding"] = { vertical: "10px", horizontal: "15px" };
        draft["animatedSize"]["width"] = {
          desktop: "100%",
          tablet: "",
          mobile: "",
        };
        draft["animatedSize"]["height"] = {
          desktop: "200px",
          tablet: "",
          mobile: "",
        };
        draft["prefixTypo"]["fontSize"] = {
          desktop: "22",
          tablet: "20",
          mobile: "18",
        };
        draft["prefixTypo"]["fontWeight"] = 400;
        draft["border"] = {
          radius: "10px",
          width: "0px",
          style: "solid",
          color: "#000000",
        };
        draft["textAlign"] = "center";
        break;
      case "neonGrid":
        draft["prefixColor"] = "#D93DC7";
        draft["suffixColor"] = "#fff";
        draft["prefixText"] = "We create super ";
        draft["suffixText"] = " ";
        draft["backDelay"] = 1000;
        draft["background"]["color"] = "transparent";
        draft["typingContentsTypo"]["fontSize"] = {
          desktop: "30",
          tablet: "25",
          mobile: "20",
        };
        draft["padding"] = { vertical: "30px", horizontal: "15px" };
        draft["animatedSize"]["width"] = {
          desktop: "100%",
          tablet: "",
          mobile: "",
        };
        draft["animatedSize"]["height"] = {
          desktop: "160px",
          tablet: "",
          mobile: "",
        };
        draft["prefixTypo"]["fontSize"] = {
          desktop: "24",
          tablet: "20",
          mobile: "18",
        };
        draft["prefixTypo"]["fontWeight"] = 600;
        draft["iconList"]["uploadIconUrl"] =
          "https://i.ibb.co.com/Y4DRLrNL/deciduous-tree-1f333.png";
        draft["border"] = {
          radius: "10px",
          width: "0px",
          style: "solid",
          color: "#000000",
        };
        draft["textAlign"] = "center";
        break;
      case "auroraGlow":
        draft["prefixColor"] = "#2BC69C";
        draft["suffixColor"] = "#fff";
        draft["prefixText"] = "We create super ";
        draft["suffixText"] = " four your business";
        draft["backDelay"] = 1000;
        draft["background"]["color"] =
          "linear-gradient(135deg, #0a0a0f 0%, #141427 100%)";
        draft["typingContentsTypo"]["fontSize"] = {
          desktop: "30",
          tablet: "25",
          mobile: "20",
        };
        draft["padding"] = { vertical: "30px", horizontal: "15px" };
        draft["animatedSize"]["width"] = {
          desktop: "100%",
          tablet: "",
          mobile: "",
        };
        draft["animatedSize"]["height"] = {
          desktop: "auto",
          tablet: "",
          mobile: "",
        };
        draft["prefixTypo"]["fontSize"] = {
          desktop: "24",
          tablet: "20",
          mobile: "18",
        };
        draft["prefixTypo"]["fontWeight"] = 600;
        draft["iconList"]["uploadIconUrl"] =
          "https://i.ibb.co.com/ycTQZsXH/1f680.png";
        draft["border"] = {
          radius: "20px",
          width: "0px",
          style: "solid",
          color: "#000000",
        };
        draft["suffixTypo"]["textTransform"] = "capitalize";
        draft["textAlign"] = "left";
        break;
      case "cyberWave":
        draft["prefixColor"] = "#1DCCA8";
        draft["suffixColor"] = "#1DCCA8";
        draft["prefixText"] = "We create super ";
        draft["suffixText"] = " ";
        draft["backDelay"] = 1000;
        draft["background"]["color"] = "#0000";
        draft["typingContentsTypo"]["fontSize"] = {
          desktop: "30",
          tablet: "25",
          mobile: "20",
        };
        draft["padding"] = { vertical: "30px", horizontal: "15px" };
        draft["animatedSize"]["width"] = {
          desktop: "100%",
          tablet: "",
          mobile: "",
        };
        draft["animatedSize"]["height"] = {
          desktop: "auto",
          tablet: "",
          mobile: "",
        };
        draft["prefixTypo"]["fontSize"] = {
          desktop: "24",
          tablet: "20",
          mobile: "18",
        };
        draft["prefixTypo"]["fontWeight"] = 600;
        draft["iconList"]["uploadIconUrl"] =
          "https://i.ibb.co.com/b5g7bpgk/Adobe-Express-file.png";
        draft["border"] = {
          radius: "20px",
          width: "0px",
          style: "solid",
          color: "#000000",
        };
        draft["suffixTypo"]["textTransform"] = "capitalize";
        draft["textAlign"] = "center";
        break;
    }
  });
