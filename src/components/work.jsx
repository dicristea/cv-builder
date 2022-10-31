import React, {useState} from "react";
import Input from "./View/Input";

const Work = () => {
 const [value, setValue] = useState('Work');

 return (
    <div className="work-box">
        Work Component {value}
        <Input />
        <button onClick={() => setValue(value + 1)}>
            Click me
        </button>
    </div>
 )
 
}

export default Work;
