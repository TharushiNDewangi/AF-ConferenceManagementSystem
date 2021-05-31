import React, { useState } from "react"
import axios from 'axios';



export default function AddPaper() {

    const[name,setName] = useState("");
    const [phnum,setPhnum] = useState("");
    const[email,setEmail] = useState("");
    const [researchpaper, setResearchpaper] = useState([]);

    const handleResearchpaper = (e) => {

        setResearchpaper([
            ...researchpaper,
            e.target.files[0]

        ]);
    }

   
    function sendData(e){
        e.preventDefault();
       
        const form = new FormData();
        form.append('name', name);
        form.append('phnum', phnum);
        form.append('email', email);
        

        for (let pic of researchpaper) {
            form.append('researchpaper', pic);
        }
        console.log(researchpaper)
        // axios.post("http://localhost:8065/api/paper/create",newPaper).then(()=>{
        //     alert("Research paper added ");
        // }).catch((err)=>{
        //     alert(err);
        // })

        axios.post("http://localhost:8065/api/paper/create", form)
          .then(function (response) {
            console.log(response);

            setName("");
            setEmail("");
            setPhnum("");
          })
          .catch(function (error) {
            console.log(error);
            setName("");
            setEmail("");
            setPhnum("");
          });



          

       
    }

    
    return (
        <div className ="container">
            <form onSubmit ={sendData}>
                <div className="form-group">
                    <label for="name">User Name</label>
                    <input type="text" className="form-control" id="name"  placeholder="Enter name"  onChange={(e)=>{
                        setName(e.target.value)
                    }}/>
                    
                </div>
                <div className="form-group">
                    <label for="phnum">Phone number</label>
                    <input type="text" className="form-control" id="phnum"  placeholder="Enter phone number"onChange={(e)=>{
                        setPhnum(e.target.value);
                    }}/>
              
                    
                </div>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="text" className="form-control" id="email"  placeholder="Enter email" onChange={(e)=>{
                        setEmail(e.target.value);
                     }} />
                    
                </div>
                <div className="form-group">
                    <label for="researchpaper">Research Paper</label>
                    {
                    researchpaper.length > 0 ?
                    researchpaper.map((pic, index) => <div key={index}>{pic.name}</div>) : null
                }
                    <input type="file" className ="form-control" name="researchpaper" onChange={handleResearchpaper} />
                   
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}
