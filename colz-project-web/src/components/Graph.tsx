import * as React from "react";
import {  Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Dropdown } from 'reactstrap';
import { postGraphType } from "./Api";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";
import Input from "reactstrap/lib/Input";
import Loading from "./Loading";
import imageIcon from '../images/imageIcon.png';

export default class Graph extends React.Component<any, any>{
    constructor(props : any) {
        super(props);
    
       
        this.state = {
          dropdownOpen: false,
          stype : '',
          imageUrl: '',
          loading : false,
          resData:{

          }
        };
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

      handleSelect = (stype:any) => {
          this.setState({
               stype
          })
        //   alert(stype)
      }
      handleSubmit = (event:any) => {
          // post request here
          this.setState({loading: true})
          event.preventDefault();
          
          if(this.state.stype===''){
            return alert("No graph Type selected ....")
          }
      //  const data = postGraphType(this.state.stype)
       let res = postGraphType(this.state.stype)
                .then(res =>{
                          this.setState({
                            // resData:res.data,
                            imageUrl: res.data,
                            loading: false
                          })
                }).catch((err)=>{
                  alert('Error :'+ err);
              })
      
      }
    render() {
      const  loading  = this.state.loading;
      // const imageUrl = ''
        if(loading) { // if your component doesn't have to wait for an async action, remove this block 
          return <Loading/>; // render null when app is not ready
        }else{
          return (
            <div className="content-page">
              <FormGroup >
                <Label for="exampleSelect">Select Graph Type :  </Label>
                <Input  bsSize="lg" type="select" name="select" id="exampleSelect"  onChange={(e:any)=>this.handleSelect(e.target.value)}>
                    <option value="">--Select--</option>
                    <option value="arrest">Arrest</option>
                    <option value="crime">Crime</option>
                    <option value="year">Year</option>
                    <option value="domestic">Domestic</option>
                    <option value="district">District</option>
                    <option value="hour">Hour</option>
                    <option value="month">Month</option>
                    <option value="week">Week</option>
                 </Input>
                </FormGroup>
              {/* <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle
          tag="span"
          onClick={this.toggle}
          data-toggle="dropdown"
          aria-expanded={this.state.dropdownOpen}
          >
          --Select--
          </DropdownToggle>
          <DropdownMenu>
          <div onClick={this.toggle}>Year</div>
          <div onClick={this.toggle}>Arrest</div>
          <div onClick={this.toggle}>Crime Type</div>
          </DropdownMenu>
        </Dropdown> */}

        
        {/* <h1>Select Graph Type : </h1>
        <select onChange={(e:any)=>this.handleSelect(e.target.value)}>
    <option value="">--Select--</option>
    <option value="arrest">Arrest</option>
    <option value="crime">Crimes</option>
    <option value="year">Year</option>
    <option value="domestic">Domestic</option>
  </select> */}
      {/* <button onClick={this.handleSubmit} >Submit</button>
    */}
    <Button onClick={this.handleSubmit} color="primary">Submit</Button>
      <div className="home-image" >
                          {
                            this.state.imageUrl ?
                          <img src={`${this.state.imageUrl}`} alt="" className="img-responsiveness" />
                          :
                          <img src={imageIcon}alt="" className="img-responsiveness" />
                          
                          }
                          {/* <img src={require({})} alt="" className="img-responsive" />
                          <img src={require("./icons/name2.png")} alt="" className="img-responsive" />
                          <img src={require("./icons/name3.png")} alt="" className="img-responsive" />
                          <img src={require("./icons/name4.png")} alt="" className="img-responsive" /> */}
                      </div>
              </div>


          )
    
  }
}
}
