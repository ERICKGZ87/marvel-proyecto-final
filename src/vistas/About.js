
const About = () => {

    return (
        <>
            <div className="container">

                <div className="row">
                    <div className="col-md-12" id="about">
                        <h1>About</h1></div>
                    <div className="col-md-12" Id="boxtext"><b>About This Gig ✪ Best Marvel Cinematic Intro Animation Service On Fiverr ✪
                        Present your brand in an engaging and eye-catching way that instantly captures
                        the viewer's attention! Buy the Original and Unique Creation from me.
                        Excellent Quality. I will create exactly what you have seen in the preview.
                        This animation is great for Your website YouTube channel Your Company And you
                        can use this for much more things... Here's what you'll get : ★ 1 Amazing
                        Video Animation ★ Final output in HD TOP QUALITY ★ Soundfx Included ★ Custom
                        Colors ★ Superb Pixel and Colors</b>
                    </div>

                    <div className="col-md-12">
                        ; <div
                            id="carouselExampleIndicators"
                            className="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-indicators">
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={0}
                                    className="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                />
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={1}
                                    aria-label="Slide 2"
                                />
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={2}
                                    aria-label="Slide 3"
                                />
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/teaser1.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/avenfor2021001_cov.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/clean_2.jpeg" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>





                    </div>

                </div>

            </div>

        </>
    )
}
export default About;
