
import { useState } from 'react';

function TestState(){
    const [count,setCount] = useState(10);

        function increment(){
            setCount(count + 1);
        }
        
        function decrement(){
            setCount(count - 1);
        }
        function reset(){
            setCount(count =10);
        }


    return(
    
        <div>
            {count}
            
            <input type ="button" value ="+" onClick={increment}></input>
            <input type ="button" value ="-" onClick={decrement}></input>
            <input type ="button" value ="reset" onClick={increment}></input>
        </div>
    )



}


export default TestState;