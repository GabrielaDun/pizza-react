import { useSelector } from "react-redux";
import { getTableList } from "../../redux/tableRedux";
import styles from './AllTables.module.scss'
import { Link } from "react-router-dom";

const AllTables = () => {
    
    const tableData = useSelector(getTableList);
    console.log(tableData);   
    
    return (
        <div>
        <h1 className="mt-5 mb-4">All tables</h1>
        <div className="table">
        {tableData.map(table => (
            <div key={table.id} className={styles.table}>
            <div className={styles.tab}>
                <div className={styles.left}>
                    <h3 className={styles.number}>{table.name}</h3>
                    <p className={styles.status}><b>Status: </b>{table.currentStatus}</p>
                </div>
                <div className={styles.right}>
                    <Link key={table.id} to={'/table/'+table.id}>
                        <button className="btn btn-primary" type="submit">
                            Show more
                        </button>
                    </Link> 
                </div>
            </div>
        </div>
        ))}
        </div> 
      </div>
  
        );
    
};

export default AllTables;