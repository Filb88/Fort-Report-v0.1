import "./components-css/header.css";

function header() {
  return (
    <div className="head">
      <h1>&#9814; Fort Report</h1>
      <div className="menu">
        <a href="https://y7wwdq.csb.app/home">Home |</a>
        <a href="https://y7wwdq.csb.app/about"> About |</a>
        <a href="https://y7wwdq.csb.app/contact"> Contact |</a>
      </div>

      <hr />
    </div>
  );
}

export default function Header() {
  return header();
}
