import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router>
          <div>
            <Header />
            <div className="ui internally celled grid">
              <div className="eleven wide column">
                <Routes>
                  <Route path="/" exact element={<Feed />} />
                  <Route>404 Not Found</Route>
                </Routes>
              </div>
              <div className="four wide column">
                <Sidebar />
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
