import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";
import CreateWord from "./component/CreateWord";
import UpdateWord from "./component/UpdateWord";
import CreateDay from "./component/CreateDay";
import EmptyPage from "./component/EmptyPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route exact path="/" element={<DayList/>} />
          <Route path="/day/:day" element={<Day/>}/>
          <Route path="/create_word/" element={<CreateWord/>}/>
          <Route path="/create_day/" element={<CreateDay/>}/>
          <Route path="/update_word/:id" element={<UpdateWord/>}/>
          <Route path="*" element={<EmptyPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
