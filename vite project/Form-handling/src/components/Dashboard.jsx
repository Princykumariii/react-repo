import {useState} from "react"
const initData ={usename:"",password:""}
const Dashboard = ()=>{
    const [formData,setFormData]=useState(initData)
    const handleSubmit =()=>{
        console.log(formData,"dfghjiuytr")
    }
    return (
       <form action="" onSubmit={handleSubmit} >
         <input type="text" placeholder="Enter username" name="username" value={formData.username} />
         <input type = "password" placeholder="Enter password" name="password" value={formData.password} />
         <input type="submit" placeholder="Login"/>
       </form>
    )
};
export default Dashboard;

