
// import '../css/Navbar.css'
function Navbar() {
  return (
    <div className="container">
      <div className="menu">
        <div className="logo">
          Teach<span>me</span>
        </div>
        <div className="link">
          <a href=" #">Home</a>
          <a href="#about">Aboutus</a>
          <a href="#contactfor">Contact</a>
          <a href="#service ">Service </a>
          <a href="#blog">Blog </a>
          <a href=" #">Teachers</a>
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
