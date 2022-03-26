import { Outlet, Link } from "react-router-dom";
import Header2 from "./component/header2";

export default function App() {
  return (
    <div>
      <Header2 />
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" boobes"}
        <Link to="/expenses">Expenses</Link>
        
      </nav>
      <Outlet />
    </div>
  );
}