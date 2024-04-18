import React, { Component } from "react";
import { Grid, Typography } from '@mui/material';

// import {
//   CallsFromIpPhoneBySourceCodecAudio,
//   CallsFromIpPhonesByOriginNodeIdPie,
//   CallsFromIpPhonesBySIPTrunk,
//   CallsFromIpPhonesBySourceTimeInterval,
//   CallsToIpPhonesByDestinationCodecAudio,
//   CallsToIpPhonesByDestinationNodeIdPie,
//   CallsToIpPhonesBySIPTrunk,
//   CallsToIpPhonesBySourceTimeInterval,
//   Top20CalledIpPhones,
//   Top20CallingIpPhones,
// } from "../services/advancedIpPhonesCallService";
import DoughnutChart from "../../charts/DoughnutChart";
import { BarChart } from "../../charts/BarChart";
import { HorizontalBarChart } from "../../charts/HorizontalBarChart";
// import Spinner from "../shared/Spinner";
// import moment from "moment";
import { connect } from "react-redux";

const AdvancedIpPhonesCall = ({ date }) => {
  // const [data, setData] = useState({});
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     let current = moment().format();
  //     let selectedDate = date?.selectedDate;
  //     let body = { current: current, date: selectedDate };
  //     const res0 = await CallsFromIpPhonesBySIPTrunk(body);
  //     const res1 = await CallsToIpPhonesBySIPTrunk(body);
  //     const res2 = await CallsFromIpPhonesByOriginNodeIdPie(body);
  //     const res3 = await CallsToIpPhonesByDestinationNodeIdPie(body);
  //     const res4 = await CallsFromIpPhoneBySourceCodecAudio(body);
  //     const res5 = await CallsToIpPhonesByDestinationCodecAudio(body);
  //     const res6 = await CallsFromIpPhonesBySourceTimeInterval(body);
  //     const res7 = await CallsToIpPhonesBySourceTimeInterval(body);
  //     const res8 = await Top20CalledIpPhones(body);
  //     const res9 = await Top20CallingIpPhones(body);

  //     setData({
  //       CallsFromIpPhonesBySIPTrunk: res0.data,
  //       CallsToIpPhonesBySIPTrunk: res1.data,
  //       CallsFromIpPhonesByOriginNodeIdPie: res2.data,
  //       CallsToIpPhonesByDestinationNodeIdPie: res3.data,
  //       CallsFromIpPhoneBySourceCodecAudio: res4.data,
  //       CallsToIpPhonesByDestinationCodecAudio: res5.data,
  //       CallsFromIpPhonesBySourceTimeInterval: res6.data,
  //       CallsToIpPhonesBySourceTimeInterval: res7.data,
  //       Top20CalledIpPhones: res8.data,
  //       Top20CallingIpPhones: res9.data,
  //     });
  //     setLoading(false);
  //   };

  //   fetchData();
  // }, [date]);

  // if (loading) return <Spinner />;

  return (
    // <div>
    //   <Typography variant="h2" className="py-2">
    //     Advanced Ip Phones Calls
    //   </Typography>
    //   <Grid container spacing={3}>
    //     <Grid item xs={12} sm={6}>
    //       <div className="card text-center">
    //         <div className="card-body">
    //           <Typography variant="h3" component="h3">
    //             Calls From Ip Phones by SIP Trunk
    //           </Typography>
    //           <DoughnutChart data={data1} total={total1} labels={labels1} />
    //         </div>
    //       </div>
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <div className="card text-center">
    //         <div className="card-body">
    //           <Typography variant="h3" component="h3">
    //             Calls to Ip Phones by SIP Trunk
    //           </Typography>
    //           <DoughnutChart data={data2} total={total2} labels={labels2} />
    //         </div>
    //       </div>
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <div className="card text-center">
    //         <div className="card-body">
    //           <Typography variant="h3" component="h3">
    //             Calls from Ip Phones by origin Node Id (Pie)
    //           </Typography>
    //           <DoughnutChart data={data3} total={total3} labels={labels3} />
    //         </div>
    //       </div>
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <div className="card text-center">
    //         <div className="card-body">
    //           <Typography variant="h3" component="h3">
    //             Calls to Ip Phones by Destination Node Id (Pie)
    //           </Typography>
    //           <DoughnutChart data={data4} total={total4} labels={labels4} />
    //         </div>
    //       </div>
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <div className="card text-center">
    //         <div className="card-body">
    //           <Typography variant="h3" component="h3">
    //             Calls from Ip Phone by Source Codec (Audio)
    //           </Typography>
    //           <div className="table-responsive">
    //             <DoughnutChart data={data5} total={total5} labels={labels5} />
    //           </div>
    //         </div>
    //       </div>
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <div className="card text-center">
    //         <div className="card-body">
    //           <Typography variant="h3" component="h3">
    //             Calls to Ip Phones by Destination Codec (Audio)
    //           </Typography>
    //           <div className="table-responsive">
    //             <DoughnutChart data={data6} total={total6} labels={labels6} />
    //           </div>
    //         </div>
    //       </div>
    //     </Grid>
    //     <Grid item xs={12} sm={12}>
    //       <div className="card text-center">
    //         <div className="card-body">
    //           <Typography variant="h3" component="h3">
    //             Calls from Ip Phones by Source Time Interval
    //           </Typography>
    //           <BarChart labels={labels7} data={data7} />
    //         </div>
    //       </div>
    //     </Grid>
    //     <Grid item xs={12} sm={12}>
    //       <div className="card text-center">
    //         <div className="card-body">
    //           <Typography variant="h3" component="h3">
    //             Calls to Ip Phones by Source Time Interval
    //           </Typography>
    //           <BarChart labels={labels8} data={data8} />
    //         </div>
    //       </div>
    //     </Grid>
    //     <Grid item xs={12} sm={12}>
    //       <div className="card text-center">
    //         <div className="card-body">
    //           <Typography variant="h3" component="h3">
    //             Top 20 called Ip phones
    //           </Typography>
    //           <HorizontalBarChart labels={labels9} data={data9} />
    //         </div>
    //       </div>
    //     </Grid>
    //     <Grid item xs={12} sm={12}>
    //       <div className="card text-center">
    //         <div className="card-body">
    //           <Typography variant="h3" component="h3">
    //             Top 20 calling Ip phones
    //           </Typography>
    //           <HorizontalBarChart labels={labels10} data={data10} />
    //         </div>
    //       </div>
    //     </Grid>
    //   </Grid>
    // </div>
    <div>
      {/* <Typography variant="h2" className="py-2">
        Advanced Ip Phones Calls
      </Typography> */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <div className="card text-center">
            <div className="card-body">
              <Typography variant="h3" component="h3">
                Calls From Ip Phones by SIP Trunk
              </Typography>
              <DoughnutChart data={[100, 200, 300]} total={600} labels={["A", "B", "C"]} />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="card text-center">
            <div className="card-body">
              <Typography variant="h3" component="h3">
                Calls to Ip Phones by SIP Trunk
              </Typography>
              <DoughnutChart data={[200, 100, 400]} total={700} labels={["X", "Y", "Z"]} />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="card text-center">
            <div className="card-body">
              <Typography variant="h3" component="h3">
                Calls from Ip Phones by origin Node Id (Pie)
              </Typography>
              <DoughnutChart data={[50, 150, 250]} total={450} labels={["P", "Q", "R"]} />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="card text-center">
            <div className="card-body">
              <Typography variant="h3" component="h3">
                Calls to Ip Phones by Destination Node Id (Pie)
              </Typography>
              <DoughnutChart data={[300, 200, 100]} total={600} labels={["L", "M", "N"]} />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="card text-center">
            <div className="card-body">
              <Typography variant="h3" component="h3">
                Calls from Ip Phone by Source Codec (Audio)
              </Typography>
              <div className="table-responsive">
                <h2 className="text-muted text-center">
                  <DoughnutChart data={[100, 200, 300]} total={600} labels={["A", "B", "C"]} />
                </h2>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="card text-center">
            <div className="card-body">
              <Typography variant="h3" component="h3">
                Calls to Ip Phones by Destination Codec (Audio)
              </Typography>
              <div className="table-responsive">
                <h2 className="text-muted text-center">
                  <DoughnutChart data={[200, 300, 400]} total={900} labels={["X", "Y", "Z"]} />
                </h2>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="card text-center">
            <div className="card-body">
              <Typography variant="h3" component="h3">
                Calls from Ip Phones by Source Time Interval
              </Typography>
              <BarChart labels={["Jan", "Feb", "Mar"]} data={[50, 100, 150]} />
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="card text-center">
            <div className="card-body">
              <Typography variant="h3" component="h3">
                Calls to Ip Phones by Source Time Interval
              </Typography>
              <BarChart labels={["Apr", "May", "Jun"]} data={[60, 110, 160]} />
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="card text-center">
            <div className="card-body">
              <Typography variant="h3" component="h3">
                Top 20 called Ip phones
              </Typography>
              <HorizontalBarChart labels={["Node 1", "Node 2", "Node 3"]} data={[70, 120, 170]} />
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="card text-center">
            <div className="card-body">
              <Typography variant="h3" component="h3">
                Top 20 calling Ip phones
              </Typography>
              <HorizontalBarChart labels={["Device 1", "Device 2", "Device 3"]} data={[80, 130, 180]} />
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
export default connect(mapStateToProps)(AdvancedIpPhonesCall);