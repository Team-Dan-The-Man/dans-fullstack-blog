import { Row, Col, Carousel } from "react-bootstrap";

export default function Header() {
	return (
		<>
			<section>
				<div className="bgCover">
					<div className="container" style={{ minHeight: "800px" }}>
						<div className="text-center justify-content-center align-self-center">
							<Row>
								<Col>
									<div className="homeCoverEvinceLogo">
										<img width="400" src="/Images/logofinal.png" alt="" />
									</div>
									<br />
									<br />
									<p>BY DAN LEMAIRE</p>
								</Col>
								<Col id="carouselPosition">
									<Carousel id="carousel" slide={false}>
										<Carousel.Item>
											<img
												height="450"
												src="/Images/arrival-bg.png"
												alt="The Second Arrival"
											/>
											<div id="carouselCaption">
												<Carousel.Caption>
													<p>THE SECOND ARRIVAL</p>
												</Carousel.Caption>
											</div>
										</Carousel.Item>

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
												alt="Christianese. The Language of Those Who Believe in Jesus"
											/>
											<div id="carouselCaption">
												<Carousel.Caption>
													<p>DEEP DELTA</p>
												</Carousel.Caption>
											</div>
										</Carousel.Item>

										<Carousel.Item>
											<img
												height="450"
												src="/Images/draw-bg.png"
												alt="Christianese. The Language of Those Who Believe in Jesus"
											/>
											<div id="carouselCaption">
												<Carousel.Caption>
													<p>DRAWING MANDALAS</p>
												</Carousel.Caption>
											</div>
										</Carousel.Item>

										<Carousel.Item>
											<img
												height="450"
												src="/Images/earth-bg.png"
												alt="Christianese. The Language of Those Who Believe in Jesus"
											/>
											<div id="carouselCaption">
												<Carousel.Caption>
													<p>MISSION EARTH</p>
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
