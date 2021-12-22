import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
const useStyles = makeStyles(() => ({
  root5: {
    padding: "120px 0px 150px",
    backgroundImage: "url(./Images/eagleLoreback.jpeg)",
    backgroundColor: "#000",
    position: "relative",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top right",
  },
  headtxt: {
    color: "#20e298",
    fontSize: "55px",
    fontWeight: "600",
    lineHeight: "67px",
    letterSpacing: "2px",
    textAlign: "center",
    fontFamily: "'Moonbase Omega', sans-serif",
  },
  subtext: {
    color: "#fff",
    fontSize: "23px",
    fontWeight: "400",
    lineHeight: "28px",
    //p
    display: "block",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
    fontFamily: "'Moonbase Omega', sans-serif",
  },
  img1: {
    bottom: "3px",
    zIndex: "0",
    position: "absolute",
    maxWidth: "100%",
  },
  img2: {
    right: "0",
    bottom: "3px",
    zIndex: "0",
    position: "absolute",
    maxWidth: "100%",
  },
}));
const EagleLore = () => {
  const classess = useStyles();
  return (
    <Box className={classess.root5}>
      <Box>
        <img src="/Images/eagle.png" alt="" className={classess.img1} />
        <img src="/Images/eagle1.png" alt="" className={classess.img2} />
      </Box>
      <Container>
        <Box>
          <Typography className={classess.headtxt}>EAGLE LORE</Typography>
          <Typography className={classess.subtext}>
            The year is 2088, in the not so distant future our very own freedom
            has become compromised. The human race is under attack and our
            planet is put under siege.
          </Typography>
          <Typography className={classess.subtext}>
            There are other worldly beings placing our very existence to
            question. How much longer do we have left to survive?? Something
            must be done in order to save ourselves from this impending evil.
          </Typography>
          <Typography className={classess.subtext}>
            The only choice?? Well to destroy and annihilate the incoming
            invaders. Easier said than done. Who is even capable of completing
            such a task?? Well the US military quickly steps in to answer the
            call.
          </Typography>
          <Typography className={classess.subtext}>
            To promptly send out their most potent task force to protect us from
            this newfound extraterrestrial evil. The GALACTIC EAGLE GANG is
            born. A collection of the most elite and powerful soldiers to ever
            step foot on planet Earth.
          </Typography>
          <Typography className={classess.subtext}>
            Similar to their distant cousins the Bald Eagle they symbolize the
            hope of a people. Only in this case the The GALACTIC EAGLE GANG
            represents much more than the livelihood of just the American folk.
          </Typography>
          <Typography className={classess.subtext}>
            They symbolize the last lingering of hope and opportunity of an
            entire world. The burden and livelihood of the planet now rests
            firmly on their shoulders. Scientifically mutated and assimilated
            with the specific intentions to take anything down in their pathway.
          </Typography>
          <Typography className={classess.subtext}>
            Born to follow precise orders, they train everyday of their young
            lives and take off into the galaxy to battle the unknown. Can the
            Eagles save us or are we just extending our impending doom?? Who are
            we fighting and why do they want to end our people??
          </Typography>
          <Typography className={classess.subtext}>
            I guess your only option is to join the Galactic Eagles on their
            mission to find out. Are you willing to join the GANG?!?
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default EagleLore;
