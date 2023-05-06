import React from 'react'
import img1 from "../Photos/photo1.png"
import img2 from "../Photos/img2.png"
import img3 from "../Photos/img3.png"
import img4 from "../Photos/img4.png"
import img6 from "../Photos/img6.png"
import img5 from "../Photos/img5.png"
import img7 from "../Photos/photo7.png"
import img8 from "../Photos/photo8.png"
import img9 from "../Photos/photo9.png"
import img10 from "../Photos/photo10.png"
import img11 from "../Photos/photo11.png"
import img12 from "../Photos/photo12.png"
import img13 from "../Photos/photo13.png"
import img14 from "../Photos/photo14.png"
import img15 from "../Photos/photo15.png"
export default function Home() {
  return (
    <>
   <div style={{ border:"1px solid red",width:"90%",margin:"auto",textAlign:"center"}}>
    <div style={{display:"flex",justifyContent:"space-around",border:"1px solid green"}}>
    
      <div style={{border:"1px solid green"}} >
        <h2 style={{color:"darkgreen",fontSize:"50px"}}>Create <br /> a green paradise <br /> right at home</h2>
        <p>20% of the profit goes to help the Armed Forces of Ukraine</p>
        <button style={{backgroundColor:"darkgreen",color:"white",borderRadius:"5px",border:"darkgreen"}}>Catalouge</button>
      </div>

      <div>
        <img width="400px" src={img1} alt="" />
      </div>
    </div>

    <div style={{display:"flex",justifyContent:"space-around"}}>
      <img src={img2} alt="" />
      <div>
        <h2>About us</h2>
        <p>We are a store of indoor plants of various types in Kyiv. <br /> Hundreds of different types of plants of from Ficuses to  <br /> ferns . We love and cherish our plants from their very  <br /> "birth", so they will definitely bring happiness,joy , love and  <br /> comfort to your home. </p>
      </div>
    </div>



    <div>
      <h3>Popular Products</h3>
      <div style={{display:"flex",justifyContent:"space-around"}} >
        <div>
          <img src={img3} alt=""  />
          <div  style={{display:"flex",gap:"100px",justifyContent:"space-around" }}>
            <p>Aglaonema <br /> 1300 UAH</p>
            <img src={img5} alt="" />

          </div>
        </div>
        <div>
          <img src={img4} alt=""  />
          <div  style={{display:"flex",gap:"100px",justifyContent:"space-around" }}>
            <p>Aglaonema <br /> 1300 UAH</p>
            <img src={img5} alt="" />

          </div>
        </div>
        <div>
          <img src={img6} alt=""  />
          <div style={{display:"flex",gap:"100px",justifyContent:"space-around" }}>
            <p>Aglaonema <br /> 1300 UAH</p>
            <img src={img5} alt="" />

          </div>
        </div>
 
      </div>

    </div>


    <div>

      <div>
        
      </div>

      <div>
       <h4 style={{color:"darkgreen"}}>Whats our customers think</h4>
       <p>We have many testimonials from new and regular <br />coustomers. You cant trust us ,because we love our work <br /> and provide you with only honest reviews.</p>

      </div>

    </div>

    <div style={{display:"flex",justifyContent:"space-around"}}>
      <h3>Categories</h3>
      <button style={{backgroundColor:"darkgreen",color:"white",borderRadius:"5px",border:"darkgreen"}}>Catalouge</button>
    </div>

    <div style={{display:"flex"}}>
      <div>
        <img src={img9} alt="" width="100%" />
        <p>HousePlants</p>
      </div>
      <div>
        <img src={img10} alt="" width="100%" />
        <p>HousePlants</p>
      </div>
      <div>
        <img src={img11} alt="" width="100%" />
        <p>HousePlants</p>
      </div>
      <div>
        <img src={img12} alt=""  width="100%"/>
        <p>HousePlants</p>
      </div>
    </div>


    <div style={{display:"flex",justifyContent:"space-around"}}>

      <div>
       <img src={img7} alt="" />
      </div>
      <div>
       <h2>Delivery and Payment</h2>
       <p>We package our plants securily yet sustainably by reusing <br />boxes,paper (newspaper),etc.
       Deleivery is carried out <br /> to all cities of Ukrain , except for the occupied ones. <br /> Pickup is possible in Kyiv.</p>

      </div>
    </div>

    <div style={{display:"flex",justifyContent:"space-around"}}>
      <div><h1>Find us on Instagram</h1></div>
      <button style={{borderRadius:"5px",color:"darkgreen",borderColor:"darkgreen"}}>More Details</button>
    </div>

    <div style={{display:"flex",justifyContent:"space-around",width:"100%"}}>
      <img src={img13} alt="" />
      <img src={img14} alt="" />
      
      <img src={img15} alt="" />
      
      
    </div>

    <div>
      <img src={img8} alt="" />
    </div>



    </div>
    </>
  )
}