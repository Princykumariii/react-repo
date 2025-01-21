function App(){
 return <div className="container">
    
    <form>
        

        <h1  className ="box "align="center">Feedback Form</h1>
         <h1 align ="center">Please write your feedback below</h1>

         <h3 className="rate"><label htmlFor = "rating">Ratings*</label>
        <input type ="radio" name = "1"/>1
        <input type ="radio" name = "2"/>2
        <input type ="radio" name = "3"/>3
        <input type ="radio" name = "4"/>4
        <input type ="radio" name = "5"/>5</h3>
        <h3> <label align="left">Full Name*  </label><input type = "text" placeholder="Enter Full Name" /></h3>

        <h3><label>Email* </label>
        <input type="textbox" placeholder="23"></input>

        
       </h3>
       <h3><label>Message*  </label>
       <textarea placeholder="Wrie your review"rows="5" cols="70"required></textarea>
       <p><input type = "submit" value = "submit" id = "sub"></input> </p>

       </h3>
    </form>
    
    
 </div>
}








ReactDOM.createRoot(document.getElementById("root")).render(<App />);
