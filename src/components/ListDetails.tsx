import { TextField } from "@mui/material";
import React, { useState } from "react";

const ListDetails = () => {
  return (
    <div className="mt-6">
      <p className="font-medium">List details</p>
      <p className="mb-3 text-sm">Add wish list name and description.</p>
      <div className="text-xl">
        <TextField
          id="filled-basic"
          fullWidth
          size="small"
          label="Wish list name"
          color="secondary"
          variant="outlined"
        />
      </div>

      <div className="mt-3">
        <TextField
          id="filled-basic"
          fullWidth
          size="small"
          label="Description (optional)"
          color="secondary"
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default ListDetails;
