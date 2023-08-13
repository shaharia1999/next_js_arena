// import React from 'react';
// import ReactDOM from 'react-dom';
// import Countdown from 'react-countdown';

// // Random component
// const Completionist = () => <span>You are good to go!</span>;

// ReactDOM.render(
//   (
//     <Countdown date={Date.now() + 5000}>
//       <Completionist />
//     </Countdown>
//   ),
//   document.getElementById('root')
// );
import React from 'react';
import Countdown from 'react-countdown';

const index = () => {
    return (
        <div>
             <Countdown
  date={Date.now() + 5000}
    intervalDelay={0}
    precision={3}
    renderer={props => <div>{props.total}</div>}
  />,
        </div>
    );
};

export default index;