import {NavLink} from "react-router-dom"
import styles from "../Routes/Navbar.module.css"



const links = [
    {
      to: "/",
      label: "Home"
    },
    {
      to: "/catalouge",
      label: "Catalouge"
    },
    {
      to: "/contact",
      label: "Contact"
    },
    {
      to: "/deliveryandpayment",
      label: "DeliveryAndPayment"
    }
  ];

function Navbar() {
    return(
        <div className = "navbar" 
        style={{
            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around"
          }}
        >
        {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
       
          className={({ isActive }) => {
            return isActive ? styles.activestyle : styles.defaultstyle;
          }}
        >
          {link.label}
        </NavLink>
      ))}



        </div>
    )
}

export { Navbar }