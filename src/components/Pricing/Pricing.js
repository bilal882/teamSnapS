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
                        <div className="d-flex justify-content-center align-items-center">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-items1" role="presentation">
                                    <button class="tab-btn active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Monthly</button>
                                </li>
                                <li class="nav-items2" role="presentation">
                                    <button class="tab-btn" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Annual</button>
                                </li>
                            </ul>
                        </div>
                        <p className="text-center fs-5 mt-2">Hasnat Team is on the <b>Free 21 Day Trial, Monthly Billing.</b></p>
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4 mt-4">
                                <p className="text-center">Best Value</p>
                                <div className="card mt-3">
                                    <div className="card-body">
                                        <h3 className='text-center'>Ultra</h3>
                                        <hr />
                                        <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                                <h3>$17.99/month (USD)</h3>
                                                <p>per team, billed monthly</p>
                                                <a className='nav-link text-primary' href="javascript:void(0)">Switch to annual, save 40%</a>
                                            </div>
                                            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                                <h3>$10.84/month (USD)</h3>
                                                <p>$129.99 per team, billed annually</p>
                                                <a href="javascript:void(0)" className='nav-link text-primary'>Switch to monthly</a>
                                            </div>
                                        </div>
                                        <button className="btn-cutsom mt-2">Chose Plan</button>
                                        <hr />
                                        <div className="text-start">
                                            {/* First */}
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i>Unlimited Roster Members <i class="fa-solid fa-caret-down ms-1"></i>
                                            </span>
                                            <div class="collapse" id="collapseExample">
                                                Roster members include players, non-players, team owner and managers. Additional contacts of a roster member (such as parents) do not count towards the roster limit.
                                            </div>


                                            {/* Second */}
                                            <span class="nav-link fw-bold mt-3">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i> Photos and Files — Unlimited Storage</span>


                                            {/*Third */}
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#SECOND" aria-expanded="false" aria-controls="collapseExample">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i> Health Check<i class="fa-solid fa-caret-down ms-1"></i></span>
                                            <div class="collapse" id="SECOND">
                                                Administer self-assessed health screenings prior to each event.<i class="fa-solid fa-caret-down ms-1"></i>
                                            </div>

                                            {/*Fourth */}
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#Third" aria-expanded="false" aria-controls="collapseExample">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i>Ad-free for Owner/Managers<i class="fa-solid fa-caret-down ms-1"></i></span>
                                            <div class="collapse" id="Third">
                                                Team owners and managers get an ad-free experience with all paid plans. Parents and players can purchase a monthly subscription of TeamSnap Plus in the mobile app to remove ads in the mobile experience.
                                            </div>


                                            {/*Fifth */}
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#Fourth" aria-expanded="false" aria-controls="collapseExample">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i> Availability<i class="fa-solid fa-caret-down ms-1"></i></span>
                                            <div class="collapse" id="Fourth">
                                                Team owners and managers get an ad-free experience with all paid plans. Parents and players can purchase a monthly subscription of TeamSnap Plus in the mobile app to remove ads in the mobile experience.
                                            </div>

                                            {/*Sixth */}
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#Fourth" aria-expanded="false" aria-controls="collapseExample">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i>TeamSnap Live!
                                                <i class="fa-solid fa-caret-down ms-1"></i></span>
                                            <div class="collapse" id="Fourth">
                                                Share scores, video, photos and chat during the game with TeamSnap Live!
                                            </div>

                                            {/*Seventh */}
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#Fourth" aria-expanded="false" aria-controls="collapseExample">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i> Alerts and Reminders
                                                <i class="fa-solid fa-caret-down ms-1"></i></span>
                                            <div class="collapse" id="Fourth">
                                                Get notified of last minute changes right on your device and send automatic reminders for games, events and practices.
                                            </div>

                                            {/* Eight */}
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#Fourth" aria-expanded="false" aria-controls="collapseExample">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i> Assignments
                                                <i class="fa-solid fa-caret-down ms-1"></i></span>
                                            <div class="collapse" id="Fourth">
                                                Allow team members to easily sign up for tasks and refreshments.
                                                <i>Also great for carpools!</i>
                                            </div>

                                            {/* Ninth */}
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#Fourth" aria-expanded="false" aria-controls="collapseExample">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i>  Lineups
                                                <i class="fa-solid fa-caret-down ms-1"></i></span>
                                            <div class="collapse" id="Fourth">
                                                Assign who’s playing, set positions and create orders for nearly every sport.
                                            </div>

                                            {/* Tenth */}
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#Fourth" aria-expanded="false" aria-controls="collapseExample">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i> Statistics
                                                <i class="fa-solid fa-caret-down ms-1"></i></span>
                                            <div class="collapse" id="Fourth">
                                                Easily track points, penalties, or anything else. Customize virtually every aspect of your statistics.
                                            </div>

                                            {/* Eleventh */}
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#Fourth" aria-expanded="false" aria-controls="collapseExample">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i>  Customization
                                                <i class="fa-solid fa-caret-down ms-1"></i></span>
                                            <div class="collapse" id="Fourth">
                                                Customize your experience by adding your team logo and colors, as well as custom fields for each player.
                                            </div>

                                            {/* 12 */}
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#Fourth" aria-expanded="false" aria-controls="collapseExample">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i>   Premium Support
                                                <i class="fa-solid fa-caret-down ms-1"></i></span>
                                            <div class="collapse" id="Fourth">
                                                Gain access to the best customer support team you'll ever meet!
                                            </div>

                                            {/* 13 */}
                                            <span class="nav-link fw-bold mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#Fourth" aria-expanded="false" aria-controls="collapseExample">
                                                <i class="fa-solid fa-check me-2" style={{ color: "#30c67c" }}></i>    Multiple Sponsorships
                                                <i class="fa-solid fa-caret-down ms-1"></i></span>
                                            <div class="collapse" id="Fourth">
                                                Add multiple sponsor logos and links.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="d-flex justify-content-center align-items-center">
                                    <p className="text-center most-popular">Most Popular</p>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className='text-center'>Ultra</h3>
                                        <hr />
                                        <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                                <h3>$17.99/month (USD)</h3>
                                                <p>per team, billed monthly</p>
                                                <a className='nav-link text-primary' href="javascript:void(0)">Switch to annual, save 40%</a>
                                            </div>
                                            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                                <h3>$10.84/month (USD)</h3>
                                                <p>$129.99 per team, billed annually</p>
                                                <a href="javascript:void(0)" className='nav-link text-primary'>Switch to monthly</a>
                                            </div>
                                        </div>
                                        <div className="button-div">
                                            <button className="btn-cutsom-blue mt-2">Chose Plan</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
