import { useEffect, useState } from "react";

import PixelBlast from "./component/PixelBlast";
import PixelSnow from "./component/PixelSnow";
import GradientWaves from "./component/GradientWaves";

function App() {
    /* =========================
       TYPING EFFECT
    ========================= */

    const text = "GlenTech Summit I";
    const [displayText, setDisplayText] = useState("");

    /* =========================
       PROJECTS
    ========================= */

    const projects = window.topProjects || [];

    /* =========================
       TYPING ANIMATION
    ========================= */

    useEffect(() => {
        let index = 0;

        const typing = setInterval(() => {
            setDisplayText(text.slice(0, index + 1));
            index++;

            if (index === text.length) {
                clearInterval(typing);
            }
        }, 100);

        return () => clearInterval(typing);
    }, []);

    const [countdown, setCountdown] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00"
    });

    useEffect(() => {
        const targetDate = new Date("2026-12-21T23:00:00");

        function updateCountdown() {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                setCountdown({
                    days: "00",
                    hours: "00",
                    minutes: "00",
                    seconds: "00"
                });

                return;
            }

            const days = Math.floor(
                difference / (1000 * 60 * 60 * 24)
            );

            const hours = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );

            const minutes = Math.floor(
                (difference % (1000 * 60 * 60)) /
                (1000 * 60)
            );

            const seconds = Math.floor(
                (difference % (1000 * 60)) /
                1000
            );

            setCountdown({
                days: String(days).padStart(2, "0"),
                hours: String(hours).padStart(2, "0"),
                minutes: String(minutes).padStart(2, "0"),
                seconds: String(seconds).padStart(2, "0")
            });
        }

        updateCountdown();

        const timer = setInterval(updateCountdown, 1000);

        return () => clearInterval(timer);
    }, []);


    return (
        <>
            {/* ==================================================
                HERO
                PIXEL BLAST
            ================================================== */}

            <section className="home-hero">
                <div className="pixel-blast-background">
                    <PixelBlast
                        variant="square"
                        pixelSize={6}
                        color="#1fff01"
                        patternScale={3}
                        patternDensity={0.8}
                    />
                </div>

                <div className="home-hero-content">
                    <h1>
                        {displayText}
                        <span className="typing-cursor">|</span>
                    </h1>

                    <div className="btn-box">
                        <a href="#intro">
                            Get Started
                        </a>
                    </div>
                </div>
            </section>

            {/* ==================================================
                PIXEL SNOW AREA
                EVERYTHING BETWEEN HERO AND FOOTER
            ================================================== */}

            <div className="pixel-snow-page">

                {/* ==============================================
                    ONE CONTINUOUS PIXEL SNOW BACKGROUND
                ============================================== */}

                <div className="pixel-snow-background">
                    <PixelSnow
                        color="#1fff01"
                        flakeSize={0.01}
                        minFlakeSize={0.24}
                        pixelResolution={300}
                        speed={0.55}
                        depthFade={4}
                        farPlane={20}
                        brightness={0.5}
                        gamma={0.4545}
                        density={0.3}
                        variant="snowflake"
                        direction={125}
                    />
                </div>

                {/* ==================================================
                    INTRO
                ================================================== */}

                <section
                    id="intro"
                    className="home-about"
                >
                    <div className="home-about-content">

                        {/* ==========================================
                            LEFT — INTRO TEXT
                        ========================================== */}

                        <div className="about-text">
                            <p>
                                Welcome to CGC. Here, we create, innovate, and change reality. We don't judge you by your mistakes, but by the number of tabs you have open at once.
                            </p>

                            <div className="btn-box about-buttons">

                                {/* INSTAGRAM */}

                                <a
                                    href="https://instagram.com/glentech.summit"
                                    className="about-icon-btn"
                                    aria-label="Instagram"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bx bxl-instagram"></i>
                                </a>

                                {/* EMAIL */}

                                <a
                                    href="mailto:glentech@gmail.com"
                                    className="about-icon-btn"
                                    aria-label="Email"
                                >
                                    <i className="bx bx-envelope"></i>
                                </a>

                            </div>
                        </div>
                    </div>

                   

                </section>

                {/* ==================================================
                    PROJECTS
                ================================================== */}

                <section
                    className="projects-hero"
                    id="project"
                >
                    <div className="projects-content">

                        <h2 className="projects-heading">
                            Segments
                        </h2>

                        <div className="projects-carousel">
                            {projects.length === 0 ? (
                                <div className="no-projects">
                                    <p>
                                        No Segments Available
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <div className="projectsSwiper swiper">
                                        <div className="swiper-wrapper">
                                            {projects.map((project) => (
                                                <div
                                                    className="swiper-slide project-slide"
                                                    key={project.id}
                                                    data-id={project.id}
                                                    data-title={project.title}
                                                    data-text={project.details}
                                                >
                                                    <div className="project-slide-left">
                                                        <div className="project-text">
                                                            <h3 className="projectTitle">
                                                                {project.title}
                                                            </h3>

                                                            <p className="projectDescription">
                                                                {project.details}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="project-rules">
                                                        <h4>Rules</h4>

                                                        <div className="project-rules-content">
                                                            {project.summary ? (
                                                                <p className="project-rules-text">
                                                                    {project.summary}
                                                                </p>
                                                            ) : (
                                                                <p>No rules available for this project.</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="swiper-button-prev"></div>
                                    <div className="swiper-button-next"></div>
                                </>
                            )}
                            </div>

                    </div>
                </section>

                

                {/* ==================================================
                    COUNTDOWN
                ================================================== */}

                {/* ==================================================
                    COUNTDOWN
                ================================================== */}

                <section
                    className="countdown-section"
                    id="countdown"
                >
                    <div className="countdown-container">
                        <h2 className="countdown-heading">
                            Countdown
                        </h2>

                        <div className="countdown-timer">
                            <div className="countdown-box">
                                <span className="countdown-value">
                                    {countdown.days}
                                </span>
                                <span className="countdown-label">
                                    Days
                                </span>
                            </div>

                            <div className="countdown-box">
                                <span className="countdown-value">
                                    {countdown.hours}
                                </span>
                                <span className="countdown-label">
                                    Hours
                                </span>
                            </div>

                            <div className="countdown-box">
                                <span className="countdown-value">
                                    {countdown.minutes}
                                </span>
                                <span className="countdown-label">
                                    Minutes
                                </span>
                            </div>

                            <div className="countdown-box">
                                <span className="countdown-value">
                                    {countdown.seconds}
                                </span>
                                <span className="countdown-label">
                                    Seconds
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                

            </div>

            {/* ==================================================
                FOOTER
                GRADIENT WAVES
            ================================================== */}

            <footer className="home-footer">

                <div className="footer-waves">
                    <GradientWaves
                        horizonColor="#1fff01"
                        waveColor="#ffffff"
                        crestColor="#1fff01"
                        speed={0.25}
                        amplitude={4.1}
                        waveScale={0.5}
                        waveRatio={0.55}
                        swell={30}
                        turbulence={35}
                        tilt={1}
                        zoom={1}
                        height={5.5}
                        fogDepth={15}
                        detail="medium"
                        brightness={1}
                        opacity={1}
                        mouseInteraction
                        parallaxStrength={0.5}
                        grain={false}
                        grainIntensity={0}
                    />
                </div>

                <div className="home-footer-content">

                    {/* FOOTER HEADING */}

                    <div className="footer-heading">
                        <h2>
                            Where mind masters the machine.
                        </h2>
                    </div>

                    {/* SOCIAL BUTTONS */}

                    <div className="footer-social-buttons">

                        <a
                            href="mailto:glentech@gmail.com"
                            className="footer-social-btn"
                            aria-label="Email"
                        >
                            <i className="bx bx-envelope"></i>
                            <span>Email</span>
                        </a>

                        <a
                            href="https://instagram.com/glentech.summit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social-btn"
                            aria-label="Instagram"
                        >
                            <i className="bx bxl-instagram"></i>
                            <span>glentech.summit</span>
                        </a>

                    </div>

                    {/* BOTTOM ROW */}

                    <div className="footer-bottom">

                        <p className="footer-copyright">
                            © {new Date().getFullYear()} GlenTech Summit I. All rights reserved.
                        </p>

                        <p className="footer-developed">
                            Developed by{" "}
                            <a
                                href="https://github.com/zynergy-plush"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                zynergy-plush
                            </a>
                        </p>

                    </div>

                </div>

            </footer>
        </>
    );
}

export default App;