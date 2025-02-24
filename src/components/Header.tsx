function Header() {
    return (
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "60px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#fff",
          boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
          padding: "0 20px",
        }}
      >
        <img
          src="logo-skysnap-sq.webp"
          alt="SkySnap Logo"
          style={{ height: "40px" }}
        />
        <h1
          style={{
            marginLeft: "15px",
            fontFamily: "sans-serif, Arial",
            fontSize: "1.5rem",
          }}
        >
          SkySnap - Rekrutacja 2025
        </h1>
      </header>
    );
  }
  
  export default Header;
  