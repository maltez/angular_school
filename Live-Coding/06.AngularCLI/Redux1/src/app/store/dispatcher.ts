import actions from './actions';
const { INCREMENT, DECREMENT } = actions;

const dispatcher = function(state = {count: 0}, action) {
    switch (action.type) {
        case INCREMENT:
            return {...state, count: state.count += 1};
        case DECREMENT:
            return {...state, count: state.count -= action.payload};
        default:
            return state;
    }
};

export default dispatcher;
