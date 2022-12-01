import React from "react";
import Shoes from "../../latestShoes.json";

function Home() {
    return (
        <div>
            <div className="banner-image"></div>
            <div>
                <span className="tagline">Biz star wars kartalary</span>
                <div className="tagline-para">Bizde 400+ astam star war kartalary bar jane olardin sapasy ote jogary
                </div>

                <br/>
                <br/>
                <br/>
                <div className="latest-container">
                    <hr className="line"/>
                    &nbsp; &nbsp;
                    <span className="latest-designs">Songy tauarlar</span>&nbsp;&nbsp;
                    <hr className="line"/>
                    <br/>
                    <br/>
                    <div className="product-container image-gallery">
                        {Object.keys(Shoes).map((keyName) => {
                            const shoe = Shoes[keyName];
                            return (
                                <div className="home-products" key={keyName}>
                                    <img
                                        className="products-shoe-image"
                                        alt={shoe.name}
                                        src={shoe.img}
                                    />
                                    <h3 className="shoe-name">{shoe.name}</h3>
                                    <h3 className="shoe-price">${shoe.price}</h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
