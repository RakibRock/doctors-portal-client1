import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import chair from "../../images/chair.png";
import { Container as div } from "@mui/material";
import Navigation from "../Shared/Navigation/Navigation";
import Calender from "../Shared/Calender/Calender";
import DisplayAppointment from "./DisplayAppointment/DisplayAppointment";
import Appointment from "./Appointment";
import AppointmentModal from "./Modal/AppointmentModal";

const AppointmentPage = () => {
  //Lifted the state of calender to here and send props by destructuring
  const [date, setDate] = React.useState(new Date());

  const imgStyle = {
    width: "100%",
  };
  return (
    <div>
      <Navigation></Navigation>
      {/* Appointment Header start */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {/* setting the props, date and setDate */}
            <Calender date={date} setDate={setDate}></Calender>
          </Grid>

          <Grid item xs={12} md={6}>
            <img style={imgStyle} src={chair} alt="" />
          </Grid>
        </Grid>
        {/* Appointment Header end */}
        {/* giving the date as a prop so that this component can use it */}
        <DisplayAppointment date={date} setDate={setDate}></DisplayAppointment>

        <AppointmentModal></AppointmentModal>
      </Box>
    </div>
  );
};

export default AppointmentPage;
