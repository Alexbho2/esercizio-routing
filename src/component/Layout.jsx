import Container from "@mui/material/Container";
import React from "react";


function Layout(props) {
 return (
   <Container
     maxWidth={false}
     style={{
       backgroundColor: "#2600ffff",
       padding: 0,
       minHeight: "100vh",
       margin: 0,
     }}
   >
     <div
       style={{
         height: "100px",
         padding: 0,
         margin: 0,
         display: "flex",
         alignItems: "center",
         backgroundColor: "#ec0db8ff",
       }}
     >
       <img
         src='https://www.freepnglogos.com/uploads/pokeball-png/pokeball-alexa-style-blog-pokemon-inspired-charmander-daily-8.png'
         style={{ height: 100 }}
       />
     </div>


     <div
       style={{
         display: "flex",
         flex: 1,
       }}
     >
       {props.children}
     </div>
     <div
       style={{
         height: "100px",
         backgroundColor: "#ec0db8ff",
         padding: 0,
         margin: 0,
         position: "static",
         bottom: 0,
         left: 0,
         right: 0,
       }}
     >
    
     </div>
   </Container>
 );
}


export default Layout;


