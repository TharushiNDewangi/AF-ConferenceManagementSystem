import React from 'react'
import './Card.css';
import DownloadLink from "react-download-link";

function Card({ title,email,phnum, imageUrl ,link,pdfName }) {
    return (
        <div className="card-container" style = {{ marginLeft : 40 , marginBottom : 40 }}>
            <div className="image-container">
                <img src={imageUrl} alt="" />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <div className="card-content">
                <div className="card-email">
                    <h3>{email}</h3>
                </div>
                <div className="card-content">
                <div className="card-phnum">
                    <h3>{phnum}</h3>
                </div>
                
                <div className="card-body">
                    <p>
                    <a href={link} download="My_File.pdf">
                    {/* <a href="http://localhost:8065/uploads/test.pdf" download> */}
                     <img src={link} alt={pdfName} width="104" height="142"/>
                     {/* <i class="text-danger bi bi-download" ></i>  */}
                    </a>

                    </p>
                    
                </div>
            </div>
           &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; <DownloadLink
    label="Download"
    filename={link}
    exportFile={() => "Client side cache data here…"}
     />

     &nbsp;&nbsp; <i class="text-danger bi bi-download" ></i>

           
        </div>
        </div>
        &nbsp;&nbsp;
        </div>
    )
}
export default Card;