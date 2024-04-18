import React, { Component } from "react";
// import {
//   CallsFromJabberForAndroidByOriginNodeIdPie,
//   CallsFromJabberForAndroidBySIPTrunk,
//   CallsFromJabberForAndroidBySourceCodec,
//   CallsFromJabberForAndroidBySourceTimeInterval,
//   CallsToJabberForAndroidByDestinationCodec,
//   CallsToJabberForAndroidByDestinationNodeIdPie,
//   CallsToJabberForAndroidBySIPTrunk,
//   CallsToJabberForAndroidBySourceTimeInterval,
//   Top20CalledJabberForAndroidSoftPhones,
//   Top20CallingJabberForAndroidSoftPhones,
// } from "../services/advancedJabberForAndroid";
import { Grid, Typography, Card, CardContent } from '@mui/material';

import DoughnutChart from "../../charts/DoughnutChart";
import { BarChart } from "../../charts/BarChart";
import { HorizontalBarChart } from "../../charts/HorizontalBarChart";
// import Spinner from "../shared/Spinner";
// import moment from "moment";
import { connect } from "react-redux";

const AdvancedJabberAndroidPhonesCall = ({ date }) => {
  // const [state, setState] = useState({
  //   CallsFromJabberForAndroidBySIPTrunk: "",
  //   CallsToJabberForAndroidBySIPTrunk: "",
  //   CallsFromJabberForAndroidByOriginNodeIdPie: "",
  //   CallsToJabberForAndroidByDestinationNodeIdPie: "",
  //   CallsFromJabberForAndroidBySourceCodec: "",
  //   CallsToJabberForAndroidByDestinationCodec: "",
  //   CallsToJabberForAndroidBySourceTimeInterval: "",
  //   CallsFromJabberForAndroidBySourceTimeInterval: "",
  //   Top20CalledJabberForAndroidSoftPhones: "",
  //   Top20CallingJabberForAndroidSoftPhones: "",
  //   loading: false,
  // });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setState({ ...state, loading: true });
  //       let current = moment().format();
  //       let dateParam = date?.selectedDate;
  //       let body = { current: current, date: dateParam };

  //       const res0 = await CallsFromJabberForAndroidBySIPTrunk(body);
  //       const res1 = await CallsToJabberForAndroidBySIPTrunk(body);
  //       const res2 = await CallsFromJabberForAndroidByOriginNodeIdPie(body);
  //       const res3 = await CallsToJabberForAndroidByDestinationNodeIdPie(body);
  //       const res4 = await CallsFromJabberForAndroidBySourceCodec(body);
  //       const res5 = await CallsToJabberForAndroidByDestinationCodec(body);
  //       const res6 = await CallsToJabberForAndroidBySourceTimeInterval(body);
  //       const res7 = await CallsFromJabberForAndroidBySourceTimeInterval(body);
  //       const res8 = await Top20CalledJabberForAndroidSoftPhones(body);
  //       const res9 = await Top20CallingJabberForAndroidSoftPhones(body);

  //       setState({
  //         ...state,
  //         CallsFromJabberForAndroidBySIPTrunk: res0.data,
  //         CallsToJabberForAndroidBySIPTrunk: res1.data,
  //         CallsFromJabberForAndroidByOriginNodeIdPie: res2.data,
  //         CallsToJabberForAndroidByDestinationNodeIdPie: res3.data,
  //         CallsFromJabberForAndroidBySourceCodec: res4.data,
  //         CallsToJabberForAndroidByDestinationCodec: res5.data,
  //         CallsToJabberForAndroidBySourceTimeInterval: res6.data,
  //         CallsFromJabberForAndroidBySourceTimeInterval: res7.data,
  //         Top20CalledJabberForAndroidSoftPhones: res8.data,
  //         Top20CallingJabberForAndroidSoftPhones: res9.data,
  //         loading: false,
  //       });
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       setState({ ...state, loading: false });
  //     }
  //   };

  //   fetchData();
  // }, [date]); // Fetch data whenever the date prop changes

  // let total1 =
  //   state.CallsFromJabberForAndroidBySIPTrunk &&
  //   state.CallsFromJabberForAndroidBySIPTrunk.hits.total;
  // let labels1 =
  //   state.CallsFromJabberForAndroidBySIPTrunk &&
  //   state.CallsFromJabberForAndroidBySIPTrunk.aggregations[
  //     "2"
  //   ].buckets.map((el) => el.key);
  // let data1 =
  //   state.CallsFromJabberForAndroidBySIPTrunk &&
  //   Object.values(
  //     state.CallsFromJabberForAndroidBySIPTrunk.aggregations["2"].buckets
  //   ).map((e) => e.doc_count);
  // let total2 =
  //   state.CallsToJabberForAndroidBySIPTrunk &&
  //   state.CallsToJabberForAndroidBySIPTrunk.hits.total;
  // let labels2 =
  //   state.CallsToJabberForAndroidBySIPTrunk &&
  //   state.CallsToJabberForAndroidBySIPTrunk.aggregations[
  //     "2"
  //   ].buckets.map((el) => el.key);
  // let data2 =
  //   state.CallsToJabberForAndroidBySIPTrunk &&
  //   Object.values(
  //     state.CallsToJabberForAndroidBySIPTrunk.aggregations["2"].buckets
  //   ).map((e) => e.doc_count);

  // let total3 =
  //   state.CallsFromJabberForAndroidByOriginNodeIdPie &&
  //   state.CallsFromJabberForAndroidByOriginNodeIdPie.hits.total;
  // let labels3 =
  //   state.CallsFromJabberForAndroidByOriginNodeIdPie &&
  //   state.CallsFromJabberForAndroidByOriginNodeIdPie.aggregations[
  //     "2"
  //   ].buckets.map((el) => el.key);
  // let data3 =
  //   state.CallsFromJabberForAndroidByOriginNodeIdPie &&
  //   Object.values(
  //     state.CallsFromJabberForAndroidByOriginNodeIdPie.aggregations["2"]
  //       .buckets
  //   ).map((e) => e.doc_count);
  // let total4 =
  //   state.CallsToJabberForAndroidByDestinationNodeIdPie &&
  //   state.CallsToJabberForAndroidByDestinationNodeIdPie.hits.total;
  // let labels4 =
  //   state.CallsToJabberForAndroidByDestinationNodeIdPie &&
  //   state.CallsToJabberForAndroidByDestinationNodeIdPie.aggregations[
  //     "2"
  //   ].buckets.map((el) => el.key);
  // let data4 =
  //   state.CallsToJabberForAndroidByDestinationNodeIdPie &&
  //   Object.values(
  //     state.CallsToJabberForAndroidByDestinationNodeIdPie.aggregations[
  //       "2"
  //     ].buckets
  //   ).map((e) => e.doc_count);

  // let total5 =
  //   state.CallsFromJabberForAndroidBySourceCodec &&
  //   state.CallsFromJabberForAndroidBySourceCodec.hits.total;
  // let labels5 =
  //   state.CallsFromJabberForAndroidBySourceCodec &&
  //   state.CallsFromJabberForAndroidBySourceCodec.aggregations[
  //     "2"
  //   ].buckets.map((el) => el.key);
  // let data5 =
  //   state.CallsFromJabberForAndroidBySourceCodec &&
  //   Object.values(
  //     state.CallsFromJabberForAndroidBySourceCodec.aggregations["2"]
  //       .buckets
  //   ).map((e) => e.doc_count);

  // let total6 =
  //   state.CallsToJabberForAndroidByDestinationCodec &&
  //   state.CallsToJabberForAndroidByDestinationCodec.hits.total;
  // let labels6 =
  //   state.CallsToJabberForAndroidByDestinationCodec &&
  //   state.CallsToJabberForAndroidByDestinationCodec.aggregations[
  //     "2"
  //   ].buckets.map((el) => el.key);
  // let data6 =
  //   state.CallsToJabberForAndroidByDestinationCodec &&
  //   Object.values(
  //     state.CallsToJabberForAndroidByDestinationCodec.aggregations["2"]
  //       .buckets
  //   ).map((e) => e.doc_count);

  // let labels7 =
  //   state.CallsToJabberForAndroidBySourceTimeInterval &&
  //   state.CallsToJabberForAndroidBySourceTimeInterval.aggregations[
  //     "2"
  //   ].buckets.map((e) => e.key_as_string.split("T")[0]);
  // let data7 =
  //   state.CallsToJabberForAndroidBySourceTimeInterval &&
  //   state.CallsToJabberForAndroidBySourceTimeInterval.aggregations[
  //     "2"
  //   ].buckets.map((e) => e.doc_count);

  // let labels8 =
  //   state.CallsFromJabberForAndroidBySourceTimeIntervall &&
  //   state.CallsFromJabberForAndroidBySourceTimeIntervall.aggregations[
  //     "2"
  //   ].buckets.map((e) => e.key_as_string.split("T")[0]);
  // let data8 =
  //   state.CallsFromJabberForAndroidBySourceTimeIntervall &&
  //   state.CallsFromJabberForAndroidBySourceTimeIntervall.aggregations[
  //     "2"
  //   ].buckets.map((e) => e.doc_count);

  // let labels9 =
  //   state.Top20CalledJabberForAndroidSoftPhones &&
  //   state.Top20CalledJabberForAndroidSoftPhones.aggregations[
  //     "3"
  //   ].buckets.map((e) => e.key);
  // let data9 =
  //   state.Top20CalledJabberForAndroidSoftPhones &&
  //   state.Top20CalledJabberForAndroidSoftPhones.aggregations[
  //     "3"
  //   ].buckets.map((e) => e.doc_count);

  // let labels10 =
  //   state.Top20CallingJabberForAndroidSoftPhones &&
  //   state.Top20CallingJabberForAndroidSoftPhones.aggregations[
  //     "3"
  //   ].buckets.map((e) => e.key);
  // let data10 =
  //   state.Top20CallingJabberForAndroidSoftPhones &&
  //   state.Top20CallingJabberForAndroidSoftPhones.aggregations[
  //     "3"
  //   ].buckets.map((e) => e.doc_count);
  // if (state.loading) return <Spinner />;
  return (
    //   <div>
    //   <Typography variant="h2" className="py-2">
    //     Advanced Jabber for Android Soft Phones Calls
    //   </Typography>
    //   <Grid container spacing={3}>
    //     <Grid item xs={12} sm={6}>
    //       <Card>
    //         <CardContent>
    //           <Typography variant="h5" component="h2" className="text-center">
    //             Calls from Jabber for Android by SIP Trunk
    //           </Typography>
    //           <DoughnutChart data={data1} total={total1} labels={labels1} />
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <Card>
    //         <CardContent>
    //           <Typography variant="h5" component="h2" className="text-center">
    //             Calls to Jabber for Android by SIP Trunk
    //           </Typography>
    //           <DoughnutChart data={data2} total={total2} labels={labels2} />
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //     <Grid item xs={12} md={6}>
    //       <Card>
    //         <CardContent>
    //           <Typography variant="h4" component="h2" className="text-center">
    //             Calls from Jabber for Android by Origin Node Id Pie
    //           </Typography>
    //           <DoughnutChart data={data3} total={total3} labels={labels3} />
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //     <Grid item xs={12} md={6}>
    //       <Card>
    //         <CardContent>
    //           <Typography variant="h4" component="h2" className="text-center">
    //             Calls to Jabber for Android by Destination Node Id Pie
    //           </Typography>
    //           <DoughnutChart data={data4} total={total4} labels={labels4} />
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <Card>
    //         <CardContent>
    //           <Typography variant="h4" component="h2" className="text-center">
    //             Calls from Jabber for Android by Source Codec
    //           </Typography>
    //           <DoughnutChart data={data5} total={total5} labels={labels5} />
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <Card>
    //         <CardContent>
    //           <Typography variant="h4" component="h2" className="text-center">
    //             Calls to Jabber for Android by Destination Codec
    //           </Typography>
    //           <DoughnutChart data={data6} total={total6} labels={labels6} />
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //     <Grid item xs={12}>
    //       <Card>
    //         <CardContent>
    //           <Typography variant="h5" component="h2" className="text-center">
    //             Calls to Jabber for Android by Source Time Interval
    //           </Typography>
    //           <BarChart labels={labels7} data={data7} />
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //     <Grid item xs={12}>
    //       <Card>
    //         <CardContent>
    //           <Typography variant="h5" component="h2" className="text-center">
    //             Calls from Jabber for Android by Source Time Interval
    //           </Typography>
    //           <BarChart labels={labels8} data={data8} />
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //     <Grid item xs={12}>
    //       <Card>
    //         <CardContent>
    //           <Typography variant="h5" component="h2" className="text-center">
    //             Top 20 called Jabber for Android Soft Phones
    //           </Typography>
    //           <HorizontalBarChart labels={labels9} data={data9} />
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //     <Grid item xs={12}>
    //       <Card>
    //         <CardContent>
    //           <Typography variant="h5" component="h2" className="text-center">
    //             Top 20 calling Jabber for Android Soft Phones
    //           </Typography>
    //           <HorizontalBarChart labels={labels10} data={data10} />
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //   </Grid>
    // </div>
    <div>
      {/* <Typography variant="h2" className="py-2">
        Advanced Jabber for Android Soft Phones Calls
      </Typography> */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" className="text-center">
                Calls from Jabber for Android by SIP Trunk
              </Typography>
              <DoughnutChart labels={["Label1", "Label2"]} data={[50, 50]} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" className="text-center">
                Calls to Jabber for Android by SIP Trunk
              </Typography>
              <DoughnutChart labels={["Label1", "Label2"]} data={[50, 50]} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" component="h2" className="text-center">
                Calls from Jabber for Android by Origin Node Id Pie
              </Typography>
              <DoughnutChart labels={["Label1", "Label2"]} data={[50, 50]} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" component="h2" className="text-center">
                Calls to Jabber for Android by Destination Node Id Pie
              </Typography>
              <DoughnutChart labels={["Label1", "Label2"]} data={[50, 50]} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" component="h2" className="text-center">
                Calls from Jabber for Android by Source Codec
              </Typography>
              <DoughnutChart labels={["Label1", "Label2"]} data={[50, 50]} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" component="h2" className="text-center">
                Calls to Jabber for Android by Destination Codec
              </Typography>
              <DoughnutChart labels={["Label1", "Label2"]} data={[50, 50]} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" className="text-center">
                Calls to Jabber for Android by Source Time Interval
              </Typography>
              <BarChart labels={["Label1", "Label2"]} data={[50, 50]} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" className="text-center">
                Calls from Jabber for Android by Source Time Interval
              </Typography>
              <BarChart labels={["Label1", "Label2"]} data={[50, 50]} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" className="text-center">
                Top 20 called Jabber for Android Soft Phones
              </Typography>
              <HorizontalBarChart labels={["Label1", "Label2"]} data={[50, 50]} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" className="text-center">
                Top 20 calling Jabber for Android Soft Phones
              </Typography>
              <HorizontalBarChart labels={["Label1", "Label2"]} data={[50, 50]} />
            </CardContent>
          </Card>
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
export default connect(mapStateToProps)(AdvancedJabberAndroidPhonesCall);
