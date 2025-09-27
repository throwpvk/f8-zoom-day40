const __DO_NOT_USE_Actiontypes = {
  type: "@@F8-redux/INIT.h.e.l.l.o.m.y.f.r.i.e.n.d.s",
};

const createStore = (reducer, initState) => {
  let state = reducer(initState, __DO_NOT_USE_Actiontypes);
  const listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => listeners.splice(listeners.indexOf(listener), 1);
  };

  return { getState, dispatch, subscribe };
};
export { createStore };
