import React from "react"
import Poulami from "../Image/Poulami.jpg";

function Birthday() {

    return (
        <div>
            <h1>Hey!</h1>
            <div id="header">
                <h1>Today is Poulami's Birthday 🎉</h1>
                <img id="bff-img" alt="Poulami" src={Poulami} />
                <h2 id="bday-age">
                    Happy Birth Day Congratulation ON TURNING SILVER
                </h2>
                <h4 id="bday-date">
                    24<sup>th</sup> November, 1997
                </h4>
            </div>

            <div class="gift-section">
                <h2 class="gift-title">Enjoy Your Day 🥳</h2>
                <h3 class="gift-hint">(Please touch the image)</h3>
                <div class="gift-img1" id="gift-img-happy"></div>
            </div>

            <div class="gift-section">
                <h2 class="gift-title">Enjoy with your family 😍</h2>
                <div class="gift-img2" id="gift-img-hot"></div>
            </div>

            <div class="gift-section">
                <h2 class="gift-title">Enjoy with your new friends 😍</h2>
                <div class="gift-img3" id="gift-img-genius"></div>
            </div>

            <div class="gift-section">
                <h2 class="gift-title">Enjoy with your old friends 😍</h2>
                <div class="gift-img4" id="gift-img-badass"></div>
            </div>

            <div class="gift-section">
                <h2 class="gift-title"> 🥂Enjoy Your Freedom🥂</h2>
                <div class="gift-img5" id="gift-img-cheers"></div>
            </div>

        </div>
    );

}

export default Birthday;