/* eslint-disable array-callback-return */
import { useParams } from 'react-router-dom';
import styles from './SingleTable.module.scss'
import { useSelector } from 'react-redux';
import { getTableById } from '../../redux/tableRedux';
import { getStatusList } from '../../redux/tableStatusReducer';
import { Form} from "react-bootstrap";

const SingleTables = () => {
    const {tablesId} = useParams();
    console.log(tablesId)

    const table = useSelector(state => getTableById(state, tablesId))
    console.log(table);

    const statusData = useSelector(getStatusList);
    console.log(statusData);


    return (
        <div>
            <h1 className="mt-5 mb-2">{table.name}</h1>
            <form className="row g-3 align-items-center mt-2">
                <Form.Group>
                    <Form.Label className="col-auto">
                        <label className="col-form-label">Status:</label>
                    </Form.Label>
                    <Form.Select className="col-auto">
                        <option>{table.status}</option>
                        {statusData.map ( status => {
                            if(status!== table.status) {
                                return (<option >{status}</option>)
                            }
                        })}
                    </Form.Select>
                </Form.Group>
            </form>
            <Form.Group className={styles.people}>
                <div className={styles.booked}>
                    <Form.Label className={styles.sign}>
                        <label className="row-form-label">People</label>
                    </Form.Label> 
                    <Form.Control 
                        className={styles.form}
                        value={table.seatsTaken}
                    />
                </div>
                <div className={styles.avaliable}>
                    <div className={styles.sign}>
                        <label className="row-form-label">/</label>
                    </div> 
                    <Form.Control 
                        className={styles.form}
                        value={table.seatsAvaliable}
                    />
                </div>
            </Form.Group>
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
                                value={table.bill}
                            />
                        </div>
                    </div>
            </Form.Group>}
            <div className="col mt-4">
                <button className="col btn btn-primary" type="submit">Show more</button>
            </div>
      </div>
  
        );
};

export default SingleTables;