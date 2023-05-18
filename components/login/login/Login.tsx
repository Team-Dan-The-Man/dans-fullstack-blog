import React, { useContext, useState } from "react";
// import UserContext from "../../context/UserContext";
import { Form, Button, Col, Row } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import "./login.css";


{/* Sign In Page Function */ }
function Login() {

  // const [login, setLogin] = useState({
  //   username: "",
  //   password: "",
  // });

  // let { Login } = useContext(UserContext);
  // let { username, password } = login;
  // let navigate = useNavigate();

  // function handleChange(event) {
  //   setLogin((preValue) => {
  //     return { ...preValue, [event.target.name]: event.target.value };
  //   });
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   Login(username, password);
  //   navigate(`/write`);
  //   console.log(login);
  // }

  return (
    <>
      <div className='signinBgCover'>
        <div style={{ minHeight: '800px' }}>
          <div className="text-center justify-content-center align-self-center">

            {/* Sign In form section*/}
            <div>
              <Form id="loginCard" >
                <Row className=" justify-content-center" id="signin-card">

                  <h1 className="text-center justify-content-center align-self-center">SIGN IN</h1>

                  <Form.Group className="mb-3">
                    <Form.Label id="formLabelName">User Name</Form.Label>
                    <Form.Control
                      id="formLabel"
                      type="username"
                      name="username"
                      // value={username}
                      // onChange={handleChange}
                    />
                  </Form.Group>
                </Row>

                <Row className=" justify-content-center" id="signin-card">
                  <Form.Group className="mb-3">
                    <Form.Label id="formLabelName" >Password</Form.Label>
                    <Form.Control
                      id="formLabel"
                      type="password"
                      name="password"
                      // value={password}
                      // onChange={handleChange}
                    />
                  </Form.Group>
                </Row>

                <Row className="justify-content-center" id="signin-card">
                  <Form.Group className="col-1">
                    <Col xs={12} sm={4} md={4} lg={4}>
                      <Button id="signinFormButton" type="submit">
                        SUBMIT
                      </Button>
                    </Col>
                  </Form.Group>
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </div>






    </>
  );
}

export default Login;
