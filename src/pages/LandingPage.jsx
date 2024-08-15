function LandingPage() {
  return (
    <div className="app">
      <div className="navbar">
        <h3 className="headerLogo">header logo</h3>
        <div className="links">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>

      <div className="main">
        <section className="left">
          <h1>This website is awsome</h1>
          <p className="text">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. making it
            look like readable English.
          </p>
          <button className="btn btn1">Read more...</button>
        </section>
        <section className="right">
          <img src="2.jpg" alt="image" className="main-img" />
        </section>
      </div>

      <div className="detail1">
        <h2>Learn More About Our Products</h2>
        <div className="images">
          <div className="image-part">
            <img src="3.jpg" alt="image3" className="image" />
            <h6>
              Whey protein is a high-quality, fast-digesting protein that helps
              build and repair muscle tissue. mass.
            </h6>
          </div>
          <div className="image-part">
            <img src="4.jpg" alt="image4" className="image" />
            <h6>
              It's perfect for post-workout recovery, supporting muscle growth,
              and maintaining lean muscle
            </h6>
          </div>
          <div className="image-part">
            <img src="5.jpg" alt="image5" className="image" />
            <h6>aking it look like readable text1</h6>
          </div>
          <div className="image-part">
            <img src="6.jpg" alt="image6" className="image" />
            <h6>aking it look like readable text1</h6>
          </div>
        </div>
      </div>

      <div className="detail2">
        <p>
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        <h4>famouse one</h4>
      </div>

      <div className="detail3">
        <div className="detail3-part">
          <div className="detail3-part1">
            <section className="detail3-left">
              <h3>Join us Today and take your journey</h3>
              <h6>Join us Today and take your journey</h6>
            </section>
          </div>
          <section className="detail3-right">
            <button className="btn btn2">Sign up</button>
          </section>
        </div>
      </div>

      <footer>footer</footer>
    </div>
  );
}

export default LandingPage;
