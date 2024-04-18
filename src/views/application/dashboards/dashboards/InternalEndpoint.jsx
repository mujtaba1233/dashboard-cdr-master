import React, { useState, useEffect } from "react";
import DoughnutChart from "../../charts/DoughnutChart";
import PieChart from "../../charts/PieChart";
import { Typography, Grid } from "@mui/material";

// import {
//   CallsBetweenInternalDevicesOnly,
//   CallsFromInternalEndpoint,
//   CallsFromInternalEndpointsToVoiceMail,
//   CallsFromInternalEndpointToExternalDestination,
//   CallsToInternalEndpoints,
//   ExternalIncomingCallsToInternalEndpoints,
//   CallsToInternalByDuration,
//   CallsFromInternalByDuration,
// } from "../services/internalEndPoint";
// import Spinner from "../shared/Spinner";
import DataCard from "../../layout/dataCard";
import ChartCard from "../../layout/chartCard";
// import moment from "moment";
import { connect } from "react-redux";

const InternalEndpoint = ({ date }) => {
  // const [data, setData] = useState({
  //   CallsBetweenInternalDevicesOnly: "",
  //   CallsFromInternalEndpoint: "",
  //   CallsFromInternalEndpointToExternalDestination: "",
  //   CallsToInternalEndpoints: "",
  //   ExternalIncomingCallsToInternalEndpoints: "",
  //   CallsFromInternalEndpointsToVoiceMail: "",
  //   CallsToInternalByDuration: "",
  //   CallsFromInternalByDuration: "",
  //   loading: false,
  // });

  // useEffect(() => {
  //   fetchData();
  // }, [date]);

  // const fetchData = async () => {
  //   setData((prevData) => ({ ...prevData, loading: true }));
  //   const current = moment().format();
  //   const body = { current, date: date?.selectedDate };

  //   const responses = await Promise.all([
  //     CallsBetweenInternalDevicesOnly(body),
  //     CallsFromInternalEndpoint(body),
  //     CallsFromInternalEndpointToExternalDestination(body),
  //     CallsToInternalEndpoints(body),
  //     ExternalIncomingCallsToInternalEndpoints(body),
  //     CallsFromInternalEndpointsToVoiceMail(body),
  //     CallsToInternalByDuration(body),
  //     CallsFromInternalByDuration(body),
  //   ]);

  //   setData({
  //     CallsBetweenInternalDevicesOnly: responses[0].data.hits.total.value,
  //     CallsFromInternalEndpoint: responses[1].data.hits.total.value,
  //     CallsFromInternalEndpointToExternalDestination:
  //       responses[2].data.hits.total.value,
  //     CallsToInternalEndpoints: responses[3].data.hits.total.value,
  //     ExternalIncomingCallsToInternalEndpoints:
  //       responses[4].data.hits.total.value,
  //     CallsFromInternalEndpointsToVoiceMail:
  //       responses[5].data.hits.total.value,
  //     CallsToInternalByDuration: responses[6].data,
  //     CallsFromInternalByDuration: responses[7].data,
  //     loading: false,
  //   });
  // };

  // if (data.loading) return <Spinner />;

  // const total1 =
  //   data.CallsToInternalByDuration && data.CallsToInternalByDuration.hits.total;
  // const labels1 =
  //   data.CallsToInternalByDuration &&
  //   Object.keys(data.CallsToInternalByDuration.aggregations["2"].buckets);
  // const data1 =
  //   data.CallsToInternalByDuration &&
  //   Object.values(
  //     data.CallsToInternalByDuration.aggregations["2"].buckets
  //   ).map((e) => e.doc_count);

  // const total2 =
  //   data.CallsFromInternalByDuration &&
  //   data.CallsFromInternalByDuration.hits.total;
  // const labels2 =
  //   data.CallsFromInternalByDuration &&
  //   Object.keys(data.CallsFromInternalByDuration.aggregations["2"].buckets);
  // const data2 =
  //   data.CallsFromInternalByDuration &&
  //   Object.values(
  //     data.CallsFromInternalByDuration.aggregations["2"].buckets
  //   ).map((e) => e.doc_count);

  return (
    // <div>
    //   {/* <h2 className="py-2">Internal Endpoints Focus</h2> */}
    //   <div className="row">
    //     <DataCard
    //       col={4}
    //       label={"Calls Between Internal Devices Only"}
    //       data={data.CallsBetweenInternalDevicesOnly}
    //     />
    //     <DataCard
    //       col={4}
    //       label={"Calls from Internal Endpoint"}
    //       data={data.CallsFromInternalEndpoint}
    //     />
    //     <DataCard
    //       col={4}
    //       label={"Calls from Internal Endpoint to External Destination"}
    //       data={data.CallsFromInternalEndpointToExternalDestination}
    //     />
    //   </div>
    //   <div className="row">
    //     <DataCard
    //       col={4}
    //       label={"Calls to Internal Endpoints"}
    //       data={data.CallsToInternalEndpoints}
    //     />
    //     <DataCard
    //       col={4}
    //       label={"External Incoming Calls to Internal Endpoints"}
    //       data={data.ExternalIncomingCallsToInternalEndpoints}
    //     />
    //     <DataCard
    //       col={4}
    //       label={"Calls from Internal Endpoints to Voice Mail"}
    //       data={data.CallsFromInternalEndpointsToVoiceMail}
    //     />
    //   </div>
    //   <div className="row">
    //     <ChartCard
    //       col={6}
    //       label={" Calls To Internal Endpoint by Duration"}
    //       data={<DoughnutChart total={total1} labels={labels1} data={data1} />}
    //     />
    //     <ChartCard
    //       col={6}
    //       label={"Calls From Internal Endpoints by Duration"}
    //       data={<PieChart total={total2} labels={labels2} data={data2} />}
    //     />
    //   </div>
    // </div>
      <div>
        {/* <Typography variant="h2" className="py-2">
          Internal Endpoints Focus
        </Typography> */}
        <Grid container spacing={3} sx={{ marginBottom: 3 }}>
          <Grid item xs={12} sm={6} md={4}>
            <DataCard
              label={"Calls Between Internal Devices Only"}
              data={150} // Example value: replace with actual data
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DataCard
              label={"Calls from Internal Endpoint"}
              data={200} // Example value: replace with actual data
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DataCard
              label={"Calls from Internal Endpoint to External Destination"}
              data={100} // Example value: replace with actual data
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ marginBottom: 3 }}>
          <Grid item xs={12} sm={6} md={4}>
            <DataCard
              label={"Calls to Internal Endpoints"}
              data={50} // Example value: replace with actual data
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DataCard
              label={"External Incoming Calls to Internal Endpoints"}
              data={80} // Example value: replace with actual data
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DataCard
              label={"Calls from Internal Endpoints to Voice Mail"}
              data={120} // Example value: replace with actual data
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <ChartCard
              label={"Calls To Internal Endpoint by Duration"}
              data={<DoughnutChart labels={["Short", "Medium", "Long"]} data={[400, 300, 300]} />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ChartCard
              label={"Calls From Internal Endpoints by Duration"}
              data={<PieChart labels={["Node 1", "Node 2", "Node 3"]} data={[200, 100, 100]} />}
            />
          </Grid>
        </Grid>
      </div>
    );
};

const mapStateToProps = (state) => {
  return {
    date: state.date,
  };
};

export default connect(mapStateToProps)(InternalEndpoint);
