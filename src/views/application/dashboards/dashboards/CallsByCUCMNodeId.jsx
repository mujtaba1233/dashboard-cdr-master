import React, { Component } from "react";
// import {
//   CallCountsByDestinationCUCMNodeID,
//   CallCountsByOriginCUCMNodeID,
//   ClusterCallsFromCUCMNodeId,
//   ClusterCallsToCUCMNodeId,
//   ExternalIncommingCallsByDestinationNodeId,
//   ExternalIncommingCallsBySourceNodeId,
//   ExternalOutgoingCallsByDestinationNodeId,
//   ExternalOutgoingCallsBySourceNodeId,
//   Top10DestinationCUCMNodeID,
//   Top10SourceCUCMNodeID,
// } from "../services/callsByCUCMNodeId";
import Grid from "@mui/material/Grid";
import DoughnutChart from "../../charts/DoughnutChart";
import { HorizontalBarChart } from "../../charts/HorizontalBarChart";
import PieChart from "../../charts/PieChart";
// import Spinner from "../shared/Spinner";
import SeriesCard from "../../layout/seriesCard";
// import moment from "moment";
import { connect } from "react-redux";
import { Typography } from "@mui/material";

const CallsByCUCMNodeId = ({ date }) => {
  // const [state, setState] = useState({
  //   CallCountsByOriginCUCMNodeID: "",
  //   CallCountsByDestinationCUCMNodeID: "",
  //   Top10SourceCUCMNodeID: "",
  //   Top10DestinationCUCMNodeID: "",
  //   ClusterCallsFromCUCMNodeId: "",
  //   ClusterCallsToCUCMNodeId: "",
  //   ExternalOutgoingCallsBySourceNodeId: "",
  //   ExternalOutgoingCallsByDestinationNodeId: "",
  //   ExternalIncommingCallsBySourceNodeId: "",
  //   ExternalIncommingCallsByDestinationNodeId: "",
  //   loading: false,
  // });

  // useEffect(() => {
  //   fetchData();
  // }, [date]);

  // const fetchData = async () => {
  //   setState({ ...state, loading: true });
  //   let current = moment().format();
  //   let selectedDate = date?.selectedDate;
  //   let body = { current: current, date: selectedDate };
  //   try {
  //     const res0 = await CallCountsByOriginCUCMNodeID(body);
  //     const res1 = await CallCountsByDestinationCUCMNodeID(body);
  //     const res2 = await Top10SourceCUCMNodeID(body);
  //     const res3 = await Top10DestinationCUCMNodeID(body);
  //     const res4 = await ClusterCallsFromCUCMNodeId(body);
  //     const res5 = await ClusterCallsToCUCMNodeId(body);
  //     const res6 = await ExternalOutgoingCallsBySourceNodeId(body);
  //     const res7 = await ExternalOutgoingCallsByDestinationNodeId(body);
  //     const res8 = await ExternalIncommingCallsBySourceNodeId(body);
  //     const res9 = await ExternalIncommingCallsByDestinationNodeId(body);

  //     setState({
  //       CallCountsByOriginCUCMNodeID: res0.data,
  //       CallCountsByDestinationCUCMNodeID: res1.data,
  //       Top10SourceCUCMNodeID: res2.data,
  //       Top10DestinationCUCMNodeID: res3.data,
  //       ClusterCallsFromCUCMNodeId: res4.data,
  //       ClusterCallsToCUCMNodeId: res5.data,
  //       ExternalOutgoingCallsBySourceNodeId: res6.data,
  //       ExternalOutgoingCallsByDestinationNodeId: res7.data,
  //       ExternalIncommingCallsBySourceNodeId: res8.data,
  //       ExternalIncommingCallsByDestinationNodeId: res9.data,
  //       loading: false,
  //     });
  //   } catch (error) {
  //     console.error("Error fetching data: ", error);
  //     setState({ ...state, loading: false });
  //   }
  // };

  // let data1 =
  //   state.CallCountsByOriginCUCMNodeID &&
  //   state.CallCountsByOriginCUCMNodeID.aggregations["2"].buckets.map(
  //     (e) => e.doc_count
  //   );
  // let labels1 =
  //   state.CallCountsByOriginCUCMNodeID &&
  //   state.CallCountsByOriginCUCMNodeID.aggregations["2"].buckets.map(
  //     (e) => e.key
  //   );

  // let data2 =
  //   state.CallCountsByDestinationCUCMNodeID &&
  //   state.CallCountsByDestinationCUCMNodeID.aggregations[
  //     "2"
  //   ].buckets.map((e) => e.doc_count);
  // let labels2 =
  //   state.CallCountsByDestinationCUCMNodeID &&
  //   state.CallCountsByDestinationCUCMNodeID.aggregations[
  //     "2"
  //   ].buckets.map((e) => e.key);

  // let labels3 =
  //   state.Top10SourceCUCMNodeID &&
  //   state.Top10SourceCUCMNodeID.aggregations["3"].buckets.map(
  //     (e) => e.key
  //   );
  // let data3 =
  //   state.Top10SourceCUCMNodeID &&
  //   state.Top10SourceCUCMNodeID.aggregations["3"].buckets.map(
  //     (e) => e.doc_count
  //   );

  // let labels4 =
  //   state.Top10DestinationCUCMNodeID &&
  //   state.Top10DestinationCUCMNodeID.aggregations["3"].buckets.map(
  //     (e) => e.key
  //   );
  // let data4 =
  //   state.Top10DestinationCUCMNodeID &&
  //   state.Top10DestinationCUCMNodeID.aggregations["3"].buckets.map(
  //     (e) => e.doc_count
  //   );

  // let total5 =
  //   state.ClusterCallsFromCUCMNodeId &&
  //   state.ClusterCallsFromCUCMNodeId.hits.total;
  // let labels5 =
  //   state.ClusterCallsFromCUCMNodeId &&
  //   state.ClusterCallsFromCUCMNodeId.aggregations["2"].buckets.map(
  //     (e) => e.key
  //   );
  // let data5 =
  //   state.ClusterCallsFromCUCMNodeId &&
  //   state.ClusterCallsFromCUCMNodeId.aggregations["2"].buckets.map(
  //     (e) => e.doc_count
  //   );

  // let total6 =
  //   state.ClusterCallsToCUCMNodeId &&
  //   state.ClusterCallsToCUCMNodeId.hits.total;
  // let labels6 =
  //   state.ClusterCallsToCUCMNodeId &&
  //   state.ClusterCallsToCUCMNodeId.aggregations["2"].buckets.map(
  //     (e) => e.key
  //   );
  // let data6 =
  //   state.ClusterCallsToCUCMNodeId &&
  //   state.ClusterCallsToCUCMNodeId.aggregations["2"].buckets.map(
  //     (e) => e.doc_count
  //   );

  // let total7 =
  //   state.ExternalOutgoingCallsBySourceNodeId &&
  //   state.ExternalOutgoingCallsBySourceNodeId.hits.total;
  // let labels7 =
  //   state.ExternalOutgoingCallsBySourceNodeId &&
  //   state.ExternalOutgoingCallsBySourceNodeId.aggregations[
  //     "2"
  //   ].buckets.map((el) => el.key);

  // let data7 =
  //   state.ExternalOutgoingCallsBySourceNodeId &&
  //   Object.values(
  //     state.ExternalOutgoingCallsBySourceNodeId.aggregations["2"].buckets
  //   ).map((e) => e.doc_count);

  // let total8 =
  //   state.ExternalOutgoingCallsByDestinationNodeId &&
  //   state.ExternalOutgoingCallsByDestinationNodeId.hits.total;
  // let labels8 =
  //   state.ExternalOutgoingCallsByDestinationNodeId &&
  //   state.ExternalOutgoingCallsByDestinationNodeId.aggregations[
  //     "2"
  //   ].buckets.map((el) => el.key);
  // let data8 =
  //   state.ExternalOutgoingCallsByDestinationNodeId &&
  //   Object.values(
  //     state.ExternalOutgoingCallsByDestinationNodeId.aggregations["2"]
  //       .buckets
  //   ).map((e) => e.doc_count);

  // let total9 =
  //   state.ExternalIncommingCallsBySourceNodeId &&
  //   state.ExternalIncommingCallsBySourceNodeId.hits.total;
  // let labels9 =
  //   state.ExternalIncommingCallsBySourceNodeId &&
  //   state.ExternalIncommingCallsBySourceNodeId.aggregations[
  //     "2"
  //   ].buckets.map((e) => e.key);
  // let data9 =
  //   state.ExternalIncommingCallsBySourceNodeId &&
  //   state.ExternalIncommingCallsBySourceNodeId.aggregations[
  //     "2"
  //   ].buckets.map((e) => e.doc_count);

  // let total10 =
  //   state.ExternalIncommingCallsByDestinationNodeId &&
  //   state.ExternalIncommingCallsByDestinationNodeId.hits.total;
  // let labels10 =
  //   state.ExternalIncommingCallsByDestinationNodeId &&
  //   state.ExternalIncommingCallsByDestinationNodeId.aggregations[
  //     "2"
  //   ].buckets.map((e) => e.key);
  // let data10 =
  //   state.ExternalIncommingCallsByDestinationNodeId &&
  //   state.ExternalIncommingCallsByDestinationNodeId.aggregations[
  //     "2"
  //   ].buckets.map((e) => e.doc_count);
  // Dummy data arrays
  const labels = ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"];
  const data = [100, 200, 150, 300, 250];
  const total = 1000;

  // if (state.loading) return <Spinner />;

  return (
    // <div>
    //   <h2 className="py-2">Calls By CUCM Node Id</h2>
    //   <Grid container spacing={3}>
    //     <Grid item xs={12}>
    //       <Grid container spacing={3}>
    //         <Grid item xs={6}>
    //           <SeriesCard
    //             title={"Call counts by Origin CUCM Node ID"}
    //             labels={
    //               state.CallCountsByOriginCUCMNodeID &&
    //               state.CallCountsByOriginCUCMNodeID.aggregations["2"].buckets.map(
    //                 (el) => <small className="text-primary">{el.key}</small>
    //               )
    //             }
    //             data={
    //               state.CallCountsByOriginCUCMNodeID &&
    //               state.CallCountsByOriginCUCMNodeID.aggregations["2"].buckets.map(
    //                 (el) => <h2 className="text-success">{el.doc_count}</h2>
    //               )
    //             }
    //           />
    //         </Grid>
    //         <Grid item xs={6}>
    //           <SeriesCard
    //             title={"Call counts by Destination CUCM Node ID"}
    //             labels={
    //               state.CallCountsByDestinationCUCMNodeID &&
    //               state.CallCountsByDestinationCUCMNodeID.aggregations[
    //                 "2"
    //               ].buckets.map((el) => (
    //                 <small className="text-primary">{el.key}</small>
    //               ))
    //             }
    //             data={
    //               state.CallCountsByDestinationCUCMNodeID &&
    //               state.CallCountsByDestinationCUCMNodeID.aggregations[
    //                 "2"
    //               ].buckets.map((el) => (
    //                 <h2 className="text-success">{el.doc_count}</h2>
    //               ))
    //             }
    //           />
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //     <Grid item xs={12}>
    //       <Grid container spacing={3}>
    //         <Grid item xs={6}>
    //           <div className="card">
    //             <div className="card-body">
    //               <h4 className="card-title text-center h4">
    //                 Top 10 Source CUCM Node ID
    //               </h4>
    //               <div className="table-responsive">
    //                 <HorizontalBarChart
    //                   labels={
    //                     state.Top10SourceCUCMNodeID &&
    //                     state.Top10SourceCUCMNodeID.aggregations["3"].buckets.map(
    //                       (el) => el.key
    //                     )
    //                   }
    //                   data={
    //                     state.Top10SourceCUCMNodeID &&
    //                     state.Top10SourceCUCMNodeID.aggregations["3"].buckets.map(
    //                       (el) => el.doc_count
    //                     )
    //                   }
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //         </Grid>
    //         <Grid item xs={6}>
    //           <div className="card">
    //             <div className="card-body">
    //               <h4 className="card-title text-center h4">
    //                 Top 10 Destination CUCM Node ID
    //               </h4>
    //               <div className="table-responsive">
    //                 <HorizontalBarChart
    //                   labels={
    //                     state.Top10DestinationCUCMNodeID &&
    //                     state.Top10DestinationCUCMNodeID.aggregations[
    //                       "3"
    //                     ].buckets.map((el) => el.key)
    //                   }
    //                   data={
    //                     state.Top10DestinationCUCMNodeID &&
    //                     state.Top10DestinationCUCMNodeID.aggregations[
    //                       "3"
    //                     ].buckets.map((el) => el.doc_count)
    //                   }
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //     <Grid item xs={12}>
    //       <Grid container spacing={3}>
    //         <Grid item xs={6}>
    //           <div className="card">
    //             <div className="card-body">
    //               <h4 className="card-title text-center h4">
    //                 Cluster - Calls from CUCM Node Id
    //               </h4>
    //               <div className="table-responsive">
    //                 <PieChart
    //                   total={
    //                     state.ClusterCallsFromCUCMNodeId &&
    //                     state.ClusterCallsFromCUCMNodeId.hits.total
    //                   }
    //                   labels={
    //                     state.ClusterCallsFromCUCMNodeId &&
    //                     state.ClusterCallsFromCUCMNodeId.aggregations[
    //                       "2"
    //                     ].buckets.map((el) => el.key)
    //                   }
    //                   data={
    //                     state.ClusterCallsFromCUCMNodeId &&
    //                     state.ClusterCallsFromCUCMNodeId.aggregations[
    //                       "2"
    //                     ].buckets.map((el) => el.doc_count)
    //                   }
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //         </Grid>
    //         <Grid item xs={6}>
    //           <div className="card">
    //             <div className="card-body">
    //               <h4 className="card-title text-center h4">
    //                 Cluster - Calls to CUCM Node Id
    //               </h4>
    //               <div className="table-responsive">
    //                 <PieChart
    //                   total={
    //                     state.ClusterCallsToCUCMNodeId &&
    //                     state.ClusterCallsToCUCMNodeId.hits.total
    //                   }
    //                   labels={
    //                     state.ClusterCallsToCUCMNodeId &&
    //                     state.ClusterCallsToCUCMNodeId.aggregations[
    //                       "2"
    //                     ].buckets.map((el) => el.key)
    //                   }
    //                   data={
    //                     state.ClusterCallsToCUCMNodeId &&
    //                     state.ClusterCallsToCUCMNodeId.aggregations[
    //                       "2"
    //                     ].buckets.map((el) => el.doc_count)
    //                   }
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //     <Grid item xs={12}>
    //       <Grid container spacing={3}>
    //         <Grid item xs={6}>
    //           <div className="card">
    //             <div className="card-body">
    //               <h4 className="card-title text-center h4">
    //                 External Outgoing Calls By Source Node Id
    //               </h4>
    //               <div className="table-responsive">
    //                 <DoughnutChart
    //                   data={
    //                     state.ExternalOutgoingCallsBySourceNodeId &&
    //                     Object.values(
    //                       state.ExternalOutgoingCallsBySourceNodeId.aggregations[
    //                         "2"
    //                       ].buckets
    //                     ).map((e) => e.doc_count)
    //                   }
    //                   total={
    //                     state.ExternalOutgoingCallsBySourceNodeId &&
    //                     state.ExternalOutgoingCallsBySourceNodeId.hits.total
    //                   }
    //                   labels={
    //                     state.ExternalOutgoingCallsBySourceNodeId &&
    //                     state.ExternalOutgoingCallsBySourceNodeId.aggregations[
    //                       "2"
    //                     ].buckets.map((el) => el.key)
    //                   }
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //         </Grid>
    //         <Grid item xs={6}>
    //           <div className="card">
    //             <div className="card-body">
    //               <h4 className="card-title text-center h4">
    //                 External Outgoing Calls By Destination Node Id
    //               </h4>
    //               <div className="table-responsive">
    //                 <DoughnutChart
    //                   data={
    //                     state.ExternalOutgoingCallsByDestinationNodeId &&
    //                     Object.values(
    //                       state.ExternalOutgoingCallsByDestinationNodeId.aggregations[
    //                         "2"
    //                       ].buckets
    //                     ).map((e) => e.doc_count)
    //                   }
    //                   total={
    //                     state.ExternalOutgoingCallsByDestinationNodeId &&
    //                     state.ExternalOutgoingCallsByDestinationNodeId.hits.total
    //                   }
    //                   labels={
    //                     state.ExternalOutgoingCallsByDestinationNodeId &&
    //                     state.ExternalOutgoingCallsByDestinationNodeId.aggregations[
    //                       "2"
    //                     ].buckets.map((el) => el.key)
    //                   }
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //     <Grid item xs={12}>
    //       <Grid container spacing={3}>
    //         <Grid item xs={6}>
    //           <div className="card">
    //             <div className="card-body">
    //               <h4 className="card-title text-center h4">
    //                 External Incomming Calls By Source Node Id
    //               </h4>
    //               <div className="table-responsive">
    //                 <PieChart
    //                   total={
    //                     state.ExternalIncommingCallsBySourceNodeId &&
    //                     state.ExternalIncommingCallsBySourceNodeId.hits.total
    //                   }
    //                   labels={
    //                     state.ExternalIncommingCallsBySourceNodeId &&
    //                     state.ExternalIncommingCallsBySourceNodeId.aggregations[
    //                       "2"
    //                     ].buckets.map((el) => el.key)
    //                   }
    //                   data={
    //                     state.ExternalIncommingCallsBySourceNodeId &&
    //                     state.ExternalIncommingCallsBySourceNodeId.aggregations[
    //                       "2"
    //                     ].buckets.map((el) => el.doc_count)
    //                   }
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //         </Grid>
    //         <Grid item xs={6}>
    //           <div className="card">
    //             <div className="card-body">
    //               <h4 className="card-title text-center h4">
    //                 External Incomming Calls By Destination Node Id
    //               </h4>
    //               <div className="table-responsive">
    //                 <PieChart
    //                   total={
    //                     state.ExternalIncommingCallsByDestinationNodeId &&
    //                     state.ExternalIncommingCallsByDestinationNodeId.hits.total
    //                   }
    //                   labels={
    //                     state.ExternalIncommingCallsByDestinationNodeId &&
    //                     state.ExternalIncommingCallsByDestinationNodeId.aggregations[
    //                       "2"
    //                     ].buckets.map((el) => el.key)
    //                   }
    //                   data={
    //                     state.ExternalIncommingCallsByDestinationNodeId &&
    //                     state.ExternalIncommingCallsByDestinationNodeId.aggregations[
    //                       "2"
    //                     ].buckets.map((el) => el.doc_count)
    //                   }
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </div>

    <div>
      {/* <h2 className="py-2">Calls By CUCM Node Id</h2> */}
      <Grid container spacing={3}>
        {/* SeriesCard Components */}
        <Grid item xs={6}>
          <SeriesCard
            title={"Call counts by Origin CUCM Node ID"}
            labels={[
              <Typography variant="body1" className="text-primary">Label 1</Typography>,
              <Typography variant="body1" className="text-primary">Label 2</Typography>,
              <Typography variant="body1" className="text-primary">Label 3</Typography>
            ]}
            data={[
              <Typography variant="h2" className="text-success">124</Typography>,
              <Typography variant="h2" className="text-success">30</Typography>,
              <Typography variant="h2" className="text-success">430</Typography>
            ]}
          />
        </Grid>
        <Grid item xs={6}>
          <SeriesCard
            title={"Call counts by Destination CUCM Node ID"}
            labels={[
              <Typography variant="body1" className="text-primary">Label 1</Typography>,
              <Typography variant="body1" className="text-primary">Label 2</Typography>,
              <Typography variant="body1" className="text-primary">Label 3</Typography>
            ]}
            data={[
              <Typography variant="h2" className="text-success">240</Typography>,
              <Typography variant="h2" className="text-success">304</Typography>,
              <Typography variant="h2" className="text-success">402</Typography>
            ]}
          />
        </Grid>

        {/* HorizontalBarChart Components */}
        <Grid item xs={6}>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-center h4">
                Top 10 Source CUCM Node ID
              </h4>
              <div className="table-responsive">
                <HorizontalBarChart labels={labels} data={data} />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-center h4">
                Top 10 Destination CUCM Node ID
              </h4>
              <div className="table-responsive">
                <HorizontalBarChart labels={labels} data={data} />
              </div>
            </div>
          </div>
        </Grid>

        {/* PieChart Components */}
        <Grid item xs={6}>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-center h4">
                Cluster - Calls from CUCM Node Id
              </h4>
              <div className="table-responsive">
                <PieChart total={total} labels={labels} data={data} />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-center h4">
                Cluster - Calls to CUCM Node Id
              </h4>
              <div className="table-responsive">
                <PieChart total={total} labels={labels} data={data} />
              </div>
            </div>
          </div>
        </Grid>

        {/* More PieChart Components */}
        <Grid item xs={6}>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-center h4">
                External Outgoing Calls By Source Node Id
              </h4>
              <div className="table-responsive">
                <PieChart total={total} labels={labels} data={data} />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-center h4">
                External Outgoing Calls By Destination Node Id
              </h4>
              <div className="table-responsive">
                <PieChart total={total} labels={labels} data={data} />
              </div>
            </div>
          </div>
        </Grid>

        {/* Even More PieChart Components */}
        <Grid item xs={6}>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-center h4">
                External Incomming Calls By Source Node Id
              </h4>
              <div className="table-responsive">
                <PieChart total={total} labels={labels} data={data} />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-center h4">
                External Incomming Calls By Destination Node Id
              </h4>
              <div className="table-responsive">
                <PieChart total={total} labels={labels} data={data} />
              </div>
            </div>
          </div>
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
export default connect(mapStateToProps)(CallsByCUCMNodeId);
