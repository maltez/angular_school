import actions from './actionTypes';

const reducer: any = function(state = { counter: 0}, action: any) {
    switch (action.type) {
        case actions.INCREMENT:
            
            return Object.assign(state, { counter: state.counter + 1 });
        case actions.DECREMENT:
        
            return Object.assign(state, { counter: state.counter - 1 });
        default:
            return state;
    }
};

export default reducer;
