import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

function DropdownMenu({ onSelectView, selectedView }) {
  const LABELS = {
    map: "Map View",
    bourdieu: "Bourdieu View",
    docs: "Documents View",
    treemap: "Treemap View",
    query: "Query View"
  };

  const handleSelectView = (event) => {
    if (onSelectView) onSelectView(`${event.target.value}`);
  };

  return (
    <FormControl
      variant="outlined"
      className="dropdown-menu"
      sx={{ minWidth: "200px", marginTop: "1em" }}
    >
      <InputLabel htmlFor="view-select">Select a View</InputLabel>
      <Select
        label="Select a View"
        value={selectedView}
        onChange={handleSelectView}
        inputProps={{
          name: "view-select",
          id: "view-select",
        }}
      >
        <MenuItem value="map">{LABELS.map}</MenuItem>
        <MenuItem value="bourdieu">{LABELS.bourdieu}</MenuItem>
        <MenuItem value="docs">{LABELS.docs}</MenuItem>
        <MenuItem value="treemap">{LABELS.treemap}</MenuItem>
        <MenuItem value="query">{LABELS.query}</MenuItem>
      </Select>
    </FormControl>
  );
}

DropdownMenu.propTypes = {
  onSelectView: PropTypes.func.isRequired,
};

export default DropdownMenu;
