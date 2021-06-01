import React from "react";


const img = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/seed/picsum/200/300";
const img3 = "https://picsum.photos/200/300?grayscale";
function Images(){
    return( <span>
        <img src={img} alt="RandomImage" /><img src={img2} alt="random" /> <img src={img3} alt="random" />
        </span>
    );
}
export default Images;