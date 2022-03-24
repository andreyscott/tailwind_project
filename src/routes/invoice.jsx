import React from 'react';
import { Link } from "react-router-dom";
import { getInvoices } from "./data";

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
      {
        invoices.map(invoice => (
            <Link to={`/invoices/${invoice.id}`}
                style={{
                    display: "block",
                    margin: "1rem 0" }}
                key={invoice.number}
             >{invoice.name}</Link>
        ))
      }
      </nav>
      </div>
  );
}