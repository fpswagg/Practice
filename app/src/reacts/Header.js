function Header({ page, setPage }) {
    const pages = ["Home", "Start Game", "Help", "Support"];

    return (
      <div className="container">
        <h1>Burning Web</h1>
        <ul> {pages.map((value, index) => (
            <li
                id={(index===page)?'selectedNav':'unselectedNav'}
                key={index}
                onClick={() => {
                  setPage(index);
                }}
            >
                {value}
            </li>
        ))} </ul>
      </div>
    )
  }

  Header.defaultProps = {
    page: 0
  };
  
  export default Header