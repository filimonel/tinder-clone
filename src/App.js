import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chat from "./Chat";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat" exact>
            {/* Header */}
            <Header backButton="/" />
            {/* Chat screen */}
            <Chat />
          </Route>
          {/* individual Chat Screen */}
          <Route path="/" exact>
            {/* Header */}
            <Header />
            {/* Tinder Cards */}
            <TinderCards />
            {/* Buttons below tinder cards */}
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
