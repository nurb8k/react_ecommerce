import React from "react";
import "../../App.css";

function Footer() {
    return (
        <footer>
            <div className="wrapper"></div>
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-section about">
                        <p className="footer-para">
                            Developer: <span className="my-name">Nurbek Akmoldayev</span>
                        </p>
                        <div className="contact"></div>
                        <br/>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
