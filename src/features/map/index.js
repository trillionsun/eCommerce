import React from 'react'

function Map(){
    return <div className="row-fluid">
        <h3>Our location: </h3>
        <div className="span12">
            <div className="thumbnail content-white">
                <div className="caption">
                    <iframe width="100%" scrolling="no" height="200px" frameBorder="0"
                            src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6271.048375213195!2d144.8934504275745!3d-37.795390746371744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d936588690b%3A0x354ea26af4dddae!2s7%20Federal%20St%2C%20Footscray%20VIC%203011!5e0!3m2!1sen!2sau!4v1574903220362!5m2!1sen!2sau"
                             marginWidth="0" marginHeight="0" title="location"></iframe>
                </div>
            </div>
        </div>
    </div>

}

export default Map

