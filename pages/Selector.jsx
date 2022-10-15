import RoundTrip from './Selector-Captions/RoundTrip'
import Economy from './Selector-Captions/Economy'
import AdultCount from './Selector-Captions/AdultCount'

export default function Selector(){
    return(
        <div className="sm:flex-col md:grid grid-cols-3 gap-4 w-full items-start   mx-auto px-4 mt-10 text-xs ">
            {/* Round-trip */}
            <RoundTrip/>

            {/* Adult Count */}
            <AdultCount/>

            {/* Economy */}
            <Economy/>
        </div>
    )
}