import React from 'react'
import { useSelector } from 'react-redux'
// import store from '../store';
// import { resetProgress } from '../slices/progressSlice';

const Spinner = () => {
  // const { loaded } = useSelector(state => state.progress)
  // if (loaded === 100) {
  //   setTimeout(() => {
  //     store.dispatch(resetProgress())
  //   }, 100);
  // }
  return (
    <div>
      <div className="spinner-wrapper flex-column">
        <div className="donut"></div>
        <br />
        {/* <h3>{Math.ceil(loaded)}{" "} %</h3> */}
      </div>
    </div>
  )

}

export default Spinner
