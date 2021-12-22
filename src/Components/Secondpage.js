import { Box, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
const useStyle = makeStyles(() => ({
  root3: {
    margin: "0",
    padding: "0",
    background: "#000",
    color: "#52565c",
  },
  sub_root: { overflow: "hidden" },
  img111: {
    width: "100%",
    transition: "0.5s",
    "&:hover": {
      transform: "scale(1.1)",
      // filter: "blur(0px)",
    },
  },
  head_txt: {
    color: "#20e298",
    fontSize: "55px",
    fontWeight: "600",
    lineHeight: "67px",
    letterSpacing: "3px",
    fontFamily: "'Shizuru', cursive",
  },
  subtext: {
    color: "#fff",
    fontSize: "23px",
    marginTop: "20px",
    fontWeight: "400",
    lineHeight: "24px",
    fontFamily: "'Shizuru', cursive",
  },
}));
const Secondpage = () => {
  const classess = useStyle();
  return (
    <Box className={classess.root3}>
      <Container>
        <Box>
          <Grid container alignItems="center" spacing={10}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Grid container spacing={3}>
                <Grid item lg={6} md={6} sm={12} xs={6}>
                  <Box className={classess.sub_root}>
                    <img
                      src="/Images/111.jpeg"
                      alt=""
                      className={classess.img111}
                    />
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={6}>
                  <Box className={classess.sub_root}>
                    <img
                      src="/Images/222.jpeg"
                      alt=""
                      className={classess.img111}
                    />
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={6}>
                  <Box className={classess.sub_root}>
                    <img
                      src="/Images/333.jpeg"
                      alt=""
                      className={classess.img111}
                    />
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={6}>
                  <Box className={classess.sub_root}>
                    <img
                      src="/Images/444.jpeg"
                      alt=""
                      className={classess.img111}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box>
                <Typography variant="h1" className={classess.head_txt}>
                  WELCOME
                </Typography>
                <Typography className={classess.subtext}>
                  The GALACTIC EAGLE GANG is a unique NFT Collection consisting
                  of 8888 Galactic Eagles located on the Ethereum Blockchain as
                  an ERC-721 Token.
                </Typography>
                <Typography className={classess.subtext}>
                  The Pre-sale will take place on 12/16 for .055 ETH. The Public
                  Sale will take place on 12/17 for .075 ETH.
                </Typography>
                <Typography className={classess.subtext}>
                  Purchasing a Galactic Eagle grants membership to the Galactic
                  Gang. An exclusive and amazing community of positive and
                  ambitious individuals from all across the globe.
                </Typography>
                <Typography className={classess.subtext}>
                  Not only does being a Galactic Eagle owner grant the complete
                  ownership of a high quality piece of artwork.
                </Typography>
                <Typography className={classess.subtext}>
                  But will also provide access into a vast network of highly
                  important members-only exclusive benefits intended to deliver
                  our investors with maximum value and utility.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Secondpage;
