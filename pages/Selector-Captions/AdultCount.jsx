import { Select, Option } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";

export default function AdultCount(){
    return(
        <div className="w-30">
            <Select color='blue-gray' label="Adults" variant="standard">
                <Option>Adults <spam>18-64</spam></Option>
                <Option>Students over 18</Option>
                <Option>Seniors 65+</Option>
                <Option>Youths 12-17</Option>
                <Option>Children 2-11</Option>
                <Option>Toddlers in own seat under 2</Option>
                <Option>Infants on lap under 2</Option>
            </Select>
        </div>
    )
}