import React from "react";

const Contact = () => { // css internal
  const istyle = {
    width: "100%",
    padding: "11px",
  };
  const cstyle = {
    maxWidth: "300%",
  };
  const bstyle = {
    margin: "8px 50px",
  };
  return (
    <div>
      <div className="container my-5">
        <div className="row justify-content-center align-items-center g-2">
          <h1 className="text-center">CONTACT US</h1>
        </div>

        <div className="row justify-content-center align-items-center mt-5 g-2">
          <div className="col-md-7">
            <form action="" method="post">
              <div class="table-responsive">
                <table class="table table-primary">
                  <thead>
                    <tr>
                      <th colspan="2" className="text-center" style={istyle}>
                        Fill this form
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="">
                      <td>Name : </td>
                      <td>
                        <input type="text" style={istyle} name="" id="" />
                      </td>
                    </tr>
                    <tr class="">
                      <td>Email : </td>
                      <td>
                        <input type="email" style={istyle} name="" id="" />
                      </td>
                    </tr>
                    <tr class="">
                      <td>Message : </td>
                      <td>
                        <textarea
                          name=""
                          id=""
                          style={istyle}
                          rows="3"
                        ></textarea>
                      </td>
                    </tr>
                    <tr class="">
                      <td colspan="2" className="text-center">
                        <button
                          type="reset"
                          class="btn btn-primary"
                          style={bstyle}
                        >
                          Reset
                        </button>
                        <button
                          type="submit"
                          class="btn btn-primary"
                          style={bstyle}
                        >
                          Submit
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
