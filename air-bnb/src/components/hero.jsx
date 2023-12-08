import group from "../images/group.png";

function Hero ()  {
  return(
    <section className="hero">
      <img className="hero-img" src={group} alt="group"/>
      <h1 className="hero-title">Online Experiences</h1>
      <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  );
}
export default Hero;
  