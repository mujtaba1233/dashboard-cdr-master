import React from "react";
import { Typography, Card } from "@mui/material";

const DataCard = (props) => {
  return (
    <div className={`col-xl-${props.col} col-sm-6 grid-margin stretch-card`}>
      <Card sx={{ height: "200px", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <div>
          <Typography variant="h3" component="div" gutterBottom textAlign="center">
            {props.data}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" textAlign="center">
            {props.label}
          </Typography>
        </div>
        <div className="icon-rounded-success icon-rounded-md">
          <i className="mdi mdi-chart-line mdi-36px"></i>
        </div>
      </Card>
    </div>
  );
};

export default DataCard;
