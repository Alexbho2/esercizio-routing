import React from "react";
import "./card.css"
import { Link } from "react-router-dom";

function Card(props){
        return (

            <Link to={'/about' +'/'+ props.id +"/" + props.name}>
            <div className="card">
                <p className="title">{props.name}</p>
                <p className="id">ID:{props.id}</p>
            </div>
            </Link>,

            <Link to={'/about' +'/'+ props.id +"/" + props.name}>
            <div className="card">
                <p className="title">{props.name}</p>
                <p className="id">ID:{props.id}</p>
            </div>
            </Link>
        );

      


}

  export default Card;