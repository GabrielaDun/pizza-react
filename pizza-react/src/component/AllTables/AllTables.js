import { useSelector } from "react-redux";
import { getTableList } from "../../redux/tableRedux";
import styles from './AllTables.module.scss'

const AllTables = () => {
    
    const tableData = useSelector(getTableList);
    console.log(tableData);   
    

    return (
        <div>
        <h1 className="mt-5 mb-2">All tables</h1>
        <div className="table">
            <div className={styles.table}>
                <div className={styles.tab}>
                    <div className={styles.left}>
                        <h3 className={styles.number} >Table 1</h3>
                        <p className={styles.status}><b>Status:</b> Reserved</p>
                    </div>
                    <div className={styles.right}>
                        <button className="btn btn-primary" type="submit">Show more</button>
                    </div>
                </div>
            </div>
        </div> 
      </div>
  
        );
};

export default AllTables;