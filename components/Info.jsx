import React from "react"
import '../src/styles/info.css'
import photo from "/image/female-face.png"
import email from "../image/Mail.png"
import linkedin from "../image/linkedin.png"


export default function Info(){
    return(
        <header>
            <img className="profile-photo" src={photo}/>
            <div className="profile-info">
                <h1 className="profile-name">Seda Icel</h1>
                <h2 className="profile-occupation">Frontend Developer</h2>
                <h3 className="profile-mail">sedaicel.website</h3>
                <div className="buttons">
                    <button className="mail-btn">
                        <img src={email}/>
                        <p>Email</p>
                    </button>
                    <button className="linkedin-btn">
                        <img src={linkedin}/>
                        <p>LinkedIn</p>
                    </button>
            </div>

            </div>
        </header>
    )
}