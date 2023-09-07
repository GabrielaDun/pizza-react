
import { useParams, useNavigate } from 'react-router-dom';
import styles from './SingleTable.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { editTableRequest, getTableById, getTableList } from '../../redux/tableRedux';
import { getStatusList } from '../../redux/tableStatusReducer';
import { Form} from "react-bootstrap";
import { useState } from 'react';
import { useForm } from "react-hook-form";

const SingleTables = () => {

    const { register, handleSubmit: validate, formState: {errors}} = useForm();

    const {tablesId} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const table = useSelector(state => getTableById(state, tablesId))
    const statusData = useSelector(getStatusList);

    const [currentStatus, setCurrentStatus] = useState((table && table.currentStatus) || ''); 
    let [seatsTaken, setSeatsTaken] = useState((table && table.seatsTaken) || '');
    let [seatsMax, setSeatsMax] = useState((table && table.seatsMax) || '');
    let [bill, setBill] = useState((table && table.bill) || 0 );
    console.log(currentStatus);


    if (tablesId > useSelector(getTableList).length){
        navigate('/')
    }

    const checkAmount = () => {
        if (currentStatus === 'Cleaning' || currentStatus === 'Free') {
            setBill(0)
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = "Table " + table.id;
        dispatch(editTableRequest({id: table.id, name: name, currentStatus: currentStatus, seatsTaken: seatsTaken, seatsMax: seatsMax, bill: bill}));

        if (currentStatus === "Free") {
            setBill(0);
        }
        navigate('/')
    }

    if (seatsTaken | seatsMax > 0){
        if (seatsMax < seatsTaken) {
            setSeatsTaken(seatsMax)
        }
    }

    if(!table) {
        return <div>Loading...</div>
    } else {
        return (
        <form onSubmit={e => validate(handleSubmit(e))}>
            <h1 className="mt-5 mb-2">{table.name}</h1>
            <Form.Group className="row g-3 align-items-center mt-2">
                <Form.Label className="col-auto">
                    <label className="col-form-label">Status:</label>
                </Form.Label>
                <Form.Select 
                    className="col-auto"
                    onChange={e => {
                        setCurrentStatus(e.target.value)
                        checkAmount(e.target.value);
                    }}
                >
                    <option>{currentStatus}</option>
                    {statusData.map ( dataStatus => 
                        dataStatus!== table.currentStatus 
                            ? <option key={dataStatus}>{dataStatus}</option>
                            : null
                    )}
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
                        onChange={e => {
                            if (e.target.value >= 0 && e.target.value <= 10) {
                                if (seatsTaken <= seatsMax) {
                                    setSeatsTaken(e.target.value)
                                }
                            }
                        }}
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
                        onChange={e => {
                            if (e.target.value >= 0 && e.target.value <= 10) {
                                setSeatsMax(e.target.value)
                            }
                        }}
                    />
                </div>
            </Form.Group>
            {errors.seats&&<small className={styles.error}>These fields need to numbered between 0 and 10.</small>}
            {errors.seatsMax&&<small className={styles.error}>These fields need to numbered between 0 and 10.</small>}
            {currentStatus === "Busy" && <Form.Group>
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