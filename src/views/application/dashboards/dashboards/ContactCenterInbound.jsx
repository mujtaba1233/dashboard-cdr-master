import React, { useEffect, useState } from "react";
// import {
//   ContactCenterInbound18003331111,
//   ContactCenterInbound18003331112,
//   ContactCenterInbound18003331113,
//   ContactCenterInbound18003331114,
//   ContactCenterInbound18003331115,
//   ContactCenterInbound18003331116,
// } from "../services/contactCenterInbound";
// import Spinner from "../shared/Spinner";
import DataCard from "../../layout/dataCard";
// import moment from "moment";
import { connect } from "react-redux";
import { Grid, Typography } from "@mui/material";

const ContactCenterInbound = ({ date }) => {
  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    ContactCenterInbound18003331111: "982",
    ContactCenterInbound18003331112: "12",
    ContactCenterInbound18003331113: "532",
    ContactCenterInbound18003331114: "12312",
    ContactCenterInbound18003331115: "53463",
    ContactCenterInbound18003331116: "235346",
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     const current = moment().format();
  //     const selectedDate = date?.selectedDate;
  //     const body = { current, date: selectedDate };

  //     const res1 = await ContactCenterInbound18003331111(body);
  //     const res2 = await ContactCenterInbound18003331112(body);
  //     const res3 = await ContactCenterInbound18003331113(body);
  //     const res4 = await ContactCenterInbound18003331114(body);
  //     const res5 = await ContactCenterInbound18003331115(body);
  //     const res6 = await ContactCenterInbound18003331116(body);

  //     setData({
  //       ContactCenterInbound18003331111: res1.data.hits.total.value,
  //       ContactCenterInbound18003331112: res2.data.hits.total.value,
  //       ContactCenterInbound18003331113: res3.data.hits.total.value,
  //       ContactCenterInbound18003331114: res4.data.hits.total.value,
  //       ContactCenterInbound18003331115: res5.data.hits.total.value,
  //       ContactCenterInbound18003331116: res6.data.hits.total.value,
  //     });
  //     setLoading(false);
  //   };

  //   fetchData();
  // }, [date]);

  // if (loading) return <Spinner />;
  return (
    <div>
      {/* <Typography variant="h2" className="py-2">
        Contact Center Inbound
      </Typography> */}
      <Grid container spacing={3}>
        {Object.keys(data).map((key) => (
          <Grid item xs={12} md={6} key={key}>
            <DataCard
              label={`Contact Center - Inbound (${key})`}
              data={data[key]}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const mapStateToProps = function (state) {
  return {
    date: state.date,
  };
};

export default connect(mapStateToProps)(ContactCenterInbound);
