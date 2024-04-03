import { actionTypes } from "./actionTypes";

import { User } from "types";

type FriendsContextState = {
  friends: User[];
  subscriptions: User[];
};

export const initialState: FriendsContextState = {
  friends: [],
  subscriptions: [],
};

export const friendsReducer = (
  state: FriendsContextState,
  action: { type: string; payload: User }
) => {
  switch (action.type) {
    case actionTypes.ADD_FRIEND:
      console.log("add friend");
      return {
        ...state,
        friends: [...state.friends, action.payload],
      };
    case actionTypes.REMOVE_FRIEND:
      return {
        ...state,
        friends: state.friends.filter(
          (friend) => friend.id.value !== action.payload.id.value
        ),
      };
    case actionTypes.ADD_SUBSCRIPTION:
      return {
        ...state,
        subscriptions: [...state.subscriptions, action.payload],
      };
    case actionTypes.REMOVE_SUBSCRIPTION:
      return {
        ...state,
        subscriptions: state.subscriptions.filter(
          (subscription) => subscription.id.value !== action.payload.id.value
        ),
      };
    default:
      return state;
  }
};
