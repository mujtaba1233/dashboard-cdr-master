import React, { useState, useEffect } from "react";
import DoughnutChart from "../../charts/DoughnutChart";
import { Grid, Typography } from "@mui/material"; // Import Material-UI components

// import {
//   Emergency911CallsByDestinationCode,
//   Emergency911CallsByDuration,
//   Emergency911CallsBySIPTrunk,
//   Emergency911CallsBySourceCode,
//   Outbound911EmergencyCalls,
//   Emergency911CallsByDuration1,
// } from "../services/emergencyCalls";
// import Spinner from "../shared/Spinner";
import DataCard from "../../layout/dataCard";
import SeriesCard from "../../layout/seriesCard";
import ChartCard from "../../layout/chartCard";
// import moment from "moment";
import { connect } from "react-redux";

const EmergencyCalls = ({ date }) => {
  const [emergencyData, setEmergencyData] = useState({
    Emergency911CallsByDestinationCode: "",
    Emergency911CallsByDuration1: "",
    Emergency911CallsByDuration: "",
    Emergency911CallsBySIPTrunk: "",
    Emergency911CallsBySourceCode: "",
    Outbound911EmergencyCalls: "",
    loading: false,
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const current = moment().format();
  //     const selectedDate = date?.selectedDate;
  //     setEmergencyData((prevData) => ({ ...prevData, loading: true }));
  //     const body = { current, date: selectedDate };

  //     const res1 = await Emergency911CallsByDestinationCode(body);
  //     const res2 = await Emergency911CallsByDuration(body);
  //     const res3 = await Emergency911CallsBySIPTrunk(body);
  //     const res4 = await Emergency911CallsBySourceCode(body);
  //     const res5 = await Outbound911EmergencyCalls(body);
  //     const res6 = await Emergency911CallsByDuration1(body);

  //     setEmergencyData({
  //       Emergency911CallsByDestinationCode: res1.data && res1.data,
  //       Emergency911CallsByDuration: res2.data && res2.data,
  //       Emergency911CallsBySIPTrunk: res3.data && res3.data,
  //       Emergency911CallsBySourceCode: res4.data && res4.data,
  //       Outbound911EmergencyCalls: res5.data && res5.data.hits.total.value,
  //       Emergency911CallsByDuration1: res6.data && res6.data,
  //       loading: false,
  //     });
  //   };

  //   fetchData();
  // }, [date]);

  // const { loading, Emergency911CallsByDuration, Emergency911CallsBySIPTrunk, Emergency911CallsByDuration1, Emergency911CallsBySourceCode, Emergency911CallsByDestinationCode, Outbound911EmergencyCalls } = emergencyData;

  // if (loading) return <Spinner />;

  // let labels1 = Emergency911CallsByDuration && Object.keys(Emergency911CallsByDuration.aggregations["2"].buckets);
  // let data1 = Emergency911CallsByDuration && Object.values(Emergency911CallsByDuration.aggregations["2"].buckets).map((e) => e.doc_count);

  // let labels2 = Emergency911CallsBySIPTrunk && Emergency911CallsBySIPTrunk.aggregations["2"].buckets.map((e) => e.key);
  // let data2 = Emergency911CallsBySIPTrunk && Emergency911CallsBySIPTrunk.aggregations["2"].buckets.map((e) => e.doc_count);

  // let labels3 = Emergency911CallsByDuration1 && Object.keys(Emergency911CallsByDuration1.aggregations["2"].buckets);
  // let data3 = Emergency911CallsByDuration1 && Object.values(Emergency911CallsByDuration1.aggregations["2"].buckets).map((e) => e.doc_count);

  // let labels4 = Emergency911CallsBySourceCode && Emergency911CallsBySourceCode.aggregations["2"].buckets.map((e) => e.key);
  // let data4 = Emergency911CallsBySourceCode && Emergency911CallsBySourceCode.aggregations["2"].buckets.map((e) => e.doc_count);

  // let labels5 = Emergency911CallsByDestinationCode && Emergency911CallsByDestinationCode.aggregations["2"].buckets.map((e) => e.key);
  // let data5 = Emergency911CallsByDestinationCode && Emergency911CallsByDestinationCode.aggregations["2"].buckets.map((e) => e.doc_count);

  return (
    <div>
      {/* <Typography variant="h2" className="py-2">Emergency Calls</Typography> */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <DataCard
            col={4}
            label={"Outbound 911 Emergency Calls"}
            data={<Typography variant="h2" className="p-4">50</Typography>}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <SeriesCard
            title={"Emergency 911 calls by Duration"}
            labels={[
              <Typography variant="body1" className="text-primary">Label 1</Typography>,
              <Typography variant="body1" className="text-primary">Label 2</Typography>,
              <Typography variant="body1" className="text-primary">Label 3</Typography>
            ]}
            data={[
              <Typography variant="h2" className="text-success">20</Typography>,
              <Typography variant="h2" className="text-success">30</Typography>,
              <Typography variant="h2" className="text-success">40</Typography>
            ]}
          />
        </Grid>
      {/* </Grid>
      <Grid container spacing={3}> */}
        <Grid item xs={12} md={6}>
          <ChartCard
            col={6}
            label={"Emergency 911 Calls by SIP Trunk"}
            data={<DoughnutChart labels={["Label 1", "Label 2", "Label 3"]} data={[10, 20, 30]} />}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartCard
            col={6}
            label={"Emergency 911 Calls by Duration"}
            data={<DoughnutChart labels={["Label 1", "Label 2", "Label 3"]} data={[15, 25, 35]} />}
          />
        </Grid>
      {/* </Grid>
      <Grid container spacing={3}> */}
        <Grid item xs={12} md={6}>
          <ChartCard
            col={6}
            label={"Emergency 911 Calls by Source Code"}
            data={<DoughnutChart labels={["Label 1", "Label 2", "Label 3"]} data={[18, 28, 38]} />}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartCard
            col={6}
            label={"Emergency 911 Calls by Destination Code"}
            data={<DoughnutChart labels={["Label 1", "Label 2", "Label 3"]} data={[25, 35, 45]} />}
          />
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = function (state) {
  return {
    date: state.date,
  };
};

export default connect(mapStateToProps)(EmergencyCalls);
