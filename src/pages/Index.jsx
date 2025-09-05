import React from "react";
import{ Link } from "react-router-dom"
import Card from "../component/card";



function Index(){
    return(  
    <>
    <title>Welcome to jurassic park</title>
    <div>
    <h1>wubba lubba dub dub </h1>
    <Link to='/about/123/Jack'>vai da Jack</Link><br></br>
    <Link to='/about/345/Giorgia'>vai da Giorgia</Link><br></br>
    <Link to='/about/047/Alessandro'>vai da Alessandro</Link><br></br>
    <Link to='/about/789/Sara'>vai da Sara</Link>

    <Card
    id='123'
    name="Jack"
    
    />

    <Card
        id='345'
        name="Giorgia"
    />

    </div>
    </>
    );
}
export default Index;