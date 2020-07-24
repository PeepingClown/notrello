import React, { useState } from "react";
import "./AddList.css";
import Button from "@material-ui/core/Button";
import Icon from "@mdi/react";
import { mdiCloseThick } from "@mdi/js";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function AddList(props) {
  const [add, setAdd] = useState(false);
  const [ListName, SetListName] = useState("");
  const [AddClick, SetAddClick] = useState([]);

  function ListNameHandler(event) {
    SetListName(event.target.value);
  }
  function AddListClick() {
    props.OnAdd(AddClick);
    SetAddClick(prev => {
      return [...prev, ListName];
    });
  }

  const addstyl = {
    backgroundColor: "white",
    opacity: 1
  };

  const formStyl = {
    backgroundColor: "rgb(193, 231, 243)",
    border: "2px solid",
    borderColor: "rgb(230, 77, 77)",
    boxShadow: "0px 8px rgba(230, 77, 77)"
  };

  function handler() {
    setAdd(true);
  }
  function disappear() {
    setAdd(prev => !prev);
  }

  return (
    <div className="AddListForm" style={add ? formStyl : null}>
      <input
        className="AddListInput"
        style={add ? addstyl : null}
        onClick={handler}
        onChange={ListNameHandler}
        placeholder="  + Add another list"
        value={ListName}
      />

      {add && (
        <div className="bigBtn">
          <span>
            <Button onClick={AddListClick} variant="contained" color="primary">
              Add List
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
  );
}

export default AddList;
