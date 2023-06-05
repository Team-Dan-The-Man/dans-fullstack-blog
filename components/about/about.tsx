// import "./about.css";
import { Row, Col, Card } from "react-bootstrap";

export default function About() {
    return (
        <>
            <section className="aboutBg">
                <div className='aboutBgCover'>
                    <div className="container" style={{ minHeight: '800px' }}>
                        <div className="text-center justify-content-center align-self-center">
                            <Row>
                                <Col id="welcomeTitle">
                                    <h1>WELCOME!</h1>
                                    <h3>So good to see you in this website</h3>
                                </Col>
                                <Col>
                                    <Card className="danCard">
                                        <div>
                                            <img height="250" className="rounded-circle" src={'/Images/theman-square.png'} alt="Dan Lemaire" />
                                        </div>
                                        <br /><br />
                                        <h3>DAN LEMAIRE</h3>
                                        <h5>Author</h5>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>

                <div>
                    <Row>
                        {/* changed sx to sm */}
                        <Col id="aboutBookImage" sx={12} md={6} lg={6}>
                                <img width='100%' src={'/Images/about-cover.png'} alt="Dan Lemaire" />
                        </Col>
                        {/* changed sx to sm */}
                        <Col sx={12} md={6} lg={6}>
                            <p className="aboutContent">
                                My hope in presenting all of these books and blogs is to
                                offer input to you on some level that will ultimately help your life make more sense, not only for you,
                                but also in God's observation.
                                <br /><br />
                                I hope to inspire you to higher faith, higher expectations, and higher vision. We all are maturing "to the
                                measure of the stature which belongs to the fullness of Christ," and that is a project of grand
                                proportions.
                                <br /><br />
                                Furthermore, we have to believe that the world is coming increasingly under the influence of the
                                church, because that is the plan, prophecy, and promise of God. We all get to have a part in adding to
                                that growing influence. I thank you for joining me, and I wish you well in all that you do.
                                <br /><br />
                                Expect great things from God, and attempt great things for God. (William Carey, missionary to India)
                            </p>
                        </Col>
                    </Row>
                </div>
            </section>            
        </>
    )
}