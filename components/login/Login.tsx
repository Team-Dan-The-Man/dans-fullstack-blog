import React, { useRef, useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { supabase } from "../lib/db";

function Login() {
  
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const router = useRouter();

  async function handleSubmit(event: any) {
    event.preventDefault();

    let enteredEmail: string;
    let enteredPassword: string;

    try {
     
      enteredEmail = emailInputRef.current?.value || "";
      enteredPassword = passwordInputRef.current?.value || "";
      
      let { data, error } = await supabase.auth.signInWithPassword({
        email: enteredEmail,
        password: enteredPassword,
      });

     
      if (error) {
        console.log(error);
      } else {
        console.log(data);
		router.push('/write')
      }
    }
	 catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="signinBgCover">
        <div style={{ minHeight: "800px" }}>
          <div className="text-center justify-content-center align-self-center">
            {/* Sign In form section*/}
            <div>
              <Form id="loginCard" onSubmit={handleSubmit}>
                <Row className=" justify-content-center" id="signin-card">
                  <h1 className="text-center justify-content-center align-self-center">
                    SIGN IN
                  </h1>

                  <Form.Group className="mb-3">
                    <Form.Label id="formLabelName">Email</Form.Label>
                    <Form.Control
                      id="formLabel"
                      type="email"
                      name="email"
                      ref={emailInputRef}
                    />
                  </Form.Group>
                </Row>

                <Row className=" justify-content-center" id="signin-card">
                  <Form.Group className="mb-3">
                    <Form.Label id="formLabelName">Password</Form.Label>
                    <Form.Control
                      id="formLabel"
                      type="password"
                      name="password"
                      ref={passwordInputRef}
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
