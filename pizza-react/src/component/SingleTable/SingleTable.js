import { useParams } from 'react-router-dom';
import styles from './SingleTable.module.scss'
import { useSelector } from 'react-redux';
import { getStatusList, getTableById } from '../../redux/tableRedux';

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
            <div className="row g-3 align-items-center mt-2">
                <div className="col-auto">
                    <label className="col-form-label">Status:</label>
                </div>
                <div className="col-auto">
                    <input className="form-control"></input>
                </div>
            </div>
            <div className={styles.people}>
                <div className={styles.booked}>
                <div className={styles.sign}>
                        <label className="row-form-label">People</label>
                    </div> 
                    <div className={styles.form}>
                        <input className=" form-control " />
                    </div>
                </div>
                <div className={styles.avaliable}>
                    <div className={styles.sign}>
                        <label className="row-form-label">/</label>
                    </div> 
                    <div className={styles.form}>
                        <input className=" form-control " />
                    </div>
                </div>
            </div>
            <div className={styles.people}>
                <div className={styles.booked}>
                    <div className={styles.sign}>
                        <label className="row-form-label">Bill:</label>
                    </div> 
                    <div className={styles.signTwo}>
                        <label className="row-form-label">$</label>
                    </div> 
                    <div className={styles.form}>
                        <input className=" form-control " />
                    </div>
                </div>
            </div>
            <div className="col mt-4">
                <button className="col btn btn-primary" type="submit">Show more</button>
            </div>
      </div>
  
        );
};

export default SingleTables;