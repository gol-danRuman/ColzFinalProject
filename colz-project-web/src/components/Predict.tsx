import * as React from "react";
import Sidebar from "react-sidebar";
import Header from "./Header";
import SideBar from "./SideBar";
import Loading from "../components/Loading/index"
import { postPredict } from "./Api";
import { Button, Col, Card } from "reactstrap";
import  Select  from 'react-select';
import DropdownToggle from "reactstrap/lib/DropdownToggle";
import DropdownMenu from "reactstrap/lib/DropdownMenu";
import DropdownItem from "reactstrap/lib/DropdownItem";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";
import Input from "reactstrap/lib/Input";
import {optionsWeekDay, optionsCommunityArea } from "../components/data/myData"
// import Spin from './Spinner'
import { Spinner } from 'reactstrap';

export default class Predict extends React.Component<any, any>{
    constructor(props : any) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false,
          weekDay : 0,
          loading : false,
          modelType : '',
          resData:''
        };
      }

      // componentDidmount(){
        
      // }
    
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

      handleSelect = (modelType:any) => {
          this.setState({
            modelType
          })
        //   alert(stype)
      }
      handleCommunityAreaSelect = (communityArea:any) => {
        this.setState({
          communityArea : communityArea.value
        })
      //   alert(stype)
      }
      handleWeekdaySelect = (weekDay:any) => {
        this.setState({
          weekDay : weekDay.value
        })
      //   alert(stype)
      }
      handleSubmit = (event: any) => {
          // post request hereent
          this.setState({loading : true})
          event.preventDefault();
        
          if(this.state.modelType==''){
            return alert("No model Type selected ....")
          }
      //  const data = postPredict(this.state.modelType, this.state.description)
       let res = postPredict(this.state.modelType, this.state.communityArea,this.state.weekDay, this.state.latitude, this.state.longitude)
                .then(res =>{
                        console.log('Predicted Data',res.data)
                        this.setState({resData:res.data,loading :false})
                })
                .catch((err)=>{
                  alert('Error :'+ err)
                })
      
      }
    render() {
      console.log(this.state)
      const loading = this.state.loading
      
      
      if(loading){
        return (
          <div className="content-page">
            <Loading />
          </div>
        )
      }else{
          return (
         
            
            
            <div className="content-page">
            
             
              
           <FormGroup >
          <Label for="exampleSelect">Select Model Type : </Label>
          <Input  bsSize="lg" type="select" name="select" id="exampleSelect"  onChange={(e:any)=>this.handleSelect(e.target.value)}>
          <option value="">--Select--</option>
  {/* <option value="sgd">SGD</option>
  <option value="naive-bias">Naive Bais</option> */}
  <option value="knn">KNN Classifier</option>
  <option value="lgr">Logistic Regression</option>
  <option value="mnb">Multinomial Naive Baye's</option>
  <option value="dtc">Decision Tree Classifier</option>
  <option value="rfc">Random Forest Classifier</option>
          </Input>
        </FormGroup>
            {/* <h1>Select Model Type : </h1>
            
       <select  onChange={(e:any)=>this.handleSelect(e.target.value)}>
  <option value="">--Select--</option>
  <option value="sgd">SGD</option>
  <option value="naive-bias">Naive Bais</option>
</select>  */}

            <FormGroup>
          <Label for="communityArea">Community Area</Label>
          {/* <Input type="textarea" name="description" id="exampleText" onChange={(e:any) => this.setState({description:e.target.value})} /> */}
          <Select options={optionsCommunityArea}  onChange={this.handleCommunityAreaSelect} name="communityArea" id="communityArea"/>
          <Label for="weekDay">WeekDay</Label>
          <Select options={optionsWeekDay}  onChange={this.handleWeekdaySelect} name="weekDay" id="weekDay"/>
          <Label for="latitude">Latitude</Label>
          <Input type="number" name="latitude" id="latitude" onChange={(e:any) => this.setState({latitude:e.target.value})} />
          <Label for="longitude">Longitude</Label>
          <Input type="number" name="longitude" id="longitude" onChange={(e:any) => this.setState({longitude:e.target.value})} />
        </FormGroup>
            {/* <h1>Description: </h1>
                <textarea name='description' id='description' onChange={(e:any) => this.setState({description:e.target.value})}></textarea> */}
    <Button onClick={this.handleSubmit} color='primary'>Submit</Button>
    <div  className="home-result" >
    { loading ? <Loading />:
      <div>
        {/* <div style="color: #000">Result: </div>  */}
        <div>

          </div>
        <Col sm="12" md={{ size: 6, offset: 3 }}> <Card> {this.state.resData}</Card></Col>
        <div>
            
         </div>
      </div>
    }
    
                        
                    </div>
            </div>


        )
    }
  }
  
}