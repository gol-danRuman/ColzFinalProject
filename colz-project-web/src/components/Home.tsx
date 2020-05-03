import * as React from "react";

import {getDataDetails} from "./Api";
import Loading from "./Loading";


export default class Home extends React.Component<any, any>{

    constructor(props:any){
        super(props)
        this.state={
            loading: true,
            totalCrimes:0,
            totalData:0,
            imageLink:""
        }
      }

    //   renderRow(props: any) {
    //       debugger;
    //     return (
    //       <tr>
    //         <td>{ this.state.totalCrimes }</td>
    //         <td>{ this.state.totalCrimes }</td>
    //         <td>{ props.totalCrimes }</td>
    //       </tr>
    //     );
    //   }
    componentDidMount(){
        // setTimeout(() => this.setState({ loading: false }), 1500);
        let res = getDataDetails().then(res =>{
            this.setState({
                data: res.data,
                totalCrimes: res.data.totalCrimes,
                totalData: res.data.totalData,
                loading : false
            })
        })
        .catch((err)=>{
            alert('Error :'+ err);

        })
    }
    

    render() {
        try{
            const  loading  = this.state.loading;
            // const rows = {
            //     totalCrimes: this.state.totalCrimes,
            //     totalData: this.state.totalData,
            // }
            if(loading) { // if your component doesn't have to wait for an async action, remove this block 
                return <Loading/>; // render null when app is not ready
            }else{
                return (
        
                    <div className="content-page">
                        <div id="home-title">
                            <h1>Welcome to Crime Predictor  </h1>
                        </div>
                        <div id="home-description">
                            <h3>We have collected data from chicagoportal.com. We have collected more than 60 lakh datas. There are all together 22 columns....</h3>
                        </div>
                        <div id="home-table" className="loader"> 
                            <ul>
                                {/* <table>
                                    {this.props.rows.map(this.renderRow)}
                                </table> */}
                                <h4>TotalCrimes : {this.state.totalCrimes}</h4> 
                                <h4>TotalData : {this.state.totalData}</h4>
                                <div  className="home-image" >
                                    <img src={`${this.state.imageLink}`} alt="" className="img-responsiveness" />
                                            
                                            {/* <img src={require({})} alt="" className="img-responsive" />
                                            <img src={require("./icons/name2.png")} alt="" className="img-responsive" />
                                            <img src={require("./icons/name3.png")} alt="" className="img-responsive" />
                                            <img src={require("./icons/name4.png")} alt="" className="img-responsive" /> */}
                                </div>

                            </ul>
                        </div>
                    </div>
                )
            }
        }catch(e){
            return (
                <h1>Error in Header</h1>
            )
        }               
    
    }
}