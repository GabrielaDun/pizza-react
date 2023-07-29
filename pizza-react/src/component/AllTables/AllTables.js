const AllTables = () => {
    return (
        <div>
        <h1 className="mt-5 mb-2">All tables</h1>
        <table className="table table-striped">
            <thead>
                <tr className=" row justify-content-between mt-3 pb-3 border-bottom">
                    <div className="col-10 justify-content-between">
                        <th className=" p-1 mr-5 pr-4" scope="row"><h3>Table 1</h3></th>
                        <td className=" p-4 ml-3"><b>Status:</b> Reserved</td>
                    </div>
                    <div className="col">
                        <button className="col btn btn-primary" type="submit">Show more</button>
                    </div>
                </tr>
            </thead>
        </table> 
      </div>
  
        );
};

export default AllTables;