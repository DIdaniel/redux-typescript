import { ActionType } from "./../action-types/types";

interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
  type: ActionType.search_repositories_success;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: ActionType.search_repositories_ERROR;
  payload: string;
}

export type Actions =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
