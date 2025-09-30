import { useState, useEffect, useContext } from "react";
import { Context } from "../contexts/ReduxContext";

function useStore() {
  const { store } = useContext(Context);
  return store;
}

function useDispatch() {
  const store = useStore();
  return store.dispatch;
}

function useSelector(selector) {
  const store = useStore();
  const [state, setState] = useState(() => {
    return selector(store.getState());
  });

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const newState = selector(store.getState());
      if (state !== newState) setState(newState);
    });
    return () => unsubscribe();
  }, [store, selector, state]);
  return state;
}

export { useStore, useDispatch, useSelector };
