import React, { Component } from "react";
import DoughnutChart from "../../charts/DoughnutChart";
import DataCard from '../../layout/dataCard'
import ChartCard from '../../layout/chartCard'
// import {
//   ExternalIncommingCallsToVoiceMaiBySIPTrunk,
//   ExternalIncommingCallsToVoiceMaiByServerName,
//   ExternalIncommingCallsToVoiceMailByDestinationCodec,
//   ExternalIncommingCallsToVoiceMailByDestinationNodeId,
//   ExternalIncommingCallsToVoiceMailByDuration,
//   ExternalIncommingCallsToVoiceMailByOriginNodeId,
//   ExternalIncommingCallsToVoiceMailBySourceCodec,
//   ExternalIncommingCallsToVoiceMailCount,
//   ExternalIncommingCallsToVoiceMailPublisher,
//   ExternalIncommingCallsToVoiceMailSubscriber,
// } from "../services/externalIncommingCallsToVoice";
// import Spinner from "../shared/Spinner";
import { Grid, Typography } from "@mui/material";

// import moment from "moment";
import { connect } from "react-redux";
const ExternalIncommingCallsToVoiceMail = ({date}) => {
  // const [state, setState] = useState({
  //   ExternalIncommingCallsToVoiceMaiBySIPTrunk: "",
  //   ExternalIncommingCallsToVoiceMaiByServerName: "",
  //   ExternalIncommingCallsToVoiceMailByDestinationCodec: "",
  //   ExternalIncommingCallsToVoiceMailByDestinationNodeId: "",
  //   ExternalIncommingCallsToVoiceMailByDuration: "",
  //   ExternalIncommingCallsToVoiceMailByOriginNodeId: "",
  //   ExternalIncommingCallsToVoiceMailBySourceCodec: "",
  //   ExternalIncommingCallsToVoiceMailCount: "",
  //   ExternalIncommingCallsToVoiceMailPublisher: "",
  //   ExternalIncommingCallsToVoiceMailSubscriber: "",
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
  //     const res = await ExternalIncommingCallsToVoiceMaiBySIPTrunk(body);
  //     const res1 = await ExternalIncommingCallsToVoiceMaiByServerName(body);
  //     const res2 = await ExternalIncommingCallsToVoiceMailByDestinationCodec(body);
  //     const res3 = await ExternalIncommingCallsToVoiceMailByDestinationNodeId(body);
  //     const res4 = await ExternalIncommingCallsToVoiceMailByDuration(body);
  //     const res5 = await ExternalIncommingCallsToVoiceMailByOriginNodeId(body);
  //     const res6 = await ExternalIncommingCallsToVoiceMailBySourceCodec(body);
  //     const res7 = await ExternalIncommingCallsToVoiceMailCount(body);
  //     const res8 = await ExternalIncommingCallsToVoiceMailPublisher(body);
  //     const res9 = await ExternalIncommingCallsToVoiceMailSubscriber(body);

  //     setState({
  //       ...state,
  //       ExternalIncommingCallsToVoiceMaiBySIPTrunk: res.data,
  //       ExternalIncommingCallsToVoiceMaiByServerName: res1.data,
  //       ExternalIncommingCallsToVoiceMailByDestinationCodec: res2.data,
  //       ExternalIncommingCallsToVoiceMailByDestinationNodeId: res3.data,
  //       ExternalIncommingCallsToVoiceMailByDuration: res4.data,
  //       ExternalIncommingCallsToVoiceMailByOriginNodeId: res5.data,
  //       ExternalIncommingCallsToVoiceMailBySourceCodec: res6.data,
  //       ExternalIncommingCallsToVoiceMailCount: res7.data.hits.total.value,
  //       ExternalIncommingCallsToVoiceMailPublisher: res8.data.hits.total.value,
  //       ExternalIncommingCallsToVoiceMailSubscriber: res9.data.hits.total.value,
  //       loading: false
  //     });
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     setState({ ...state, loading: false });
  //   }
  // };

  // if (state.loading) return <Spinner />;
  // let total1 =
  //   state.ExternalIncommingCallsToVoiceMaiByServerName &&
  //   state.ExternalIncommingCallsToVoiceMaiByServerName.hits;
  // let labels1 =
  //   state.ExternalIncommingCallsToVoiceMaiByServerName &&
  //   state.ExternalIncommingCallsToVoiceMaiByServerName.aggregations[
  //     "2"
  //   ].buckets.map((el) => el.key);
  // let data1 =
  //   state.ExternalIncommingCallsToVoiceMaiByServerName &&
  //   Object.values(
  //     state.ExternalIncommingCallsToVoiceMaiByServerName.aggregations[
  //       "2"
  //     ].buckets
  //   ).map((e) => e.doc_count);
  // let total2 =
  //   state.ExternalIncommingCallsToVoiceMaiBySIPTrunk &&
  //   state.ExternalIncommingCallsToVoiceMaiBySIPTrunk.hits;
  // let labels2 =
  //   state.ExternalIncommingCallsToVoiceMaiBySIPTrunk &&
  //   state.ExternalIncommingCallsToVoiceMaiBySIPTrunk.aggregations[
  //     "2"
  //   ].buckets.map((el) => el.key);
  // let data2 =
  //   state.ExternalIncommingCallsToVoiceMaiBySIPTrunk &&
  //   Object.values(
  //     state.ExternalIncommingCallsToVoiceMaiBySIPTrunk.aggregations["2"]
  //       .buckets
  //   ).map((e) => e.doc_count);
  // let total3 =
  //   state.ExternalIncommingCallsToVoiceMailByDuration &&
  //   state.ExternalIncommingCallsToVoiceMailByDuration.hits;
  // let labels3 =
  //   state.ExternalIncommingCallsToVoiceMailByDuration &&
  //   Object.keys(
  //     state.ExternalIncommingCallsToVoiceMailByDuration.aggregations["2"]
  //       .buckets
  //   ).map((el) => el);
  // let data3 =
  //   state.ExternalIncommingCallsToVoiceMailByDuration &&
  //   Object.values(
  //     state.ExternalIncommingCallsToVoiceMailByDuration.aggregations["2"]
  //       .buckets
  //   ).map((e) => e.doc_count);
  // let total4 =
  //   state.ExternalIncommingCallsToVoiceMailBySourceCodec &&
  //   state.ExternalIncommingCallsToVoiceMailBySourceCodec.hits;
  // let labels4 =
  //   state.ExternalIncommingCallsToVoiceMailBySourceCodec &&
  //   state.ExternalIncommingCallsToVoiceMailBySourceCodec.aggregations[
  //     "2"
  //   ].buckets.map((el) => el.key);
  // let data4 =
  //   state.ExternalIncommingCallsToVoiceMailBySourceCodec &&
  //   Object.values(
  //     state.ExternalIncommingCallsToVoiceMailBySourceCodec.aggregations[
  //       "2"
  //     ].buckets
  //   ).map((e) => e.doc_count);
  // let total5 =
  //   state.ExternalIncommingCallsToVoiceMailByDestinationCodec &&
  //   state.ExternalIncommingCallsToVoiceMailByDestinationCodec.hits;
  // let labels5 =
  //   state.ExternalIncommingCallsToVoiceMailByDestinationCodec &&
  //   state.ExternalIncommingCallsToVoiceMailByDestinationCodec.aggregations[
  //     "2"
  //   ].buckets.map((el) => el.key);
  // let data5 =
  //   state.ExternalIncommingCallsToVoiceMailByDestinationCodec &&
  //   Object.values(
  //     state.ExternalIncommingCallsToVoiceMailByDestinationCodec
  //       .aggregations["2"].buckets
  //   ).map((e) => e.doc_count);
  // let total6 =
  //   state.ExternalIncommingCallsToVoiceMailByOriginNodeId &&
  //   state.ExternalIncommingCallsToVoiceMailByOriginNodeId.hits;
  // let labels6 =
  //   state.ExternalIncommingCallsToVoiceMailByOriginNodeId &&
  //   state.ExternalIncommingCallsToVoiceMailByOriginNodeId.aggregations[
  //     "2"
  //   ].buckets.map((el) => el.key);
  // let data6 =
  //   state.ExternalIncommingCallsToVoiceMailByOriginNodeId &&
  //   Object.values(
  //     state.ExternalIncommingCallsToVoiceMailByOriginNodeId.aggregations[
  //       "2"
  //     ].buckets
  //   ).map((e) => e.doc_count);
  // let total7 =
  //   state.ExternalIncommingCallsToVoiceMailByDestinationNodeId &&
  //   state.ExternalIncommingCallsToVoiceMailByDestinationNodeId.hits;
  // let labels7 =
  //   state.ExternalIncommingCallsToVoiceMailByDestinationNodeId &&
  //   state.ExternalIncommingCallsToVoiceMailByDestinationNodeId.aggregations[
  //     "2"
  //   ].buckets.map((el) => el.key);
  // let data7 =
  //   state.ExternalIncommingCallsToVoiceMailByDestinationNodeId &&
  //   Object.values(
  //     state.ExternalIncommingCallsToVoiceMailByDestinationNodeId
  //       .aggregations["2"].buckets
  //   ).map((e) => e.doc_count);
  return (
    // <div>
    //   <Typography variant="h2" className="py-2">External Incomming Calls to Voice Mail</Typography>
    //   <Grid container spacing={2}>
    //     <Grid item xs={12} sm={4}>
    //       <DataCard
    //         label={"External Incomming Calls to Voice Mail (Count)"}
    //         data={ExternalIncommingCallsToVoiceMailCount}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={4}>
    //       <DataCard
    //         label={"External Incomming Calls to Voice Mail (Publisher)"}
    //         data={ExternalIncommingCallsToVoiceMailPublisher}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={4}>
    //       <DataCard
    //         label={"External Incomming Calls to Voice Mail (Subscriber)"}
    //         data={ExternalIncommingCallsToVoiceMailSubscriber}
    //       />
    //     </Grid>
    //     <Grid item xs={12}>
    //       <ChartCard
    //         label={"External Incomming Calls to Voice Mail by Server Name"}
    //         data={<DoughnutChart data={data1} labels={labels1} />}
    //       />
    //     </Grid>
    //     <Grid item xs={12}>
    //       <ChartCard
    //         label={"External Incomming Calls to Voice Mai by SIP Trunk"}
    //         data={<DoughnutChart data={data2} labels={labels2} />}
    //       />
    //     </Grid>
    //     <Grid item xs={12}>
    //       <ChartCard
    //         label={"External Incomming Calls to Voice Mail by Duration"}
    //         data={<DoughnutChart data={data3} labels={labels3} />}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <ChartCard
    //         label={"External Incomming Calls to Voice Mail by Source Codec"}
    //         data={<DoughnutChart data={data4} labels={labels4} />}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <ChartCard
    //         label={"External Incomming Calls to Voice Mail by Destination Codec"}
    //         data={<DoughnutChart data={data5} labels={labels5} />}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <ChartCard
    //         label={"External Incomming Calls to Voice Mail by Origin Node Idc"}
    //         data={<DoughnutChart data={data6} labels={labels6} />}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <ChartCard
    //         label={"External Incomming Calls to Voice Mail by Destination Node Id"}
    //         data={<DoughnutChart data={data7} labels={labels7} />}
    //       />
    //     </Grid>
    //   </Grid>
    // </div>
    <div>
      <Typography variant="h2" className="py-2">External Incomming Calls to Voice Mail</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <DataCard
            label={"External Incomming Calls to Voice Mail (Count)"}
            data={311}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <DataCard
            label={"External Incomming Calls to Voice Mail (Publisher)"}
            data={211}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <DataCard
            label={"External Incomming Calls to Voice Mail (Subscriber)"}
            data={312}
          />
        </Grid>
        <Grid item xs={12}>
          <ChartCard
            label={"External Incomming Calls to Voice Mail by Server Name"}
            data={<DoughnutChart labels={["Label1", "Label2"]} data={[50, 50]} />}
          />
        </Grid>
        <Grid item xs={12}>
          <ChartCard
            label={"External Incomming Calls to Voice Mai by SIP Trunk"}
            data={<DoughnutChart labels={["Label1", "Label2"]} data={[50, 50]} />}
          />
        </Grid>
        <Grid item xs={12}>
          <ChartCard
            label={"External Incomming Calls to Voice Mail by Duration"}
            data={<DoughnutChart labels={["Label1", "Label2"]} data={[50, 50]} />}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ChartCard
            label={"External Incomming Calls to Voice Mail by Source Codec"}
            data={<DoughnutChart labels={["Label1", "Label2"]} data={[50, 50]} />}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ChartCard
            label={"External Incomming Calls to Voice Mail by Destination Codec"}
            data={<DoughnutChart labels={["Label1", "Label2"]} data={[50, 50]} />}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ChartCard
            label={"External Incomming Calls to Voice Mail by Origin Node Idc"}
            data={<DoughnutChart labels={["Label1", "Label2"]} data={[50, 50]} />}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ChartCard
            label={"External Incomming Calls to Voice Mail by Destination Node Id"}
            data={<DoughnutChart labels={["Label1", "Label2"]} data={[50, 50]} />}
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
export default connect(mapStateToProps)(ExternalIncommingCallsToVoiceMail);
