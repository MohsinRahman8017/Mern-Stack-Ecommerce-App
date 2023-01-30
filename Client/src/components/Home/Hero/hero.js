
import { useEffect, useState } from "react";
import "./hero.css"

let Hero = () => {
        let images = ["girls.jpg","bags.jpg","shoes.jpg",]
         const[index,setindex] = useState(0)

        let Next = () => {
             setindex( index == images.length-1 ? index % 2  : index +1 )
        }

        let Previous = () => {
            setindex( index == 0 ? images.length-1 : index -1)

        }

    return (
             <>
                <div className="hero-outer-wrapper" style={{backgroundImage:`url(images/${images[index]})`,backgroundSize:"cover"}}>
                    {/* <img src={`images/${images[index]}`}/> */}
                    <div className="btns">
                        <button onClick={Previous}><span className="material-symbols-outlined">arrow_back_ios</span></button>
                        <button onClick={Next} className="next"><span className="material-symbols-outlined">arrow_back_ios</span></button>
                    </div>
                </div>
             </>
    ) ;
}

export default Hero