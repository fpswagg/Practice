import Home from "./Home.js";
import Game from "./Game.js";
import Help from "./Help.js";
import Support from "./Support.js";

function Body({ page, setPage }) {
  return (
    <div className="container" id="bodyContainer">
      { (page === 0) ?
        (<Home
          page={page}
          setPage={setPage}
        />) : (
          (page === 1) ?
          (<Game
            page={page}
            setPage={setPage}
          />) : (
            (page === 2) ?
            (<Help
              page={page}
              setPage={setPage}
            />) : (
              (page === 3) ?
              (<Support
                page={page}
                setPage={setPage}
              />) : 
              (<p>Error: could not find page</p>)
            )
          )
        )
      }
    </div>
  )
}

export default Body