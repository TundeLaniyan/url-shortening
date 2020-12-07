import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/header";
import Search from "./components/search/search";
import Results from "./components/results/results";
import Footer from "./components/footer/footer";
import Redirect from "./components/redirect/redirect";
import "./App.css";

const App: React.FC = () => {
  const [results, setResults] = useState<
    { longUrl: string; shortUrl: string }[]
  >([]);
  const [pending, setPending] = useState<boolean>(false);
  return (
    <div className="App">
      <Header setResults={setResults} setPending={setPending} />
      <Search setResults={setResults} setPending={setPending} />
      <Results results={results} pending={pending} />
      <Footer setResults={setResults} setPending={setPending} />
      <Router>
        <Route path="/:shortUrl" component={Redirect} />
      </Router>
    </div>
  );
};

export default App;
