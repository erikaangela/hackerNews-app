import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Search from "./Search";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <div className="ui centered grid container">
            <div className="ten wide computer ten wide mobile column">
              <Routes>
                <Route path="/" exact element={<Feed />} />
                <Route path="/search" exact element={<Search />} />
                <Route>404 Not Found</Route>
              </Routes>
            </div>
            <div className="four wide computer five wide mobile column">
              <Sidebar />
            </div>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
