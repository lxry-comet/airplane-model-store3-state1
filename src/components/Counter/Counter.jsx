import React, { Component } from 'react'

import css from './Counter.module.css'

//* Звичайний компонент
// export function Counter() {
//     return(
// 		 <div className={css.counter}>
//         <span className={css.counterValue}>0</span>
//         <div className={css.counterControls}>
//             <button className={css.buttonIncrement}>+ 1</button>
//             <button className={css.buttonDecrement}>- 1</button>
//         </div>
//       </div>
//     );
// }

//* Компонент клас

//! Перерендер компонентів відбувається у двох випадках:
//! 1.Коли до них приходять нові props
//! 2.Коли змінюється state ✅

export class Counter extends Component {

  //! Дефолтні значення props
  static defaultProps = {
      initialValue: 9,
  }


	state = {
		// value: 5,
		// value1: 3,
		// value2: 8
    //! Початковий стан лічильника з props
      value: this.props.initialValue,

	}

  // !❗️❗️❗️ ❌ Так не можна робити!!!!
  // ?this.state.value = 6; 

  //* ✅ Так треба робити для створення НОВОГО ЗНАЧЕННЯ.
  //?  this.setState({ value: 9 });  

	// handleIncrement = () => {
	//     console.log("+1");
	//   };

	handleIncrement = event => {
		console.log('+1')
		// console.log('this:', this) //* Counter{...}
		// console.log('event:', event)
		// console.log('event.target:', event.target)
		// console.log('event.currentTarget:', event.currentTarget)

		// console.log('event.type:', event.type)
    // this.setState({ value: 9 });  
    //* Оновлення значення від ПОПЕРЕДНЬОГО
        this.setState(prevState => {
       return {
           value: prevState.value + 1,
       };
    });
	}

	handleDecrement = () => {
		console.log('-1')
            this.setState(prevState => {
       return {
           value: prevState.value - 1,
       };
    });
	}
	render() {
		return (
			<div className={css.counter}>
				<span className={css.counterValue}>{this.state.value}</span>
				<div className={css.counterControls}>
					<button
						className={css.buttonIncrement}
						onClick={this.handleIncrement}
					>
						+ 1
					</button>

					<button
						className={css.buttonDecrement}
						onClick={this.handleDecrement}
					>
						- 1
					</button>
				</div>
			</div>
		)
	}
}
