import { useRouter } from "next/router";
import { Button, Form, Row, Col, Navbar, NavDropdown, Nav } from "react-bootstrap";
import { useSession, signOut } from "next-auth/react";

export default function Topbar() {
  const router = useRouter();
  const { data: session } = useSession();

  const handleChange = (event: { target: { value: string; }; }) => {
    if (event.target.value === "") return;
    router.push(`/Search/${event.target.value}`);
  };

  const logout = () => {
    signOut();
  };

  return (
    <>
      <Navbar id="top" expand="lg">
        <Navbar.Brand className="navbar-brand align-items-center" href="/">
          <div className="topLeft">
            <img src="/Images/logofinal-navbar.png" height="120" alt="Evince" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="hamburger" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto smallNav">
            <Nav.Link className="link" href="/">
              HOME
            </Nav.Link>
            {!session && (
              <Nav.Link className="link" href="/Login">
                LOGIN
              </Nav.Link>
            )}
            {session && (
              <>
                <Nav.Link className="link" href="/" onClick={logout}>
                  LOG OUT
                </Nav.Link>
                <Nav.Link className="link" href="/write">
                  WRITE A BLOG
                </Nav.Link>
              </>
            )}
            <Nav.Link className="link" href="about">
              ABOUT
            </Nav.Link>
            <Nav.Link className="link" href="bookstore">
              BOOK STORE
            </Nav.Link>
          </Nav>
          <NavDropdown id="basic-nav-dropdown" title="CONTACT">
            <NavDropdown.Item id="dropdownContact">
              345lemaire@gmail.com
            </NavDropdown.Item>
          </NavDropdown>
          <div className="topRight">
            <div id="searchBar">
              <Row>
                <Col>
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
                      <img src="Images/searchicon.png" height="20px" alt="DanTheMan" />
                    </Button>
                  </Form>
                </Col>
              </Row>
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
