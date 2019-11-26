import React from 'react'

function Map(){
    return <div className="row-fluid">
        <h3>Our location: </h3>
        <div className="span12">
            <div className="thumbnail content-white">
                <div className="caption">
                    <iframe width="100%" scrolling="no" height="300px" frameBorder="0"
                            src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Staples+Center+Los+Angeles&amp;aq=&amp;vpsrc=6&amp;g=WR143SZ&amp;ie=UTF8&amp;hq=&amp;hnear=Staples+Center+Los+Angeles&amp;t=m&amp;z=16&amp;output=embed&amp;iwloc=near"
                            marginWidth="0" marginHeight="0"></iframe>
                </div>
            </div>
        </div>
    </div>

}

export default Map
