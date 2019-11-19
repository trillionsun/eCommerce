import React from 'react'

function Canvas() {

    return <div class="container">
        <div class = "row">
            <div class = "col">
            </div>

                <div id="carouselExampleCaptions" className="carousel slide col-10 col-lg-6" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/banana.jpg" className="d-block w-100 h-10" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 class="text-success">We have fruit!</h5>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/broccoli.jpg" className="d-block w-100 h-10" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 class="text-success">We also have veges!</h5>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/almonds.jpg" className="d-block w-100 h-10" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 class="text-success">What? We also got nuts?</h5>
                                </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            <div className="col">
            </div>
        </div>
        </div>

}

export default Canvas;
