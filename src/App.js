import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./containers/Header";
import ProductComponent from "./containers/ProductComponent";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productId" exact element={<ProductDetail />} />
          <Route>404 Not Fount</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
