import React from "react"
import '../src/styles/footer.css'
import twitter from "/image/twitter.png"
import facebook from "/image/facebook.png"
import instagram from "/image/instagram.png"
import github from "/image/github.png"

export default function Footer(){
    return(
        <div className="footer-images">
            <img src={twitter}/>
            <img src={facebook}/>
            <img src={instagram}/>
            <img src={github}/>
        </div>
    )   
}