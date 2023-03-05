import "../css/Home.css"
// import '../css/Navbar.css'
function Navbar() {
  return (
    <div className="container">
      <div className="menu">
        <div className="logo">
          Teach<span>me</span>
        </div>
        <div className="link">
          <a href=" ">Home</a>
          <a href=" ">Aboutus</a>
          <a href=" ">Contact</a>
          <a href=" ">Service </a>
          <a href=" ">Teachers</a>
          <button>
            <a href="sign in">sign in </a>
            <a href="sign up">Sign up</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
