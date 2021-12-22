import { Box, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  root9: {
    margin: "0",
    padding: "0!important",
    background: "#000",
    color: "#52565c",
    fontFamily: '"Monetizer",sans-serif',
  },
  subroot9: { padding: "120px 0px", zIndex: "1", position: "relative" },
  headtxt: {
    color: "#20e298",
    fontSize: "55px",
    fontWeight: "600",
    lineHeight: "67px",
    letterSpacing: "3px",
    textAlign: "center",
    fontFamily: "'Moonbase Omega', sans-serif",
  },
  subhead_txt: {
    color: "#20e298",
    fontSize: "30px",
    fontFamily: "'Moonbase Omega', sans-serif",
    fontWeight: "500",
    lineHeight: "1.334",
    //p
    display: "block",
    // fontSize: "0.83em",
    marginBlockStart: "1.67em",
    marginBlockEnd: "1.67em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
  },
  subtxt: {
    fontFamily: "'Moonbase Omega', sans-serif",
    fontWeight: "400",
    lineHeight: "1.43",
    letterSpacing: "0.24px",
    color: "#fff",
    margin: "10px 0",
    padding: "0",
    fontSize: "20px",
  },
}));
const MapDev = () => {
  const classess = useStyles();
  return (
    <Box className={classess.root9}>
      <Box className={classess.subroot9}>
        <Container>
          <Box>
            <Typography className={classess.headtxt}>
              DEVELOPMENT ROADMAP 2.0
            </Typography>
          </Box>
          <Box style={{ display: "flex" }}>
            <Box className={classess.headbox}>
              <Grid item lg={12} md={12} sm={6} xs={12}>
                <Grid container spacing={3}>
                  <Grid item lg={3} md={3} sm={6} xs={12}>
                    <Box>
                      <Typography className={classess.subhead_txt}>
                        MASS MARKETING
                      </Typography>
                      <Typography className={classess.subtxt}>
                        Expect us to ramp up our bandwidth. This isn't the time
                        to hold back. We want people to know about how amazing
                        our community is. Expect billboards, collaborations, and
                        heavy promotions. Let's get the word out!
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item lg={3} md={3} sm={6} xs={12}>
                    <Box>
                      <Typography className={classess.subhead_txt}>
                        EXTRA TRAIT UTILITY
                      </Typography>
                      <Typography className={classess.subtxt}>
                        We are assigning special utility to a select number of
                        our traits. Maybe you are one of the lucky eagles? We
                        will begin unveiling our trait utilities after launch on
                        discord.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item lg={3} md={3} sm={6} xs={12}>
                    <Box>
                      <Typography className={classess.subhead_txt}>
                        MERCH BRANDING
                      </Typography>
                      <Typography className={classess.subtxt}>
                        Our plan is to create a real name and brand within the
                        space. So the only way to do that is by seeing the
                        bigger picture. So we have designed our street wear
                        oriented line of clothing within the Galactic Gang
                        brand. With our own actual designs and ideas behind it.
                        VALUE VALUE VALUE!
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item lg={3} md={3} sm={6} xs={12}>
                    <Box>
                      <Typography className={classess.subhead_txt}>
                        GALACTIC CARE PACKAGE
                      </Typography>
                      <Typography className={classess.subtxt}>
                        We are rewarding our holders with a package sent
                        directly from the Eagle Command. A box full of goodies
                        to show our appreciation to those who believed in the
                        mission.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item lg={3} md={3} sm={6} xs={12}>
                    <Box>
                      <Typography className={classess.subhead_txt}>
                        ACTION FIGURINES
                      </Typography>
                      <Typography className={classess.subtxt}>
                        We will begin the development and manufacturing of our
                        own GEG action figures for our holders. Can’t go wrong
                        with some extra value.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item lg={3} md={3} sm={6} xs={12}>
                    <Box>
                      <Typography className={classess.subhead_txt}>
                        JOURNEY CONTINUES (ENEMIES DROP)
                      </Typography>
                      <Typography className={classess.subtxt}>
                        The continuation of our plot line starts to thicken. We
                        figure out who the enemy really is.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item lg={3} md={3} sm={6} xs={12}>
                    <Box>
                      <Typography className={classess.subhead_txt}>
                        DAO IMPLEMENTATION
                      </Typography>
                      <Typography className={classess.subtxt}>
                        We will implement a DAO voting system within our
                        project. From voting on important project decisions to
                        potential staking into Bimport MapDev from
                        "src/Components/MapDev"; lue Chip NFT’s the choice is
                        entirely up to the community.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item lg={3} md={3} sm={6} xs={12}>
                    <Box>
                      <Typography className={classess.subhead_txt}>
                        METAVERSE EXPANSION
                      </Typography>
                      <Typography className={classess.subtxt}>
                        We have to prepare for the future and we need the GANG
                        to be at the forefront of expansion. That is why we will
                        have 3D renditions of our Eagle’s for our integration
                        into the meta. Our Eagles are prepared for all terrains.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box>
            <Grid item lg={12} md={12} sm={6} xs={12}>
              <Grid container spacing={3}>
                <Grid item lg={4} md={4} sm={6} xs={12}>
                  <img src="/Images/10.png" alt="" width="100%" />
                </Grid>
                <Grid item lg={4} md={4} sm={6} xs={12}>
                  <video
                    src="/Images/11.mp4"
                    autoPlay
                    loop
                    style={{ width: "100%" }}
                  ></video>
                </Grid>
                <Grid item lg={4} md={4} sm={6} xs={12}>
                  <img src="/Images/12.jpeg" alt="" width="100%" />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default MapDev;
