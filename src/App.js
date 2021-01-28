import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* Custome components */
import Navbar from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Form from "./components/Create/Form";
import BlogDetails from "./components/Blog_Details/BlogDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/create">
              <Form />
            </Route>

            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
