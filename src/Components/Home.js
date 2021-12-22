import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
const useStyle = makeStyles(() => ({
  root1: {
    backgroundImage: "url(./Images/bg.jpeg)",
    position: "relative",
    backgroundColor: "#000",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    textAlign: "center",
    overflow: "hidden",
    backgroundPosition: "top right",
  },
  main_txt: {
    fontFamily: "'IBM Plex Serif', serif",
    color: "#fff",
    fontSize: "90px",
    fontWeight: "800",
    lineHeight: "1.167",
  },
  join_button: {
    color: "#fff",
    border: "1.5px solid #08d57f",
    height: "46px",
    fontFamily: "'IBM Plex Serif', serif",
    fontSize: "15px",
    minWidth: "180px",
    boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)",
    transition: "0.5s",
    fontWeight: "400",
    lineHeight: "21px",
    marginRight: "10px",
    borderRadius: "100px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  banner_Img: {
    left: "50%",
    width: "100%",
    bottom: "0",
    // position: "absolute",
    maxWidth: "70%",
    // transform: "translateX(-50%)",
  },
}));
const Home = () => {
  const classess = useStyle();
  return (
    <div className={classess.root1}>
      <img src="/Images/text.png" alt="" />
      <Typography className={classess.main_txt}>JOIN THE GANG!!</Typography>
      <Button className={classess.join_button}>JOIN OUR DISCORD</Button>
      <div>
        <img src="/Images/banner1.png" alt="" className={classess.banner_Img} />
      </div>
    </div>
  );
};

export default Home;
