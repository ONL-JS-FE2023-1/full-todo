import ACTION_TYPES from './actionTypes';

export const incrementAction = () => {
    return ({
        type: ACTION_TYPES.INCREMENT
    });
};

export const decrementAction = () => {
    return ({
        type: ACTION_TYPES.DECREMENT
    });
};

export const changeStepAction = (step) => {
    return ({
        type: ACTION_TYPES.STEP_CHANGE,
        payload: step
    });
};

export const toggleThemeAction = () => {
    return ({
        type: ACTION_TYPES.TOGGLE_THEME
    });
};