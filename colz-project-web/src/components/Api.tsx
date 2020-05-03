import axios from '../axios';
import React from 'react';
import { config } from '../config/common';
export default class Api extends React.Component<any,any>{
    // constructor(props: any) {
    //     super(props);
    //     this.state = {
    //         data: getDataDetails
    //     };
    //   }
    // state = {
    //     datas: []
    //   }
    
    //   componentDidMount() {
    //     // axios.get('http://localhost:5000/testData')
    //     //   .then(res => {
    //     //     const datas = res.data;
    //     //     this.setState({ datas });
    //     //   })
    //     getDataDetails
    //   }
}

export const postGraphType = (stype : any) => {
  return axios.request({
    url: `/graph?graphType=${stype}`,
    method:'get'
    // params: {
    //   graphType : stype
    // }
  }).then((res) => {
    return res.data
    }) 
  
 }

 export const postPredict = (modelType : any, communityArea : any,weekDay: any, latitude : any, longitude : any) => {
   console.log('Model Type : ', modelType, communityArea ,weekDay, latitude,longitude)
  return axios.request({
    url: `/predict?model=${modelType}&communityArea=${communityArea}&weekDay=${weekDay}&latitude=${latitude}&longitude=${longitude}`,
    method:'get'
    // params: {
    //   graphType : stype
    // }
  }).then((res) => {
    return res.data
    }) 
  // .catch((err) =>
  // {
  //   console.log("Error", err)
  //   return err
  // })
 }

export const getDataDetails  = ()=>{
  console.log('this code is running')
    //   axios.get('http://localhost:5000/testData')
     return axios.request({
        url: '/testData',
        method:'get'
      });
  }
      export const getStarted =  () =>{
        //axios.get('http://localhost:5000/home/start')
       return axios.request({
          url: '/started',
          method:'get'
        })
        .then((res) => {
          return res.data
          }) 
        .catch((err) =>
        {
          console.log("Error", err)
          return err
        })
      }

        export const getPieCharts = () =>{
          return axios.request({
            url : '/piechart',
            method :  'get'
          })
          .then((res) =>{
            return res.data
          })
          .catch((err) => {
            console.log("PiechartError: ", err)
          })
        }
    




