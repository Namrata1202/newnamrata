import React from "react";
import "./VList.css";

const Vlist = () => {
  const myStyle = {
    backgroundImage:
      "url('https://i.pinimg.com/736x/6f/a6/4e/6fa64e920131f212705b5c2091009772.jpg')",
    height: "90vh",
    marginTop: "-10px",
    backgroundSize: "cover",

    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={myStyle}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://www.w3schools.com/w3css/4/w3.css"
      ></link>

      <div action="/action_page.php" class=" w3-container w3-half ">
        <div class=" w3-card-4  " className="Mar">
          <form className="akan">
            <h2 class="w3-center">Login</h2>

            <div class="w3-row w3-section">
              <div class="w3-col" style={{ width: "50px" }}>
                <i class="w3-xxlarge fa fa-user"></i>
              </div>
              <div class="w3-rest">
                <input
                  class="w3-input w3-border"
                  name="first"
                  type="text"
                  placeholder="First Name"
                />
              </div>
            </div>

            <div class="w3-row w3-section">
              <div class="w3-col" style={{ width: "50px" }}>
                <i class="w3-xxlarge fa fa-user"></i>
              </div>
              <div class="w3-rest">
                <input
                  class="w3-input w3-border"
                  name="last"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div class="w3-row w3-section">
              <div class="w3-col" style={{ width: "50px" }}>
                <i class="w3-xxlarge fa fa-envelope-o"></i>
              </div>
              <div class="w3-rest">
                <input
                  class="w3-input w3-border"
                  name="email"
                  type="text"
                  placeholder="Email"
                />
              </div>
            </div>

            <div class="w3-row w3-section">
              <div class="w3-col" style={{ width: "50px" }}>
                <i class="w3-xxlarge fa fa-phone"></i>
              </div>
              <div class="w3-rest">
                <input
                  class="w3-input w3-border"
                  name="phone"
                  type="text"
                  placeholder="Phone"
                />
              </div>
            </div>
           

            <div class="w3-row">
              <div class="w3-col s6  w3-center">
                <h3>
                  <button class="w3-button w3-black w3-round-xxlarge ">
                    Submit
                  </button>
                </h3>
              </div>
              <div class="w3-col s6 w3-center">
                <h3>
                  <button class="w3-button w3-black w3-round-xxlarge ">
                    NEXT
                  </button>
                </h3>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Vlist;
