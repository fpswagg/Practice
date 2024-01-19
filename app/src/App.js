import Body from "./reacts/Body";
import Header from "./reacts/Header";
import Footer from "./reacts/Footer";
import { useState } from "react";


import "./App.css";

function App() {
  const [page, setPage] = useState(0);

  return (
    <div>
      <Header
        page={page}
        setPage={setPage}
      />

      <Body
        page={page}
        setPage={setPage}
      />

      <Footer />
    </div>
  )
}

export default App