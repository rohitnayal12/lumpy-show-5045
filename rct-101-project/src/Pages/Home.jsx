import React from 'react'
import img1 from "../Photos/photo1.png"
import img2 from "../Photos/img2.png"
import img3 from "../Photos/img3.png"
import img4 from "../Photos/img4.png"
import img6 from "../Photos/img6.png"
import img5 from "../Photos/img5.png"
export default function Home() {
  return (
    <>
   <div style={{marginLeft:"40px", border:"1px solid red",marginRight:"40px"}}>
    <div style={{display:"flex",gap:"50px"}}>
      

      <div style={{marginTop:"100px"}} >
        <h2 style={{color:"darkgreen"}}>Create a green paradise right at home</h2>
        <p>20% of the profit goes to help the Armed Forces of Ukraine</p>
        <button style={{backgroundColor:"darkgreen",color:"white",borderRadius:"5px",border:"darkgreen"}}>Catalouge</button>
      </div>

      <div>
        <img width="400px" src={img1} alt="" />
      </div>
    </div>

    <div style={{display:"flex"}}>
      <img src={img2} alt="" />
      <div>
        <h2>About us</h2>
        <p>We are a store of indoor plants of various types in Kyiv. <br /> Hundreds of different types of plants of from Ficuses to  <br /> ferns . We love and cherish our plants from their very  <br /> "birth", so they will definitely bring happiness,joy , love and  <br /> comfort to your home. </p>
      </div>
    </div>



    <div>
      <h3>Popular Products</h3>
      <div style={{display:"flex"}} >
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

    <div style={{display:"flex",gap:"100px",justifyContent:"space-around" }}>
      <h3>Categories</h3>
      <button style={{backgroundColor:"darkgreen",color:"white",borderRadius:"5px",border:"darkgreen"}}>Catalouge</button>
    </div>

    <div style={{display:"flex",gap:"100px",justifyContent:"space-around" }}>
      <div>
        <img src={img3} alt="" />
        <p>HousePlants</p>
      </div>
      <div>
        <img src={img3} alt="" />
        <p>HousePlants</p>
      </div>
      <div>
        <img src={img3} alt="" />
        <p>HousePlants</p>
      </div>
      <div>
        <img src={img3} alt="" />
        <p>HousePlants</p>
      </div>
    </div>



    </div>
    </>
  )
}