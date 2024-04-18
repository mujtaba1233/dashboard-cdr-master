import React, { useState, useEffect } from "react";
import DoughnutChart from "../../charts/DoughnutChart";
import { HorizontalBarChart } from "../../charts/HorizontalBarChart";
import Grid from "@mui/material/Grid";

// import {
//   IncomingCallsForLongDistanceNumbers,
//   IncomingCallsFromLongDistanceNumbersBySIPTrunk,
//   IncommingCallsFromLongDistanceNumbersByDuration,
//   IncommingCallsFromLongDistanceNumbersBySIPTrunk,
//   OutboundCallsForLongDistanceNumbers,
//   OutboundCallsFromLongDistanceNumbersBySIPTrunk,
//   OutboundCallsToLongDistanceNumbersByDuration,
//   OutboundCallsToLongDistanceNumbersBySIPTrunk,
//   Top20CalledLongDistanceNumbers,
//   Top20CallingExtentiontoLongDistanceNumbers,
// } from "../services/longDistanceCalls";
// import Spinner from "../shared/Spinner";
import ChartCard from "../../layout/chartCard";
import DataCard from "../../layout/dataCard";
// import moment from "moment";
import { connect } from "react-redux";

const LongDistanceCalls = ({ date }) => {
  // const [data, setData] = useState({
  //   IncomingCallsForLongDistanceNumbers: "",
  //   IncomingCallsFromLongDistanceNumbersBySIPTrunk: "",
  //   IncommingCallsFromLongDistanceNumbersByDuration: "",
  //   IncommingCallsFromLongDistanceNumbersBySIPTrunk: "",
  //   OutboundCallsForLongDistanceNumbers: "",
  //   OutboundCallsFromLongDistanceNumbersBySIPTrunk: "",
  //   OutboundCallsToLongDistanceNumbersByDuration: "",
  //   OutboundCallsToLongDistanceNumbersBySIPTrunk: "",
  //   Top20CalledLongDistanceNumbers: "",
  //   Top20CallingExtentiontoLongDistanceNumbers: "",
  //   loading: false,
  // });

  // useEffect(() => {
  //   fetchData();
  // }, [date]);

  // const fetchData = async () => {
  //   const current = moment().format();
  //   const dateValue = date?.selectedDate;
  //   setData((prevData) => ({ ...prevData, loading: true }));

  //   try {
  //     const [
  //       res1,
  //       res2,
  //       res3,
  //       res4,
  //       res5,
  //       res6,
  //       res7,
  //       res8,
  //       res9,
  //     ] = await Promise.all([
  //       IncomingCallsForLongDistanceNumbers({ current, date: dateValue }),
  //       IncomingCallsFromLongDistanceNumbersBySIPTrunk({ current, date: dateValue }),
  //       IncommingCallsFromLongDistanceNumbersByDuration({ current, date: dateValue }),
  //       IncommingCallsFromLongDistanceNumbersBySIPTrunk({ current, date: dateValue }),
  //       OutboundCallsForLongDistanceNumbers({ current, date: dateValue }),
  //       OutboundCallsFromLongDistanceNumbersBySIPTrunk({ current, date: dateValue }),
  //       OutboundCallsToLongDistanceNumbersByDuration({ current, date: dateValue }),
  //       OutboundCallsToLongDistanceNumbersBySIPTrunk({ current, date: dateValue }),
  //       Top20CalledLongDistanceNumbers({ current, date: dateValue }),
  //       Top20CallingExtentiontoLongDistanceNumbers({ current, date: dateValue }),
  //     ]);

  //     setData({
  //       IncomingCallsForLongDistanceNumbers: res1.data.hits.total.value,
  //       IncomingCallsFromLongDistanceNumbersBySIPTrunk: res2.data,
  //       IncommingCallsFromLongDistanceNumbersByDuration: res3.data,
  //       IncommingCallsFromLongDistanceNumbersBySIPTrunk: res4.data,
  //       OutboundCallsForLongDistanceNumbers: res5.data.hits.total.value,
  //       OutboundCallsFromLongDistanceNumbersBySIPTrunk: res6.data,
  //       OutboundCallsToLongDistanceNumbersByDuration: res7.data,
  //       OutboundCallsToLongDistanceNumbersBySIPTrunk: res8.data,
  //       Top20CalledLongDistanceNumbers: res9.data,
  //       Top20CallingExtentiontoLongDistanceNumbers: res10.data,
  //       loading: false,
  //     });
  //   } catch (error) {
  //     console.error("Error fetching data: ", error);
  //     setData((prevData) => ({ ...prevData, loading: false }));
  //   }
  // };

  // if (data.loading) return <Spinner />;
  return (
    // <Grid container spacing={3}>
    //   <Grid item xs={12}>
    //     <h2 className="py-2">Long Distance Calls</h2>
    //   </Grid>
    //   <Grid item xs={12}>
    //     <Grid container spacing={3}>
    //       <Grid item xs={6}>
    //         <DataCard
    //           label={"Outbound Calls for Long Distance Numbers"}
    //           data={data.OutboundCallsForLongDistanceNumbers}
    //         />
    //       </Grid>
    //       <Grid item xs={6}>
    //         <DataCard
    //           label={"Incoming Calls for Long Distance Numbers"}
    //           data={data.IncomingCallsForLongDistanceNumbers}
    //         />
    //       </Grid>
    //     </Grid>
    //   </Grid>
    //   <Grid item xs={12}>
    //     <Grid container spacing={3}>
    //       <Grid item xs={6}>
    //         <ChartCard
    //           label={"Incoming Calls from Long Distance Numbers by SIP Trunk"}
    //           data={<DoughnutChart labels={data.labels1} data={data.data1} />}
    //         />
    //       </Grid>
    //       <Grid item xs={6}>
    //         <ChartCard
    //           label={"Outbound Calls from Long Distance Numbers by SIP Trunk"}
    //           data={<DoughnutChart labels={data.labels2} data={data.data2} />}
    //         />
    //       </Grid>
    //     </Grid>
    //   </Grid>
    //   <Grid item xs={12}>
    //     <Grid container spacing={3}>
    //       <Grid item xs={12}>
    //         <div className="card">
    //           <div className="card-body">
    //             <h4 className="card-title align-self-start">
    //               Outbound Calls to Long Distance Numbers by SIP Trunk
    //             </h4>
    //             <div className="d-flex justify-content-around">
    //               {data.data3.length &&
    //                 data.data3.map((el) => (
    //                   <h2 key={el} className="text-success">
    //                     {el}
    //                   </h2>
    //                 ))}
    //             </div>
    //             <div className="d-flex justify-content-around">
    //               {data.labels3.length &&
    //                 data.labels3.map((el) => (
    //                   <small key={el} className="text-primary">
    //                     {el}
    //                   </small>
    //                 ))}
    //             </div>
    //           </div>
    //         </div>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    //   <Grid item xs={12}>
    //     <Grid container spacing={3}>
    //       <Grid item xs={12}>
    //         <div className="card">
    //           <div className="card-body">
    //             <h4 className="card-title align-self-start">
    //               Incomming Calls from Long Distance Numbers by SIP Trunk
    //             </h4>
    //             <div className="d-flex justify-content-around">
    //               {data.data4.length &&
    //                 data.data4.map((el) => (
    //                   <h2 key={el} className="text-success">
    //                     {el}
    //                   </h2>
    //                 ))}
    //             </div>
    //             <div className="d-flex justify-content-around">
    //               {data.labels4.length &&
    //                 data.labels4.map((el) => (
    //                   <small key={el} className="text-primary">
    //                     {el}
    //                   </small>
    //                 ))}
    //             </div>
    //           </div>
    //         </div>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    //   <Grid item xs={12}>
    //     <Grid container spacing={3}>
    //       <Grid item xs={6}>
    //         <ChartCard
    //           label={"Outbound Calls to Long Distance Numbers by Duration"}
    //           data={<DoughnutChart labels={data.labels5} data={data.data5} />}
    //         />
    //       </Grid>
    //       <Grid item xs={6}>
    //         <ChartCard
    //           label={"Incomming Calls from Long Distance Numbers by Duration"}
    //           data={<DoughnutChart labels={data.labels6} data={data.data6} />}
    //         />
    //       </Grid>
    //     </Grid>
    //   </Grid>
    //   <Grid item xs={12}>
    //     <ChartCard
    //       label={"Top 20 Calling Extentions Long Distance Numbers"}
    //       data={<HorizontalBarChart labels={data.labels7} data={data.data7} />}
    //     />
    //   </Grid>
    //   <Grid item xs={12}>
    //     <ChartCard
    //       label={"Top 20 Called Long Distance Numbers"}
    //       data={<HorizontalBarChart labels={data.labels8} data={data.data8} />}
    //     />
    //   </Grid>
    // </Grid>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h2 className="py-2">Long Distance Calls</h2>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <DataCard
              label={"Outbound Calls for Long Distance Numbers"}
              data={123}
            />
          </Grid>
          <Grid item xs={6}>
            <DataCard
              label={"Incoming Calls for Long Distance Numbers"}
              data={456}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <ChartCard
              label={"Incoming Calls from Long Distance Numbers by SIP Trunk"}
              data={<DoughnutChart labels={["Label1", "Label2"]} data={[50, 50]} />}
            />
          </Grid>
          <Grid item xs={6}>
            <ChartCard
              label={"Outbound Calls from Long Distance Numbers by SIP Trunk"}
              data={<DoughnutChart labels={["Label1", "Label2"]} data={[70, 30]} />}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title align-self-start">
                  Outbound Calls to Long Distance Numbers by SIP Trunk
                </h4>
                <div className="d-flex justify-content-around">
                  {[80, 20].map((el, index) => (
                    <h2 key={index} className="text-success">
                      {el}
                    </h2>
                  ))}
                </div>
                <div className="d-flex justify-content-around">
                  {["Label1", "Label2"].map((el, index) => (
                    <small key={index} className="text-primary">
                      {el}
                    </small>
                  ))}
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title align-self-start">
                  Incomming Calls from Long Distance Numbers by SIP Trunk
                </h4>
                <div className="d-flex justify-content-around">
                  {[90, 10].map((el, index) => (
                    <h2 key={index} className="text-success">
                      {el}
                    </h2>
                  ))}
                </div>
                <div className="d-flex justify-content-around">
                  {["Label1", "Label2"].map((el, index) => (
                    <small key={index} className="text-primary">
                      {el}
                    </small>
                  ))}
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <ChartCard
              label={"Outbound Calls to Long Distance Numbers by Duration"}
              data={<DoughnutChart labels={["Label1", "Label2"]} data={[60, 40]} />}
            />
          </Grid>
          <Grid item xs={6}>
            <ChartCard
              label={"Incoming Calls from Long Distance Numbers by Duration"}
              data={<DoughnutChart labels={["Label1", "Label2"]} data={[80, 20]} />}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ChartCard
          label={"Top 20 Calling Extentions Long Distance Numbers"}
          data={<HorizontalBarChart labels={["Label1", "Label2", "Label3", "Label4", "Label5"]} data={[50, 30, 20, 15, 10]} />}
        />
      </Grid>
      <Grid item xs={12}>
        <ChartCard
          label={"Top 20 Called Long Distance Numbers"}
          data={<HorizontalBarChart labels={["Label1", "Label2", "Label3", "Label4", "Label5"]} data={[60, 40, 30, 25, 20]} />}
        />
      </Grid>
    </Grid>
  );

}
const mapStateToProps = function (state) {
  return {
    date: state.date,
  }
}
export default connect(mapStateToProps)(LongDistanceCalls);
