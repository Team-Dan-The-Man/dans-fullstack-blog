import Link from 'next/link';
import { useContext, useState, useEffect } from "react";
// import UserContext from "../../context/UserContext";
import Login from "../../pages/login/login/Login";
import { Button, Form, Row, Col, Navbar, NavDropdown, Nav } from "react-bootstrap";



// Documentations for the functions used for this page
// useContext Hook: https://reactjs.org/docs/hooks-reference.html#usecontext
// useParams Hook: https://reactrouter.com/web/api/Hooks/useparams
// useNavigate Hook: https://reactrouter.com/web/api/Hooks/usedispatch
// useState in React: https://react.dev/reference/react/useState
// React: https://reactjs.org/docs/getting-started.html
// React-Bootstrap: https://react-bootstrap.github.io/getting-started/introduction/
// Navbar component: https://react-bootstrap.github.io/components/navbar/
// Responsive breakpoints in React-Bootstrap: https://react-bootstrap.github.io/layout/grid/#grid-props

export default function Topbar() {
//   let { getUserById } = useContext(UserContext);
//   let params = useParams();
//   let navigate = useNavigate()

//   const [user, setUser] = useState({
//     userId: 0,
//     username: "",
//     email: "",
//     firstName: "",
//     lastName: "",
//     createdAt: "",
//     updatedAt: "",
//   });

//   const [expanded, setExpanded] = useState(false);

//   const handleToggle = () => {
//     setExpanded(!expanded);
//   };


//   useEffect(() => {
//     async function fetch() {
//       await getUserById(1).then((user) =>
//         setUser(user)
//       );
//       console.log(user);
//     }
//     fetch();
//   }, [Login]);

//   function logout() {
//     localStorage.clear();
//     console.log("clicked")
//   }

//   const handleChange = (event) => {
//     if (event.target.value === "") return;
//     navigate('Search/' + event.target.value)
//   }

//   let Auth = localStorage.getItem("username");

//   function TopBar() {
//     // if (Auth === user.username) {
//       return (
      
          {/* <Navbar id="top" expand="lg">
            <Navbar.Brand href="#home">
              <div className="topLeft">
                <Link to="/" class="navbar-brand align-items-center">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/Images/logofinal-navbar.png"
                    }
                    height="120"
                    alt="Evince"
                  />
                </Link>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto smallNav">
                <Nav.Link className="link" to="/" href="/">
                  HOME
                </Nav.Link>
                <Nav.Link className="link" variant="link" to="/" href="/" onClick={logout}>
                  LOG OUT
                </Nav.Link>
                <Nav.Link className="link" href="about">ABOUT</Nav.Link>
                <Nav.Link className="link" to="/bookstore" href="bookstore">
                  BOOK STORE
                </Nav.Link>
                <Nav.Link className="link" to="/write" href="write">
                  WRITE A BLOG
                </Nav.Link>
              </Nav>
              <div className="topRight">
                <div id="searchBar">
                  <Row>
                    <Col >
                      <Form className="d-flex">
                        <Form.Control
                          id="searchInput"
                          type="search"
                          placeholder="Search For A Blog"
                          className="d-sm-flex"
                          aria-label="Search"
                          onChange={handleChange} />
                        <Button id='searchButton' variant="outline-success">
                          <img src={process.env.PUBLIC_URL + '/Images/searchicon.png'}
                            height="20px" alt="DanTheMan" /></Button>
                      </Form>
                    </Col>
                  </Row>
                </div>
              </div>

            </Navbar.Collapse>
          </Navbar>
        </>
      )
    }
    else { */}
      return (
        <>
       <Navbar id="top" expand="lg">
  <Navbar.Brand href="#home">
    <div className="topLeft">
      <Link href="/" className="navbar-brand align-items-center">
        <img
          src= "/Images/logofinal-navbar.png"
          height="120"
          alt="Evince"
        />
      </Link>
    </div>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" id="hamburger" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto smallNav">
      <Nav.Link className="link"  href="/">
        HOME
      </Nav.Link>
      <Nav.Link className="link"  href="/Login">
        LOGIN
      </Nav.Link>
      <Nav.Link className="link" href="about">
        ABOUT
      </Nav.Link>
      <Nav.Link className="link"  href="bookstore">
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
                //   onChange={handleChange}
              />
              <Button id="searchButton" variant="outline-success">
                <img
                  src='Images/searchicon.png'
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


</>


      )
    }
  


{/* //   return (
//     <>
//       {displayUser()}
//     </>
//   ) */}

