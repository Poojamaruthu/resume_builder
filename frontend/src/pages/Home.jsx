import "./Home.css";

const Home = ({ onOpenModal }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Build Your Professional Resume</h1>
        <p className="hero-subtitle">
          Create a standout resume in minutes with our templates.
        </p>
        <button className="get-started-btn" onClick={onOpenModal}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Home;
