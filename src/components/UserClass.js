import React from "react";


class UserComponent extends React.Component{
    constructor(props){
        super(props)
      this.state={
        userInfo:{
          name:"new1",
          location:"hbhdebgy",
          avatar_url:"https://api.github.com/users/neelimaakkiraju"
        }
      }
    }
  async componentDidMount(){

    const data = await fetch("https://api.github.com/users/neelimaakkiraju");
    const json = await data.json()
    this.setState(
     {userInfo: json,} 
    )
    console.log(json)
  }
  
  
    render(){

       
        const {name, location,avatar_url}=this.state.userInfo
       
        return(
            <div className="classComp">
               <h1>Class Component</h1>
              
{/*             
               <img src={avatar_url}/> */}
                <h2>Name:{name}</h2>
                <h2>Location:{location}</h2>
                
            </div>
        )
    }
}
export default UserComponent;