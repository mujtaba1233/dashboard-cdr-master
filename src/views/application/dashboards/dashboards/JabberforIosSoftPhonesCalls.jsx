import React, { Component } from "react";
// import {
//   CallsFromJabberForIOSSoftPhones,
//   CallsFromJabberForIOSSoftPhonesToJabberForIOS,
//   CallsFromJabberForIOSToExternalDestination,
//   CallsFromJabberForIOSToIpPhones,
//   CallsFromJabberForIOSToJabberForIOSSoftPhones,
//   CallsFromJabberForIOSToJabberForWindowsMac,
//   CallsToJabberForIOSSoftPhones,
//   ExternalCallsToJabberForIOSSoftPhones,
// } from "../services/jabberForIosSoftPhonesCall";
// import Spinner from "../shared/Spinner";
import DataCard from "../../layout/dataCard";
import { Grid, Typography } from "@mui/material";

// import moment from "moment";
import { connect } from "react-redux";

const JabberForIosSoftPhonesCals = ({ date }) => {
  // const [state, setState] = useState({
  //   CallsFromJabberForIOSSoftPhones: "",
  //   CallsFromJabberForIOSSoftPhonesToJabberForIOS: "",
  //   CallsFromJabberForIOSToExternalDestination: "",
  //   CallsFromJabberForIOSToIpPhones: "",
  //   CallsFromJabberForIOSToJabberForIOSSoftPhones: "",
  //   CallsFromJabberForIOSToJabberForWindowsMac: "",
  //   CallsToJabberForIOSSoftPhones: "",
  //   ExternalCallsToJabberForIOSSoftPhones: "",
  //   loading: false,
  // });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setState({ ...state, loading: true });
  //       let current = moment().format();
  //       let dateParam = date?.selectedDate;
  //       let body = { current: current, date: dateParam };

  //       const res = await CallsFromJabberForIOSSoftPhones(body);
  //       const res1 = await CallsFromJabberForIOSSoftPhonesToJabberForIOS(body);
  //       const res2 = await CallsFromJabberForIOSToExternalDestination(body);
  //       const res3 = await CallsFromJabberForIOSToIpPhones(body);
  //       const res4 = await CallsFromJabberForIOSToJabberForIOSSoftPhones(body);
  //       const res5 = await CallsFromJabberForIOSToJabberForWindowsMac(body);
  //       const res6 = await CallsToJabberForIOSSoftPhones(body);
  //       const res7 = await ExternalCallsToJabberForIOSSoftPhones(body);

  //       setState({
  //         ...state,
  //         CallsFromJabberForIOSSoftPhones: res.data.hits.total.value,
  //         CallsFromJabberForIOSSoftPhonesToJabberForIOS: res1.data.hits.total.value,
  //         CallsFromJabberForIOSToExternalDestination: res2.data.hits.total.value,
  //         CallsFromJabberForIOSToIpPhones: res3.data.hits.total.value,
  //         CallsFromJabberForIOSToJabberForIOSSoftPhones: res4.data.hits.total.value,
  //         CallsFromJabberForIOSToJabberForWindowsMac: res5.data.hits.total.value,
  //         CallsToJabberForIOSSoftPhones: res6.data.hits.total.value,
  //         ExternalCallsToJabberForIOSSoftPhones: res7.data.hits.total.value,
  //         loading: false,
  //       });
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       setState({ ...state, loading: false });
  //     }
  //   };

  //   fetchData();
  // }, [date]); // Fetch data whenever the date prop changes

  // if (state.loading) return <Spinner />;

  return (
    // <div>
    //   <Typography variant="h2" className="py-2">Jabber for iOS Soft Phones</Typography>
    //   <Grid container marginTop={2} spacing={2}>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label={"Calls to Jabber for iOS Soft Phones"}
    //         data={state.CallsToJabberForIOSSoftPhones}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label={"Calls from Jabber for iOS Soft Phones"}
    //         data={state.CallsFromJabberForIOSSoftPhones}
    //       />
    //     </Grid>
    //   </Grid>
    //   <Grid container marginTop={2} spacing={2}>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label={"Calls from Jabber for iOS to Ip Phones"}
    //         data={state.CallsFromJabberForIOSToIpPhones}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label={"Calls from Jabber for iOS Soft Phones to Jabber for iOS"}
    //         data={state.CallsFromJabberForIOSSoftPhonesToJabberForIOS}
    //       />
    //     </Grid>
    //   </Grid>
    //   <Grid container marginTop={2} spacing={2}>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label={"Calls from Jabber for iOS to Jabber for Windows/Mac"}
    //         data={state.CallsFromJabberForIOSToJabberForWindowsMac}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label={"Calls From Jabber for iOS to Jabber for iOS Soft Phones"}
    //         data={state.CallsFromJabberForIOSToJabberForIOSSoftPhones}
    //       />
    //     </Grid>
    //   </Grid>
    //   <Grid container marginTop={2} spacing={2}>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label={"Calls from Jabber for iOS to External Destination"}
    //         data={state.CallsFromJabberForIOSToExternalDestination}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label={"External Calls to Jabber for iOS Soft Phones"}
    //         data={state.ExternalCallsToJabberForIOSSoftPhones}
    //       />
    //     </Grid>
    //   </Grid>
    // </div>
    <div>
      {/* <Typography variant="h2" className="py-2">Jabber for iOS Soft Phones</Typography> */}
      <Grid container marginTop={2} spacing={2}>
        <Grid item xs={12} sm={6}>
          <DataCard
            label={"Calls to Jabber for iOS Soft Phones"}
            data={123}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DataCard
            label={"Calls from Jabber for iOS Soft Phones"}
            data={321}
          />
        </Grid>
      </Grid>
      <Grid container marginTop={2} spacing={2}>
        <Grid item xs={12} sm={6}>
          <DataCard
            label={"Calls from Jabber for iOS to Ip Phones"}
            data={891}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DataCard
            label={"Calls from Jabber for iOS Soft Phones to Jabber for iOS"}
            data={892}
          />
        </Grid>
      </Grid>
      <Grid container marginTop={2} spacing={2}>
        <Grid item xs={12} sm={6}>
          <DataCard
            label={"Calls from Jabber for iOS to Jabber for Windows/Mac"}
            data={912}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DataCard
            label={"Calls From Jabber for iOS to Jabber for iOS Soft Phones"}
            data={891}
          />
        </Grid>
      </Grid>
      <Grid container marginTop={2} spacing={2}>
        <Grid item xs={12} sm={6}>
          <DataCard
            label={"Calls from Jabber for iOS to External Destination"}
            data={892}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DataCard
            label={"External Calls to Jabber for iOS Soft Phones"}
            data={9021}
          />
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  date: state.date,
});

export default connect(mapStateToProps)(JabberForIosSoftPhonesCals);