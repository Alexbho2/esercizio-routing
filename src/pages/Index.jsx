import React from "react";
import{ Link } from "react-router-dom"
import CardMaterial from "../component/cardMaterial"
import { Grid } from '@mui/material';
import users from "../data/user.json"




function Index(){
    return(  
    <>
    <title>Welcome to jurassic park</title>
    <Grid 
   container 
   spacing={3}
   >
    <Grid size={12}>
    <h1>wuba luba dub dub </h1>
    
    </Grid>
    {/* <Link to='/about/123/Jack'>vai da Jack</Link><br></br> */}

        

    {users.map((item)=>{
        return(<Grid size={4}>
            <CardMaterial
                id={item.id}
                name={item.name}
            
            />
        </Grid>)
    })}
   </Grid>
    </>
    );
}
export default Index;