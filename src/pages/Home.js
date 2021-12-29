import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import cities from "../data.json";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <Container>
        {cities.map((city) => (
          <>
            <Typography
              variant="h4"
              component="h2"
              marginBottom={3}
              marginTop={5}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map((tour) => (
                <Card tour={tour} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </>
  );
}
