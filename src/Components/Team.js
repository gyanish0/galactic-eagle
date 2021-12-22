import { Box, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React from "react";
import Question from "./Question";
const useStyles = makeStyles(() => ({
  root: {
    margin: "0",
    padding: "0",
    background: "#000",
    color: "#52565c",
    overflow: "hidden",
  },
  subroot: {
    padding: "120px 0px 0",
    position: "relative",
    backgroundPosition: "top right",
  },
  headtxt: {
    color: "#20e298",
    fontSize: "55px",
    fontWeight: "600",
    lineHeight: "67px",
    letterSpacing: "3px",
    fontFamily: "'Moonbase Omega', sans-serif",
    textAlign: "center",
  },
  txt1: {
    fontSize: "20px",
    color: "rgb(8, 214, 139)",
    letterSpacing: "1px",
    fontWeight: "600",
    lineHeight: "30px",
    textAlign: "left",
    fontFamily: "'Moonbase Omega', sans-serif",
  },
  subtxt1: {
    fontSize: "18px",
    color: "rgb(255, 255, 255)",
    letterSpacing: "1px",
    fontWeight: "600",
    lineHeight: "30px",
    textAlign: "left",
    fontFamily: "'Moonbase Omega', sans-serif",
  },
  imgfield: {
    transition: "all .4s",
    borderRadius: "50px 0 50px 0",
    transition: "0.5s",
    "&:hover": {
      transform: "scale(1.1)",
      filter: "blur(0px)",
    },
  },
}));
const Team = () => {
  const classess = useStyles();
  return (
    <Box className={classess.root}>
      <Box className={classess.subroot}>
        <Container>
          <Box>
            <Typography className={classess.headtxt}>TEAM</Typography>
          </Box>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Grid
              container
              spacing={3}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Grid item lg={3} md={3} sm={6} xs={6}>
                <Box>
                  <img
                    src="/Images/11111.jpeg"
                    alt=""
                    width="100%"
                    className={classess.imgfield}
                  />
                  <Typography className={classess.txt1}>
                    LEGACYSEEGHOST
                  </Typography>
                  <Typography className={classess.subtxt1}>
                    CO-FOUNDER & PROJECT LEADER
                  </Typography>
                  <TwitterIcon style={{ color: "#08d68b" }} />
                  <LinkedInIcon style={{ color: "#08d68b" }} />
                </Box>
              </Grid>
              <Grid item lg={3} md={3} sm={6} xs={6}>
                <Box>
                  <img
                    src="/Images/22222.jpeg"
                    alt=""
                    width="100%"
                    className={classess.imgfield}
                  />
                  <Typography className={classess.txt1}>
                    AGUILA DE ORO
                  </Typography>
                  <Typography className={classess.subtxt1}>
                    CO-FOUNDER & PROJECT LEADER
                  </Typography>
                  <TwitterIcon style={{ color: "#08d68b" }} />
                  <InstagramIcon style={{ color: "#08d68b" }} />
                </Box>
              </Grid>
              <Grid item lg={3} md={3} sm={6} xs={6}>
                <Box>
                  <img
                    src="/Images/33333.jpeg"
                    alt=""
                    width="100%"
                    className={classess.imgfield}
                  />
                  <Typography className={classess.txt1}>PIXXELZ.ETH</Typography>
                  <Typography className={classess.subtxt1}>
                    DESIGNER & WEB DEVELOPER
                  </Typography>
                  <TwitterIcon style={{ color: "#08d68b" }} />
                </Box>
              </Grid>
              <Grid item lg={3} md={3} sm={6} xs={6}>
                <Box>
                  <img
                    src="/Images/44444.jpeg"
                    alt=""
                    width="100%"
                    className={classess.imgfield}
                  />
                  <Typography className={classess.txt1}>
                    JASON STONE (MILLIONAIRE MENTOR)
                  </Typography>
                  <Typography className={classess.subtxt1}>
                    MARKETING PARTNER & EDUCATOR
                  </Typography>
                  <TwitterIcon style={{ color: "#08d68b" }} />
                  <InstagramIcon style={{ color: "#08d68b" }} />
                </Box>
              </Grid>
              <Grid item lg={3} md={3} sm={6} xs={6}>
                <Box>
                  <img
                    src="/Images/55555.jpeg"
                    alt=""
                    width="100%"
                    className={classess.imgfield}
                  />
                  <Typography className={classess.txt1}>
                    SCOTT WHITNEY
                  </Typography>
                  <Typography className={classess.subtxt1}>
                    CRYPTO AFFICIANADO & NETWORKER
                  </Typography>
                  <TwitterIcon style={{ color: "#08d68b" }} />
                  <LinkedInIcon style={{ color: "#08d68b" }} />
                </Box>
              </Grid>
              <Grid item lg={3} md={3} sm={6} xs={6}>
                <Box>
                  <img
                    src="/Images/66666.jpeg"
                    alt=""
                    width="100%"
                    className={classess.imgfield}
                  />
                  <Typography className={classess.txt1}>
                    DEVELOPMENT TEAM
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Question />
        </Container>
      </Box>
    </Box>
  );
};

export default Team;
