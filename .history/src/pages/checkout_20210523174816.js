import Image from "next/image"
import Header from "../components/Header"

function Checkout() {
    return (
        <div className="bg-gray-100">
            <Header />
         <main className="lg:flex max-w-screen-2xl mx-auto ">
            {/* Left */}
            <div className="flex-grow m-5 shadow-sm" >
                <Image
                    src="https://links.papareact.com/ikj"
                    width={1020}
                    height={250}
                    objectFit="contain"
                />
                <div>
                    <h1>Your Shopping Basket</h1>
                </div>
            </div>

            {/* Right */}
            <div>

            </div>
         </main>
        </div>
    )
}

export default Checkout
