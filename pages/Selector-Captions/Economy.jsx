import { Select, Option } from "@material-tailwind/react";

export default function Economy(){
    return (
        <div className="w-2">
          <Select color='blue-gray' label="Economy" variant="standard">
            <Option>Economy</Option>
            <Option>Premium Economy</Option>
            <Option>Business</Option>
            <Option>First</Option>
            <Option>Multiple</Option>
          </Select>
        </div>
      );
    
}