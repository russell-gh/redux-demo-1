import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UPDATE_TODO } from "../redux/types";

const TodoEdit = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const onInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      {isEdit ? (
        <>
          <input onInput={onInput} type="text" />
          <button
            onClick={() => {
              dispatch({
                type: UPDATE_TODO,
                payload: { id: props.id, title: input },
              });
              setIsEdit(false);
            }}
          >
            Save
          </button>
        </>
      ) : (
        <button onClick={() => setIsEdit(true)}>Edit</button>
      )}
    </>
  );
};

export default TodoEdit;
