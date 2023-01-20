import React from "react";
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";

// import { Container } from './styles';

function cardp({ titulo, linguagem, video, descricao, GitHub, LinkedIn}) {
  return (
    <>
      <br />
      <div id="card-imgp">
        <div className="container-cardp">
          <video src={video} autoPlay loop muted />

          <div className="conteudo">
            <h2>{titulo}</h2>

            <h6>{linguagem}</h6>

            <div id="line">.</div>

           <center><p>{descricao}</p></center> 

            <div>
              <a  href={GitHub} target={"_blank"}><BsGithub id="linkRedes"/></a>

              {LinkedIn != null 
              ?(<a  href={LinkedIn} target={"_blank"}><BsLinkedin id="linkRedes"/></a>)
              : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default cardp;
