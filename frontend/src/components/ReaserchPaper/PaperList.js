import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "./Card";
//grid


// import Card from './components/ReaserchPaper/Card';



function PaperList() {

    const [papers, setPapers] = useState([]);


    useEffect(() => {
        function getPapers() {
            axios.get("http://localhost:8065/api/").then((res) => {
                setPapers(res.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getPapers();
    }, [])
    //

    return (
        <div className='PaperList'>
            <h1>All papers</h1>

            {/* <tbody>
                        {papers.map((papers, index)=>(
                           <tr>
                                 <th scope="row">{index + 1}</th>
                                <th>{papers.name}</th>
                                 <th>{papers.phnum}</th>
                                 <th>{papers.email}</th>
                                
                           </tr> 
                        ))}
                    </tbody> */}

            <div class="container">
            
                <div class="row">
               
                    <div class="col">
                   <br></br>
                   
                        <div class="row">
                   
                          {papers.map((papers, index) => (

                                <Card
                                    title={papers.name}
                                    email={papers.email}
                                    phnum={papers.phnum}
                                    imageUrl="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                    
                                    // link= {papers.researchpaper[0].fil}
                                    link ={ "http://localhost:8065/uploads/"+papers.researchpaper[0].fil}
                                    pdfName={papers.researchpaper[0].fil}
                                   
                                />
                                

                            ))}
                             
                    
                           
                            </div>


                    </div>


                </div>
            </div>




        </div>
    )

}

export default PaperList;