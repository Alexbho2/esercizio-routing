import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function About(){
    const params = useParams();
    return(  <>
    <title>Welcome to jurassic park</title>
    
    <h1>Mela : ID -- {params.id} NOME : -- {params.name}</h1>
    
    
    
     </> )
}

export default About;