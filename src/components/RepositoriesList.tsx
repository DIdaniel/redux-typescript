import React, { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActionsHook } from "../hooks/useAction";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActionsHook();
  const { data, error, loading } = useTypedSelector((state) => state.reducerAll);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchRepositories(term);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const clickHandler = () => {
    console.log("clicked");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={changeHandler} value={term} />
        <button onClick={clickHandler}>SEARCH</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((item) => <div key={item}>{item}</div>)}
    </div>
  );
};

export default RepositoriesList;
