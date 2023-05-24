import React from 'react';

function Coffee(props) {
    return (
        <div id="coffee">
            <div className="plate"></div>
            <div className="cup">
                <div className="top">
                <div className="vapour"></div>
                <div className="circle">
                    <div className="liquid"></div>
                </div>
                </div>
                {/* <div className="handle"></div> */}
            </div>
        </div>
    );
}

export default Coffee;