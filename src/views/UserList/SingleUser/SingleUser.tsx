import React from "react";

import { actionTypes, useUserContext } from "context";
import { User } from "types";

import classes from "./SingleUser.module.css";

type SingleUserProps = { user: User };

export const SingleUser = ({ user }: SingleUserProps) => {
  const { state, dispatch } = useUserContext();

  const isUserAlreadyAddedToFriends = state.friends.find(
    (friend: User) => friend.id.value === user.id.value
  );
  const isUserAlreadyAddedToSubscriptions = state.subscriptions.find(
    (subscription: User) => subscription.id.value === user.id.value
  );

  return (
    <div className={classes.userWrapper}>
      <h1>
        {user.name.title + " "}
        {user.name.first + " "}
        {user.name.last}
      </h1>
      <h2>{user.cell}</h2>
      <img src={user.picture.large} alt="user avatar" />
      {isUserAlreadyAddedToFriends ? (
        <button
          onClick={() =>
            dispatch({ type: actionTypes.REMOVE_FRIEND, payload: user })
          }
        >
          Remove from friends
        </button>
      ) : (
        <button
          onClick={() =>
            dispatch({ type: actionTypes.ADD_FRIEND, payload: user })
          }
        >
          Add to friends
        </button>
      )}
      {isUserAlreadyAddedToSubscriptions ? (
        <button
          onClick={() =>
            dispatch({ type: actionTypes.REMOVE_SUBSCRIPTION, payload: user })
          }
        >
          Unubscribe
        </button>
      ) : (
        <button
          onClick={() =>
            dispatch({ type: actionTypes.ADD_SUBSCRIPTION, payload: user })
          }
        >
          Subscribe
        </button>
      )}
    </div>
  );
};
