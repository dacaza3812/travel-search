import Selector from "./Selector"
import TravelOption from "./TravelOption"

export default function App(){
    return(
        <div className="container mx-auto px-4 h-auto p-4 mt-10 rounded border-2 border-teal-100 md-flex">
            <p className="text-teal-400 text-3xl text-left font-extrabold mx-4 ">Where are you flying?</p>
            {/* Selector */}
            <Selector />

            {/* Option Travel */}
            <TravelOption/>
            
        </div>
    )
}