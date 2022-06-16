function Gallery (){
    return (
        <div className="Gallery">
            <div className="itemOne">
            <img id="img-itemOne" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" alt="itemOne"/>
           <h2>Declarative</h2>
           <p id="p-icons">React makes it painless to create interactive UIs.</p>
            </div>
            <div className="itemTwo">
            <img id="img-itemTwo" src='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png' alt="itemTwo" />
            <h2>Components</h2>
           <p id="p-icons">Build encapsulated components that manage their state.</p>
            </div>
            <div className="itemThree">
            <img id="img-itemThree" src='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png' alt="itemThree" />
            <h2>Single-way</h2>
           <p id="p-icons">A set of immutable of mutable values are passed to the components.</p>
            </div>
            <div className="itemFour">
           <img id="img-itemFour" src='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png' alt="itemFour" />
           <h2>JSX</h2>
           <p id="p-icons">Statically-typed, designed to run in modern browsers.</p>
            </div>
        </div>
    );
}
export default Gallery;