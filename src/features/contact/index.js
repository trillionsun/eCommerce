import React from 'react'
import pic from '../../pic/photo.JPG'
import angela from '../../pic/Angela.jpeg'
import cat from '../../pic/cat.png'


function Contact(){
    return <section class="section-4">
                <div className="container text-center">
                    <h1 className="text-dark">About US</h1>
                </div>
                <div className="team row">
                    <div className="col-md-4 col-12 text-center">
                        <div className="card mr-2 d-inline-block shadow-lg">
                            <div className="card-img-top">
                                <img src={pic} alt="Member" className="img-fluid"/>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">Trillion</h3>
                                <p className="card-text">This is another Year to be productive and proactive, to share
                                    my life
                                    and be a blessing to other people. It's another year to dream, to live, to enjoy, to
                                    share, to celebrate, and to execute whatever left unexecuted in my Life. </p>
                                <a href="#" className="text-secondary text-decoration-none">Go somewhere</a>
                                <p className="text-black-50">Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 text-center">
                        <div className="card mr-2 d-inline-block shadow-lg">
                            <div className="card-img-top">
                                <img src={cat} alt="Member" className="img-fluid"/>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">Our bosses</h3>
                                <p className="card-text">This is another Year to be productive and proactive, to share
                                    my life
                                    and be a blessing to other people. It's another year to dream, to live, to enjoy, to
                                    share, to celebrate, and to execute whatever left unexecuted in my Life. </p>
                                <a href="#" className="text-secondary text-decoration-none">Go somewhere</a>
                                <p className="text-black-50">CEO</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-12 text-center">
                        <div className="card mr-2 d-inline-block shadow-lg">
                            <div className="card-img-top">
                                <img src={angela} alt="Member" className="img-fluid"/>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">Angela</h3>
                                <p className="card-text">This is another Year to be productive and proactive, to share
                                    my life
                                    and be a blessing to other people. It's another year to dream, to live, to enjoy, to
                                    share, to celebrate, and to execute whatever left unexecuted in my Life. </p>
                                <a href="#" className="text-secondary text-decoration-none">Go somewhere</a>
                                <p className="text-black-50">Business analyst</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

}

export default Contact
