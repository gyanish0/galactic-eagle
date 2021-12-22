import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles(() => ({
  headtxt: {
    color: "#20e298",
    fontSize: "55px",
    fontWeight: "600",
    lineHeight: "67px",
    letterSpacing: "3px",
    fontFamily: "'Moonbase Omega', sans-serif",
    textAlign: "center",
  },
}));
const Question = () => {
  const classess = useStyles();
  return (
    <Box>
      <Container>
        <Typography className={classess.headtxt}>
          FREQUENTLY ASKED QUESTIONS
        </Typography>
      </Container>
    </Box>
  );
};

export default Question;
