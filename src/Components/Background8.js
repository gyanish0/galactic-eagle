import { Box, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: "url(./Images/visionBg.jpeg)",
    padding: "120px 0px",
    position: "relative",
    backgroundSize: "cover",
    backgroundColor: "#000",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top right",
  },
  headtxt: {
    color: "#20e298",
    fontSize: "55px",
    fontWeight: "600",
    lineHeight: "50px",
    marginBottom: "15px",
    letterSpacing: "3px",
    textAlign: "center",
    fontFamily: "'Moonbase Omega', sans-serif",
  },
  subtxt: {
    color: "#fff",
    fontSize: "23px",
    fontFamily: "'Poppins', sans-serif",
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
const Background8 = () => {
  const classess = useStyles();
  return (
    <Box>
      <Box className={classess.root}>
        <Box>
          <Container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Grid container spacing={3}>
                <Grid item lg={6} md={6} sm={12} xs={6}>
                  <Box style={{ paddingTop: "200px" }}>
                    <Typography className={classess.headtxt}>
                      BACKGROUND & VISION
                    </Typography>
                    <img
                      src="/Images/vision.png"
                      alt=""
                      style={{ maxWidth: "100%" }}
                    />
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={6}>
                  <Typography className={classess.subtxt}>
                    Earlier in the year we were lucky enough to become part of
                    an amazing community. The NFT world was introduced to
                    ourselves. We quickly became enamored with the tight knit
                    community and support of everyone involved in it.
                  </Typography>
                  <Typography className={classess.subtxt}>
                    Whether it was the constant support of the small artists
                    creating these amazing pieces of artwork or the newbies
                    trying to figure out what a metamask wallet is while
                    learning the marketplace and what it has to offer.
                  </Typography>
                  <Typography className={classess.subtxt}>
                    From insane high gas wars to finding the surprise lowkey
                    drops throughout the space, this whole journey has become a
                    very eye-opening experience. And fortunately for ourselves
                    we have found something we are extremely passionate about
                    and truly believe in.
                  </Typography>
                  <Typography className={classess.subtxt}>
                    So we have sat down and very intensely studied the wants and
                    needs of the community and created a project of our own. A
                    journey for all of us to embark upon. The GALACTIC EAGLE
                    GANG was born with the community in mind.
                  </Typography>
                  <Typography className={classess.subtxt}>
                    First and foremost to create and obtain maximum value and
                    utility for all of the investors and community members. To
                    create unique and amazing eye catching art that people can
                    call their own and be proud to show off.
                  </Typography>
                  <Typography className={classess.subtxt}>
                    A strong community of like minded individuals who want to
                    fly as high as possible. Far past the moon into this
                    interstellar mission with us to create and maintain a
                    long-term project that can forever reside inside the
                    blockchain.
                  </Typography>
                  <Typography className={classess.subtxt}>
                    We want to create more than just another pop up NFT that
                    comes and goes. But create a project that can successfully
                    integrate the future meta and the physical world alike to
                    ensure we stay around forever. Trust we aren't going
                    anywhere. We're pouring everything into this project. This
                    is for the dreamers and the visionaries. GANG UP!!
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Background8;
