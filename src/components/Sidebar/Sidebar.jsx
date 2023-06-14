import React, { useState } from "react";
import "./Sidebar.scss";
import ListItemButton from "@mui/material/ListItemButton";

const sidelists = [
  "Dashboard",
  "Catalog",
  "Inventory",
  "Advertising",
  "Product Intelligence",
  "Forecasting",
  "Report Central",
  "Reports",
  "Link Accounts",
  "Settings",
  "Help",
];

export default function Sidebar() {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="sidebar">
        <span
          class="material-symbols-outlined"
          style={{ paddingLeft: "14px", marginTop: "12px", color: "gray" }}
        >
          {" "}
          sort
        </span>
        <ul style={{ listStyleType: "none", paddingLeft: "2px" }}>
          {sidelists.map((item, index) => (
            <ListItemButton
              className="list-items"
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "8px",
                "&.Mui-selected": {
                  borderLeft: "4px red solid",
                },
              }}
              selected={active}
              onClick={() => setActive(!active)}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  color: "white",
                  padding: "3px",
                  marginRight: "12px",
                  backgroundColor: "purple",
                  borderRadius: "20%",
                }}
              >
                brand_awareness
              </span>
              {item}
            </ListItemButton>
          ))}
        </ul>
      </div>
    </>
  );
}
