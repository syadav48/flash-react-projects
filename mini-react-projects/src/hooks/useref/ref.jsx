import { useRef } from "react";


const Refer = () => {
    const ref = useRef(null)
    const handleClick = () => {
        ref.current.focus();
    }
    
    return(
        <div>
            <input 
            type="text" 
            placeholder="Enter your referral code" 
            className="border border-gray-300 rounded-md p-2 mt-10"
            ref={ref}
            />
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2" onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default Refer;