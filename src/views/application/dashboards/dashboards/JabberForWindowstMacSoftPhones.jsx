import React, { Component, useState } from "react";
import { Grid, Typography } from "@mui/material";

// import {
//   CallsFromJabberForWindowsMac,
//   CallsFromJabberForWindowsMacToExternalDestination,
//   CallsFromJabberForWindowsMacToIpPhones,
//   CallsFromJabberForWindowsMacToJabberForAndroid,
//   CallsFromJabberForWindowsMacToJabberForIOS,
//   CallsFromJabberForWindowsMacToJabberForWindowsMac,
//   CallsToJabberForWindowsMac,
//   ExternalIncommingCallsToJabberForWindowsMac,
// } from "../services/jabberForWindowsMacSoftPhones";
// import Spinner from "../shared/Spinner";
import DataCard from "../../layout/dataCard";
// import moment from "moment";
import { connect } from "react-redux";

const JabberForWindowsMacSoftPhones = ({ date }) => {
  // const [state, setState] = useState({
  //   CallsFromJabberForWindowsMac: "",
  //   CallsFromJabberForWindowsMacToExternalDestination: "",
  //   CallsFromJabberForWindowsMacToIpPhones: "",
  //   CallsFromJabberForWindowsMacToJabberForAndroid: "",
  //   CallsFromJabberForWindowsMacToJabberForIOS: "",
  //   CallsFromJabberForWindowsMacToJabberForWindowsMac: "",
  //   CallsToJabberForWindowsMac: "",
  //   ExternalIncommingCallsToJabberForWindowsMac: "",
  //   loading: false,
  // });

  // useEffect(() => {
  //   let current = moment().format();
  //   getData(current, date);
  // }, [date]);

  // const getData = async (current, date) => {
  //   setState({ ...state, loading: true });
  //   let body = { current: current, date: date };

  //   try {
  //     const res = await CallsFromJabberForWindowsMac(body);
  //     const res1 = await CallsFromJabberForWindowsMacToExternalDestination(body);
  //     const res2 = await CallsFromJabberForWindowsMacToIpPhones(body);
  //     const res3 = await CallsFromJabberForWindowsMacToJabberForAndroid(body);
  //     const res4 = await CallsFromJabberForWindowsMacToJabberForIOS(body);
  //     const res5 = await CallsFromJabberForWindowsMacToJabberForWindowsMac(body);
  //     const res6 = await CallsToJabberForWindowsMac(body);
  //     const res7 = await ExternalIncommingCallsToJabberForWindowsMac(body);

  //     setState({
  //       ...state,
  //       CallsFromJabberForWindowsMac: res.data.hits.total.value,
  //       CallsFromJabberForWindowsMacToExternalDestination: res1.data.hits.total.value,
  //       CallsFromJabberForWindowsMacToIpPhones: res2.data.hits.total.value,
  //       CallsFromJabberForWindowsMacToJabberForAndroid: res3.data.hits.total.value,
  //       CallsFromJabberForWindowsMacToJabberForIOS: res4.data.hits.total.value,
  //       CallsFromJabberForWindowsMacToJabberForWindowsMac: res5.data.hits.total.value,
  //       CallsToJabberForWindowsMac: res6.data.hits.total.value,
  //       ExternalIncommingCallsToJabberForWindowsMac: res7.data.hits.total.value,
  //       loading: false
  //     });
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     setState({ ...state, loading: false });
  //   }
  // };

  // if (this.state.loading) return <Spinner />;
  return (
    // <div>
    //   <Typography variant="h2" className="py-2">Jabber for Windows/Mac Soft Phones</Typography>
    //   <Grid container marginTop={2} spacing={2}>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label={"Calls from Jabber for Windows/Mac"}
    //         data={state.CallsFromJabberForWindowsMac}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label={"Calls to Jabber for Windows/Mac"}
    //         data={state.CallsToJabberForWindowsMac}
    //       />
    //     </Grid>
    //   </Grid>
    //   <Grid container marginTop={2} spacing={2}>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label={"Calls from Jabber for Windows/Mac to Ip Phones"}
    //         data={state.CallsFromJabberForWindowsMacToIpPhones}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label={"Calls from Jabber for Windows/Mac to Jabber for Windows/Mac"}
    //         data={state.CallsFromJabberForWindowsMacToJabberForWindowsMac}
    //       />
    //     </Grid>
    //   </Grid>
    //   <Grid container marginTop={2} spacing={2}>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label={"Calls from Jabber for Windows/Mac to Jabber for iOS"}
    //         data={state.CallsFromJabberForWindowsMacToJabberForIOS}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label={"Calls from Jabber for Windows/Mac to Jabber for Android"}
    //         data={state.CallsFromJabberForWindowsMacToJabberForAndroid}
    //       />
    //     </Grid>
    //   </Grid>
    //   <Grid container marginTop={2} spacing={2}>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label={"Calls from Jabber for Windows/Mac to External Destination"}
    //         data={state.CallsFromJabberForWindowsMacToExternalDestination}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label={"External Incomming Calls to Jabber for Windows/Mac"}
    //         data={state.ExternalIncommingCallsToJabberForWindowsMac}
    //       />
    //     </Grid>
    //   </Grid>
    // </div>
    <div>
      {/* <Typography variant="h2" className="py-2">Jabber for Windows/Mac Soft Phones</Typography> */}
      <Grid container marginTop={2}  spacing={2}>
        <Grid item xs={12} sm={6}>
          <DataCard
            label={"Calls from Jabber for Windows/Mac"}
            data={892}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DataCard
            label={"Calls to Jabber for Windows/Mac"}
            data={2893}
          />
        </Grid>
      </Grid>
      <Grid container marginTop={2} spacing={2}>
        <Grid item xs={12} sm={6}>
          <DataCard
            label={"Calls from Jabber for Windows/Mac to Ip Phones"}
            data={2839}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DataCard
            label={"Calls from Jabber for Windows/Mac to Jabber for Windows/Mac"}
            data={8922}
          />
        </Grid>
      </Grid>
      <Grid container marginTop={2} spacing={2}>
        <Grid item xs={12} sm={6}>
          <DataCard
            label={"Calls from Jabber for Windows/Mac to Jabber for iOS"}
            data={283}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DataCard
            label={"Calls from Jabber for Windows/Mac to Jabber for Android"}
            data={2902}
          />
        </Grid>
      </Grid>
      <Grid container marginTop={2} spacing={2}>
        <Grid item xs={12} sm={6}>
          <DataCard
            label={"Calls from Jabber for Windows/Mac to External Destination"}
            data={8922}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DataCard
            label={"External Incomming Calls to Jabber for Windows/Mac"}
            data={4390}
          />
        </Grid>
      </Grid>
    </div>
  );
}
const mapStateToProps = function (state) {
  return {
    date: state.date,
  }
}
export default connect(mapStateToProps)(JabberForWindowsMacSoftPhones);
