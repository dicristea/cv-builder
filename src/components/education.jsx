import React, { useState } from "react";
import Input from "./View/Input";

const Education = () => {
 const [value, setValue] = useState("");

 return (
    <div className="education-box">
        Education Component {value}
        <Input />
        <button onClick={() => setValue(value + 1)}>
            Click me
        </button>
    </div>
 )
 
}

export default Education;
