import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
// import Spinner from "../shared/Spinner";
import DataCard from "../../layout/dataCard";
// import moment from "moment";
import { connect } from "react-redux";
// import {
//   ContactCenterOutbound18002704560,
//   ContactCenterOutbound18003334444,
//   ContactCenterOutbound18003334451,
//   ContactCenterOutbound18007896540,
// } from "../services/contactCenterOutbound";

const ContactCenterOutbound = ({ date }) => {
  const [data, setData] = useState({
    ContactCenterOutbound18002704560: "871",
    ContactCenterOutbound18003334444: "781",
    ContactCenterOutbound18003334451: "290",
    ContactCenterOutbound18007896540: "900",
    loading: false,
  });

  // useEffect(() => {
  //   fetchData();
  // }, [date]);

  // const fetchData = async () => {
  //   setData({ ...data, loading: true });
  //   let current = moment().format();
  //   let selectedDate = date?.selectedDate;
  //   let body = { current: current, date: selectedDate };
  //   try {
  //     const res1 = await ContactCenterOutbound18002704560(body);
  //     const res2 = await ContactCenterOutbound18003334444(body);
  //     const res3 = await ContactCenterOutbound18003334451(body);
  //     const res4 = await ContactCenterOutbound18007896540(body);
  //     setData({
  //       ContactCenterOutbound18002704560: res1.data.hits.total.value,
  //       ContactCenterOutbound18003334444: res2.data.hits.total.value,
  //       ContactCenterOutbound18003334451: res3.data.hits.total.value,
  //       ContactCenterOutbound18007896540: res4.data.hits.total.value,
  //       loading: false,
  //     });
  //   } catch (error) {
  //     console.error("Error fetching data: ", error);
  //     setData({ ...data, loading: false });
  //   }
  // };

  // if (data.loading) return <Spinner />;

  return (
    <div>
      {/* <Typography variant="h2" className="py-2">
        Contact Center Outbound
      </Typography> */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <DataCard
            col={6}
            label={"Contact Center - Outbound (18003334451)"}
            data={data.ContactCenterOutbound18002704560}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DataCard
            col={6}
            label={"Contact Center - Outbound (18002704560)"}
            data={data.ContactCenterOutbound18003334444}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DataCard
            col={6}
            label={"Contact Center - Outbound (18003334444)"}
            data={data.ContactCenterOutbound18003334451}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DataCard
            col={6}
            label={"Contact Center - Outbound (18007896540)"}
            data={data.ContactCenterOutbound18007896540}
          />
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  date: state.date,
});

export default connect(mapStateToProps)(ContactCenterOutbound);
