import React, { useState, useEffect } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.privacy-section');
            const scrollPosition = window.scrollY + 200;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 120;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="privacy-policy-page">
            <div className="container">
                <div className="privacy-content">
                    <aside className="privacy-sidebar">
                        <h3>Quick Navigation</h3>
                        <ul className="privacy-nav">
                            <li><a href="#intro" className={activeSection === 'intro' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('intro'); }}>Introduction</a></li>
                            <li><a href="#information" className={activeSection === 'information' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('information'); }}>Information We Collect</a></li>
                            <li><a href="#usage" className={activeSection === 'usage' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('usage'); }}>How We Use Information</a></li>
                            <li><a href="#sharing" className={activeSection === 'sharing' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('sharing'); }}>Sharing Information</a></li>
                            <li><a href="#cookies" className={activeSection === 'cookies' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('cookies'); }}>Cookies & Tracking</a></li>
                            <li><a href="#security" className={activeSection === 'security' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('security'); }}>Data Security</a></li>
                            <li><a href="#rights" className={activeSection === 'rights' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('rights'); }}>Your Rights</a></li>
                            <li><a href="#retention" className={activeSection === 'retention' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('retention'); }}>Data Retention</a></li>
                            <li><a href="#third-party" className={activeSection === 'third-party' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('third-party'); }}>Third-Party Links</a></li>
                            <li><a href="#children" className={activeSection === 'children' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('children'); }}>Children's Privacy</a></li>
                            <li><a href="#updates" className={activeSection === 'updates' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('updates'); }}>Policy Updates</a></li>
                            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact Us</a></li>
                        </ul>
                    </aside>

                    <div className="privacy-main-content">
            <h1>Privacy Policy</h1>
                        <p className="last-updated">Last Updated: November 18, 2025</p>

                        <section id="intro" className="privacy-intro">
                            <p>
                                At YGI Holiday Homes, we are committed to protecting your privacy and ensuring a safe online experience. This Privacy Policy explains how we collect, use, store, and safeguard your personal information when you visit our website or use our services, including booking apartments, submitting inquiries, or listing your property with us.
                            </p>
                            <p>
                                By accessing our website or using our services, you agree to the terms outlined in this Privacy Policy.
                            </p>
                        </section>

                        <section id="information" className="privacy-section">
                            <h2>1. Information We Collect</h2>
                        <p>We may collect the following types of information:</p>

                        <h3>a. Personal Information</h3>
                        <p>When you interact with our website, you may provide details such as:</p>
                        <ul>
                            <li>Full name</li>
                            <li>Email address</li>
                            <li>Phone or WhatsApp number</li>
                            <li>Property details (if you list your property)</li>
                            <li>Booking information</li>
                            <li>Identification details required by Dubai Tourism (DTCM) regulations</li>
                        </ul>

                        <h3>b. Booking & Transaction Information</h3>
                        <p>When booking an apartment or requesting availability:</p>
                        <ul>
                            <li>Check-in and check-out dates</li>
                            <li>Guest count</li>
                            <li>Payment details (processed securely by third-party providers)</li>
                            <li>Special requests</li>
                        </ul>

                        <h3>c. Technical & Usage Information</h3>
                        <p>Automatically collected data may include:</p>
                        <ul>
                            <li>IP address</li>
                            <li>Browser type and version</li>
                            <li>Device information</li>
                            <li>Pages visited</li>
                            <li>Time spent on pages</li>
                            <li>Cookies and tracking pixels</li>
                        </ul>
                    </section>

                        <section id="usage" className="privacy-section">
                            <h2>2. How We Use Your Information</h2>
                        <p>We use your information to provide a better experience and high-quality service. Usage includes:</p>
                        <ul>
                            <li>Processing apartment bookings</li>
                            <li>Responding to inquiries</li>
                            <li>Managing property listing requests</li>
                            <li>Improving website performance</li>
                            <li>Sending confirmations, alerts, and service updates</li>
                            <li>Complying with UAE and DTCM regulations</li>
                            <li>Marketing communication (only with your consent)</li>
                            <li>Enhancing security and fraud prevention</li>
                        </ul>
                        <p><strong>We do not sell your data to third parties.</strong></p>
                    </section>

                        <section id="sharing" className="privacy-section">
                            <h2>3. Sharing Your Information</h2>
                        <p>Your information may be shared only in these cases:</p>
                        <ul>
                            <li><strong>Regulatory Compliance:</strong> As required by DTCM or UAE Government for tourism and guest registration.</li>
                            <li><strong>Service Providers:</strong> Payment processors, housekeeping teams, maintenance teams, and platform analytics.</li>
                            <li><strong>Legal Requests:</strong> If required by law, investigation, or court order.</li>
                        </ul>
                        <p>All third-party partners follow strict confidentiality standards.</p>
                    </section>

                        <section id="cookies" className="privacy-section">
                            <h2>4. Cookies & Tracking Technologies</h2>
                        <p>Our website uses cookies to:</p>
                        <ul>
                            <li>Improve browsing experience</li>
                            <li>Personalize booking recommendations</li>
                            <li>Analyze page performance</li>
                            <li>Save preferences for future visits</li>
                        </ul>
                        <p>You can disable cookies in your browser settings, but some features may not function properly.</p>
                    </section>

                        <section id="security" className="privacy-section">
                            <h2>5. Data Security</h2>
                        <p>We take strong measures to protect your data, including:</p>
                        <ul>
                            <li>Secure servers</li>
                            <li>Encrypted forms</li>
                            <li>Limited data access among staff</li>
                            <li>Regular website security checks</li>
                        </ul>
                        <p>While no system is fully immune, we follow industry best practices to keep your information safe.</p>
                    </section>

                        <section id="rights" className="privacy-section">
                            <h2>6. Your Rights</h2>
                        <p>Depending on your location, you may:</p>
                        <ul>
                            <li>Request access to your data</li>
                            <li>Update or correct your information</li>
                            <li>Request deletion (when allowed by law)</li>
                            <li>Opt out of marketing emails</li>
                            <li>Withdraw consent at any time</li>
                        </ul>
                        <p>To request any of these, contact our support team.</p>
                    </section>

                        <section id="retention" className="privacy-section">
                            <h2>7. Data Retention</h2>
                        <p>We keep your data only as long as needed:</p>
                        <ul>
                            <li>Guest booking information is retained according to DTCM requirements</li>
                            <li>Contact information is kept for customer support and service improvements</li>
                            <li>Property owner details for active or ongoing partnerships</li>
                        </ul>
                        <p>Once no longer necessary, data is deleted securely.</p>
                    </section>

                        <section id="third-party" className="privacy-section">
                            <h2>8. Third-Party Links</h2>
                        <p>Our website may link to external websites. We are not responsible for their privacy practices. We recommend reviewing their privacy policies before sharing any information.</p>
                    </section>

                        <section id="children" className="privacy-section">
                            <h2>9. Protecting Children's Privacy</h2>
                        <p>YGI Holiday Homes does not knowingly collect information from individuals under 18. If any such data is identified, it will be removed immediately.</p>
                    </section>

                        <section id="updates" className="privacy-section">
                            <h2>10. Updates to This Policy</h2>
                        <p>We may update this Privacy Policy to reflect legal, operational, or service changes. Updated versions will be posted on this page with a revised "Last Updated" date.</p>
                    </section>

                        <section id="contact" className="privacy-section">
                            <h2>11. Contact Us</h2>
                        <p>If you have questions regarding this Privacy Policy or need assistance, contact us at:</p>
                        <div className="contact-info">
                            <p><strong>YGI Holiday Homes</strong></p>
                            <p>Email: <a href="mailto:info@ygiholidayhomes.com">info@ygiholidayhomes.com</a></p>
                            <p>Phone: <a href="tel:+971585498899">+971 58 549 8899</a></p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
