import { Box, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
const useStyles = makeStyles(() => ({
  root2: {
    margin: "0",
    padding: "0",
    background: "#000",
    color: "#52565c",
    width: "100%",
    height: "100%",
  },
  main_txt: {
    color: "#20e298",
    fontSize: "55px",
    fontWeight: "600",
    lineHeight: "67px",
    letterSpacing: "3px",
  },
  sub_txt: {
    color: "#fff",
    width: "100%",
    fontSize: "23px",
    maxWidth: "600px",
    marginTop: "20px",
    fontWeight: "400",
    lineHeight: "24px",
  },
  imgbox: {
    width: "100%",
    margin: "auto",
    display: "flex",
    alignItems: "center",
  },
  img1: {
    position: "absolute",
    top: "0%",
    left: "50.7%",
  },
  img2: {
    position: "absolute",
    bottom: "28%",
    right: "20%",
  },
}));
const Middlepg = () => {
  const classess = useStyles();
  return (
    <Box className={classess.root2}>
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={6} md={12} sm={12}>
            <Typography className={classess.main_txt}>
              TRAITS & RARITIES
            </Typography>
            <Typography className={classess.sub_txt}>
              The Galactic Eagle Gang is a collection of 100% unique and
              randomly generated art from originally hand drawn sketches and
              made to perfection from over 140 distinct traits.
            </Typography>
            <Typography className={classess.sub_txt}>
              Each Eagle was scientifically mutated to diversify their vast
              array of qualities to further enhance their performance and
              different skill sets.
            </Typography>
            <Typography className={classess.sub_txt}>
              These diversified traits include their space suits, headwear,
              feathers, background, eyes, beak, patch, face shield, chain, and
              helmets.
            </Typography>
          </Grid>

          <Grid item lg={6} md={12} sm={12}>
            <Box className={classess.imgbox}>
              <Box>
                <img
                  src="/Images/gif.gif"
                  alt=""
                  width="100%"
                  style={{ padding: "15px" }}
                />
                <Box>
                  <img src="/Images/up1.png" alt="" className={classess.img1} />
                </Box>
                <Box>
                  <img
                    src="/Images/down.png"
                    alt=""
                    className={classess.img2}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Middlepg;
