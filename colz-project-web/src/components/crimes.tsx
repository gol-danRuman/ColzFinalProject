import axios from 'axios';
import Axios from 'axios';

    
     export const getHelloWorld =  () =>{
          //axios.get('http://localhost:5000/home/start')
         return axios.request({
            url: '/hello',
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
    




