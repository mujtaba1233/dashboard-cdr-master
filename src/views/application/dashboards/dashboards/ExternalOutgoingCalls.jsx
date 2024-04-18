import React, { useEffect, useState } from "react";
// import moment from "moment";
import { connect } from "react-redux";
// import { 
//   ExternalOutgoingCallingNumbersBySourceTimeInterval,
//   ExternalOutgoingCallsBySIPTrunk,
//   ExternalOutgoingCallsCount,
//   ExternalOutgoingCallsCountByDuration,
//   ExternalOutgoingCallsCountBySIPTrunk,
//   Top20ExternalOutgoingCalledNumbers,
//   Top20ExternalOutgoingCallingNumbers
// } from "../services/externalOutgoingCalls";
// import Spinner from "../shared/Spinner";
import SeriesCard from "../../layout/seriesCard";
import DataCard from "../../layout/dataCard";
import ChartCard from "../../layout/chartCard";
import DoughnutChart from "../../charts/DoughnutChart";
import { HorizontalBarChart } from "../../charts/HorizontalBarChart";
import { BarChart } from "../../charts/BarChart";
import { Grid, Typography } from "@mui/material";

const ExternalOutgoingCalls = ({ date }) => {
  // const [state, setState] = useState({
  //   ExternalOutgoingCallingNumbersBySourceTimeInterval: "",
  //   ExternalOutgoingCallsBySIPTrunk: "",
  //   ExternalOutgoingCallsCount: "",
  //   ExternalOutgoingCallsCountByDuration: "",
  //   ExternalOutgoingCallsCountBySIPTrunk: "",
  //   Top20ExternalOutgoingCalledNumbers: "",
  //   Top20ExternalOutgoingCallingNumbers: "",
  //   loading: false,
  // });

  // useEffect(() => {
  //   fetchData();
  // }, [date]);

  // const fetchData = async () => {
  //   setState({ ...state, loading: true });
  //   const current = moment().format();
  //   const res1 = await ExternalOutgoingCallingNumbersBySourceTimeInterval({ current, date: date?.selectedDate });
  //   const res2 = await ExternalOutgoingCallsBySIPTrunk({ current, date: date?.selectedDate });
  //   const res3 = await ExternalOutgoingCallsCount({ current, date: date?.selectedDate });
  //   const res4 = await ExternalOutgoingCallsCountByDuration({ current, date: date?.selectedDate });
  //   const res5 = await ExternalOutgoingCallsCountBySIPTrunk({ current, date: date?.selectedDate });
  //   const res6 = await Top20ExternalOutgoingCalledNumbers({ current, date: date?.selectedDate });
  //   const res7 = await Top20ExternalOutgoingCallingNumbers({ current, date: date?.selectedDate });

  //   setState({
  //     ExternalOutgoingCallingNumbersBySourceTimeInterval: res1.data,
  //     ExternalOutgoingCallsBySIPTrunk: res2.data,
  //     ExternalOutgoingCallsCount: res3.data.hits.total.value,
  //     ExternalOutgoingCallsCountByDuration: res4.data,
  //     ExternalOutgoingCallsCountBySIPTrunk: res5.data,
  //     Top20ExternalOutgoingCalledNumbers: res6.data,
  //     Top20ExternalOutgoingCallingNumbers: res7.data,
  //     loading: false,
  //   });
  // };

  // const labels1 = state.ExternalOutgoingCallsCountByDuration && Object.keys(state.ExternalOutgoingCallsCountByDuration.aggregations["2"].buckets);
  // const data1 = state.ExternalOutgoingCallsCountByDuration && Object.values(state.ExternalOutgoingCallsCountByDuration.aggregations["2"].buckets).map((e) => e.doc_count);

  // const labels2 = state.ExternalOutgoingCallsCountBySIPTrunk && state.ExternalOutgoingCallsCountBySIPTrunk.aggregations["2"].buckets.map((e) => e.key);
  // const data2 = state.ExternalOutgoingCallsCountBySIPTrunk && state.ExternalOutgoingCallsCountBySIPTrunk.aggregations["2"].buckets.map((e) => e.doc_count);

  // const labels3 = state.Top20ExternalOutgoingCallingNumbers && state.Top20ExternalOutgoingCallingNumbers.aggregations["3"].buckets.map((e) => e.key);
  // const data3 = state.Top20ExternalOutgoingCallingNumbers && state.Top20ExternalOutgoingCallingNumbers.aggregations["3"].buckets.map((e) => e.doc_count);

  // const labels4 = state.Top20ExternalOutgoingCalledNumbers && state.Top20ExternalOutgoingCalledNumbers.aggregations["3"].buckets.map((e) => e.key);
  // const data4 = state.Top20ExternalOutgoingCalledNumbers && state.Top20ExternalOutgoingCalledNumbers.aggregations["3"].buckets.map((e) => e.doc_count);

  // const labels5 = state.ExternalOutgoingCallingNumbersBySourceTimeInterval && state.ExternalOutgoingCallingNumbersBySourceTimeInterval.aggregations["2"].buckets.map((e) => e.key);
  // const data5 = state.ExternalOutgoingCallingNumbersBySourceTimeInterval && state.ExternalOutgoingCallingNumbersBySourceTimeInterval.aggregations["2"].buckets.map((e) => e.doc_count);

  // if (state.loading) return <Spinner />;

  return (
    <div>
      {/* <h2 style={{ padding: "16px 0" }}>External Outgoing Calls</h2> */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <DataCard
            label="External Outgoing Calls count"
            data={<h2 style={{ padding: "16px" }}>100</h2>}
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

        <Grid item xs={12} sm={6}>
          <ChartCard
            label="External Outgoing calls count by SIP Trunk"
            data={<DoughnutChart
              labels={["SIP Trunk 1", "SIP Trunk 2", "SIP Trunk 3"]}
              data={[50, 30, 20]}
            />}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ChartCard
            label="External Outgoing calls count by Duration"
            data={<DoughnutChart
              labels={["Label1", "Label2", "Label3"]}
              data={[10, 20, 30]}
            />}
          />
        </Grid>
        <Grid item xs={12}>
          <ChartCard
            label="Top 20 External Outgoing Calling Numbers"
            data={<HorizontalBarChart
              labels={["Number 1", "Number 2", "Number 3"]}
              data={[15, 25, 35]}
            />}
          />
        </Grid>
        <Grid item xs={12}>
          <ChartCard
            label="Top 20 External Outgoing Called Numbers"
            data={<HorizontalBarChart
              labels={["Called Number 1", "Called Number 2", "Called Number 3"]}
              data={[20, 15, 25]}
            />}
          />
        </Grid>
        <Grid item xs={12}>
          <ChartCard
            label="External Outgoing Calling Numbers by Source Time Interval"
            data={<BarChart
              labels={["TimeInterval 1", "TimeInterval 2", "TimeInterval 3"]}
              data={[25, 30, 35]}
            />}
          />
        </Grid>
        <Grid item xs={12}>
          <ChartCard
            label="External Outgoing Calls by SIP Trunk"
            data={<BarChart
              labels={["SIP Trunk 1", "SIP Trunk 2", "SIP Trunk 3"]}
              data={[50, 30, 20]}
            />}
          />
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  date: state.date,
});

export default connect(mapStateToProps)(ExternalOutgoingCalls);
