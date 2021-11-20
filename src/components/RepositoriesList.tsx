import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreator } from "../redux";

const RepositoriesList: React.FC = () => {
  const dispatch = useDispatch();

  const [term, setTerm] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(actionCreator.searchRepositories(term));
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const clickHandler = () => {};

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={changeHandler} value={term} />
        <button onClick={clickHandler}>SEARCH</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
