import UserComponent from "./UserClass";

import User from "./User";



About = () => {
    return(
        <div>
            <h1>About Us Page</h1>
            <div className="about">
            
            <UserComponent name={"Neelima"} location={"India"} contact={"776734589"}/>

            </div>
        </div>
    )
}
export default About;