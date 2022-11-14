import styles from "./HomePage-Rev.module.css"
import gator from "../../imgs/ACE_Gator.png"
import insta from "../../imgs/Instagram.png"
import facebook from "../../imgs/Facebook.png"
import slack from "../../imgs/Slack.png"
import discord from "../../imgs/Discord.png"
import about_us from "../../imgs/About_Us.jpg"
import learn from "../../imgs/Learn.jpg"
import announcements from "../../imgs/Announcements.jpg"
import projects from "../../imgs/Projects.jpg"
import calendarHint from "../../imgs/CalendarHint.gif"
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";


function HomePage() {
    return(
        <div>
            <img src={calendarHint} style={{ position: "absolute", marginTop: "15rem", zIndex: "1"}} alt="Link to ACE Event calendar" onClick={() => window.open("https://calendar.google.com/calendar/embed?src=nfcehnee29ov9indk18573qgsc%40group.calendar.google.com&ctz=America%2FNew_York", '_blank')}/>
            <div className={styles.content_wrapper}>
                <div className={styles.typewriter}>
                    <h1>Association of Computer Engineers</h1>
                </div>
                <div className={styles.logo_container}>
                    <img src={gator} alt="ACE Logo" style={{ objectFit: 'none' }} />
                </div>
                <div className={styles.mission_para}>
                    <p>
                        The Association of Computer Engineers is established for the purpose of creating an environment where students coming from computer engineering disciplines (software, hardware, and their integration),
                        or from other related majors, can collaborate and effectively work together. The organization aims to faciliate the practice of all phases of computer engineering and other allied fields, as well 
                        as the furtherance of the professional development of the student. This is achieved through a strong emphasis on projects, presentations, tutoring, mentoring, and special events hosted by the Computer & 
                        Information Science & Engineering (CISE) and the Electrical & Computer Engineering (ECE) Departments.
                    </p>
                </div>
                <Container className="pb-2">
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <a href="https://www.instagram.com/ace_uf/?hl=en">
                                <img className={styles.social_icon} src={insta} alt="ACE Instagram" />
                            </a>
                        </Col>
                        <Col md="auto">
                            <a href="https://www.facebook.com/GatorACE/">
                                <img className={styles.social_icon} src={facebook} alt="ACE Facebook" />
                            </a>
                        </Col>
                        <Col md="auto">
                            <a  href="https://join.slack.com/t/uf-ace/shared_invite/zt-1fu4wzhpv-AKRTOtWqfCx3jnfIojaIpw">
                                <img className={styles.social_icon} src={slack} alt="ACE Slack" />
                            </a>
                        </Col>
                        <Col md="auto">
                            <a  href="https://discord.gg/dtdpsFqdUW">
                                <img className={styles.social_icon} src={discord} alt="ACE Discord" />
                            </a>
                        </Col>
                    </Row>
                </Container>
                <hr style={{ height: 5, color: 'white' }}/>
                <Container>
                    <Row className="pb-5 justify-content-md-center">
                        <Col md="auto">
                            <AnimationOnScroll animateIn="animate__bounceInLeft" animateOut="animate__bounceOutLeft" duration="0.5">
                                <img src={about_us} className={styles.content_img} />
                            </AnimationOnScroll>
                        </Col>
                        <Col md="auto">
                            <div className={styles.verticalLine} />
                        </Col>
                        <Col>
                            <AnimationOnScroll animateIn="animate__bounceInRight" animateOut="animate__bounceOutRight" duration="0.5">
                                <a href="/#/About" style={{fontWeight: "bold", color: "white"}}>
                                    <h2>About Us</h2>
                                </a>
                                <p style={{fontSize: "16px"}}>
                                    ACE is committed to the technical, professional, and social development of its members. Workshops provide exposure to industry-leading tools, ensuring that members
                                    are familiar with them before they crop up in a work environment. Company panels are an opportunity to develop career interests through company-specific information
                                    sessions, and also represent a vital networking opportunity. Socials are a reprieve from the hustle and bustle of coursework, and give members a chance to connect with like-minded
                                    peers.
                                </p>
                            </AnimationOnScroll>
                        </Col>
                    </Row>
                    <Row className="pb-5 justify-content-md-center">
                        <Col md="auto">
                            <AnimationOnScroll animateIn="animate__bounceInLeft" animateOut="animate__bounceOutLeft" duration="0.5">
                                <img src={learn} className={styles.content_img} />
                            </AnimationOnScroll>
                        </Col>
                        <Col md="auto">
                            <div className={styles.verticalLine} />
                        </Col>
                        <Col>
                            <AnimationOnScroll animateIn="animate__bounceInRight" animateOut="animate__bounceOutRight" duration="0.5">
                                <a href="/#/Learn" style={{fontWeight: "bold", color: "white"}}>
                                    <h2>Learn</h2>
                                </a>
                                <p style={{fontSize: "16px"}}>
                                    Education is at the heart of everything ACE does. We strive to foster a positive, interactive, and exciting learning environment for all of our members.
                                    Office hours are available to provide 1-on-1 help with complex topics in our associated disciplines. Test reviews are collaborative sessions meant to nurture an understanding
                                    of class-specific topics. Workshops are valuable group-based learning opportunities covering industry-specific concepts. ACE's projects are a way to apply the knowledge
                                    gleaned through coursework or any of the above opportunities.
                                </p>
                            </AnimationOnScroll>
                        </Col>
                    </Row>
                    <Row className="pb-5 justify-content-md-center">
                        <Col md="auto">
                            <AnimationOnScroll animateIn="animate__bounceInLeft" animateOut="animate__bounceOutLeft" duration="0.5">
                                <img src={announcements} className={styles.content_img} />
                            </AnimationOnScroll>
                        </Col>
                        <Col md="auto">
                            <div className={styles.verticalLine} />
                        </Col>
                        <Col>
                            <AnimationOnScroll animateIn="animate__bounceInRight" animateOut="animate__bounceOutRight" duration="0.5">
                                <a href="/#/Announcements" style={{fontWeight: "bold", color: "white"}}>
                                    <h2>Announcements</h2>
                                </a>
                                <p style={{fontSize: "16px"}}>
                                    Getting the most out of ACE is a matter of staying up-to-date with our event schedule. The chomping gator at the top of this page will bring you to an updated
                                    copy of this schedule. Keep an eye on our socials for important information regarding events, opportunities, and more. The Announcements page of this site will also
                                    provide this kind of information, but is updated less frequently.
                                </p>
                            </AnimationOnScroll>
                        </Col>
                    </Row>
                    <Row className="pb-5 justify-content-md-center">
                        <Col md="auto">
                            <AnimationOnScroll animateIn="animate__bounceInLeft" animateOut="animate__bounceOutLeft" duration="0.5">
                                <img src={projects} className={styles.content_img} />
                            </AnimationOnScroll>
                        </Col>
                        <Col md="auto">
                            <div className={styles.verticalLine} />
                        </Col>
                        <Col>
                            <AnimationOnScroll animateIn="animate__bounceInRight" animateOut="animate__bounceOutRight" duration="0.5">
                                <a href="" style={{fontWeight: "bold", color: "white"}}>
                                    <h2>Projects</h2>
                                </a>
                                <p style={{fontSize: "16px"}}>
                                    ACE projects are an exciting way to dip your hands into a large development environment. These are designed to require absolutely no prior knowledge and are meant
                                    to be a gentle introduction to large-scale engineering. Consider getting involved if any of our ongoing projects align with your interests, or use the footer's contact
                                    form to request something new. 
                                    <br/><br/>
                                    Ongoing projects include:
                                    <ul>
                                        <li>ACE Website</li>
                                    </ul>
                                </p>
                            </AnimationOnScroll>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default HomePage;