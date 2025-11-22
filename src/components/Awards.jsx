import React from 'react';

function Awards() {
    return (
        <section id="awards">
            <h2>Awards</h2>
            <p>
                At the Warner Middle School Qualifier (2025) we won two major awards:
                <strong>FLL Robot Performance</strong> and <strong>FLL Robot Design</strong>.
            </p>

            <section id="robot-performance" className="award-section">
                <h3>FLL Robot Performance</h3>
                <p>Photos from our performance and the ceremony.</p>
                <div className="awards-grid">
                    <div className="award-item">
                        <img src="images/awards/IMG_2787.jpg" alt="Receiving Robot Performance award" loading="lazy" />
                        <div className="award-caption">Receiving Robot Performance award</div>
                    </div>
                    <div className="award-item">
                        <img src="images/awards/IMG_2809.jpg" alt="Team celebrating on stage" loading="lazy" />
                        <div className="award-caption">Team celebrating on stage</div>
                    </div>
                    <div className="award-item">
                        <img src="images/awards/IMG_2811.jpg" alt="Close-up of plaque" loading="lazy" />
                        <div className="award-caption">Close-up of plaque</div>
                    </div>
                    <div className="award-item">
                        <img src="images/awards/IMG_2814.jpg" alt="Team photo with judges" loading="lazy" />
                        <div className="award-caption">Team photo with judges</div>
                    </div>
                    <div className="award-item">
                        <img src="images/awards/25096469b34110dfd459c806e1bdc31f.jpg" alt="On-stage moment" loading="lazy" />
                        <div className="award-caption">On-stage moment</div>
                    </div>
                    <div className="award-item">
                        <img src="images/awards/770644848ae6e7defa6f280c3eac6f2d.jpg" alt="Judges and team" loading="lazy" />
                        <div className="award-caption">Judges and team</div>
                    </div>
                </div>
            </section>

            <section id="robot-design" className="award-section" style={{ marginTop: '1.5rem' }}>
                <h3>FLL Robot Design</h3>
                <p>Photos focused on our robot and design work.</p>
                <div className="awards-grid">
                    <div className="award-item">
                        <img src="images/robot/IMG_2657.jpg" alt="Robot design 1" loading="lazy" />
                        <div className="award-caption">Robot design: mechanism details</div>
                    </div>
                    <div className="award-item">
                        <img src="images/robot/IMG_2710.jpg" alt="Robot design 2" loading="lazy" />
                        <div className="award-caption">Robot design: attachment and sensors</div>
                    </div>
                    <div className="award-item">
                        <img src="images/robot/IMG_2711.jpg" alt="Robot design 3" loading="lazy" />
                        <div className="award-caption">Robot design: team setup</div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Awards;
