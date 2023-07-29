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
            <div class="row g-3 align-items-center mt-2">
                <div class="col-1">
                    <label for="inputPassword6" class="col-form-label">People:</label>
                </div>
                <div class="col-1">
                    <input class=" form-control " />
                </div>
                <div class="col-1 ">
                    /
                </div>
                <div class="col-1 ">
                    <input class="form-control " />
                </div>
            </div>
            <div class="row g-3 align-items-center mt-2">
                <div class="col-auto mr-2">
                    <label for="inputPassword6" class="col-form-label ">Bill:</label>
                </div>
                <div class="col-1">
                    <input class="form-control" />
                </div>
            </div>
            <div className="col mt-4">
                <button className="col btn btn-primary" type="submit">Show more</button>
            </div>
      </div>
  
        );
};

export default SingleTables;