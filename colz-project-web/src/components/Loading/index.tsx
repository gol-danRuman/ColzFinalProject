import React from 'react';
 


const Loading = (props: any) => {
  const getBody = () => {
   
      return (
        <div className="content-page">
          <div className="lds-ring">
          
          <div></div><div></div><div></div><div></div></div>
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
export default Loading;