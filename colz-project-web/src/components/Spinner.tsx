import React from "react";
import { Spinner } from 'reactstrap';

// export default class Spin extends React.Component {
//   render() {
//     return (
//       <div className="content-page">
//         <Spinner color="primary" />
//         {/* <Spinner color="secondary" />
//         <Spinner color="success" />
//         <Spinner color="danger" />
//         <Spinner color="warning" />
//         <Spinner color="info" />
//         <Spinner color="light" />
//         <Spinner color="dark" /> */}
//       </div>
//     );
//   }
// }




const Spin = (props: any) => {
  const getBody = () => {
   
      return (
        <div className="content-page">
        <Spinner color="primary" />
        </div>
        // <div className="loader-wrap big-loader">
        //   <svg className="svg-loader" xmlns="http://www.w3.org/2000/svg" version="1.1" width="500" height="500" viewBox="0 0 500 500" id="loader">
        //     <polygon className="segment" points="250,250 250,0 465,126" />
        //     <polygon className="segment" points="250,250 465,126 465,375" />
        //     <polygon className="segment" points="250,250 465,375 250,500" />
        //     <polygon className="segment" points="250,250 250,500 36,375" />
        //     <polygon className="segment" points="250,250 36,375 36,126" />
        //     <polygon className="segment" points="250,250 36,126 250,0" />
        //   </svg>
        // </div>
      );
  };

  return (
    getBody()
  );
};
export default Spin;
