import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import background from "../../../images/appointment-bg.png";
import { Button, Typography } from "@mui/material";

const AppointmentBanner = () => {
  const appointmentBanner = {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    marginTop: "150px",
    backgroundColor: "rgba(7, 36, 60, 0.9)",
    backgroundBlendMode: "darken,luminosity",
  };
  return (
    <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ height: "500px", marginTop: "-130px" }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid
          sx={{ display: "flex", alignItems: "center", textAlign: "left" }}
          item
          xs={12}
          md={6}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{ mb: 3 }}
              style={{ color: "#44C1B5" }}
            >
              APPOINTMENT
            </Typography>
            <Typography variant="h4" sx={{ mb: 2 }} style={{ color: "white" }}>
              MAKE AN APPOINTMENT <br /> TODAY
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 2 }}
              style={{
                color: "lightgrey",
                fontSize: "17px",
                fontWeight: "300",
              }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
              consequatur error corrupti itaque alias
            </Typography>
            <Button sx={{ backgroundColor: "#44C1B5" }} variant="contained">
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
