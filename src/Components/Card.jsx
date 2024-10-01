import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = (props) => {

 const navigate = useNavigate()
 const product = () =>{
  navigate("/allproduct")
 }

  return (
    <>
<div className="card bg-base-199 w-[17rem] shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
  <figure className="flex justify-center p-4 cursor-pointer" onClick={product}>
  <img
  className="w-56 h-56 object-contain" 
  src={props.image}
  alt="Shoes"
/>

  </figure>
  <div className="card-body p-4">
    <h2 className="card-title text-xl font-semibold text-gray-800">{props.title}</h2>
    <p className="text-gray-600 ">{props.des}</p>
    <h2 className="card-title text-xl font-semibold text-gray-800">{props.price}</h2>
    <button className='btn btn-success text-white'>{props.btn}</button>
  </div>
</div>

    </>
  )
}

export default Card







































{/* <div className="card bg-base-100 w-[17rem] shadow-xl rounded-lg overflow-hidden">
  <figure className="flex justify-center p-4">
    <img
      style={{
        width:"800px",
        height:"400px",
      }}
      src={props.image}
      alt="Shoes"
    />
  </figure>
  <div className="card-body p-4 text-center">
    <h2 className="card-title text-xl font-semibold text-gray-800 ">{props.title}</h2>
    <p className="text-gray-600 ">{props.des}</p>
    <h3>$280,000</h3>
  </div>
</div> */}