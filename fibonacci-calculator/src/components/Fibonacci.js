import React from "react"

export default function Fibonacci (props) {

    const genSequence = (n) => {
        if (n===1) 
        {
          return [0, 1];
        } 
        else 
        {
          var s = genSequence(n - 1);
          s.push(s[s.length - 1] + s[s.length - 2]);
          return s;
        }
      }

    return (
        <div className="Fibonacci">
            {genSequence(props.length ? props.length : 5)}
        </div>
    )
}