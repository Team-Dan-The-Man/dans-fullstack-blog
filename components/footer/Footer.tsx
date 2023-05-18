import { Row, Col } from "react-bootstrap";
import Link from 'next/link';

export default function Footer() {
 return (
    <>
        <section id="footer">
            <footer className="text-center mt-5">
                <Row id="footer">
                    <Col>
                        <div className="logoFooter">
                            <a className="navbar-brand align-items-center" href="/">
                                <img src={'/Images/logofinal-navbar.png'} height="120" alt="Evince" />
                            </a>
                        </div>

                        <div className="footerCenter">
                            {/* <ul className="footerList"> */}
                            <span className="footerListItem">
                                <Link href="/" className="footerLink"> HOME </Link>
                                </span>

                            <span className="footerListItem">
                            <Link href="/about" className="footerLink">
                                       | ABOUT |
                                    </Link>
                            </span>
                            <span className="footerListItem">
                                <Link href="/" className="footerLink"> BOOKSTORE </Link>
                                </span>
                            <li className="footerListItem">
                            </li>
                            {/* </ul> */}
                        </div>
                    </Col>
                    <p className="p" >Contact me: 345lemaire@gmail.com 
                    <br/>
                    © 2023 Evince. All rights reserved | Created By: JYT WEB DESIGNS</p>
                </Row>
            </footer>
        </section>
    </>
)
}
