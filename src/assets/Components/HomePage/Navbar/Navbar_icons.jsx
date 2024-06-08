// import Menu from '../../../../public/images/NavbarIcons/menu.svg';
import './Navbar.css'
function Navbar_icons(props) {
  return (
    <div className='NavBar_Icons'>
      <div className="Icon" onClick={props.showHandler} >
        <img src={props.img} alt="" />
      </div>
    </div>
  )
}

export default Navbar_icons
