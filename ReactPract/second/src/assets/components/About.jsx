import React from "react";

const About = () => {
  const istyle = {
    height: "200px",
    width: "300px",
  };
  return (
    <div>
      <div className="container my-5">
        <div className="row justify-content-center align-items-center g-2">
          <h1 className="text-center">ABOUT US</h1>
        </div>

        <div className="row justify-content-center align-items-center mt-5 g-2">
          <div className="col-4 d-flex justify-content-center align-items-center">
            <img
              src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?cs=srgb&dl=pexels-pixabay-326055.jpg&fm=jpg"
              alt=""
              style={istyle}
              srcset=""
            />
          </div>
          <div className="col">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur quibusdam dolore officia doloremque eius ex nesciunt
              dicta! Voluptate dolorem similique incidunt. Quam explicabo
              reiciendis et esse veritatis magnam obcaecati distinctio
              aspernatur! Reiciendis nulla numquam eos quo sapiente beatae
              voluptatibus quos atque ut inventore provident ipsum omnis neque
              exercitationem qui, debitis suscipit natus quis deserunt est rerum
              error cumque? Placeat, voluptatum?
            </p>
          </div>
        </div>
        <div className="row justify-content-center align-items-center mt-5 g-2">
          <div className="col">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur quibusdam dolore officia doloremque eius ex nesciunt
              dicta! Voluptate dolorem similique incidunt. Quam explicabo
              reiciendis et esse veritatis magnam obcaecati distinctio
              aspernatur! Reiciendis nulla numquam eos quo sapiente beatae
              voluptatibus quos atque ut inventore provident ipsum omnis neque
              exercitationem qui, debitis suscipit natus quis deserunt est rerum
              error cumque? Placeat, voluptatum?
            </p>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEurxVZGMOGbxZwlGcbAGm3ZEoEL7EXs-zRT1O1af4RExUNv3n1x8YwFw&s"
              alt=""
              style={istyle}
              srcset=""
            />
          </div>
        </div>
        <div className="row justify-content-center align-items-center mt-5 g-2">
          <div className="col-4 d-flex justify-content-center align-items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvvXoNpuvRhwtmPoccM52Y8uQVyNQXPONkqJs64v0kG2toR73H0YhSNX4&s"
              alt=""
              style={istyle}
              srcset=""
            />
          </div>
          <div className="col">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur quibusdam dolore officia doloremque eius ex nesciunt
              dicta! Voluptate dolorem similique incidunt. Quam explicabo
              reiciendis et esse veritatis magnam obcaecati distinctio
              aspernatur! Reiciendis nulla numquam eos quo sapiente beatae
              voluptatibus quos atque ut inventore provident ipsum omnis neque
              exercitationem qui, debitis suscipit natus quis deserunt est rerum
              error cumque? Placeat, voluptatum?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
