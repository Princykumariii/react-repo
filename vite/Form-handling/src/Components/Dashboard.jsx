const initData ={username:"",password:""}
const Dashboard = ()=>{
   const [formData,setFormData] = useState(initData);
   //handle the login inputs
   const handleInput =(e)=>{
    console.log(e.target.value);
    const{name,value} = e.target;
    setFormData({...formData,[name]:value})
   };
   const handleSubmit =()=>{
    e.preventDefault()
    console.log(formData,"tfgh")
   }
    return<form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter username" name="username"value={formData.username} onChange={handleinput}/>
        <input type ="password" placeholder="Enter password" name="password" value={formData.password} onChange={handleinput}/>
        <input type="submit" placeholder="Login" />
    </form>
}

export default Dashboard;