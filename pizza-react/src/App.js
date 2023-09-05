import AllTables from "./component/AllTables/AllTables";
import Header from "./component/Header/Header";
import { Container } from "react-bootstrap";
import { Routes, Route } from 'react-router-dom';
import SingleTables from "./component/SingleTable/SingleTable";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTable } from "./redux/tableRedux";
import { fetchStatus } from "./redux/tableStatusReducer";

const  App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTable());
    dispatch(fetchStatus());
  }, [dispatch]);

  return (
    <main>
      < Header />
      <Container>
        <Routes>
          <Route path="/" element={<AllTables />} />
          <Route path="/table/:tablesId" element={<SingleTables />} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;
