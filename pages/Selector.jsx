import RoundTrip from './Selector-Captions/RoundTrip'
import Economy from './Selector-Captions/Economy'
import AdultCount from './Selector-Captions/AdultCount'

export default function Selector(){
    return(
        <div className="flex w-full items-end gap-20 container mx-auto px-4 mt-10 text-xs">
            {/* Round-trip */}
            <RoundTrip/>

            {/* Adult Count */}
            <AdultCount/>

            {/* Economy */}
            <Economy/>
        </div>
    )
}