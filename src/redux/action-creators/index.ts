import axios from "axios";
// import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { ActionType } from "../action-types/types";
import { Actions } from "../actions";

export const searchRepositories = (term: string) => {
  // const dispatch = useDispatch();

  return async (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get("https://registry.npmjs.org/-/v1/search", {
        params: {
          text: term,
        },
      });

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionType.search_repositories_success,
        payload: names,
      });
    } catch (err) {
      dispatch({
        type: ActionType.search_repositories_ERROR,
        payload: "에러발생!! 흐엉~~~!!",
      });
    }
  };
};
