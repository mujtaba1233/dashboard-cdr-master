import React, { Component } from "react";
import { Grid, Typography, Card, CardContent } from '@mui/material';

// import {
//   CallsFromJabberForIOSByOriginNodeIdPie,
//   CallsFromJabberForIOSBySIPTrunk,
//   CallsFromJabberForIOSBySourceCodec,
//   CallsFromJabberForIOSBySourceTimeInterval,
//   CallsToJabberForIOSByDestinationCodec,
//   CallsToJabberForIOSByDestinationNodeIdPie,
//   CallsToJabberForIOSBySIPTrunk,
//   CallsToJabberForIOSBySourceTimeIntervall,
//   Top20CalledIOSSoftPhones,
//   Top20CallingIOSSoftPhones,
// } from "../services/advancedJabberForIos";
import DoughnutChart from "../../charts/DoughnutChart";
import { BarChart } from "../../charts/BarChart";
import { HorizontalBarChart } from "../../charts/HorizontalBarChart";
// import Spinner from "../shared/Spinner";
// import moment from "moment";
import { connect } from "react-redux";
const AdvancedJabberIpPhonesCall = (props) => {
  // const [state, setState] = useState({
  //   CallsToJabberForIOSBySIPTrunk: "",
  //   CallsFromJabberForIOSBySIPTrunk: "",
  //   CallsFromJabberForIOSByOriginNodeIdPie: "",
  //   CallsToJabberForIOSByDestinationNodeIdPie: "",
  //   CallsFromJabberForIOSBySourceCodec: "",
  //   CallsToJabberForIOSByDestinationCodec: "",
  //   CallsFromJabberForIOSBySourceTimeInterval: "",
  //   CallsToJabberForIOSBySourceTimeIntervall: "",
  //   Top20CallingIOSSoftPhones: "",
  //   Top20CalledIOSSoftPhones: "",
  //   loading: false,
  // });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const current = moment().format();
  //     const date = props.date?.selectedDate;
  //     setState(prevState => ({ ...prevState, loading: true }));
  //     const res0 = await CallsToJabberForIOSBySIPTrunk({ current, date });
  //     const res1 = await CallsFromJabberForIOSBySIPTrunk({ current, date });
  //     const res2 = await CallsFromJabberForIOSByOriginNodeIdPie({ current, date });
  //     const res3 = await CallsToJabberForIOSByDestinationNodeIdPie({ current, date });
  //     const res4 = await CallsFromJabberForIOSBySourceCodec({ current, date });
  //     const res5 = await CallsToJabberForIOSByDestinationCodec({ current, date });
  //     const res6 = await CallsFromJabberForIOSBySourceTimeInterval({ current, date });
  //     const res7 = await CallsToJabberForIOSBySourceTimeIntervall({ current, date });
  //     const res8 = await Top20CallingIOSSoftPhones({ current, date });
  //     const res9 = await Top20CalledIOSSoftPhones({ current, date });
  //     setState({
  //       CallsToJabberForIOSBySIPTrunk: res0.data,
  //       CallsFromJabberForIOSBySIPTrunk: res1.data,
  //       CallsFromJabberForIOSByOriginNodeIdPie: res2.data,
  //       CallsToJabberForIOSByDestinationNodeIdPie: res3.data,
  //       CallsFromJabberForIOSBySourceCodec: res4.data,
  //       CallsToJabberForIOSByDestinationCodec: res5.data,
  //       CallsFromJabberForIOSBySourceTimeInterval: res6.data,
  //       CallsToJabberForIOSBySourceTimeIntervall: res7.data,
  //       Top20CallingIOSSoftPhones: res8.data,
  //       Top20CalledIOSSoftPhones: res9.data,
  //       loading: false,
  //     });
  //   };
  //   fetchData();
  // }, [props.date]);

  // const total1 = state.CallsToJabberForIOSBySIPTrunk && state.CallsToJabberForIOSBySIPTrunk.hits.total;
  // const labels1 = state.CallsToJabberForIOSBySIPTrunk && state.CallsToJabberForIOSBySIPTrunk.aggregations["2"].buckets.map(el => el.key);
  // const data1 = state.CallsToJabberForIOSBySIPTrunk && Object.values(state.CallsToJabberForIOSBySIPTrunk.aggregations["2"].buckets).map((e) => e.doc_count);
  // const total2 = state.CallsFromJabberForIOSBySIPTrunk && state.CallsFromJabberForIOSBySIPTrunk.hits.total;
  // const labels2 = state.CallsFromJabberForIOSBySIPTrunk && state.CallsFromJabberForIOSBySIPTrunk.aggregations["2"].buckets.map(el => el.key);
  // const data2 = state.CallsFromJabberForIOSBySIPTrunk && Object.values(state.CallsFromJabberForIOSBySIPTrunk.aggregations["2"].buckets).map((e) => e.doc_count);

  // let total3 =
  //   state.CallsFromJabberForIOSByOriginNodeIdPie &&
  //   state.CallsFromJabberForIOSByOriginNodeIdPie.hits.total;
  // let labels3 =
  //   state.CallsFromJabberForIOSByOriginNodeIdPie &&
  //   state.CallsFromJabberForIOSByOriginNodeIdPie.aggregations["2"]
  //     .buckets.map(el => el.key)
  // let data3 =
  //   state.CallsFromJabberForIOSByOriginNodeIdPie &&
  //   Object.values(
  //     state.CallsFromJabberForIOSByOriginNodeIdPie.aggregations["2"]
  //       .buckets
  //   ).map((e) => e.doc_count);

  // let total4 =
  //   state.CallsToJabberForIOSByDestinationNodeIdPie &&
  //   state.CallsToJabberForIOSByDestinationNodeIdPie.hits.total;
  // let labels4 =
  //   state.CallsToJabberForIOSByDestinationNodeIdPie &&
  //   state.CallsToJabberForIOSByDestinationNodeIdPie.aggregations["2"]
  //     .buckets.map(el => el.key)
  // let data4 =
  //   state.CallsToJabberForIOSByDestinationNodeIdPie &&
  //   Object.values(
  //     state.CallsToJabberForIOSByDestinationNodeIdPie.aggregations["2"]
  //       .buckets
  //   ).map((e) => e.doc_count);

  // let total5 =
  //   state.CallsFromJabberForIOSBySourceCodec &&
  //   state.CallsFromJabberForIOSBySourceCodec.hits.total;
  // let labels5 =
  //   state.CallsFromJabberForIOSBySourceCodec &&
  //   state.CallsFromJabberForIOSBySourceCodec.aggregations["2"].buckets.map(el => el.key)
  // let data5 =
  //   state.CallsFromJabberForIOSBySourceCodec &&
  //   Object.values(
  //     state.CallsFromJabberForIOSBySourceCodec.aggregations["2"].buckets
  //   ).map((e) => e.doc_count);

  // let total6 =
  //   state.CallsToJabberForIOSByDestinationCodec &&
  //   state.CallsToJabberForIOSByDestinationCodec.hits.total;
  // let labels6 =
  //   state.CallsToJabberForIOSByDestinationCodec &&
  //   state.CallsToJabberForIOSByDestinationCodec.aggregations["2"]
  //     .buckets.map(el => el.key)
  // let data6 =
  //   state.CallsToJabberForIOSByDestinationCodec &&
  //   Object.values(
  //     state.CallsToJabberForIOSByDestinationCodec.aggregations["2"]
  //       .buckets
  //   ).map((e) => e.doc_count);

  // let labels7 =
  //   state.CallsFromJabberForIOSBySourceTimeInterval &&
  //   state.CallsFromJabberForIOSBySourceTimeInterval.aggregations[
  //     "2"
  //   ].buckets.map((e) => e.key_as_string.split("T")[0]);
  // let data7 =
  //   state.CallsFromJabberForIOSBySourceTimeInterval &&
  //   state.CallsFromJabberForIOSBySourceTimeInterval.aggregations[
  //     "2"
  //   ].buckets.map((e) => e.doc_count);

  // let labels8 =
  //   state.CallsToJabberForIOSBySourceTimeIntervall &&
  //   state.CallsToJabberForIOSBySourceTimeIntervall.aggregations[
  //     "2"
  //   ].buckets.map((e) => e.key_as_string.split("T")[0]);
  // let data8 =
  //   state.CallsToJabberForIOSBySourceTimeIntervall &&
  //   state.CallsToJabberForIOSBySourceTimeIntervall.aggregations[
  //     "2"
  //   ].buckets.map((e) => e.doc_count);

  // let labels9 =
  //   state.Top20CallingIOSSoftPhones &&
  //   state.Top20CallingIOSSoftPhones.aggregations["3"].buckets.map(
  //     (e) => e.key
  //   );
  // let data9 =
  //   state.Top20CallingIOSSoftPhones &&
  //   state.Top20CallingIOSSoftPhones.aggregations["3"].buckets.map(
  //     (e) => e.doc_count
  //   );

  // let labels10 =
  //   state.Top20CalledIOSSoftPhones &&
  //   state.Top20CalledIOSSoftPhones.aggregations["3"].buckets.map(
  //     (e) => e.key
  //   );
  // let data10 =
  //   state.Top20CalledIOSSoftPhones &&
  //   state.Top20CalledIOSSoftPhones.aggregations["3"].buckets.map(
  //     (e) => e.doc_count
  //   );
  // if (state.loading) return <Spinner />;
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" className="text-center">
                Calls to Jabber for iOS by SIP Trunk
              </Typography>
              <DoughnutChart labels={["Label1", "Label2"]} data={[50, 50]} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" className="text-center">
                Calls from Jabber for iOS by SIP Trunk
              </Typography>
              <DoughnutChart labels={["Label1", "Label2"]} data={[50, 50]} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" className="text-center">
                Calls from Jabber for iOS by Origin Node Id Pie
              </Typography>
              <DoughnutChart labels={["Label1", "Label2"]} data={[50, 50]} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" className="text-center">
                Calls to Jabber for iOS by Destination Node Id Pie
              </Typography>
              <DoughnutChart labels={["Label1", "Label2"]} data={[50, 50]} />
            </CardContent>
          </Card>
        </Grid>
        {/* Repeat the Card pattern for other cards */}
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" className="text-center">
                Calls from Jabber for iOS by Source Codec
              </Typography>
              <DoughnutChart labels={["Label1", "Label2"]} data={[50, 50]} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" className="text-center">
                Calls to Jabber for iOS by Destination Codec
              </Typography>
              <DoughnutChart labels={["Label1", "Label2"]} data={[50, 50]} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" className="text-center">
                Calls from Jabber for iOS by Source Time Interval
              </Typography>
              <BarChart labels={["Label1", "Label2"]} data={[50, 50]} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" className="text-center">
                Calls to Jabber for iOS by Source Time Intervall
              </Typography>
              <BarChart labels={["Label1", "Label2"]} data={[50, 50]} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" className="text-center">
                Top 20 calling iOS Soft Phones
              </Typography>
              <HorizontalBarChart labels={["Label1", "Label2"]} data={[50, 50]} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" className="text-center">
                Top 20 called iOS Soft Phones
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
export default connect(mapStateToProps)(AdvancedJabberIpPhonesCall);
