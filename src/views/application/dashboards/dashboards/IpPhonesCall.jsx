import React, { Component } from "react";
// import {
//   CallsFromIpPhones,
//   CallsFromIpPhonesToIOSSoftPhones,
//   CallsFromIpPhonesToIpPhones,
//   CallsFromIpPhonesToJabberForAndroidSoftPhones,
//   CallsFromIpPhonesToJabberForWindowsMacSoftPhones,
//   CallsToIpPhones,
//   ExternalIncommingCallsToIpPhones,
//   ExternalOutgoingCallsFromIpPhones,
import {Grid, Typography} from "@mui/material";

// } from "../services/ipPhonesCalls";
import DataCard from "../../layout/dataCard";
// import Spinner from "../shared/Spinner";
// import moment from "moment";
import { connect } from "react-redux";

const IpPhonesCall = ({ date }) => {
  //   const [state, setState] = useState({
  //     CallsFromIpPhones: "",
  //     CallsFromIpPhonesToIOSSoftPhones: "",
  //     CallsFromIpPhonesToIpPhones: "",
  //     CallsFromIpPhonesToJabberForAndroidSoftPhones: "",
  //     CallsFromIpPhonesToJabberForWindowsMacSoftPhones: "",
  //     CallsToIpPhones: "",
  //     ExternalIncommingCallsToIpPhones: "",
  //     ExternalOutgoingCallsFromIpPhones: "",
  //     loading: false,
  //   });

  //   useEffect(() => {
  //     let current = moment().format();
  //     getData(current, date);
  //   }, [date]);

  //   const getData = async (current, date) => {
  //     setState({ ...state, loading: true });
  //     let body = { current: current, date: date };

  //     try {
  //       const res = await CallsFromIpPhones(body);
  //       const res1 = await CallsFromIpPhonesToIOSSoftPhones(body);
  //       const res2 = await CallsFromIpPhonesToIpPhones(body);
  //       const res3 = await CallsFromIpPhonesToJabberForAndroidSoftPhones(body);
  //       const res4 = await CallsFromIpPhonesToJabberForWindowsMacSoftPhones(body);
  //       const res5 = await CallsToIpPhones(body);
  //       const res6 = await ExternalIncommingCallsToIpPhones(body);
  //       const res7 = await ExternalOutgoingCallsFromIpPhones(body);

  //       setState({
  //         ...state,
  //         CallsFromIpPhones: res.data.hits.total.value,
  //         CallsFromIpPhonesToIOSSoftPhones: res1.data.hits.total.value,
  //         CallsFromIpPhonesToIpPhones: res2.data.hits.total.value,
  //         CallsFromIpPhonesToJabberForAndroidSoftPhones: res3.data.hits.total.value,
  //         CallsFromIpPhonesToJabberForWindowsMacSoftPhones: res4.data.hits.total.value,
  //         CallsToIpPhones: res5.data.hits.total.value,
  //         ExternalIncommingCallsToIpPhones: res6.data.hits.total.value,
  //         ExternalOutgoingCallsFromIpPhones: res7.data.hits.total.value,
  //         loading: false
  //       });
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       setState({ ...state, loading: false });
  //     }
  //   };

  //   return null; // Adjust as needed
  // };

  // if (this.state.loading) return <Spinner />;
  return (
    //   <div>
    //   <Typography variant="h2" className="py-2">Ip Phones Calls</Typography>
    //   <Grid container spacing={2}>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label={"Calls From Ip Phones"}
    //         data={CallsFromIpPhones}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label={"Calls to Ip Phones"}
    //         data={CallsToIpPhones}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label={"Calls From Ip Phones to Ip Phones"}
    //         data={CallsFromIpPhonesToIpPhones}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label={"Calls From Ip Phones to iOS soft phones"}
    //         data={CallsFromIpPhonesToIOSSoftPhones}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label={"Calls From Ip Phones to Jabber for Android Soft Phones"}
    //         data={CallsFromIpPhonesToJabberForAndroidSoftPhones}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label={"Calls From Ip Phones to Jabber for Windows/Mac Soft Phones"}
    //         data={CallsFromIpPhonesToJabberForWindowsMacSoftPhones}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label={"External Incomming Calls to Ip Phones"}
    //         data={ExternalIncommingCallsToIpPhones}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label={"External Outgoing Calls from Ip Phones"}
    //         data={ExternalOutgoingCallsFromIpPhones}
    //       />
    //     </Grid>
    //   </Grid>
    // </div>
    <div>
      {/* <Typography variant="h2" className="py-2">Ip Phones Calls</Typography> */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <DataCard
            label={"Calls From Ip Phones"}
            data={123}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DataCard
            label={"Calls to Ip Phones"}
            data={321}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DataCard
            label={"Calls From Ip Phones to Ip Phones"}
            data={344}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DataCard
            label={"Calls From Ip Phones to iOS soft phones"}
            data={930}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DataCard
            label={"Calls From Ip Phones to Jabber for Android Soft Phones"}
            data={239}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DataCard
            label={"Calls From Ip Phones to Jabber for Windows/Mac Soft Phones"}
            data={932}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DataCard
            label={"External Incomming Calls to Ip Phones"}
            data={123}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DataCard
            label={"External Outgoing Calls from Ip Phones"}
            data={432}
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
export default connect(mapStateToProps)(IpPhonesCall);
