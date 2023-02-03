import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Search from "./Search";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <div className="ui centered grid">
              <div className="ten wide computer nine wide mobile column">
                <Routes>
                  <Route path="/" exact element={<Feed />} />
                  <Route path="/search" exact element={<Search />} />
                  <Route>404 Not Found</Route>
                </Routes>
              </div>
              <div className="four wide computer three wide mobile column">
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
