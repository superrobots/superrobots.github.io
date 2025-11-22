import React from 'react';

function Home() {
    return (
        <section id="home">
            <h2>
                <img
                    src="images/favicon.png"
                    alt="SuperRobots Icon"
                    style={{ width: '2.2rem', height: '2.2rem', verticalAlign: 'middle', marginRight: '0.5rem', borderRadius: '6px' }}
                />
                Welcome!
            </h2>
            <p>
                We are the SuperRobots team, passionate about building intelligent and helpful robots.
                Our mission is to create technology that improves lives and inspires the next generation of innovators.
            </p>
            <p>
                SuperRobots is a
                <a href="https://www.firstlegoleague.org/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '4px' }}>First Lego League (FLL)</a>
                Challenge competitive team, Team ID #70620.
            </p>
            <p>
                Our team is made up of 5th graders from Soleado Elementary School, except Jeremy, who is from Silverspur Elementary School. Rigel is our youngest member and is in 3rd grade. We share a passion for robotics and learning, and each of us brings unique talents and interests to the team!
            </p>
            <section className="team-section">
                <h2>Meet the Team</h2>
                <ul className="team-list">
                    <li className="team-member">
                        <img src="images/stella.jpg" alt="Stella" width="140" height="140" style={{ borderRadius: '10px', marginBottom: '0.5rem' }} />
                        <strong>Stella</strong><br />
                        Future Project Manager<br />
                        5th Grader, Soleado Elementary<br />
                        <em>Loves dancing</em>
                    </li>
                    <li className="team-member">
                        <img src="images/sarah.jpg" alt="Sarah" width="140" height="140" style={{ borderRadius: '10px', marginBottom: '0.5rem' }} />
                        <strong>Sarah</strong><br />
                        Future AI Specialist<br />
                        5th Grader, Soleado Elementary<br />
                        <em>Plays tennis</em>
                    </li>
                    <li className="team-member">
                        <img src="images/chuyan.jpg" alt="Chuyan" width="140" height="140" style={{ borderRadius: '10px', marginBottom: '0.5rem' }} />
                        <strong>Chuyan</strong><br />
                        Future Robotics Designer<br />
                        5th Grader, Soleado Elementary<br />
                        <em>Plays violin</em>
                    </li>
                    <li className="team-member">
                        <img src="images/jeremy.jpg" alt="Jeremy" width="140" height="140" style={{ borderRadius: '10px', marginBottom: '0.5rem' }} />
                        <strong>Jeremy</strong><br />
                        Future Software Developer<br />
                        5th Grader, Silverspur Elementary<br />
                        <em>Plays chess and soccer</em>
                    </li>
                    <li className="team-member">
                        <img src="images/rigel.jpg" alt="Rigel" width="140" height="140" style={{ borderRadius: '10px', marginBottom: '0.5rem' }} />
                        <strong>Rigel</strong><br />
                        Future Tech Support Engineer<br />
                        3rd Grader, Soleado Elementary<br />
                        <em>Plays soccer</em>
                    </li>
                </ul>
            </section>
        </section>
    );
}

export default Home;
