import React, { useState, useEffect } from "react";
// import moment from "moment";
import { connect } from "react-redux";
// import {
//   ExternalIncomingCallsCount,
//   ExternalIncomingCallsCountByDuration,
//   ExternalIncomingCallsCountBySIPTrunk,
//   ExternalIncommingCallingNumbersBySourceTimeInterval,
//   ExternalIncommingCallsBySIPTrunk,
//   Top20ExternalIncommingCalledNumbers,
//   Top20ExternalIncommingCallingNumbers,
// } from "../services/externalIncommingCalls";
// import Spinner from "../shared/Spinner";
import ChartCard from "../../layout/chartCard";
import SeriesCard from "../../layout/seriesCard";
import DataCard from "../../layout/dataCard";
import { Grid, Typography } from "@mui/material";
import { BarChart } from "../../charts/BarChart";
import DoughnutChart from "../../charts/DoughnutChart";
import { HorizontalBarChart } from "../../charts/HorizontalBarChart";

const ExternalIncommingCalls = ({ date }) => {
  const [loading, setLoading] = useState(false);
  // const [ExternalIncomingCallsCountData, setExternalIncomingCallsCountData] = useState("");
  // const [ExternalIncomingCallsCountByDurationData, setExternalIncomingCallsCountByDurationData] = useState("");
  // const [ExternalIncomingCallsCountBySIPTrunkData, setExternalIncomingCallsCountBySIPTrunkData] = useState("");
  // const [ExternalIncommingCallingNumbersBySourceTimeIntervalData, setExternalIncommingCallingNumbersBySourceTimeIntervalData] = useState("");
  // const [ExternalIncommingCallsBySIPTrunkData, setExternalIncommingCallsBySIPTrunkData] = useState("");
  // const [Top20ExternalIncommingCalledNumbersData, setTop20ExternalIncommingCalledNumbersData] = useState("");
  // const [Top20ExternalIncommingCallingNumbersData, setTop20ExternalIncommingCallingNumbersData] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     let current = moment().format();
  //     let selectedDate = date?.selectedDate;
  //     const res1 = await ExternalIncomingCallsCount({ current, date: selectedDate });
  //     const res2 = await ExternalIncomingCallsCountByDuration({ current, date: selectedDate });
  //     const res3 = await ExternalIncomingCallsCountBySIPTrunk({ current, date: selectedDate });
  //     const res4 = await ExternalIncommingCallingNumbersBySourceTimeInterval({ current, date: selectedDate });
  //     const res5 = await ExternalIncommingCallsBySIPTrunk({ current, date: selectedDate });
  //     const res6 = await Top20ExternalIncommingCalledNumbers({ current, date: selectedDate });
  //     const res7 = await Top20ExternalIncommingCallingNumbers({ current, date: selectedDate });

  //     setExternalIncomingCallsCountData(res1.data.hits.total.value);
  //     setExternalIncomingCallsCountByDurationData(res2.data);
  //     setExternalIncomingCallsCountBySIPTrunkData(res3.data);
  //     setExternalIncommingCallingNumbersBySourceTimeIntervalData(res4.data);
  //     setExternalIncommingCallsBySIPTrunkData(res5.data);
  //     setTop20ExternalIncommingCalledNumbersData(res6.data);
  //     setTop20ExternalIncommingCallingNumbersData(res7.data);

  //     setLoading(false);
  //   };

  //   fetchData();
  // }, [date]);

  // if (loading) return <Spinner />;

  return (
    // <div>
    //   <h2 className="py-2">External Incoming Calls</h2>
    //   <div className="row">
    //     <DataCard
    //       col={4}
    //       label={"External Incoming Calls count"}
    //       data={<h2 className="p-4">{ExternalIncomingCallsCountData}</h2>}
    //     />
    //     <SeriesCard
    //       title={"External Incoming calls count by Duration"}
    //       labels={ExternalIncomingCallsCountByDurationData && Object.keys(ExternalIncomingCallsCountByDurationData.aggregations["2"].buckets).map((el) => <p className="text-primary">{el}</p>)}
    //       data={ExternalIncomingCallsCountByDurationData && Object.values(ExternalIncomingCallsCountByDurationData.aggregations["2"].buckets).map((el) => <h2 className="text-success">{el.doc_count}</h2>)}
    //       col={8}
    //     />
    //   </div>
    //   <div className="row">
    //     <ChartCard
    //       col={6}
    //       label={"External Incoming calls count by SIP Trunk"}
    //       data={<DoughnutChart labels={ExternalIncomingCallsCountBySIPTrunkData && ExternalIncomingCallsCountBySIPTrunkData.aggregations["2"].buckets.map((e) => e.key)} data={ExternalIncomingCallsCountBySIPTrunkData && ExternalIncomingCallsCountBySIPTrunkData.aggregations["2"].buckets.map((e) => e.doc_count)} />}
    //     />
    //     <ChartCard
    //       col={6}
    //       label={"External Incoming calls count by Duration"}
    //       data={<DoughnutChart labels={ExternalIncomingCallsCountByDurationData && Object.keys(ExternalIncomingCallsCountByDurationData.aggregations["2"].buckets).map((el) => el)} data={ExternalIncomingCallsCountByDurationData && Object.values(ExternalIncomingCallsCountByDurationData.aggregations["2"].buckets).map((el) => el.doc_count)} />}
    //     />
    //   </div>
    //   <div className="row">
    //     <ChartCard
    //       col={12}
    //       label={"Top 20 External Incomming Calling Numbers"}
    //       data={<HorizontalBarChart labels={Top20ExternalIncommingCallingNumbersData && Top20ExternalIncommingCallingNumbersData.aggregations["3"].buckets.map((e) => e.key)} data={Top20ExternalIncommingCallingNumbersData && Top20ExternalIncommingCallingNumbersData.aggregations["3"].buckets.map((e) => e.doc_count)} />}
    //     />
    //   </div>
    //   <div className="row">
    //     <ChartCard
    //       col={12}
    //       label={"Top 20 External Incomming Called Numbers"}
    //       data={<HorizontalBarChart labels={Top20ExternalIncommingCalledNumbersData && Top20ExternalIncommingCalledNumbersData.aggregations["3"].buckets.map((e) => e.key)} data={Top20ExternalIncommingCalledNumbersData && Top20ExternalIncommingCalledNumbersData.aggregations["3"].buckets.map((e) => e.doc_count)} />}
    //     />
    //   </div>
    //   <div className="row">
    //     <ChartCard
    //       col={12}
    //       label={"External Incomming Calls by Source Time Interval"}
    //       data={<BarChart labels={ExternalIncommingCallingNumbersBySourceTimeIntervalData && ExternalIncommingCallingNumbersBySourceTimeIntervalData.aggregations["2"].buckets.map((e) => e.key_as_string.split("T")[0])} data={ExternalIncommingCallingNumbersBySourceTimeIntervalData && ExternalIncommingCallingNumbersBySourceTimeIntervalData.aggregations["2"].buckets.map((e) => e.doc_count)} />}
    //     />
    //   </div>
    //   <div className="row">
    //     <ChartCard
    //       col={12}
    //       label={"External Incomming Calls by SIP Trunk"}
    //       data={<BarChart labels={ExternalIncommingCallsBySIPTrunkData && ExternalIncommingCallsBySIPTrunkData.aggregations["2"].buckets.map((e) => e.key_as_string.split("T")[0])} data={ExternalIncommingCallsBySIPTrunkData && ExternalIncommingCallsBySIPTrunkData.aggregations["2"].buckets.map((e) => e.doc_count)} />}
    //     />
    //   </div>
    // </div>
    <div>
      {/* <h2 style={{ padding: "16px 0" }}>External Incoming Calls</h2> */}
      <Grid container spacing={2}>
        {/* DataCard and SeriesCard */}
        <Grid item xs={12} md={6}>
          <DataCard
            label="External Incoming Calls count"
            data={123}
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

        {/* ChartCards */}
        <Grid item xs={12} md={6}>
          <ChartCard
            label="External Incoming calls count by SIP Trunk"
            data={<DoughnutChart labels={["Trunk 1", "Trunk 2", "Trunk 3"]} data={[50, 30, 20]} />}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartCard
            label="External Incoming calls count by Duration"
            data={<DoughnutChart labels={["Duration 1", "Duration 2", "Duration 3"]} data={[40, 30, 30]} />}
          />
        </Grid>

        <Grid item xs={12}>
          <ChartCard
            label="Top 20 External Incomming Calling Numbers"
            data={<HorizontalBarChart labels={["Number 1", "Number 2", "Number 3"]} data={[30, 25, 20]} />}
          />
        </Grid>

        <Grid item xs={12}>
          <ChartCard
            label="Top 20 External Incomming Called Numbers"
            data={<HorizontalBarChart labels={["Number 1", "Number 2", "Number 3"]} data={[35, 30, 25]} />}
          />
        </Grid>

        <Grid item xs={12}>
          <ChartCard
            label="External Incomming Calls by Source Time Interval"
            data={<BarChart labels={["Date 1", "Date 2", "Date 3"]} data={[20, 25, 30]} />}
          />
        </Grid>

        <Grid item xs={12}>
          <ChartCard
            label="External Incomming Calls by SIP Trunk"
            data={<BarChart labels={["Trunk 1", "Trunk 2", "Trunk 3"]} data={[40, 30, 20]} />}
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

export default connect(mapStateToProps)(ExternalIncommingCalls);
