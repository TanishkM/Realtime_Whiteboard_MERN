import "./App.css";
import CreateRoom from "./components/CreateRoom/CreateRoom";
import JoinRoom from "./components/JoinRoom/JoinRoom";
import RoomPage from "./components/RoomPage/RoomPage";
import BoardState from "./context/BoardState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <BoardState>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div
                className="d-flex w-75 container justify-content-between"
                style={{ marginTop: "25vh" }}
              >
                <JoinRoom />
                <CreateRoom />
              </div>
            }
          />
          <Route exact path="/:roomId" element={<RoomPage />} />
          </Routes>
      </Router>
      </BoardState>
    </>
  );
}

export default App;
