import React from 'react'
import "./Pricing.css"

export default function Pricing() {
    return (
        <>
            <div className="top-part text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <h1>Go Premium</h1>
                            <h5>Our Premium plan is the best option for most teams — it combines all of TeamSnap's most useful features in one package for a great price.</h5>
                        </div>
                        <div className="col-4">
                            <img src="https://aa5498032991a101442c-34c0f4eec246050dfc1ee92670a7b97d.ssl.cf1.rackcdn.com/new/roster-39237d0433df600285115fb1788a64be.png" className='d-none d-md-flex img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-items1" role="presentation">
                                <button class="tab-btn active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Monthly</button>
                            </li>
                            <li class="nav-items2" role="presentation">
                                <button class="tab-btn" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Annual</button>
                            </li>
                        </ul>
                        <div class="tab-content mt-5" id="myTabContent">
                            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">...</div>
                            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
