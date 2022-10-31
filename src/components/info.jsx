import React, {useState} from "react";
import Input from "./View/Input";

const Info = () => {
 const [value, setValue] = useState('');

 return (
    <div className="info-box">
        Info Component {value}
        <Input />
        <button onClick={() => setValue(value + 1)}>
            Click me
        </button>
    </div>
 )
 
}

export default Info;
