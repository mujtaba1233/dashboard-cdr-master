import React, { useEffect, useState } from "react";
import DoughnutChart from "../../charts/DoughnutChart";
import PieChart from "../../charts/PieChart";
import { Grid, Typography } from '@mui/material';

// import cogoToast from "cogo-toast";

// import {
//   CallsByDuration,
//   CallsFromCUCMNodeID,
//   CallsToCUCMNodeID,
//   ExternalCallsOngoing,
//   ExternalIncomingCalls,
//   ExternalIncomingCallsBySIPTrunk,
//   ExternalOutgoingCalls,
//   ExternalOutgoingCallsBySIPTrunk,
//   InternalCallsOnly,
//   OutgoingEmergencyCalls,
//   TotalCallsAttempted,
//   TotalCallsCompleted,
// } from "../services/callOverview";
// import Spinner from "../shared/Spinner";
import DataCard from "../../layout/dataCard";
import ChartCard from "../../layout/chartCard";
// import moment from "moment";
// import store from "../store";
// import { useSelector } from "react-redux";

const ClusterCallOverview = (props) => {

    const [data, setData] = useState({
        CallsByDuration: "",
        CallsFromCUCMNodeID: "",
        CallsToCUCMNodeID: "",
        ExternalCallsOngoing: "",
        ExternalIncomingCalls: "",
        ExternalIncomingCallsBySIPTrunk: "",
        ExternalOutgoingCalls: "",
        ExternalOutgoingCallsBySIPTrunk: "",
        InternalCallsOnly: "",
        OutgoingEmergencyCalls: "",
        TotalCallsAttempted: "",
        TotalCallsCompleted: "",
        loading: false,
        date: localStorage.getItem("time")
    });

    //   async function getData(current, date) {
    //     try {
    //       setData((prev) => ({
    //         ...prev,
    //         loading: true
    //       }));
    //       let body = { current: current, date: date };
    //       const res = await CallsByDuration(body);
    //       const res1 = await CallsFromCUCMNodeID(body);
    //       const res2 = await CallsToCUCMNodeID(body);
    //       const res3 = await ExternalCallsOngoing(body);
    //       const res4 = await ExternalIncomingCalls(body);
    //       const res5 = await ExternalIncomingCallsBySIPTrunk(body);
    //       const res6 = await ExternalOutgoingCalls(body);
    //       const res7 = await ExternalOutgoingCallsBySIPTrunk(body);
    //       const res8 = await InternalCallsOnly(body);
    //       const res9 = await OutgoingEmergencyCalls(body);
    //       const res10 = await TotalCallsAttempted(body);
    //       const res11 = await TotalCallsCompleted(body);

    //       setData((prev) => ({
    //         ...prev,
    //         CallsByDuration: res.data,
    //         CallsFromCUCMNodeID: res1.data && res1.data,
    //         CallsToCUCMNodeID: res2.data && res2.data,
    //         ExternalCallsOngoing: res3.data.hits.total.value,
    //         ExternalIncomingCalls: res4.data.hits.total.value,
    //         ExternalIncomingCallsBySIPTrunk: res5.data && res5.data,
    //         ExternalOutgoingCalls: res6.data.hits.total.value,
    //         ExternalOutgoingCallsBySIPTrunk: res7.data && res7.data,
    //         InternalCallsOnly: res8.data.hits.total.value,
    //         OutgoingEmergencyCalls: res9.data.hits.total.value,
    //         TotalCallsAttempted: res10.data.hits.total.value,
    //         TotalCallsCompleted: res11.data.hits.total.value,
    //         loading: false
    //       }));
    //     } catch (error) {
    //       const toastoptions = {
    //         hideAfter: 5,
    //         position: "top-right",
    //         heading: "Error",
    //       };
    //       cogoToast.error("Server Error.", toastoptions);
    //     }

    //   };
    //   let date = useSelector((state) => state.date.selectedDate)

    //   useEffect(() => {
    //     // console.log(date, 'changes detected');
    //     let current = moment().format();
    //     getData(current, date)
    //   }, [date])

    //   //  Calls By Duration
    //   let total1 =
    //     data.CallsByDuration && data.CallsByDuration.hits.total;
    //   let labels1 =
    //     data.CallsByDuration &&
    //     Object.keys(data.CallsByDuration?.aggregations["2"]?.buckets);
    //   let data1 =
    //     data.CallsByDuration &&
    //     Object.values(data.CallsByDuration.aggregations["2"]?.buckets).map(
    //       (e) => e.doc_count
    //     );
    //   // Incoming by SIP Trunck
    //   let total2 =
    //     data.ExternalIncomingCallsBySIPTrunk &&
    //     data.ExternalIncomingCallsBySIPTrunk.hits.total;
    //   let labels2 =
    //     data.ExternalIncomingCallsBySIPTrunk &&
    //     data.ExternalIncomingCallsBySIPTrunk.aggregations["2"].buckets.map(
    //       (e) => e.key
    //     );
    //   let data2 =
    //     data.ExternalIncomingCallsBySIPTrunk &&
    //     data.ExternalIncomingCallsBySIPTrunk.aggregations["2"].buckets.map(
    //       (e) => e.doc_count
    //     );
    //   //   External Call By SIP
    //   let total3 =
    //     data.ExternalOutgoingCallsBySIPTrunk &&
    //     data.ExternalOutgoingCallsBySIPTrunk.hits.total;
    //   let labels3 =
    //     data.ExternalOutgoingCallsBySIPTrunk &&
    //     data.ExternalOutgoingCallsBySIPTrunk.aggregations["2"].buckets.map(
    //       (e) => e.key
    //     );
    //   let data3 =
    //     data.ExternalOutgoingCallsBySIPTrunk &&
    //     data.ExternalOutgoingCallsBySIPTrunk.aggregations["2"].buckets.map(
    //       (e) => e.doc_count
    //     );
    //   // CUCCM to Node
    //   let total4 =
    //     data.CallsToCUCMNodeID && data.CallsToCUCMNodeID.hits.total;
    //   let labels4 =
    //     data.CallsToCUCMNodeID &&
    //     data.CallsToCUCMNodeID.aggregations["2"].buckets.map((e) => e.key);
    //   let data4 =
    //     data.CallsToCUCMNodeID &&
    //     data.CallsToCUCMNodeID.aggregations["2"].buckets.map(
    //       (e) => e.doc_count
    //     );
    //   // CUCCM from Node
    //   let total5 =
    //     data.CallsFromCUCMNodeID &&
    //     data.CallsFromCUCMNodeID.hits.total;
    //   let labels5 =
    //     data.CallsFromCUCMNodeID &&
    //     data.CallsFromCUCMNodeID.aggregations["2"].buckets.map(
    //       (e) => e.key
    //     );
    //   let data5 =
    //     data.CallsFromCUCMNodeID &&
    //     data.CallsFromCUCMNodeID.aggregations["2"].buckets.map(
    //       (e) => e.doc_count
    //     );

    //   if (data.loading) return <Spinner />;
    return (
        // <div>
        //     <h3 className="py-2">Cluster Calls Overview</h3>
        //     <div className="row">
        //         <DataCard
        //             col={3}
        //             label={"Total Calls Attempted"}
        //             data={data.TotalCallsAttempted || 500}
        //         />
        //         <DataCard
        //             col={3}
        //             label={"Total Calls Completed"}
        //             data={data.TotalCallsCompleted || 350}
        //         />
        //         <DataCard
        //             col={3}
        //             label={"External Calls Ongoing"}
        //             data={data.ExternalCallsOngoing || 50}
        //         />
        //         <DataCard
        //             col={3}
        //             label={"External Incoming Calls"}
        //             data={data.ExternalIncomingCalls || 150}
        //         />
        //     </div>

        //     <div className="row">
        //         <DataCard
        //             col={4}
        //             label={"External Outgoing Calls"}
        //             data={data.ExternalOutgoingCalls || 200}
        //         />
        //         <DataCard
        //             col={4}
        //             label={"Internal Calls Only"}
        //             data={data.InternalCallsOnly || 100}
        //         />
        //         <DataCard
        //             col={4}
        //             label={"Outgoing Emergency Calls"}
        //             data={data.OutgoingEmergencyCalls || 20}
        //         />
        //     </div>
        //     <div className="row">
        //         <ChartCard
        //             col={6}
        //             label={"Calls by Duration"}
        //             data={
        //                 <DoughnutChart total={total1 || 1000} labels={labels1 || ["Short", "Medium", "Long"]} data={data1 || [400, 300, 300]} />
        //             }
        //         />
        //         <ChartCard
        //             col={6}
        //             label={"External Incoming Calls by SIP Trunk"}
        //             data={
        //                 <DoughnutChart total={total2 || 200} labels={labels2 || ["Trunk A", "Trunk B"]} data={data2 || [100, 100]} />
        //             }
        //         />
        //     </div>
        //     <div className="row">
        //         <ChartCard
        //             col={12}
        //             label={"External Outgoing Calls by SIP Trunk"}
        //             data={
        //                 <DoughnutChart total={total3 || 300} labels={labels3 || ["Trunk A", "Trunk B", "Trunk C"]} data={data3 || [150, 100, 50]} />
        //             }
        //         />
        //     </div>
        //     <div className="row">
        //         <ChartCard
        //             col={6}
        //             label={"Calls to CUCM Node ID"}
        //             data={
        //                 <PieChart total={total4 || 400} labels={labels4 || ["Node 1", "Node 2", "Node 3"]} data={data4 || [200, 100, 100]} />
        //             }
        //         />
        //         <ChartCard
        //             col={6}
        //             label={"Calls from CUCM Node ID"}
        //             data={
        //                 <PieChart total={total5 || 450} labels={labels5 || ["Node 1", "Node 2", "Node 3"]} data={data5 || [250, 100, 100]} />
        //             }
        //         />
        //     </div>
        // </div>
        <div>
            <Grid container spacing={3} sx={{ marginBottom: 3 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <DataCard
                        label={"Total Calls Attempted"}
                        data={500} // Replace with actual data.TotalCallsAttempted
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <DataCard
                        label={"Total Calls Completed"}
                        data={350} // Replace with actual data.TotalCallsCompleted
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <DataCard
                        label={"External Calls Ongoing"}
                        data={50} // Replace with actual data.ExternalCallsOngoing
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <DataCard
                        label={"External Incoming Calls"}
                        data={150} // Replace with actual data.ExternalIncomingCalls
                    />
                </Grid>
            </Grid>

            <Grid container spacing={3} sx={{ marginBottom: 3 }}>
                <Grid item xs={12} sm={4}>
                    <DataCard
                        label={"External Outgoing Calls"}
                        data={200} // Replace with actual data.ExternalOutgoingCalls
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <DataCard
                        label={"Internal Calls Only"}
                        data={100} // Replace with actual data.InternalCallsOnly
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <DataCard
                        label={"Outgoing Emergency Calls"}
                        data={20} // Replace with actual data.OutgoingEmergencyCalls
                    />
                </Grid>
            </Grid>

            <Grid container spacing={3} sx={{ marginBottom: 3 }}>
                <Grid item xs={12} sm={6}>
                    <ChartCard
                        label={"Calls by Duration"}
                        data={<DoughnutChart total={1000} labels={["Short", "Medium", "Long"]} data={[400, 300, 300]} />}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ChartCard
                        label={"External Incoming Calls by SIP Trunk"}
                        data={<DoughnutChart total={200} labels={["Trunk A", "Trunk B"]} data={[100, 100]} />}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={3} sx={{ marginBottom: 3 }}>
                <Grid item xs={12}>
                    <ChartCard
                        label={"External Outgoing Calls by SIP Trunk"}
                        data={<DoughnutChart total={300} labels={["Trunk A", "Trunk B", "Trunk C"]} data={[150, 100, 50]} />}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={3} sx={{ marginBottom: 3 }}>
                <Grid item xs={12} sm={6}>
                    <ChartCard
                        label={"Calls to CUCM Node ID"}
                        data={<PieChart total={400} labels={["Node 1", "Node 2", "Node 3"]} data={[200, 100, 100]} />}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ChartCard
                        label={"Calls from CUCM Node ID"}
                        data={<PieChart total={450} labels={["Node 1", "Node 2", "Node 3"]} data={[250, 100, 100]} />}
                    />
                </Grid>
            </Grid>
        </div>

    );

}

export default ClusterCallOverview;
