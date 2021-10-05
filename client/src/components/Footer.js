import React, {useState} from "react";
import "./CSS/Footer.css";
import {ReactComponent as Linkedin} from "./linkedin.svg";
import {ReactComponent as Github} from "./github.svg";

function Footer() {

    return (
        <div className="footer-wrapper light-color-bg dark-color-text">
            <div className="footer-madeby dark-color-text">
                Created @ <b><a href="http://wildcodeschool.com" target="new">Wild Code School</a></b> by students:
            </div>
            <div className="footer-detail">
                <div className="footer-pod">
                    <a href="https://www.linkedin.com/in/lorianne-aguilar/" target="new"><Linkedin /></a>
                    <a href="https://github.com/Grailsidhe" target="new"><Github /></a>&nbsp;Lorianne
                </div>
                <div className="footer-pod">
                    <a href="https://www.linkedin.com/in/alexejholad/" target="new"><Linkedin /></a>
                    <a href="https://github.com/AlexHolad" target="new"><Github /></a>&nbsp;Alex
                </div>
                <div className="footer-pod">
                    <a href="https://www.linkedin.com/in/pattisalvatore/" target="new"><Linkedin /></a>
                    <a href="https://github.com/sal9110/" target="new"><Github /></a>&nbsp;Salvatore
                </div>
            </div>
            <div className="footer-section light-color-bg dark-color-text">© 2021 Habitat</div>
        </div>
    )
};

export default Footer;