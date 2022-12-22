
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app1.css"
import React from 'react';
import Pro from './components/Profile/Pro';
import Photo from './components/Profile/Photo';
import Navigation from './components/Profile/Navigation';
    function  APP () {
      const infos={
    fullname:"AYED IBTISSEM",
    bio:"spends my time to learn  web dev" ,
    profession:"STUDENT",
      };
     
      const handlename=()=>{
        alert(infos.fullname);
      };
      return (
        <div>
          <Navigation></Navigation>
        <h1 style={{marginLeft:"350px",color:"red",marginTop:"100px"}}>WELCOME TO MY Profile PAGE </h1>
          
          

    <Photo> <img src="https://img.freepik.com/vecteurs-premium/tete-typographique-developpeur-web-optimisation-site-web-conception-interface-page-web-site-codage-test-internet-idee-technologie-moderne-illustration-vectorielle-plane-isolee_613284-1033.jpg?w=2000g" width="700px" height="400px"alt="ik"/></Photo>
      <Pro
fullname={infos.fullname}
bio={infos.bio}
profession={infos.profession}
fun={handlename}
      ></Pro>  
    

       </div>
      );
    }
    
    
    export default APP;
    