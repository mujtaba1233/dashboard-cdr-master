import React from "react";
import { Grid, Typography, Card } from "@mui/material";

const SeriesCard = (props) => {
  return (
    <Grid item xs={12} md={props.col} className="grid-margin stretch-card">
      <Card sx={{ height: "200px", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          {props.data.map((el, index) => (
            <Grid item key={index}>
              <Typography variant="body1" className="text-primary">{props.labels[index]}</Typography>
              <Typography variant="h2" className="text-success">{el}</Typography>
            </Grid>
          ))}
        </Grid>
        <Typography variant="subtitle1" color="textSecondary" textAlign="center">{props.title}</Typography>
      </Card>
    </Grid >
  );
};

export default SeriesCard;
