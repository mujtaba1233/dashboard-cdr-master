import React, { useState, useEffect } from "react";
import { Typography, Grid } from "@mui/material";

// import {
//   ExternalIncomingCallsFromLongDistanceNumbers,
//   ExternalOutgoingCallsFromInternationalSources,
//   ExternalOutgoingCallsFromLongDistanceNumbers,
//   ExternalOutgoingCallsFromTollFreeNumbers,
//   ExternalOutgoingCallsToTollFreeNumbers,
//   ExternalOutgoingCallsToTollInternationalSources,
// } from "../services/clusterCallType";
// import Spinner from "../shared/Spinner";
import DataCard from "../../layout/dataCard";
import { connect } from "react-redux";
// import moment from "moment";

const ClusterCallType = ({ date }) => {
    //   const [data, setData] = useState({
    //     ExternalIncomingCallsFromLongDistanceNumbers: "",
    //     ExternalOutgoingCallsFromInternationalSources: "",
    //     ExternalOutgoingCallsFromLongDistanceNumbers: "",
    //     ExternalOutgoingCallsFromTollFreeNumbers: "",
    //     ExternalOutgoingCallsToTollFreeNumbers: "",
    //     ExternalOutgoingCallsToTollInternationalSources: "",
    //     loading: false,
    //   });

    //   useEffect(() => {
    //     fetchData();
    //   }, [date]);

    //   const fetchData = async () => {
    //     const current = moment().format();
    //     const selectedDate = date?.selectedDate;
    //     setData((prevData) => ({ ...prevData, loading: true }));

    //     const [
    //       res1,
    //       res2,
    //       res3,
    //       res4,
    //       res5,
    //       res6,
    //     ] = await Promise.all([
    //       ExternalIncomingCallsFromLongDistanceNumbers({
    //         current,
    //         date: selectedDate,
    //       }),
    //       ExternalOutgoingCallsFromInternationalSources({
    //         current,
    //         date: selectedDate,
    //       }),
    //       ExternalOutgoingCallsFromLongDistanceNumbers({
    //         current,
    //         date: selectedDate,
    //       }),
    //       ExternalOutgoingCallsFromTollFreeNumbers({ current, date: selectedDate }),
    //       ExternalOutgoingCallsToTollFreeNumbers({ current, date: selectedDate }),
    //       ExternalOutgoingCallsToTollInternationalSources({
    //         current,
    //         date: selectedDate,
    //       }),
    //     ]);

    //     setData({
    //       ExternalIncomingCallsFromLongDistanceNumbers:
    //         res1.data.hits.total.value,
    //       ExternalOutgoingCallsFromInternationalSources:
    //         res2.data.hits.total.value,
    //       ExternalOutgoingCallsFromLongDistanceNumbers:
    //         res3.data.hits.total.value,
    //       ExternalOutgoingCallsFromTollFreeNumbers:
    //         res4.data.hits.total.value,
    //       ExternalOutgoingCallsToTollFreeNumbers: res5.data.hits.total.value,
    //       ExternalOutgoingCallsToTollInternationalSources:
    //         res6.data.hits.total.value,
    //       loading: false,
    //     });
    //   };

    //   if (data.loading) return <Spinner />;
    return (
        // <div>
        //   <h2 className="py-2">Cluster Calls Type</h2>
        //   <div className="row">
        //     <DataCard
        //       col={6}
        //       label={"External Incoming Calls from Long Distance Numbers"}
        //       data={data.ExternalIncomingCallsFromLongDistanceNumbers}
        //     />
        //     <DataCard
        //       col={6}
        //       label={"External Outgoing Calls to Long Distance Numbers"}
        //       data={data.ExternalOutgoingCallsFromLongDistanceNumbers}
        //     />
        //   </div>

        //   <div className="row">
        //     <DataCard
        //       col={6}
        //       label={"External Incoming Calls from Toll Free Numbers"}
        //       data={data.ExternalOutgoingCallsFromTollFreeNumbers}
        //     />
        //     <DataCard
        //       col={6}
        //       label={"External Outgoing Calls to Toll Free Numbers"}
        //       data={data.ExternalOutgoingCallsToTollFreeNumbers}
        //     />
        //   </div>
        //   <div className="row">
        //     <DataCard
        //       col={6}
        //       label={"External Incoming Calls from International Sources"}
        //       data={data.ExternalOutgoingCallsFromInternationalSources}
        //     />
        //     <DataCard
        //       col={6}
        //       label={" External Outgoing Calls to International Sources"}
        //       data={data.ExternalOutgoingCallsToTollInternationalSources}
        //     />
        //   </div>
        // </div>
        <div>
            {/* <Typography variant="h2" className="py-2">Cluster Calls Type</Typography> */}
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <DataCard
                        label={"External Incoming Calls from Long Distance Numbers"}
                        data={150} // Example value: replace with actual data
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <DataCard
                        label={"External Outgoing Calls to Long Distance Numbers"}
                        data={200} // Example value: replace with actual data
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <DataCard
                        label={"External Incoming Calls from Toll Free Numbers"}
                        data={100} // Example value: replace with actual data
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <DataCard
                        label={"External Outgoing Calls to Toll Free Numbers"}
                        data={50} // Example value: replace with actual data
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <DataCard
                        label={"External Incoming Calls from International Sources"}
                        data={80} // Example value: replace with actual data
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <DataCard
                        label={"External Outgoing Calls to International Sources"}
                        data={120} // Example value: replace with actual data
                    />
                </Grid>
            </Grid>
        </div>
    );
};

const mapStateToProps = (state) => ({
    date: state.date,
});

export default connect(mapStateToProps)(ClusterCallType);
