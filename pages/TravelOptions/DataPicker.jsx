import 'antd/dist/antd.css';
import {DatePicker} from 'antd';
import {useState} from 'react';
const { RangePicker } = DatePicker;
 
export default function DataPicker(){
    const [dates, setDates] = useState([])
    return(
        <div  className='bg-[#afb9c5b4] text-gray-900' style={{margin: 20}}>
            <RangePicker 
            onChange={(values) => {
                setDates(values)
            }}
            />
        </div>
    )
}