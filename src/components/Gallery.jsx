import React, { useState } from 'react';

function Gallery() {
    const [slideIndex, setSlideIndex] = useState(0);
    const images = [
        "images/superrobts_team1.jpg",
        "images/superrobts_team2.jpg",
        "images/superrobts_team3.jpg"
    ];

    const nextSlide = () => {
        setSlideIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setSlideIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToSlide = (index) => {
        setSlideIndex(index);
    };

    return (
        <section id="gallery">
            <h2>Gallery</h2>
            <p>Photos and videos from our events and competitions.</p>
            {/* Team Slideshow */}
            <div className="slideshow-container" style={{ maxWidth: '500px', margin: '2rem auto', borderRadius: '16px', overflow: 'hidden', position: 'relative', boxShadow: '0 4px 16px rgba(38,49,89,0.12)', background: '#222' }}>
                {images.map((img, index) => (
                    <img
                        key={index}
                        className="team-slide"
                        src={img}
                        alt={`SuperRobots Team ${index + 1}`}
                        style={{
                            width: '100%',
                            aspectRatio: '16/9',
                            objectFit: 'cover',
                            display: index === slideIndex ? 'block' : 'none',
                            transition: 'opacity 0.5s'
                        }}
                    />
                ))}
                <button className="slide-btn" onClick={prevSlide} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(38,49,89,0.8)', color: '#fff', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', fontSize: '1.5rem', zIndex: 2 }}>&#10094;</button>
                <button className="slide-btn" onClick={nextSlide} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(38,49,89,0.8)', color: '#fff', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', fontSize: '1.5rem', zIndex: 2 }}>&#10095;</button>
                <div style={{ position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className="dot"
                            onClick={() => goToSlide(index)}
                            style={{
                                height: '12px',
                                width: '12px',
                                background: '#fff',
                                opacity: index === slideIndex ? '1' : '0.7',
                                borderRadius: '50%',
                                display: 'inline-block',
                                cursor: 'pointer'
                            }}
                        ></span>
                    ))}
                </div>
            </div>
            {/* Team Video */}
            <section className="video-section" style={{ marginTop: '2rem' }}>
                <h2>Team Video</h2>
                <video width="100%" style={{ maxWidth: '500px', display: 'block', margin: '0 auto', borderRadius: '10px', background: '#000' }} controls>
                    <source src="videos/2023_superpowered.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section>
        </section>
    );
}

export default Gallery;
