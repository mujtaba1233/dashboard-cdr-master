// import {
//   CallsFromJabberForAndroidSoftPhones,
//   CallsFromJabberForAndroidToExternalDestination,
//   CallsFromJabberForAndroidToIpPhones,
//   CallsFromJabberForAndroidToJabberForAndroidSoftPhones,
//   CallsFromJabberForAndroidToJabberForIOSSoftPhones,
//   CallsFromJabberForAndroidToJabberForWindowsMacSoftPhones,
//   CallsToJabberForAndroidSoftPhones,
//   IncommingExternalCallsToJabberForAndroidSoftPhones,
// } from "../services/jabberForAndroidSoftPhonesCall";
// import Spinner from "../shared/Spinner";
import DataCard from "../../layout/dataCard";
// import moment from "moment";
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Grid, Typography } from '@mui/material';
const JabberForAndroidSoftPhonesCals = ({ date }) => {
  // const [state, setState] = useState({
  //   CallsFromJabberForAndroidSoftPhones: '',
  //   CallsFromJabberForAndroidToExternalDestination: '',
  //   CallsFromJabberForAndroidToIpPhones: '',
  //   CallsFromJabberForAndroidToJabberForAndroidSoftPhones: '',
  //   CallsFromJabberForAndroidToJabberForIOSSoftPhones: '',
  //   CallsFromJabberForAndroidToJabberForWindowsMacSoftPhones: '',
  //   CallsToJabberForAndroidSoftPhones: '',
  //   IncommingExternalCallsToJabberForAndroidSoftPhones: '',
  //   loading: false,
  // });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setState((prevState) => ({ ...prevState, loading: true }));
  //     const current = moment().format();
  //     const body = { current, date: date?.selectedDate };
  //     const res1 = await CallsFromJabberForAndroidSoftPhones(body);
  //     const res2 = await CallsFromJabberForAndroidToExternalDestination(body);
  //     const res3 = await CallsFromJabberForAndroidToIpPhones(body);
  //     const res4 = await CallsFromJabberForAndroidToJabberForAndroidSoftPhones(body);
  //     const res5 = await CallsFromJabberForAndroidToJabberForIOSSoftPhones(body);
  //     const res6 = await CallsFromJabberForAndroidToJabberForWindowsMacSoftPhones(body);
  //     const res7 = await CallsToJabberForAndroidSoftPhones(body);
  //     const res8 = await IncommingExternalCallsToJabberForAndroidSoftPhones(body);

  //     setState({
  //       CallsFromJabberForAndroidSoftPhones: res1.data.hits.total.value,
  //       CallsFromJabberForAndroidToExternalDestination: res2.data.hits.total.value,
  //       CallsFromJabberForAndroidToIpPhones: res3.data.hits.total.value,
  //       CallsFromJabberForAndroidToJabberForAndroidSoftPhones: res4.data.hits.total.value,
  //       CallsFromJabberForAndroidToJabberForIOSSoftPhones: res5.data.hits.total.value,
  //       CallsFromJabberForAndroidToJabberForWindowsMacSoftPhones: res6.data.hits.total.value,
  //       CallsToJabberForAndroidSoftPhones: res7.data.hits.total.value,
  //       IncommingExternalCallsToJabberForAndroidSoftPhones: res8.data.hits.total.value,
  //       loading: false,
  //     });
  //   };

  //   fetchData();
  // }, [date]);

  // if (state.loading) return <Spinner />;

  return (
    // <div>
    //   <Typography variant="h2" className="py-2">
    //     Jabber for Android Soft Phones
    //   </Typography>
    //   <Grid container spacing={3}>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label="Calls from Jabber for Android Soft Phones"
    //         data={state.CallsFromJabberForAndroidSoftPhones}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label="Calls to Jabber for Android Soft Phones"
    //         data={state.CallsToJabberForAndroidSoftPhones}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label="Calls from Jabber for Android to Jabber for Android Soft Phones"
    //         data={state.CallsFromJabberForAndroidToJabberForAndroidSoftPhones}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label="Calls from Jabber for Android to Jabber for Windows/Mac Soft Phones"
    //         data={state.CallsFromJabberForAndroidToJabberForWindowsMacSoftPhones}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label="Calls from Jabber for Android to Jabber for iOS Soft Phones"
    //         data={state.CallsFromJabberForAndroidToJabberForIOSSoftPhones}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label="Calls from Jabber for Android to Ip Phones"
    //         data={state.CallsFromJabberForAndroidToIpPhones}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label="Calls from Jabber for Android to External Destination"
    //         data={state.CallsFromJabberForAndroidToExternalDestination}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label="Incomming External Calls to Jabber for Android Soft Phones"
    //         data={state.IncommingExternalCallsToJabberForAndroidSoftPhones}
    //       />
    //     </Grid>
    //   </Grid>
    // </div>
    <div>
    {/* <Typography variant="h2" className="py-2">
      Jabber for Android Soft Phones
    </Typography> */}
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <DataCard
          label="Calls from Jabber for Android Soft Phones"
          data={432}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DataCard
          label="Calls to Jabber for Android Soft Phones"
          data={2356}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DataCard
          label="Calls from Jabber for Android to Jabber for Android Soft Phones"
          data={2356}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DataCard
          label="Calls from Jabber for Android to Jabber for Windows/Mac Soft Phones"
          data={2356}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DataCard
          label="Calls from Jabber for Android to Jabber for iOS Soft Phones"
          data={2356}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DataCard
          label="Calls from Jabber for Android to Ip Phones"
          data={2356}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DataCard
          label="Calls from Jabber for Android to External Destination"
          data={2356}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DataCard
          label="Incomming External Calls to Jabber for Android Soft Phones"
          data={2356}
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

export default connect(mapStateToProps)(JabberForAndroidSoftPhonesCals);
