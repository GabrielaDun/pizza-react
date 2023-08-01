/* eslint-disable array-callback-return */
import { useParams } from 'react-router-dom';
import styles from './SingleTable.module.scss'
import { useSelector } from 'react-redux';
import { getTableById } from '../../redux/tableRedux';
import { getStatusList } from '../../redux/tableStatusReducer';
import { Form} from "react-bootstrap";
import { useState } from 'react';
import { useForm } from "react-hook-form";

const SingleTables = () => {

    const { register, handleSubmit: validate, formState: {errors}} = useForm();

    const {tablesId} = useParams();
    console.log(tablesId);
    const table = useSelector(state => getTableById(state, tablesId))
    console.log(table);
    const statusData = useSelector(getStatusList);

    const [currentStatus, setCurrentStatus] = useState((table && table.status) || ''); 
    let [seatsTaken, setSeatsTaken] = useState((table && table.seatsTaken) || '');
    let [seatsMax, setSeatsMax] = useState((table && table.seatsAvaliable) || '');
    const [bill, setBill] = useState((table && table.bill) || '');

    const handleSubmit = () => {
        if (currentStatus === "Free") {
            setBill(0);
        }
    }
    console.log(seatsTaken, 'nxosw', seatsMax)

    if (seatsTaken&seatsMax > 0){
        if (seatsMax < seatsTaken) {
            setSeatsTaken(seatsMax)
        }
    }
    console.log(seatsTaken, 'nxosw', seatsMax)

    if(!table) {
        return <div>Loading...</div>
    } else {
        return (
        <form onSubmit={validate(handleSubmit)}>
            <h1 className="mt-5 mb-2">{table.name}</h1>
            <Form.Group className="row g-3 align-items-center mt-2">
                <Form.Label className="col-auto">
                    <label className="col-form-label">Status:</label>
                </Form.Label>
                <Form.Select 
                    className="col-auto"
                    onChange={e => setCurrentStatus(e.target.value)}
                >
                    <option>{currentStatus}</option>
                    {statusData.map ( dataStatus => {
                        if(dataStatus!== table.status) {
                            return (<option >{dataStatus}</option>)
                        }
                    })}
                </Form.Select>
            </Form.Group>
            <Form.Group className={styles.people}>
                <div className={styles.booked}>
                    <Form.Label className={styles.sign}>
                        <label className="row-form-label">People</label>
                    </Form.Label> 
                    <Form.Control 
                        {...register('seats', {required: true, min: 0, max: 10})}
                        className={styles.form}
                        value={seatsTaken}
                        onChange={e => setSeatsTaken(e.target.value)}
                    />
                </div>
                <div className={styles.avaliable}>
                    <div className={styles.sign}>
                        <label className="row-form-label">/</label>
                    </div> 
                    <Form.Control 
                        {...register('seatsMax', {required: true, min: 0, max: 10})}
                        className={styles.form}
                        value={seatsMax}
                        onChange={e => setSeatsMax(e.target.value)}
                    />
                </div>
            </Form.Group>
            {errors.seats&&<small className={styles.error}>These fields need to numbered between 0 and 10.</small>}
            {errors.seatsMax&&<small className={styles.error}>These fields need to numbered between 0 and 10.</small>}
            {table.status==="Busy" && <Form.Group>
                    <div className={styles.people}>
                        <div className={styles.booked}>
                            <div className={styles.sign}>
                                <label className="row-form-label">Bill:</label>
                            </div> 
                            <div className={styles.signTwo}>
                                <label className="row-form-label">$</label>
                            </div> 
                            <Form.Control 
                                className={styles.form}
                                value={bill}
                                onChange={e => setBill(e.target.value)}
                            />
                        </div>
                    </div>
            </Form.Group>}
            <div className="col mt-4">
                <button className="col btn btn-primary" type="submit">Update</button>
            </div>
      </form>
  
        );
    }
};

export default SingleTables;