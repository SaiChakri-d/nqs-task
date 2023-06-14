import React from "react";
import "./Dashboard.scss";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import { Select } from "@mui/material";
import Charts from "./Charts"
import Tables from "./Tables";

export default function Dashboard() {
  return (
    <div className="wrapper-content">
      <div>
        <div className="adbar-title">Advertising</div>
        <div className="adbar">
          <div className="adbar-menu">
            <div>
              <div className="adbar-subtitle">Marketplace</div>
              <div className="adbar-dropdown">
                <FormControl
                  variant="standard"
                  sx={{ m: 1, minWidth: 200 }}
                  size="small"
                >
                  <Select
                    labelId="select-marketplace"
                    id="demo-simple-select-standard"
                    size="small"
                    value="Amazon 974362"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Amazon 974362"}>Amazon 974362</MenuItem>
                    <MenuItem value={"Amazon 974362"}>Amazon 974362</MenuItem>
                    <MenuItem value={"Amazon 974362"}>Amazon 974362</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div>
              <div className="adbar-subtitle">Ads</div>
              <div className="adbar-dropdown">
                <FormControl
                  variant="standard"
                  sx={{ m: 1, minWidth: 200 }}
                  size="small"
                  value="All"
                >
                  <Select
                    labelId="select-marketplace"
                    id="demo-simple-select-standard"
                    size="small"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"All"}>All</MenuItem>
                    <MenuItem value={"All"}>All</MenuItem>
                    <MenuItem value={"All"}>All</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="adbar-date">
            <div className="adbar-subtitle time-zone">Date & Time</div>
            <div className="date-selection">
              <input type="date" />
              <span>
                <i className="bi bi-arrow-right"></i>
              </span>
              <input type="date" />
            </div>
            <div className="adbar-subtitle time-zone">PST Timezone</div>
          </div>
        </div>
      </div>
      <div className="dashboard-chart">
        <Charts />
      </div>
      <div className="dashboard-table">
      <Tables />
      </div>
    </div>
  );
}
