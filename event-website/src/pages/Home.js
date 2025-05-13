const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to EventX</h1>
      <p>Your all-in-one event management solution</p>

      <div className="btn-group">
        <button onClick={() => navigate('/client')} className="home-btn client-btn">
          I'm a Client
        </button>
        <button onClick={() => navigate('/manager')} className="home-btn manager-btn">
          I'm a Manager
        </button>
      </div>

      {/* Inline Styling */}
      <style>{`
        .home-container {
          text-align: center;
          padding: 4rem 1rem;
          background: linear-gradient(to right, #4facfe, #00f2fe);
          color: white;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .home-container h1 {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }

        .home-container p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }

        .btn-group {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .home-btn {
          padding: 0.8rem 2rem;
          font-size: 1.1rem;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          transition: transform 0.3s ease, background 0.3s;
        }

        .client-btn {
          background-color: #ff7675;
          color: white;
        }

        .manager-btn {
          background-color: #55efc4;
          color: #2d3436;
        }

        .home-btn:hover {
          transform: scale(1.05);
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
};

export default Home;