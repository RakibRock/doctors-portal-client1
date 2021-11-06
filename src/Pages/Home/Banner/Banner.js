import React from "react";
import Container from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Button, Typography } from "@mui/material";

const Banner = () => {
  const verticleCenter = {
    padding: "100px",
    backgroundImage: `url(${bg})`,
    height: "400px",
    backgroundColor: "lightblue",
    backgroundPosition: "left",
  };
  const chairImage = {
    height: "300px",
  };

  return (
    <Container style={verticleCenter} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid sx={{ textAlign: "left" }} item xs={12} md={6}>
          <Typography sx={{ my: 3 }} variant="h3">
            Your New Smile <br /> Starts Here
          </Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            maiores.
          </Typography>
          <br />
          <Button
            sx={{ my: 3, backgroundColor: "#44C1B5" }}
            variant="contained"
          >
            GET APPOINTMENT
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={chairImage} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
