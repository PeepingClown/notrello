import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Icon from "@mdi/react";
import { mdiCloseThick } from "@mdi/js";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import "./List.css";

function List(props) {
  const [add, setAdd] = useState(false);

  const addstyl = {
    backgroundColor: "white",
    opacity: 1,
    boxShadow: "1.5px 1.5px rgba(0,0,0,0.2)"
  };

  const formStyl = {
    backgroundColor: "rgb(193, 231, 243)",
    borderColor: "rgb(230, 77, 77)"
  };

  function handler() {
    setAdd(true);
  }
  function disappear() {
    setAdd(prev => !prev);
  }
  return (
    <div className="ListBox">
      <h3 className="ListHeading">{props.text}</h3>
      <div className="ListForm" style={add ? formStyl : null}>
        <input
          className="ListInput"
          style={add ? addstyl : null}
          onClick={handler}
          placeholder="  + Add a card"
        />

        {add && (
          <div className="bigBtn">
            <span>
              <Button variant="contained" color="primary">
                Add Card
              </Button>
            </span>
            <span className="closeBtn">
              <Zoom in={true}>
                <Fab
                  onClick={disappear}
                  size="small"
                  color="secondary"
                  aria-label="add"
                >
                  <Icon className="close" path={mdiCloseThick} size={1} />
                </Fab>
              </Zoom>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default List;
