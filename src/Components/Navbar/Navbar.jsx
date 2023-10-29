import "./Navbar.css";


export default function Navbar() {

    return(
      <>
        <div className="navbar">
          <div className="containerr">
            <div className="navbar-list">
              <div className="nav-logo">
                <a href="#" className="nav-link">BurgerNation</a>
              </div>
              <div className="nav-item">
                <a href="#" className="nav-link">HOME</a>
                <a href="#" className="nav-link">OUR MENU</a>
                <a href="#" className="nav-link">OFFERS</a>
                <a href="#" className="nav-link">ABOUT</a>
                <a href="#" className="nav-link">FRANCHISEE</a>
                <a href="#" className="nav-link">CONTACT</a>
                <a href="#" className="nav-link">DOWNLOAD APP</a>
              </div>
            </div>
          </div>
        </div>
      </>
  )

}
