import React from 'react'
import Card from '../Components/Card'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const product = () => {
        navigate("/Allproduct")
    }
    return (
        <>
            <div className='p-5 flex justify-center items-center flex-wrap gap-20'>
                <div>
                    <img style={{ width: "28rem", border: "rounded" }} src="src/assets/44.webp" alt="" />
                </div>
                <div>
                    <h1>
                        Discover high-quality men's watches at Jack <br />
                        Watches, featuring both authentic and expertly <br />
                        crafted replicas. Enjoy nationwide delivery and <br />
                        elevate your style effortlessly. <br />
                    </h1>
                    <button className="btn btn-neutral bg-[#121212] mt-5" onClick={product}>Shop Now</button>
                </div>
            </div>

            <div>
                <h1 className='text-3xl mt-4 text-center font-semibold'>Featured products</h1>
                <div className='flex justify-center flex-wrap gap-5 mt-5'>
                    <Card title="Talz Co" image="src/assets/1.webp" des="Casino Roulette Tourbillion" price="$280,000" />
                    <Card title="Talz Co" image="src/assets/2.webp" des="Epic X" price="$29,000" />
                    <Card title="Talz Co" image="src/assets/3.webp" des="Epic X" price="$29,000" />
                    <Card title="Talz Co" image="src/assets/4.webp" des="Epic X" price="$29,000" />
                    <Card title="Talz Co" image="src/assets/7.webp" des="Casino Roulette Tourbillion" price="$29,000" />
                    <Card title="Talz Co" image="src/assets/8.webp" des="Epic X" price="$177,000" />
                    <Card title="Talz Co" image="src/assets/9.webp" des="Epic X Heart Of Cristiano " price="$117,000" />
                    <Card title="Talz Co" image="src/assets/10.webp" des="Epic X Heart Of Cristiano" price="$147,000" />
                </div>
            </div>

        </>
    )
}

export default Home