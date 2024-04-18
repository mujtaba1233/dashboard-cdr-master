import React, { Component } from "react";
import { BarChart } from "../../charts/BarChart";
import DoughnutChart from "../../charts/DoughnutChart";
import { HorizontalBarChart } from "../../charts/HorizontalBarChart";
import {Grid, Typography} from "@mui/material";

// import {
//   IncomingCallsForInternationalNumbers,
//   OutgoingCallsForInternationalNumbers,
//   IncommingCallsFromInternationalNumbersBySIPTrunk,
//   IncommingCallsToInternationalNumbersByDurationMetric,
//   IncommingInternationalCallingNumbersBySourceTimeInterval,
//   OutgoingCallsFromInternationalNumbersByDurationMetric,
//   OutgoingCallsFromInternationalNumbersBySIPTrunk,
//   OutgoingInternationalCallingNumbersBySourceTimeInterval,
//   Top20CalledInternationalNumbers,
//   Top20CallingExtentiontoInternationalNumbers,
// } from "../services/internationalCalls";
// import Spinner from "../shared/Spinner";
import DataCard from "../../layout/dataCard";
import ChartCard from "../../layout/chartCard";
// import moment from "moment";
import { connect } from "react-redux";

export class InternationalCalls extends Component {
  constructor(props) {
    super(props);
  //   this.state = {
  //     IncomingCallsForInternationalNumbers: "",
  //     OutgoingCallsForInternationalNumbers: "",
  //     IncommingCallsFromInternationalNumbersBySIPTrunk: "",
  //     IncommingCallsToInternationalNumbersByDurationPie: "",
  //     IncommingCallsToInternationalNumbersByDurationMetric: [],
  //     IncommingInternationalCallingNumbersBySourceTimeInterval: "",
  //     OutgoingCallsFromInternationalNumbersBySIPTrunk: "",
  //     OutgoingCallsToInternationalNumbersByDurationPie: "",
  //     OutgoingCallsFromInternationalNumbersByDurationMetric: [],
  //     OutgoingInternationalCallingNumbersBySourceTimeInterval: "",
  //     Top20CalledInternationalNumbers: "",
  //     Top20CallingExtentiontoInternationalNumbers: "",
  //     loading: false,
  //   };
  // }
  // componentDidMount() {
  //   let current = moment().format()
  //   let date = this.props.date?.selectedDate
  //   this.getData(current, date);
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (JSON.stringify(prevProps.date) !== JSON.stringify(this.props.date)) {
  //     let current = moment().format()
  //     let date = this.props.date?.selectedDate
  //     this.getData(current, date);
  //   }
  // }
  // getData = async (current, date) => {
  //   this.setState({ loading: true });
  //   let body = { current: current, date: date };
  //   const res = await IncomingCallsForInternationalNumbers(body);
  //   const res1 = await IncommingCallsFromInternationalNumbersBySIPTrunk(body);
  //   const res5 = await OutgoingCallsFromInternationalNumbersBySIPTrunk(body);

  //   const res3 = await IncommingCallsToInternationalNumbersByDurationMetric(
  //     body
  //   );
  //   const res6 = await OutgoingCallsFromInternationalNumbersByDurationMetric(
  //     body
  //   );
  //   const res11 =
  //     await IncommingInternationalCallingNumbersBySourceTimeInterval(body);
  //   const res7 = await OutgoingInternationalCallingNumbersBySourceTimeInterval(
  //     body
  //   );

  //   const res8 = await Top20CalledInternationalNumbers(body);
  //   const res9 = await Top20CallingExtentiontoInternationalNumbers(body);

  //   const res10 = await OutgoingCallsForInternationalNumbers(body);

  //   this.setState({
  //     IncomingCallsForInternationalNumbers: res.data.hits.total.value,
  //     OutgoingCallsForInternationalNumbers: res10.data.hits.total.value,
  //     IncommingCallsFromInternationalNumbersBySIPTrunk:
  //       res1.data.aggregations["2"].buckets,
  //     IncommingCallsToInternationalNumbersByDurationMetric:
  //       res3.data.aggregations["2"].buckets,
  //     IncommingInternationalCallingNumbersBySourceTimeInterval:
  //       res11.data.aggregations["2"].buckets,
  //     OutgoingCallsFromInternationalNumbersBySIPTrunk:
  //       res5.data.aggregations["2"].buckets,
  //     OutgoingCallsFromInternationalNumbersByDurationMetric:
  //       res6.data.aggregations["2"].buckets,
  //     OutgoingInternationalCallingNumbersBySourceTimeInterval:
  //       res7.data.aggregations["2"].buckets,
  //     Top20CalledInternationalNumbers: res8.data.aggregations["3"].buckets,
  //     Top20CallingExtentiontoInternationalNumbers:
  //       res9.data.aggregations["3"].buckets,
  //   });
  //   this.setState({ loading: false });
  };

  render() {
    // let labels1 =
    //   this.state.OutgoingCallsFromInternationalNumbersBySIPTrunk &&
    //   this.state.OutgoingCallsFromInternationalNumbersBySIPTrunk?.map(
    //     (e) => e.key
    //   );
    // let data1 =
    //   this.state.OutgoingCallsFromInternationalNumbersBySIPTrunk &&
    //   this.state.OutgoingCallsFromInternationalNumbersBySIPTrunk?.map(
    //     (e) => e.doc_count
    //   );
    // //
    // let labels2 =
    //   this.state.IncommingCallsFromInternationalNumbersBySIPTrunk &&
    //   this.state.IncommingCallsFromInternationalNumbersBySIPTrunk?.map(
    //     (e) => e.key
    //   );
    // let data2 =
    //   this.state.IncommingCallsFromInternationalNumbersBySIPTrunk &&
    //   this.state.IncommingCallsFromInternationalNumbersBySIPTrunk?.map(
    //     (e) => e.doc_count
    //   );
    // //
    // let labels3 =
    //   this.state.IncommingCallsToInternationalNumbersByDurationMetric &&
    //   Object.keys(
    //     this.state.IncommingCallsToInternationalNumbersByDurationMetric
    //   );
    // let data3 =
    //   this.state.IncommingCallsToInternationalNumbersByDurationMetric &&
    //   Object.values(
    //     this.state.IncommingCallsToInternationalNumbersByDurationMetric
    //   ).map((e) => e.doc_count);
    // //
    // let labels4 =
    //   this.state.OutgoingCallsFromInternationalNumbersByDurationMetric &&
    //   Object.keys(
    //     this.state.OutgoingCallsFromInternationalNumbersByDurationMetric
    //   );
    // let data4 =
    //   this.state.OutgoingCallsFromInternationalNumbersByDurationMetric &&
    //   Object.values(
    //     this.state.OutgoingCallsFromInternationalNumbersByDurationMetric
    //   ).map((e) => e.doc_count);
    // //
    // let labels5 =
    //   this.state.Top20CallingExtentiontoInternationalNumbers &&
    //   this.state.Top20CallingExtentiontoInternationalNumbers?.map((e) => e.key);
    // let data5 =
    //   this.state.Top20CallingExtentiontoInternationalNumbers &&
    //   this.state.Top20CallingExtentiontoInternationalNumbers?.map(
    //     (e) => e.doc_count
    //   );
    // let labels6 =
    //   this.state.Top20CalledInternationalNumbers &&
    //   this.state.Top20CalledInternationalNumbers?.map((e) => e.key);
    // let data6 =
    //   this.state.Top20CalledInternationalNumbers &&
    //   this.state.Top20CalledInternationalNumbers?.map((e) => e.doc_count);

    // let labels7 =
    //   this.state.IncommingInternationalCallingNumbersBySourceTimeInterval &&
    //   this.state.IncommingInternationalCallingNumbersBySourceTimeInterval?.map(
    //     (e) => e.key
    //   );
    // let data7 =
    //   this.state.IncommingInternationalCallingNumbersBySourceTimeInterval &&
    //   this.state.IncommingInternationalCallingNumbersBySourceTimeInterval?.map(
    //     (e) => e.doc_count
    //   );
    // let labels8 =
    //   this.state.OutgoingInternationalCallingNumbersBySourceTimeInterval &&
    //   this.state.OutgoingInternationalCallingNumbersBySourceTimeInterval?.map(
    //     (e) => e.key
    //   );
    // let data8 =
    //   this.state.OutgoingInternationalCallingNumbersBySourceTimeInterval &&
    //   this.state.OutgoingInternationalCallingNumbersBySourceTimeInterval?.map(
    //     (e) => e.doc_count
    //   );

    // if (this.state.loading) return <Spinner />;
    return (
      // <div>
      //   <Typography variant="h2" className="py-2">International Calls</Typography>
      //   <Grid container spacing={2}>
      //     <Grid item xs={12} sm={6}>
      //       <DataCard
      //         label={"Outgoing Calls for International Numbers"}
      //         data={OutgoingCallsForInternationalNumbers}
      //       />
      //     </Grid>
      //     <Grid item xs={12} sm={6}>
      //       <DataCard
      //         label={"Incoming Calls for International Numbers"}
      //         data={IncomingCallsForInternationalNumbers}
      //       />
      //     </Grid>
      //     <Grid item xs={12} sm={6}>
      //       <ChartCard
      //         label={"Outgoing Calls from International Numbers by SIP Trunk"}
      //         data={<DoughnutChart labels={labels1} data={data1} />}
      //       />
      //     </Grid>
      //     <Grid item xs={12} sm={6}>
      //       <ChartCard
      //         label={"Incoming Calls from International Numbers by SIP Trunk"}
      //         data={<DoughnutChart labels={labels2} data={data2} />}
      //       />
      //     </Grid>
      //     <Grid item xs={12}>
      //       <ChartCard
      //         label={"Incoming Calls from International Numbers by Duration (Pie)"}
      //         data={<DoughnutChart labels={labels3} data={data3} />}
      //       />
      //     </Grid>
      //     <Grid item xs={12}>
      //       <div className="col-12 grid-margin h-auto">
      //         <div className="card">
      //           <div className="card-body">
      //             <h4 className="card-title h4 align-self-start">
      //               Incoming Calls from International Numbers by Duration (Metric)
      //             </h4>
      //             <div className="col-12">
      //               <div className="row">
      //                 {data3.map((el, index) => (
      //                   <div key={index} className="col-md-3">
      //                     <Typography variant="h2" style={{ fontSize: 40 }} className="text-muted ">
      //                       {el}
      //                     </Typography>
      //                   </div>
      //                 ))}
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </Grid>
      //     <Grid item xs={12}>
      //       <ChartCard
      //         label={"Outgoing Calls to International Numbers by Duration (Pie)"}
      //         data={<DoughnutChart labels={labels4} data={data4} />}
      //       />
      //     </Grid>
      //     <Grid item xs={12}>
      //       <div className="col-12 grid-margin h-auto">
      //         <div className="card">
      //           <div className="card-body">
      //             <h4 className="card-title h4 align-self-start">
      //               Outgoing Calls to International Numbers by Duration (Metric)
      //             </h4>
      //             <div className="col-12">
      //               <div className="row">
      //                 {data4.map((el, index) => (
      //                   <div key={index} className="col-md-3">
      //                     <Typography variant="h2" style={{ fontSize: 40 }} className="text-muted ">
      //                       {el}
      //                     </Typography>
      //                   </div>
      //                 ))}
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </Grid>
      //     {/* ////////////////////////////////////////////////////////////////////////////// */}
      //     <Grid item xs={12}>
      //       <ChartCard
      //         label={"Top 20 Calling Extensions to International Numbers"}
      //         data={<HorizontalBarChart labels={labels5} data={data5} />}
      //       />
      //     </Grid>
      //     <Grid item xs={12}>
      //       <ChartCard
      //         label={"Top 20 Called International Numbers"}
      //         data={<HorizontalBarChart labels={labels6} data={data6} />}
      //       />
      //     </Grid>
      //     <Grid item xs={12}>
      //       <ChartCard
      //         label={"Incoming International Calls by Source Time Interval"}
      //         data={<BarChart labels={labels7} data={data7} />}
      //       />
      //     </Grid>
      //     <Grid item xs={12}>
      //       <ChartCard
      //         label={"Outgoing International Calls by Source Time Interval"}
      //         data={<BarChart labels={labels8} data={data8} />}
      //       />
      //     </Grid>
      //   </Grid>
      // </div>
      <div>
      {/* <Typography variant="h2" className="py-2">International Calls</Typography> */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <DataCard
            label={"Outgoing Calls for International Numbers"}
            data={123}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DataCard
            label={"Incoming Calls for International Numbers"}
            data={321}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ChartCard
            label={"Outgoing Calls from International Numbers by SIP Trunk"}
            data={<DoughnutChart labels={["Label1", "Label2"]} data={[50, 50]} />}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ChartCard
            label={"Incoming Calls from International Numbers by SIP Trunk"}
            data={<DoughnutChart labels={["Label1", "Label2"]} data={[50, 50]} />}
          />
        </Grid>
        <Grid item xs={12}>
          <ChartCard
            label={"Incoming Calls from International Numbers by Duration (Pie)"}
            data={<DoughnutChart labels={["Label1", "Label2"]} data={[50, 50]} />}
          />
        </Grid>
        <Grid item xs={12}>
          <div className="col-12 grid-margin h-auto">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title h4 align-self-start">
                  Incoming Calls from International Numbers by Duration (Metric)
                </h4>
                <div className="col-12">
                  <div className="row">
                    {[50, 50].map((el, index) => (
                      <div key={index} className="col-md-3">
                        <Typography variant="h2" style={{ fontSize: 40 }} className="text-muted ">
                          {el}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <ChartCard
            label={"Outgoing Calls to International Numbers by Duration (Pie)"}
            data={<DoughnutChart labels={["Label1", "Label2"]} data={[50, 50]} />}
          />
        </Grid>
        <Grid item xs={12}>
          <div className="col-12 grid-margin h-auto">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title h4 align-self-start">
                  Outgoing Calls to International Numbers by Duration (Metric)
                </h4>
                <div className="col-12">
                  <div className="row">
                    {[50, 50].map((el, index) => (
                      <div key={index} className="col-md-3">
                        <Typography variant="h2" style={{ fontSize: 40 }} className="text-muted ">
                          {el}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        {/* ////////////////////////////////////////////////////////////////////////////// */}
        <Grid item xs={12}>
          <ChartCard
            label={"Top 20 Calling Extensions to International Numbers"}
            data={<HorizontalBarChart labels={["Label1", "Label2"]} data={[50, 50]} />}
          />
        </Grid>
        <Grid item xs={12}>
          <ChartCard
            label={"Top 20 Called International Numbers"}
            data={<HorizontalBarChart labels={["Label1", "Label2"]} data={[50, 50]}/>}
          />
        </Grid>
        <Grid item xs={12}>
          <ChartCard
            label={"Incoming International Calls by Source Time Interval"}
            data={<BarChart labels={["Label1", "Label2"]} data={[50, 50]} />}
          />
        </Grid>
        <Grid item xs={12}>
          <ChartCard
            label={"Outgoing International Calls by Source Time Interval"}
            data={<BarChart labels={["Label1", "Label2"]} data={[50, 50]} />}
          />
        </Grid>
      </Grid>
    </div>
    );
  }
}
const mapStateToProps = function (state) {
  return {
    date: state.date,
  }
}
export default connect(mapStateToProps)(InternationalCalls);
