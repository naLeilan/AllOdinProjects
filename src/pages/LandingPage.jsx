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
          <button className="btn btn1">Sign up</button>
        </section>
        <section className="right">
          <img src="2.jpg" alt="image" className="main-img" />
        </section>
      </div>
      <div className="detail1">
        <h2>Learn More About Our Products and Benefits :</h2>
        <div className="images">
          <div className="image-part">
            <img src="" alt="" className="image" />
            <h6>
              Whey protein is a high-quality, fast-digesting protein that helps
              build and repair muscle tissue. mass.
            </h6>
          </div>
          <div className="image-part">
            <img src="" alt="" className="image" />
            <h6>
              It's perfect for post-workout recovery, supporting muscle growth,
              and maintaining lean muscle
            </h6>
          </div>
          <div className="image-part">
            <img src="" alt="" className="image" />
            <h6>aking it look like readable text1</h6>
          </div>
          <div className="image-part">
            <img src="" alt="" className="image" />
            <h6>aking it look like readable text1</h6>
          </div>
        </div>
      </div>
      <div className="detail2"> detail2</div>
      <div className="detail3"> detail3</div>
      <footer>footer</footer>
    </div>
  );
}

export default LandingPage;
