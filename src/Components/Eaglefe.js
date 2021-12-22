import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
const useStyles = makeStyles(() => ({
  root7: {
    backgroundImage: "url(./Images/bg.jpeg)",
    position: "relative",
    backgroundColor: "#000",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    textAlign: "center",
    overflow: "hidden",
    backgroundPosition: "top right",
    padding: "120px 0px",
  },
  headtxt: {
    color: "#20e298",
    fontSize: "55px",
    fontWeight: "600",
    lineHeight: "57px",
    marginBottom: "17px",
    letterSpacing: "3px",
    textAlign: "center",
    fontFamily: "'Moonbase Omega', sans-serif",
  },
  logo_img: {
    width: "70px",
    border: "2px solid #20e298",
    height: "70px",
    display: "flex",
    alignItems: "center",
    borderRadius: "50%",
    justifyContent: "center",
    margin: "auto",
    marginBottom: "16px",
  },
  subHead_txt: {
    fontSize: "18px",
    fontFamily: "'Moonbase Omega', sans-serif",
    fontWeight: "600",
    lineHeight: "1.235",
    marginBottom: "16px",
    letterSpacing: "1px",
    color: "#20e298",
  },
  sub_txt: {
    color: "#fff",
    fontSize: "23px",
    fontFamily: "'Moonbase Omega', sans-serif",
    fontWeight: "400",
    lineHeight: "28px",
    //p
    display: "block",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
  },
}));
const Eaglefe = () => {
  const classess = useStyles();
  return (
    <Box className={classess.root7}>
      <Container>
        <Box>
          <Box style={{ marginTop: "16px", marginBottom: "40px" }}>
            <Typography className={classess.headtxt}>EAGLE FEATURES</Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid item lg={4} md={4} sm={12}>
              <Box>
                <Box className={classess.logo_img}>
                  <img src="/Images/1.png" alt="" width="50%" />
                </Box>
                <Box>
                  <Typography className={classess.subHead_txt}>
                    UNIQUE RARITY
                  </Typography>
                  <Typography className={classess.sub_txt}>
                    Each Eagle is completely unique and 1/1. Nobody else will
                    have an eagle just like the one you will possess. Keep it,
                    take care of it.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={12}>
              <Box>
                <Box className={classess.logo_img}>
                  <img src="/Images/2.png" alt="" width="50%" />
                </Box>
                <Box>
                  <Typography className={classess.subHead_txt}>
                    OWNERSHIP
                  </Typography>
                  <Typography className={classess.sub_txt}>
                    Gain complete control over your eagle. From full financial
                    ownership to complete copyright your eagle’s journey and
                    story is controlled by you.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={12}>
              <Box>
                <Box className={classess.logo_img}>
                  <img src="/Images/3.png" alt="" width="50%" />
                </Box>
                <Box>
                  <Typography className={classess.subHead_txt}>
                    COMMUNITY WALLET
                  </Typography>
                  <Typography className={classess.sub_txt}>
                    This will be set aside for the continuation of our project.
                    We will continue to build upon the Galactic Eagle Brand and
                    create our longevity within the space.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item lg={4} md={4} sm={12}>
              <Box>
                <Box className={classess.logo_img}>
                  <img src="/Images/4.png" alt="" width="50%" />
                </Box>
                <Box>
                  <Typography className={classess.subHead_txt}>
                    COMPANION AIRDROP
                  </Typography>
                  <Typography className={classess.sub_txt}>
                    Holding your eagles will grant you access to receiving our
                    future free airdrop. Every good soldier needs its companion
                    for a mission into the galaxy.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={12}>
              <Box>
                <Box className={classess.logo_img}>
                  <img src="/Images/5.png" alt="" width="50%" />
                </Box>
                <Box>
                  <Typography className={classess.subHead_txt}>
                    EAGLE JOURNEY
                  </Typography>
                  <Typography className={classess.sub_txt}>
                    Continue and follow our Eagles mission. This is far from
                    over. We will continue to build and forge a pathway to
                    discover who our Eagle’s foe in this galactic journey is.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={12}>
              <Box>
                <Box className={classess.logo_img}>
                  <img src="/Images/6.png" alt="" width="50%" />
                </Box>
                <Box>
                  <Typography className={classess.subHead_txt}>
                    MAXIMUM UTILITY & VALUE
                  </Typography>
                  <Typography className={classess.sub_txt}>
                    Our number one goal is to ensure our community with a safe
                    investment. We will work tirelessly to continue our
                    development with constant real world and digital utility.
                    Check Roadmap and 2.0.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Eaglefe;
