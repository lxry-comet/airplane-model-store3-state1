import React, { Component } from 'react'

import css from './Counter.module.css';

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
export class Counter extends Component {
	    handleIncrement = () => {
          console.log("+1");
        };
        handleDecrement = () => {
          console.log("-1");
        };
    render() {
		return (
			<div className={css.counter}>
				<span className={css.counterValue}>0</span>
				<div className={css.counterControls}>

					<button 
                        className={css.buttonIncrement}
                        onClick={this.handleIncrement}>
                    + 1
                     </button>

					<button
                        className={css.buttonDecrement}
                        onClick={this.handleDecrement}>
                    - 1
                     </button>

				</div>
			</div>
		)
	}
}
