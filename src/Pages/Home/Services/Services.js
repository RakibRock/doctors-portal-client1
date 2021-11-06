import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import flouride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import Service from "../Service/Service";
import { Container, Typography } from "@mui/material";

const services = [
  {
    name: "Flouride Treatment",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    img: flouride,
  },
  {
    name: "Cavity Filling",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    img: cavity,
  },
  {
    name: "Teath Whitening",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    img: whitening,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography sx={{ m: 2 }} variant="h6" component="h2">
          OUR SERVICES
        </Typography>
        <Typography sx={{ m: 5 }} variant="h4" component="h2">
          SERVICES WE PROVIDE
        </Typography>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Service service={service} key={service.name}></Service>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
