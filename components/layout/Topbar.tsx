import { useState, useEffect } from "react";
import {
  Button,
  Form,
  Row,
  Col,
  Navbar,
  NavDropdown,
  Nav
} from "react-bootstrap";
import { useRouter } from "next/router";
import { supabase } from "../lib/db";


// Documentations for the functions used for this page
// useContext Hook: https://reactjs.org/docs/hooks-reference.html#usecontext
// useParams Hook: https://reactrouter.com/web/api/Hooks/useparams
// useNavigate Hook: https://reactrouter.com/web/api/Hooks/usedispatch
// useState in React: https://react.dev/reference/react/useState
// React: https://reactjs.org/docs/getting-started.html
// React-Bootstrap: https://react-bootstrap.github.io/getting-started/introduction/
// Navbar component: https://react-bootstrap.github.io/components/navbar/
// Responsive breakpoints in React-Bootstrap: https://react-bootstrap.github.io/layout/grid/#grid-props

interface SessionData {
  session: any;
}

export default function Topbar() {
  const router = useRouter();
  const [user, setSession] = useState<any | null>(null);

  useEffect(() => {
    async function fetch() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log(user);
      setSession(user);
    }

    fetch();
  }, []);



  const handleChange = (event: any) => {
    if (event.target.value === "") return;
    router.push(`/Search/${event.target.value}`);
  };

  async function signOut() {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        throw new Error(error.message);
      }

      // setSession(null);
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  }


  return (
    <>
      <Navbar id="top" expand="lg">
        <Navbar.Brand className="navbar-brand align-items-center" href="/">
          <div className="topLeft">
            <img src="/Images/logofinal-navbar.png" height="100" alt="Evince" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="hamburger" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto smallNav">
            <Nav.Link className="link" href="/">
              HOME
            </Nav.Link>
            <Nav.Link className="link" href="/about">
              ABOUT
            </Nav.Link>
            <Nav.Link className="link" href="/bookstore">
              BOOKSTORE
            </Nav.Link>
          </Nav>

          <NavDropdown id="basic-nav-dropdown" title="CONTACT">
            <NavDropdown.Item id="dropdownContact">
              345lemaire@gmail.com
            </NavDropdown.Item>
          </NavDropdown>
       

          {/* <div className="topRight"></div> */}
          <div>
            <div id="searchBar">
              <Row>
                <Col sm={12}>
                  <Form className="d-flex">
                    <Form.Control
                      id="searchInput"
                      type="search"
                      placeholder="Search For A Blog"
                      className="d-sm-flex"
                      aria-label="Search"
                      onChange={handleChange}
                    />
                    <Button id="searchButton" variant="outline-success">
                      <img
                        src="/Images/searchicon.png"
                        height="20px"
                        alt="DanTheMan"
                      />
                    </Button>
                  </Form>
                </Col>
              </Row>
            </div>
          </div>

          </Navbar.Collapse>
      </Navbar>

	  {user && ( <Navbar className="DansNavBar">
            <Nav.Link id="danLink" href="/write">
              NEW BLOG
            </Nav.Link>
            <Nav.Link id="danLink" href="/" onClick={signOut}>
              LOG OUT
            </Nav.Link>
        </Navbar>)}
    </>
  );
}


