import React from "react";

class UserComponent extends React.Component{
    constructor(props){
        super(props)
      this.state={
        count: 0,
        
      }
    }

  
    render(){

        const {name,location,contact} = this.props;
        const {count,count2} = this.state
        return(
            <div className="classComp">
               <h1>Class Component</h1>
               <h2>Count:{count}</h2>
               <button onClick={()=> {
                this.setState({
                  count:this.state.count+1,
                  
                })

               }}>count increase</button>
               
                <h2>Name:{name}</h2>
                <h2>Location:{location}</h2>
                <h2>Contact:{contact}</h2>
            </div>
        )
    }
}
export default UserComponent;