import styles from './SingleTable.module.scss'

const SingleTables = () => {
    return (
        <div>
            <h1 className="mt-5 mb-2">Table 1</h1>
            <div class="row g-3 align-items-center mt-2">
                <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">Status:</label>
                </div>
                <div class="col-auto">
                    <input class="form-control" />
                </div>
            </div>
            <div class={styles.people}>
                <div class={styles.booked}>
                <div class={styles.sign}>
                        <label class="row-form-label">People</label>
                    </div> 
                    <div class={styles.form}>
                        <input class=" form-control " />
                    </div>
                </div>
                <div class={styles.avaliable}>
                    <div class={styles.sign}>
                        <label class="row-form-label">/</label>
                    </div> 
                    <div class={styles.form}>
                        <input class=" form-control " />
                    </div>
                </div>
            </div>
            <div class={styles.people}>
                <div class={styles.booked}>
                    <div class={styles.sign}>
                        <label class="row-form-label">Bill:</label>
                    </div> 
                    <div class={styles.signTwo}>
                        <label class="row-form-label">$</label>
                    </div> 
                    <div class={styles.form}>
                        <input class=" form-control " />
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