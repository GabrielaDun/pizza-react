import AllTables from "./component/AllTables/AllTables";
import Header from "./component/Header/Header";
import { Container } from "react-bootstrap";
import SingleTables from "./component/SingleTable/SingleTable";

const  App = () => {
  return (
    <main>
      < Header />
      <Container>
        < AllTables/>
        <SingleTables />
      </Container>
    </main>
  );
}

export default App;
