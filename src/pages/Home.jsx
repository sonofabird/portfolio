import { Button } from "@mui/material";
import { useState } from "react";

const Home = () => {
    
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1)
    }
    
    return(
        <div>
            <Button onClick={()=>handleClick()}>{count}</Button>
            <Button href="/Project1">Go to Project 1</Button>
        </div>
    )
}

export default Home; 