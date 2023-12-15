import React from 'react'

import "../scss/new.scss";

const New = () => (
    < section className="categories" id="myNew" >
        <h2>Info general</h2>
        <div className="estimatedTendance">
            <div className="estimated" >
                <h3>Estimated Balance</h3>
                <div>
                    <p>3456 $</p>
                </div>
            </div>
            <div className="tendance">
                <div>
                    <h4>Day</h4>
                    <p>20 %</p>
                </div>
                <div>
                    <h4>Weekly</h4>
                    <p>10 %</p>
                </div>
                <div>
                    <h4>Month</h4>
                    <p>30 %</p>
                </div>
                <div>
                    <h4>Month</h4>
                    <p>50 %</p>
                </div>

            </div>
        </div>
    </section >
)

export default New
