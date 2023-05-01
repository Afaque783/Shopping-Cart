import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div className="flex justify-center flex-row gap-20">


      <div className="">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col justify-between">

        <div className="mt-20">
          <div className="text-green-600 font-md ">Your Cart</div>
          <div className="text-green-600 uppercase text-[30px] font-bold">Summary</div>
          <p>
            <span className="text-grey-700 text-[20px]">Total Items: </span> <span className="text-green-600 font-bold">{cart.length}</span>
          </p>
        </div>

        <div>
          <p className="text-[20px]">Total Amount:<span className="font-bold text-[25px]"> ${totalAmount}</span></p>
          <button className="border-2 border-gray-700 rounded-md text-[15px] bg-green-700 font-bold text-white p-1 px-3
          hover:bg-slate-900 w-full mb-[20px] ">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="justify-center items-center">
      <h1 className=" font-bold items-center justify-center text-[40px]  
       transition duration-300 ease-in gap-3 p-4  text-green-700 transition duration-300 ease-in gap-3 p-4 mt-2   ">Cart Empty</h1>
      <Link to={"/"}>
        <button
        className=" font-bold items-center justify-center text-[20px]  hover:bg-slate-900  
        text-green-700   transition duration-300 ease-in gap-3 p-4" 
        >
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
