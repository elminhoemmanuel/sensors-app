import React, { useState } from 'react'
import { AddSensorResult, Sensor } from '../interfaces/addSensor';
import Checkbox from './common/Checkbox';
import Input from './common/Input';
import Select from './common/Select';
import Button from "./common/Button";
import { useNavigate } from "react-router-dom";
import { FetchForm } from '../interfaces/home';
import { editSensor } from '../services/editSensor';
import Loader from './common/Loader';
import { useParams, useSearchParams } from 'react-router-dom';

const EditSensorBody = () => {

    let navigate = useNavigate();
    const [searchParams] = useSearchParams();
    let { sensorId } = useParams();
    const initialValues = {
        sensorId: "",
        location: searchParams.get("location") ? searchParams.get("location")! : "" ,
        customer: searchParams.get("customer") ? searchParams.get("customer")! : "" ,
        min_temp_limit: searchParams.get("min") ? Number(searchParams.get("min")!) : undefined,
        max_temp_limit: undefined,
        monitor_min_temp: false,
        monitor_max_temp: false,
    };

    const customers = ["customer-1", "customer-2", "customer-3"]

    const [values, setValues] = useState<Sensor>(initialValues);
    const [fetch, setFetch] = useState<FetchForm>({ loading: false, success: false, error: '' });
    const [result, setResult] = useState<AddSensorResult>({} as AddSensorResult);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name } = e.target;
        setValues({
            ...values,
            [name]: !values[name as keyof Sensor],
        });
    };

    const handleSubmitOps = (fetchData: FetchForm, result: AddSensorResult) => {
        setFetch(fetchData);
        setResult(result);
    }

    const checkInputsValidity = () =>{
        if(!values.location || !values.customer || !values.min_temp_limit || !values.max_temp_limit){
            handleSubmitOps({ loading: false, success: false, error: 'Please fill all the required input fields' }, {} as AddSensorResult);
            return;
        }
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!values.location || !values.customer || !values.min_temp_limit || !values.max_temp_limit){
            handleSubmitOps({ loading: false, success: false, error: 'Please fill all the required input fields' }, {} as AddSensorResult);
            return;
        }
        
        handleSubmitOps({ loading: true, success: false, error: '' }, {} as AddSensorResult);
        editSensor(values, sensorId)
            .then((data) => {
                handleSubmitOps({ loading: false, success: true, error: '' }, data.result);
            })
            .catch((err) => {
                handleSubmitOps({ loading: false, success: false, error: 'Something went wrong could not submit your data, please try again' }, {} as AddSensorResult);
            })

    };

    return (
        <form className='mt-6' onSubmit={handleFormSubmit}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-7'>
                <div className='cols-span-1 lg:col-span-7'>
                    <h1 className='text-lg font-extrabold pb-3 border-b border-gray-300' >Edit Sensor - {sensorId}</h1>

                    <h1 className='text-lg font-extrabold my-7'>{sensorId}</h1>

                    <Input
                        type="text"
                        isBordered
                        name='location'
                        value={values.location}
                        onChange={handleInputChange}
                        className="my-7 block w-full lg:w-3/5"
                        placeholder='Location'
                    />
                    <Select
                        name='customer'
                        options={customers}
                        value={values.customer}
                        onChange={handleInputChange}
                        addStyles="my-7 block w-full lg:w-3/5"
                        defaultValue={customers[0]}
                    />
                </div>

                <div className='cols-span-1 lg:col-span-5'>
                    <h1 className='text-lg font-extrabold pb-3 border-b border-gray-300' >Alerts</h1>
                    <Input
                        type="number"
                        isBordered
                        name='min_temp_limit'
                        value={values.min_temp_limit}
                        onChange={handleInputChange}
                        className="mt-7 mb-3 block w-full lg:w-3/5"
                        placeholder='Min Temp Threshold'
                    />
                    <Checkbox
                        id="monitor_min_temp"
                        name="monitor_min_temp"
                        label="Monitor Min Temperature"
                        isChecked={values.monitor_min_temp}
                        onChange={handleCheckBoxChange}
                    />
                    <Input
                        type="number"
                        isBordered
                        name='max_temp_limit'
                        value={values.max_temp_limit}
                        onChange={handleInputChange}
                        className="mt-7 mb-3 block w-full lg:w-3/5"
                        placeholder='Max Temp Threshold'
                    />
                    <Checkbox
                        id="monitor_max_temp"
                        name="monitor_max_temp"
                        label="Monitor Max Temperature"
                        isChecked={values.monitor_max_temp}
                        onChange={handleCheckBoxChange}
                    />
                </div>
            </div>

            <div className='py-5 border-t border-gray-300 flex items-center'>
                <Button
                    className='px-10 py-2 mr-4 flex items-center justify-center'
                    variant="primary"
                    type='submit'
                >
                    {fetch.loading ? <Loader variant='light' /> : "Update Sensor"}
                </Button>
                <Button
                    className='px-10 py-2'
                    variant="secondary"
                    type='button'
                    onClick={() => navigate(`/`)}
                >
                    Cancel
                </Button>
            </div>

            <p className='text-red-400'>{fetch.error}</p>
            <p>{fetch.success ? "Sensor updated successfully" : ""}</p>
        </form>
    )
}

export default EditSensorBody