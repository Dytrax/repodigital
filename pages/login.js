import Head from "next/head";
import styles from "../styles/Home.module.css";
import AwesomeSlider from "react-awesome-slider";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import React, { Component } from "react";
import LoginSection from "../components/loginSection";
export default class Login extends Component {
  render() {
    return (
      <div>
        <LoginSection />
      </div>
    );
  }
}
