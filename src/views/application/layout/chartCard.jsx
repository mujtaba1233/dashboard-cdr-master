import React from "react";
import { Typography } from "@mui/material";

const ChartCard = (props) => {
  return (
    <div className={`col-md-${props.col} grid-margin stretch-card`}>
      <div className="card">
        <div className="card-body">
          <Typography variant="h3" component="h3" gutterBottom>
            {props.label}
          </Typography>
          <div className="aligner-wrapper">
            {props.data}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
