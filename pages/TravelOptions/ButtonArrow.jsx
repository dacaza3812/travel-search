import {BsArrowLeftRight} from 'react-icons/bs'
import { Button } from "@material-tailwind/react";

export default function ButtonArrow(){
    
    return (
        <Button className="flex flex-row px-auto mt-4 bg-gray-50 text-gray-900 basis-1/4">
            <BsArrowLeftRight  className='mx-1'/>
        </Button>
    )
}