import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EmptyPage from "./component/EmptyPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route exact path="/" element={<DayList/>} />
          <Route path="/day/:day" element={<Day/>}/>
          <Route path="*" element={<EmptyPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
