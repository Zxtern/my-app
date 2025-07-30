import React from "react";

function Main() {
    return (
        <div className="main-container">
            <main className="main-content">
                <div className="specials-title">
                     <div className="specials-header"> {/*I added an additional div to make the specials header separate*/}
                        <h2>Specials</h2>
                        <button className="menu-button">Online Menu</button>
                    </div>
                </div>
                <div className="specials-container">
    
    
                    {/*Menu cards below */}
                    <div className="greek-salad">
                        <img src="GreekSalad.jpg" alt="A salad" width="300" height="270"></img>
                        <h4>Greek Salad</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                    </div>
                    <div className="bruschetta-item">
                        <img src="Bruschetta.jpg" alt="A bruschetta" width="300" height="270"></img>
                        <h4>Bruschetta</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                    </div>
                    <div className="penne-pasta">
                        <img src="PennePasta.jpg" alt="A penne pasta" width="300" height="270"></img>
                        <h4>Penne Pasta</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                    </div>
                </div>

                <div className="testimonials-title">
                    <div className="testimonials-header">
                        <h2>Testimonials</h2>
                    </div>
                </div>
            
                <div className="testimonials-container">
                    
                    {/*Customer cards below */}
                    <div className="customer-1">
                        <h4>User123</h4>
                        <img src="default.jpg" alt="Customer 1" width="200" height="200"></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                    </div>
                    <div className="customer-2">
                        <h4>User456</h4>
                        <img src="default.jpg" alt="Customer 1" width="200" height="200"></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                    </div>
                    <div className="customer-3">
                        <h4>User789</h4>
                        <img src="default.jpg" alt="Customer 1" width="200" height="200"></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                    </div>
                </div>
            
                <div className="details-container">
                    <div className="details-text">
                        <h2>Little Lemon</h2>
                        <h3>Silicon Valley</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                    </div>
                    <img src="/Details.jpg" alt="Additional Details" width="300" height="300"></img>
                </div>
                
            </main>
        </div>
    );
}

export default Main;