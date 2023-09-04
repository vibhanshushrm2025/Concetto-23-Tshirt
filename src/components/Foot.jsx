import React from "react";

function Foot(){
    const yyear = new Date().getFullYear();
    return <footer> <p>copyright@{yyear} </p></footer>
}
export default Foot;