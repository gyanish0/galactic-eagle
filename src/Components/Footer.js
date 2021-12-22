import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
const useStyles = makeStyles(() => ({
  logo_main: {
    width: "80%",
    margin: "0",
    padding: "0",
    background: "#000",
    color: "#52565c",
    Width: "80px",
  },
}));
const Footer = () => {
  const classess = useStyles();
  return (
    <div>
      <Container>
        <img src="/Images/logo.png" alt="" className={classess.logo_main} />
      </Container>
    </div>
  );
};

export default Footer;
