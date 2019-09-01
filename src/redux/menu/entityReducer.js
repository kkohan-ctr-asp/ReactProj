export default function entityReducer(state = [], { payload }) {
  if (payload && payload.entities) {
    const newState = { ...state };

    Object.keys(payload.entities).forEach(entityKey => {
      newState[entityKey] = {
        ...state[entityKey],
        ...payload.entities[entityKey],
      };
    });

    return newState;
  }
  return state;
}
