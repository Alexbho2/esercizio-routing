import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import users from "../data/user.json";

function About() {
  const params = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    const utenteTrovato = users?.find(
      (item) => item.id.toString() === params.id
    );

    console.log(utenteTrovato);
    setUser(utenteTrovato);
  }, [params]);

  return (
    <>
      <title>Welcome to jurassic park</title>

      <h1>
        Mela ID: -- {params.id}
        <br />
        NOME : -- {user?.name}
        <br />
        EMAIL: -- {user?.email}
        <br />
        ETÀ: -- {user?.age}
        <br />
        CITTÀ: --{user?.city}
        <br />
      </h1>
    </>
  );
}

export default About;
