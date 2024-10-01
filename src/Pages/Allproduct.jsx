import React from 'react'
import Card from "../Components/Card"

const Allproduct = () => {
  return (
    <>
      <h1 className='text-center text-2xl mt-5 font-semibold'>All Product</h1>
      <div className='flex justify-center flex-wrap gap-5 mt-7'>
        <Card title="Talz Co" image="src/assets/11.webp" des="Ghotam City Gold" price="$240,000" btn="Check info" />
        <Card title="Talz Co" image="src/assets/22.webp" des="Opera God Father" price="$240,000" btn="Check info" />
        <Card title="Talz Co" image="src/assets/33.webp" des="Twin Turbo Furious" price="$170,000" btn="Check info" />
        <Card title="Talz Co" image="src/assets/44.webp" des="Casino Roulette Tourbillion" price="$240,000" btn="Check info" />
        <Card title="Talz Co" image="src/assets/1.webp" des="Casino Roulette Tourbillion" price="$280,000" btn="Check info" />
        <Card title="Talz Co" image="src/assets/2.webp" des="Epic X" price="$29,000" btn="Check info" />
        <Card title="Talz Co" image="src/assets/3.webp" des="Epic X" price="$29,000" btn="Check info" />
        <Card title="Talz Co" image="src/assets/4.webp" des="Epic X" price="$29,000" btn="Check info" />
        <Card title="Talz Co" image="src/assets/7.webp" des="Casino Roulette Tourbillion" price="$29,000" btn="Check info" />
        <Card title="Talz Co" image="src/assets/8.webp" des="Epic X" price="$177,000" btn="Check info" />
        <Card title="Talz Co" image="src/assets/9.webp" des="Epic X Heart Of Cristiano " price="$117,000" btn="Check info" />
        <Card title="Talz Co" image="src/assets/10.webp" des="Epic X Heart Of Cristiano" price="$147,000" btn="Check info" />
      </div>
    </>
  )
}

export default Allproduct