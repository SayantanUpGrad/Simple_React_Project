import React from "react";
import Images from "./Images";
import "./index.css";

function TimeDate() {

    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    const dDate = {
        display: 'flexbox',
        justifyContent: 'center',
        color: '#fa9191',
        fontFamily: "'Recursive', sans-serif",
        textAlign: 'center',
        letterSpacing: '15px',

    };
    var ndate = new Date();
    ndate = ndate.getHours();
    let greeting = "";
    let styleDiv = {};
    if (ndate >= 6 && ndate < 12) {
        greeting = "Good Morning"; styleDiv.color = "Green";
    } else if (ndate > 12 && ndate <= 14) {
        greeting = "Good Afternoon"; styleDiv.color = "Orange";
    } else if (ndate > 14 && ndate < 20 && ndate < 6) { greeting = "Good Evening"; styleDiv.color = "Sky"; }
    else {
        greeting = "Good Nignt, Go to Sleep"; styleDiv.color = "Blue";
    }

    return (
        <div>
            <h2 id="date" style={dDate} >Toadys Date is {date}</h2>
            < p id="time">The Clock Says {time} <span style={styleDiv}>{greeting} </span></p>
            <div className="centering" id="image">
                <Images />
            </div>
        </div>
    )
}
export default TimeDate;