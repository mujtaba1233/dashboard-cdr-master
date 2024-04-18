import React, { Component, useState, useEffect } from "react";
import DoughnutChart from "../../charts/DoughnutChart";
import { HorizontalBarChart } from "../../charts/HorizontalBarChart";
// import {
//   CallsFromTollFreeNumbersByDuration,
//   CallsFromTollFreeNumbersBySIPTrunk,
//   CallsToTollFreeNumbersBySIPTrunk,
//   CallsToTollFreeNumbersByDuration,
//   IncomingCallsForTollFreeNumbers,
//   OutboundCallsForTollFreeNumbers,
//   Top20CalledTollFreeNumbers,
//   Top20CallingNumbersToTollFreeNumbers,
// } from "../services/tollFreeCalls";
// import Spinner from "../shared/Spinner";
import ChartCard from "../../layout/chartCard";
import DataCard from "../../layout/dataCard";
// import moment from "moment";
import { connect } from "react-redux";
import {Grid, Typography} from "@mui/material";

const TollFreeCalls = (props) => {
  const [state, setState] = useState({
    CallsFromTollFreeNumbersByDuration: "",
    CallsFromTollFreeNumbersBySIPTrunk: "",
    CallsToTollFreeNumbersBySIPTrunk: "",
    CallsToTollFreeNumbersByDuration: "",
    IncomingCallsForTollFreeNumbers: "",
    OutboundCallsForTollFreeNumbers: "",
    Top20CalledTollFreeNumbers: "",
    Top20CallingNumbersToTollFreeNumbers: "",
    loading: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      const current = moment().format();
      const date = props.date?.selectedDate;
      setState({ ...state, loading: true });
      try {
        const body = { current, date };
        const res = await CallsFromTollFreeNumbersByDuration(body);
        const res1 = await CallsFromTollFreeNumbersBySIPTrunk(body);
        const res2 = await CallsToTollFreeNumbersByDuration(body);
        const res3 = await IncomingCallsForTollFreeNumbers(body);
        const res4 = await OutboundCallsForTollFreeNumbers(body);
        const res5 = await Top20CalledTollFreeNumbers(body);
        const res6 = await Top20CallingNumbersToTollFreeNumbers(body);
        const res7 = await CallsToTollFreeNumbersBySIPTrunk(body);

        setState({
          ...state,
          CallsFromTollFreeNumbersByDuration: res.data && res.data,
          CallsFromTollFreeNumbersBySIPTrunk: res1.data && res1.data,
          CallsToTollFreeNumbersBySIPTrunk: res7.data && res7.data,
          CallsToTollFreeNumbersByDuration: res2.data && res2.data,
          IncomingCallsForTollFreeNumbers: res3.data.hits.total.value,
          OutboundCallsForTollFreeNumbers: res4.data.hits.total.value,
          Top20CalledTollFreeNumbers: res5.data && res5.data,
          Top20CallingNumbersToTollFreeNumbers: res6.data && res6.data,
          loading: false,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        setState({ ...state, loading: false });
      }
    };

    fetchData();
  }, [props.date, state]);

  let labels1 =
    state.CallsToTollFreeNumbersBySIPTrunk &&
    state.CallsToTollFreeNumbersBySIPTrunk.aggregations["2"].buckets.map(
      (e) => e.key
    );
  let data1 =
    state.CallsToTollFreeNumbersBySIPTrunk &&
    state.CallsToTollFreeNumbersBySIPTrunk.aggregations["2"].buckets.map(
      (e) => e.doc_count
    );
  // /////////////////////////////////////
  let labels2 =
    state.CallsFromTollFreeNumbersBySIPTrunk &&
    state.CallsFromTollFreeNumbersBySIPTrunk.aggregations[
      "2"
    ].buckets.map((e) => e.key);
  let data2 =
    state.CallsFromTollFreeNumbersBySIPTrunk &&
    state.CallsFromTollFreeNumbersBySIPTrunk.aggregations[
      "2"
    ].buckets.map((e) => e.doc_count);
  // /////////////////////////////////////
  let labels3 =
    state.CallsToTollFreeNumbersByDuration &&
    Object.keys(
      state.CallsToTollFreeNumbersByDuration.aggregations["2"].buckets
    );
  let data3 =
    state.CallsToTollFreeNumbersByDuration &&
    Object.values(
      state.CallsToTollFreeNumbersByDuration.aggregations["2"].buckets
    ).map((e) => e.doc_count);
  // /////////////////////////////////////
  let labels4 =
    state.CallsFromTollFreeNumbersByDuration &&
    Object.keys(
      state.CallsFromTollFreeNumbersByDuration.aggregations["2"].buckets
    );
  let data4 =
    state.CallsFromTollFreeNumbersByDuration &&
    Object.values(
      state.CallsFromTollFreeNumbersByDuration.aggregations["2"].buckets
    ).map((e) => e.doc_count);
  // /////////////////////////////////////
  let labels5 =
    state.Top20CallingNumbersToTollFreeNumbers &&
    state.Top20CallingNumbersToTollFreeNumbers.aggregations[
      "3"
    ].buckets.map((e) => e.key);
  let data5 =
    state.Top20CallingNumbersToTollFreeNumbers &&
    state.Top20CallingNumbersToTollFreeNumbers.aggregations[
      "3"
    ].buckets.map((e) => e.doc_count);
  // /////////////////////////////////////
  let labels6 =
    state.Top20CalledTollFreeNumbers &&
    state.Top20CalledTollFreeNumbers.aggregations["3"].buckets.map(
      (e) => e.key
    );
  let data6 =
    state.Top20CalledTollFreeNumbers &&
    state.Top20CalledTollFreeNumbers.aggregations["3"].buckets.map(
      (e) => e.doc_count
    );
  // /////////////////////////////////////
  if (state.loading) return <Spinner />;
  return (
    // <div>
    //   <Typography variant="h2" className="py-2">Toll Free Calls</Typography>
    //   <Grid container spacing={2}>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label={"Outbound Calls to Toll Free Numbers"}
    //         data={123}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <DataCard
    //         label={"Incoming Calls from Toll Free Numbers"}
    //         data={IncomingCallsForTollFreeNumbers}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <ChartCard
    //         label={"Calls to Toll Free Numbers by SIP Trunk"}
    //         data={<DoughnutChart labels={labels1} data={data1} />}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <ChartCard
    //         label={"Calls from Toll Free Numbers by SIP Trunk"}
    //         data={<DoughnutChart labels={labels2} data={data2} />}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <ChartCard
    //         label={"Calls to Toll Free Numbers by Duration"}
    //         data={<DoughnutChart labels={labels3} data={data3} />}
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <ChartCard
    //         label={"Calls from Toll Free Numbers by Duration"}
    //         data={<DoughnutChart labels={labels4} data={data4} />}
    //       />
    //     </Grid>
    //     <Grid item xs={12}>
    //       <ChartCard
    //         label={"Top 20 Calling Numbers to Toll Free Numbers"}
    //         data={<HorizontalBarChart labels={labels5} data={data5} />}
    //       />
    //     </Grid>
    //     <Grid item xs={12}>
    //       <ChartCard
    //         label={"Top 20 Called Toll Free Numbers"}
    //         data={<HorizontalBarChart labels={labels6} data={data6} />}
    //       />
    //     </Grid>
    //   </Grid>
    // </div>
    <div>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <DataCard
          label={"Outbound Calls to Toll Free Numbers"}
          data={123}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DataCard
          label={"Incoming Calls from Toll Free Numbers"}
          data={321}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ChartCard
          label={"Calls to Toll Free Numbers by SIP Trunk"}
          data={<DoughnutChart labels={["Label1", "Label2"]} data={[50, 50]} />}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ChartCard
          label={"Calls from Toll Free Numbers by SIP Trunk"}
          data={<DoughnutChart labels={["Label1", "Label2"]} data={[50, 50]} />}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ChartCard
          label={"Calls to Toll Free Numbers by Duration"}
          data={<DoughnutChart labels={["Label1", "Label2"]} data={[50, 50]} />}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ChartCard
          label={"Calls from Toll Free Numbers by Duration"}
          data={<DoughnutChart labels={["Label1", "Label2"]} data={[50, 50]} />}
        />
      </Grid>
      <Grid item xs={12}>
        <ChartCard
          label={"Top 20 Calling Numbers to Toll Free Numbers"}
          data={<HorizontalBarChart labels={["Label1", "Label2"]} data={[50, 50]} />}
        />
      </Grid>
      <Grid item xs={12}>
        <ChartCard
          label={"Top 20 Called Toll Free Numbers"}
          data={<HorizontalBarChart labels={["Label1", "Label2"]} data={[50, 50]} />}
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
export default connect(mapStateToProps)(TollFreeCalls);
