import { ActionType } from "./../action-types/types";
import { Actions } from "./../actions/index";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: RepositoriesState = initialState,
  action: Actions
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return {
        ...state,
        loading: true,
        error: null,
        data: [],
      };
    case ActionType.search_repositories_success:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case ActionType.search_repositories_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: [],
      };

    default:
      return state;
  }
};

export default reducer;
