import React from 'react';
import { SensorsResult } from '../interfaces/home';
import { format } from 'date-fns';
import Button from "./common/Button";
import { useNavigate } from "react-router-dom";

type SensorTableProps = {
    data: SensorsResult[];
}

const SensorTable = ({ data }: SensorTableProps) => {

    let navigate = useNavigate();
    const formatDate = (val: string) => {
        return format(new Date(Number(val)), 'dd MMM yyyy')
    }

    return (
        <table className='w-full'>
            <tbody className='w-full'>
                {
                    data.map((row) => (
                        <tr key={row.device_id} className='w-full'>
                            <td className='p-2'><p>{row.device_id}</p></td>
                            <td className='p-2'>
                                {formatDate(row.last_online)} <br />
                                Last Online
                            </td>
                            <td className='p-2'>
                                {row.last_temp} <br />
                                Temp
                            </td>
                            <td className='p-2'>
                                {row.location} <br />
                                Location
                            </td>
                            <td className='flex items-center justify-center p-2'>
                                <Button
                                    className='px-5 py-2 mr-4'
                                    variant="secondary"
                                    onClick={()=>navigate(`/sensor/${row.device_id}/edit`)}
                                >
                                    Options
                                </Button>
                                <Button
                                    className='px-5 py-2'
                                    variant="primary"
                                    onClick={()=>navigate(`/sensor/${row.device_id}`)}
                                >
                                    Details
                                </Button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default SensorTable