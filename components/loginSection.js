import Head from "next/head";
import styles from "../styles/Login.module.css";
import AwesomeSlider from "react-awesome-slider";
import { Button,InputGroup,FormControl } from "react-bootstrap";
import React, { Component } from "react";
import Link from 'next/link'
export default class LoginSection extends Component {
  
  
  render() {
    return (
    <div className={styles.loginContainer}>
     <InputGroup className="mb-3" style={{marginTop:'100px',color:'green'}}>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Nombre</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3" style={{color:'green'}}>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Correo</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Correo"
                aria-label="Correo"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3" style={{color:'green'}}>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Celular</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Celular"
                aria-label="Celular"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <div className={styles.buttonContainer}>
            <Button variant="warning">Ingresar</Button>{" "}
              <Button variant="info" //onClick={()=>{this.fetchNodeMailer()}}
              >Registrarme</Button>
            </div>
        
    </div>
        
  );
}
}
