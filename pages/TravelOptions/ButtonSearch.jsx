import {BiSearchAlt} from 'react-icons/bi'
import { Button } from "@material-tailwind/react";

export default function ButtonSearch(){
    
    return (
        <Button className="flex flex-row px-auto mt-4 bg-gray-50 text-gray-900 basis-1/4">
            <BiSearchAlt  className='mx-1'/>
        </Button>
    )
}