import React from "react";

const Home = ({ fname, sname }) => { // Props
  const cistyle = {
    width: "300px",
    height: "500px",
  };
  return (
    <div>
      <div className="container my-5">
        <div className="row justify-content-center align-items-center g-2">
          <h1 className="text-center">
            Welcome {fname} {sname}, to my page !!!
          </h1>
        </div>

        <div className="row justify-content-center align-items-center mt-5 g-2">
          <div
            id="carouselId"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-bs-target="#carouselId"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="First slide"
              ></li>
              <li
                data-bs-target="#carouselId"
                data-bs-slide-to="1"
                aria-label="Second slide"
              ></li>
              <li
                data-bs-target="#carouselId"
                data-bs-slide-to="2"
                aria-label="Third slide"
              ></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img
                  src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?cs=srgb&dl=pexels-pixabay-326055.jpg&fm=jpg"
                  className="w-100 d-block"
                  style={cistyle}
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvvXoNpuvRhwtmPoccM52Y8uQVyNQXPONkqJs64v0kG2toR73H0YhSNX4&s"
                  className="w-100 d-block"
                  style={cistyle}
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEurxVZGMOGbxZwlGcbAGm3ZEoEL7EXs-zRT1O1af4RExUNv3n1x8YwFw&s"
                  className="w-100 d-block"
                  style={cistyle}
                  alt="Third slide"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselId"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselId"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
