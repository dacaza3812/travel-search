import { Select, Option } from "@material-tailwind/react";

export default function RoundTrip(){
    return(
        <div className="w-30">
            <Select className="text-xs " label="Round Trip" color='blue-gray' variant="standard">
                <Option>One-Way</Option>
                <Option>Round Trip</Option>
                <Option>Multi-City</Option>
                <Option>Trip Builder</Option>
            </Select>
        </div>
    )
}