// import the CSS style file for the "About" component
// import "./about.css";

// import necessary components and elements from "react-bootstrap" for layout and styling
import { Row, Col, Card } from "react-bootstrap";

// Declare a functional component named "About"
export default function About() {
    // Render the following JSX to the screen when this component is invoked
    return (
        <>
            {/* // Use a fragment to group multiple elements */}

            {/* // Wrap everything in a section with a className "aboutBg" which probably controls its background styling */}
            <section className="aboutBg">

                {/* // The div with className 'aboutBgCover' may be a styled layer or cover for the aboutBg section */}
                <div className='aboutBgCover'>

                    {/* // The className "container" is typically used to center and horizontally pad your site's contents
                    // Inline style is used to set the minimum height of the container to '800px' */}
                    <div className="container" style={{ minHeight: '800px' }}>

                        {/* // Align the text at the center and center the div vertically and horizontally using bootstrap classes */}
                        <div className="text-center justify-content-center align-self-center">

                            {/* // Use Row and Col components from react-bootstrap to manage layout in a grid-like format */}
                            <Row>

                                {/* // Column for welcome title and subtitle */}
                                <Col id="welcomeTitle">

                                    {/* // Display the welcome message in the form of title (h1) and subtitle (h3) */}
                                    <h1>WELCOME!</h1>
                                    <h3>So good to see you in this website</h3>
                                </Col>

                                {/* // Column for the author's card */}
                                <Col>

                                    {/* // Use Card component from react-bootstrap to display author's info */}
                                    <Card>

                                        {/* // Wrap image in a div */}
                                        <div>

                                            {/* // Display author's image with specific height and CSS class for styling, provide alt text for accessibility */}
                                            <img height="250" className="rounded-circle" src={'/Images/theman-square.png'} alt="Dan Lemaire" />
                                        </div>

                                        {/* // Provide some vertical spacing */}
                                        <br /><br />

                                        {/* // Display the author's name and his role */}
                                        <h3>DAN LEMAIRE</h3>
                                        <h5>Author</h5>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>

                {/* // Another div, probably for additional section within the aboutBg */}
                <div>

                    {/* // Another Row for layout, probably for about book image and description */}
                    <Row>

                        {/* // Column for displaying the book cover image */}
                        <Col id="aboutBookImage" xs={12} md={6} lg={6}>

                                {/* // Display the book cover image with 100% width and provide alt text for accessibility */}
                                <img width='100%' src={'/Images/about-cover.png'} alt="Dan Lemaire" />
                        </Col>

                        {/* // Column for displaying the author's message */}
                        <Col xs={12} md={6} lg={6}>

                            {/* // Paragraph with className "aboutContent" probably for styling the author's message */}
                            <p className="aboutContent">

                                {/* // The author's message */}
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
    );
}
