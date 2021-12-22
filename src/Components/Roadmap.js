import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
const useStyles = makeStyles(() => ({
  text_head: {
    textAlign: "center",
    color: "#20e298",
    fontSize: "55px",
    fontWeight: "600",
    lineHeight: "67px",
    letterSpacing: "3px",
    fontFamily: "'Oswald', sans-serif",
  },
  banner_image: {
    backgroundImage: "url(./Images/banner.png)",
    padding: "120px 0px",
    zIndex: "1",
    position: "relative",
    backgroundSize: "cover",
    backgroundColor: "#000",
    backgroundRepeat: "no-repeat",
    textAlign: "center",
  },
  roadMap_path: {
    border: "2px solid white",
    borderLeft: "0",
    borderRadius: "0 200px 200px 0",
    paddingBottom: "82px",
    marginTop: "-2px",
    position: "relative",
  },
  persentage_10: {
    fontSize: "30px",
    color: "#20e298",
    margin: "20px 0",
    display: "inline-block",
    position: "relative",
    fontWeight: "500",
    lineHeight: "1.167",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
    fontFamily: "'Oswald', sans-serif",
  },
  subtext_1: {
    fontSize: "20px",
    color: "#fff",
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto",
    fontWeight: "400",
    lineHeight: "1.43",
    letterSpacing: "0.24px",
    fontFamily: "'Roboto', sans-serif",
  },
  roadMap_path2: {
    border: "2px solid #fff",
    borderRight: "0",
    borderRadius: "200px 0 0 200px",
    paddingBottom: "82px",
    marginTop: "-2px",
    position: "relative",
  },
  persentage_25: {
    fontSize: "30px",
    color: "#20e298",
    margin: "20px 0",
    display: "inline-block",
    position: "relative",
    fontWeight: "500",
    lineHeight: "1.167",
    fontFamily: "'Oswald', sans-serif",
  },
  persentage_40: {
    fontSize: "30px",
    color: "#20e298",
    margin: "20px 0",
    display: "inline-block",
    position: "relative",
    fontWeight: "500",
    lineHeight: "1.167",
    fontFamily: "'Oswald', sans-serif",
  },
  roadmap_txt: {
    fontSize: "20px",
    color: "#fff",
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto",
    fontFamily: "'Monetizer', sans-serif",
    fontWeight: "400",
    lineHeight: "1.43",
    letterSpacing: "0.24px",
  },
  ul_head: {
    margin: "0",
    padding: "0",
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
  },
}));
const Roadmap = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner_image}>
      <Container>
        <Typography className={classes.text_head}>LAUNCH ROADMAP</Typography>
        <div className={classes.roadMap_path}>
          <div>
            <h3 className={classes.persentage_10}>10%</h3>
            <p className={classes.subtext_1}>
              AIRDROP FREE GALACTIC EAGLE NFT'S. RANDOM RAFFLE NFT GIVEAWAYS FOR
              GE6 COMMUNITY MEMBERS
            </p>
          </div>
        </div>
        <div className={classes.roadMap_path2}>
          <ul className={classes.ul_head}>
            <li>
              <h3 className={classes.persentage_40}>40%</h3>
              <p className={classes.roadmap_txt}>
                START THE EAGLE CHARITY FUND (COMMUNITY VOTING). BEGIN
                REPLICATION AND PRODUCTION OF ALL THE EAGLE'S ANDROID COMPANIONS
              </p>
            </li>

            <li>
              <h3 className={classes.persentage_25}>25%</h3>
              <p className={classes.roadmap_txt}>
                INITIATE COMMUNITY GEG WALLET. BEGIN ALLOCATING RESOURCES FOR
                THE GALACTIC EAGLE COMMAND PROJECT
              </p>
            </li>
          </ul>
        </div>
        <div className={classes.roadMap_path}>
          <ul className={classes.ul_head}>
            <li>
              <h3 className={classes.persentage_40}>50%</h3>
              <p className={classes.roadmap_txt}>
                CONTINUED AIRDROP GIVEAWAYS FOR COMMUNITY MEMBERS-MORE RESOURCES
                ALLOCATED TO STRENGTHEN THE GEG COMMUNITY WALLET
              </p>
            </li>

            <li>
              <h3 className={classes.persentage_25}>60%</h3>
              <p className={classes.roadmap_txt}>
                START MERCH DEVELOPMENT AND MOCKUPS FOR OUR COMMUNITY MEMBERS-
                DEVELOPMENT OF THE GALACTIC CARE PACKAGE (FOR VERIFIED EXCLUSIVE
                HOLDERS)
              </p>
            </li>
          </ul>
        </div>
        <div className={classes.roadMap_path2}>
          <ul className={classes.ul_head}>
            <li>
              <h3 className={classes.persentage_40}>75%</h3>
              <p className={classes.roadmap_txt}>
                CONTINUED AIRDROP GIVEAWAYS FOR COMMUNITY MEMBERS-MORE RESOURCES
                ALLOCATED TO STRENGTHEN THE GEG COMMUNITY WALLET
              </p>
            </li>

            <li>
              <h3 className={classes.persentage_25}>90%</h3>
              <p className={classes.roadmap_txt}>
                START MERCH DEVELOPMENT AND MOCKUPS FOR OUR COMMUNITY MEMBERS-
                DEVELOPMENT OF THE GALACTIC CARE PACKAGE (FOR VERIFIED EXCLUSIVE
                HOLDERS)
              </p>
            </li>
          </ul>
        </div>
        <div>
          <ul className={classes.ul_head}>
            <li>
              <h3 className={classes.persentage_40}>99%</h3>
              <p className={classes.roadmap_txt}>
                GALACTIC GANG STORY AND JOURNEY BEGINS TO FURTHER UNRAVEL (LIVE
                LOOK AT THE ENEMY]
              </p>
            </li>

            <li>
              <h3 className={classes.persentage_25}>100%</h3>
              <p className={classes.roadmap_txt}>
                CONGRATULATIONS YOU ARE OFFICIALLY A TRUSTED MEMBER OF THE
                GALACTIC EAGLE GANG - PLEASE PROCEED TO THE DISCORD TO RECEIVE
                YOUR WINGS
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Roadmap;
