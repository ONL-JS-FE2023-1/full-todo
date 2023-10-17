import React from 'react';
import {connect} from 'react-redux';
import { incrementAction, decrementAction, changeStepAction, toggleThemeAction } from './actions/actionCreator';

const Counter = (props) => {
    const onChangeStep = ({target: {value}}) => {
        props.changeStep(Number(value));
    }

    const toggleTheme = () => {
        props.toggleTheme();
    }

    console.log(props);

    return (
        <div style={{backgroundColor: props.themes.isDarkMode ? 'gray' : 'white'}}>
            <h1>{props.counter.counter}</h1>
            <input type="number" name="step" onChange={onChangeStep} value={props.counter.step} />
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement}>-</button>
            <button onClick={toggleTheme}>{props.themes.isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return state;
}

// const mapDispatchToProps = (dispatch) => { // функціональний вигляд
//     return {
//         increment: () => dispatch(createActionIncrement()),
//         decrement: () => dispatch(createActionDecrement()),
//         changeStep: (step) => dispatch(changeStepAction(step)),
//         toggleTheme: () => dispatch(toggleThemeAction())
//     }
// }

const mapDispatchToProps = { // об'єктний вигляд
    increment: incrementAction,
    decrement: decrementAction,
    changeStep: changeStepAction,
    toggleTheme: toggleThemeAction
}

const WrappedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default WrappedCounter;

/*

connect - функція, яка приймає два аргументи (обидва опціональні) і підписує компоненту на оновлення стейту
- mapStateToProps - функція, в яку буде приходити ВЕСЬ стейт і mapStateToProps повертатиме тільки ту частину стейту, яка потрібна цій компоненті
- mapDispatchToProps - функція, яка повертає об'єкт, наповнений огорнутими діспатчем actionCreator'aми

Каріювання функцій - трансформація функцій, щоб вони приймали аргументи не як f(a, b, c), f(a)(b)(c)

*/