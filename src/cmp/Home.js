import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import about from "./images/about.svg";
import contact from "./images/contact.svg";
import fb from "./images/facebook-square-color-icon.svg";
import linkedin from "./images/linkedin-square-color-icon.svg";
import git from "./images/github-icon.svg";

export default function Home() {
  return (
    <>
      <div
        style={{
          width: "100vw",
          backgroundColor: "#e3f2fd",
          fontFamily: "'Edu SA Beginner', cursive",
          fontSize: "1.5rem",
          position: "fixed",
          top: "-1px",
          zIndex: "1",
        }}
      >
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid ">
            <a
              className="navbar-brand h1"
              href="#hero"
              style={{ fontFamily: "'Lobster', cursive", fontSize: "2rem" }}
            >
              Achiever Solutions
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#hero"
                  >
                    <HomeOutlinedIcon style={{ marginBottom: "5px" }} /> Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#notices">
                    <NotificationsNoneOutlinedIcon
                      style={{ marginBottom: "5px" }}
                    />{" "}
                    Notices
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#courses">
                    <AutoStoriesOutlinedIcon style={{ marginBottom: "5px" }} />{" "}
                    Courses
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    <InfoOutlinedIcon style={{ marginBottom: "5px" }} /> About
                    us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contactus">
                    <ContactPageOutlinedIcon style={{ marginBottom: "5px" }} />{" "}
                    Contact us
                  </a>
                </li>
              </ul>
              <form className="mx-5" role="search">
                <div>
                  <button
                    type="button"
                    className="btn btn-primary mx-3"
                    style={{ fontSize: "1.3rem" }}
                  >
                    <LoginOutlinedIcon /> Login
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-dark "
                    style={{ fontSize: "1.2rem" }}
                  >
                    <PersonAddOutlinedIcon style={{ marginBottom: "5px" }} />{" "}
                    Signup
                  </button>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>

      {/* heroSection */}
      <div
        id="hero"
        className="border-5"
        style={{ width: "99vw", margin: "auto", marginTop: "75px" }}
      >
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" style={{ height: "70vh" }}>
              <img
                style={{ height: "100%" }}
                src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item" style={{ height: "70vh" }}>
              <img
                style={{ height: "100%" }}
                src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item" style={{ height: "70vh" }}>
              <img
                style={{ height: "100%" }}
                src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* aboutus */}
      <h1 className="mx-5 mt-3 p-3 text-success text-center">About Us</h1>

      <div className="d-flex justify-content-around" style={{}}>
        <div id="about" className="aboutus" style={{ width: "60vw" }}>
          <div className="d-flex justify-content-between mt-3">
            <img src={about} style={{ width: "80%", height: "100%" }} />
            <div className="mx-3">
              <h3>
                Welcome to{" "}
                <span style={{ color: "red" }}>Achiever Solutions</span>
              </h3>
              <p>
                At Achiever Solutions we are dedicated to empowering individuals
                with the knowledge and skills needed to excel in the dynamic
                world of technology. We take pride in being a leading computer
                institute that offers comprehensive and industry-relevant
                courses to students of all ages and backgrounds.
              </p>
              <h3>Our Vision</h3>
              <p>
                Our vision is to bridge the digital divide by providing
                accessible and top-quality education in the field of computer
                science and technology. We aspire to create a learning
                environment that fosters creativity, innovation, and critical
                thinking, enabling our students to become future leaders and
                change-makers in the tech industry.
              </p>
            </div>
          </div>
        </div>

        <div
          id="notices"
          className="noitceBoard  border border-2 border-success rounded-1 text-center"
          style={{ width: "20vw", height: "40vh", overflowY: "scroll" }}
        >
          <h1 className="text-danger mb-3 border-bottom border-2 border-danger">
            Notice
          </h1>
          <p>content1</p>
          <p>content1</p>
          <p>content1</p>
          <p>content1</p>
        </div>
      </div>

      <div id="courses" className="mt-5 text-center text-success">
        <h1 className="mb-5">Courses</h1>
        <div className="d-flex flex-wrap justify-content-center gap-5">
          <div className="card" style={{ width: "20rem" }}>
            <img
              src="https://web-dev.imgix.net/image/FNkVSAX8UDTTQWQkKftSgGe9clO2/uZ3hQS2EPrA9csOgkoXI.png?auto=format&fit=max&w=1200&fm=auto"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div className="card " style={{ width: "20rem" }}>
            <img
              src="https://web-dev.imgix.net/image/FNkVSAX8UDTTQWQkKftSgGe9clO2/uZ3hQS2EPrA9csOgkoXI.png?auto=format&fit=max&w=1200&fm=auto"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div className="card " style={{ width: "20rem" }}>
            <img
              src="https://web-dev.imgix.net/image/FNkVSAX8UDTTQWQkKftSgGe9clO2/uZ3hQS2EPrA9csOgkoXI.png?auto=format&fit=max&w=1200&fm=auto"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div className="card " style={{ width: "20rem" }}>
            <img
              src="https://web-dev.imgix.net/image/FNkVSAX8UDTTQWQkKftSgGe9clO2/uZ3hQS2EPrA9csOgkoXI.png?auto=format&fit=max&w=1200&fm=auto"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card " style={{ width: "20rem" }}>
            <img
              src="https://web-dev.imgix.net/image/FNkVSAX8UDTTQWQkKftSgGe9clO2/uZ3hQS2EPrA9csOgkoXI.png?auto=format&fit=max&w=1200&fm=auto"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card " style={{ width: "20rem" }}>
            <img
              src="https://web-dev.imgix.net/image/FNkVSAX8UDTTQWQkKftSgGe9clO2/uZ3hQS2EPrA9csOgkoXI.png?auto=format&fit=max&w=1200&fm=auto"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "20rem" }}>
            <img
              src="https://web-dev.imgix.net/image/FNkVSAX8UDTTQWQkKftSgGe9clO2/uZ3hQS2EPrA9csOgkoXI.png?auto=format&fit=max&w=1200&fm=auto"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        id="contactus"
        className="my-5"
        style={{ backgroundColor: "lightgrey" }}
      >
        <h1 className="text-center text-success mb-5">Conatct us</h1>
        <div className="d-flex justify-content-center flex-wrap">
          <div className="form-container mb-5" style={{ width: "55vw" }}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required defaultValue={""} />
            <input type="submit" className="button" value="Submit" />
          </div>

          <div style={{ width: "40vw" }}>
            <img src={contact} style={{ width: "90%", height: "100%" }}></img>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <footer className="d-flex flex-wrap justify-content-around border-top">
          <p className="col-md-4 mb-0 text-body-secondary mt-2">
            © 2023 Achiever Solutions, Inc
          </p>
          <div className="mt-2">
            <a href="#">
              <img
                className="mx-1 on-hover"
                src={git}
                alt="hey"
                width={35}
                height={35}
              />
            </a>
            <a href="#">
              <img
                className="mx-1 on-hover"
                src={linkedin}
                alt="hey"
                width={35}
                height={35}
              />
            </a>
            <a href="#">
              <img
                className="mx-1 on-hover"
                src={fb}
                alt="hey"
                width={35}
                height={35}
              />
            </a>
          </div>
        </footer>

        {/* Admin login button */}
        <div className="d-flex justify-content-end mx-5">
          <button className="btn btn-sm btn-outline-dark">Admin login</button>
        </div>
      </div>
    </>
  );
}
