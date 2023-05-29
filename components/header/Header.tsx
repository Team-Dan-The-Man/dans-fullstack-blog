// Import necessary components from 'react-bootstrap'
import { Row, Col, Carousel } from "react-bootstrap";

// Define Header component
export default function Header() {
  // Render the Header component
	return (
		<>
			{/* Wrap everything in a section */}
			<section>
				{/* Background cover div */}
				<div className="bgCover">
					{/* Container div with minimum height set */}
					<div className="container" style={{ minHeight: "800px" }}>
						{/* Div with text centering and vertical alignment */}
						<div className="text-center justify-content-center align-self-center">
							{/* Bootstrap Row */}
							<Row>
								{/* Bootstrap Column */}
								<Col>
									<div>
										{/* Display the logo */}
										<img height="250" src="/Images/logofinal.png" alt="" />
									</div>
									<br />
									<br />
									{/* Display the author's name */}
									<p>BY DAN LEMAIRE</p>
								</Col>
								{/* Bootstrap Column for the Carousel */}
								<Col id="carouselPosition">
									{/* Carousel for showing images */}
									<Carousel id="carousel" slide={false}>
										{/* Each Carousel.Item represents an image in the carousel */}
										<Carousel.Item>
											{/* Display the image */}
											<img
												height="450"
												src="/Images/arrival-bg.png"
												alt="The Second Arrival"
											/>
											{/* Caption for the image */}
											<div id="carouselCaption">
												<Carousel.Caption>
													<p>THE SECOND ARRIVAL</p>
												</Carousel.Caption>
											</div>
										</Carousel.Item>

										{/* Repeat the above structure for each image in the carousel */}
										<Carousel.Item>
											<img
												height="450"
												src="/Images/around-bg.png"
												alt="Around the World in 480 Days"
											/>
											<div id="carouselCaption">
												<Carousel.Caption>
													<p>AROUND THE WORLD IN 480 DAYS</p>
												</Carousel.Caption>
											</div>
										</Carousel.Item>

										<Carousel.Item>
											<img
												height="450"
												src="/Images/christ-bg.png"
												alt="Christianese. The Language of Those Who Believe in Jesus"
											/>
											<div id="carouselCaption">
												<Carousel.Caption>
													<p>CHRISTIANESE</p>
												</Carousel.Caption>
											</div>
										</Carousel.Item>

										<Carousel.Item>
											<img
												height="450"
												src="/Images/deep-bg.png"
												alt="Deep Delta"
											/>
											<div id="carouselCaption">
												<Carousel.Caption>
													<p>Deep Delta</p>
												</Carousel.Caption>
											</div>
										</Carousel.Item>

										<Carousel.Item>
											<img
												height="450"
												src="/Images/draw-bg.png"
												alt="Drawing Mandalas"
											/>
											<div id="carouselCaption">
												<Carousel.Caption>
													<p>Drawing Mandalas</p>
												</Carousel.Caption>
											</div>
										</Carousel.Item>

										<Carousel.Item>
											<img
												height="450"
												src="/Images/earth-bg.png"
												alt="Mission Earth"
											/>
											<div id="carouselCaption">
												<Carousel.Caption>
													<p>Mission Earth</p>
												</Carousel.Caption>
											</div>
										</Carousel.Item>
									</Carousel>
								</Col>
							</Row>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
