import ButtonSearch from './TravelOptions/ButtonSearch'
import ButtonArrow from "./TravelOptions/ButtonArrow";
import SelectorCountry from './TravelOptions/SelectorCountry';
import DataPicker from './TravelOptions/DataPicker'

export default function TravelOption(){
    return(
        <div className=" mt-20 flex flex-row w-full">
        {/* From */}

            <div className="mr-5">
            <SelectorCountry text='Select Country'/>
            </div>

        {/* Button change */}
            <div className=" mr-5">
                <ButtonArrow/>
            </div>

        {/* To */}
            <div>
                <SelectorCountry text='To ?'/>
            </div>

        {/* Calendar */}
        
        <div calassName='ml-5'>
        <DataPicker />

        </div>

        

        {/* Search Option */}
        <div className="basis-1">
                <ButtonSearch />
            </div>
        </div>
    )
}