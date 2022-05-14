import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Home from "./pages/Home";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <Home />
      {/* <h2>
        My first Apollo app{" "}
        <span role="img" aria-label="Rocket">
          🚀
        </span>
      </h2> */}
    </div>
  </ApolloProvider>
);
export default App;
