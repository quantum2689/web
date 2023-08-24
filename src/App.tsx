
// import { useState } from 'react';
// import './App.css';

// type aui = {
//   text: string;
// };

// function HAMDI(props: aui) {
//   return (
//     <h1>{props.text}</h1>
//   );
// }

// function App() {
//   const [heartVisible, setHeartVisible] = useState(false);
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       {heartVisible && <heart />}
//       <p>
//         I LOVE YOU GEDO <HAMDI text="HAMDI" /> AND <h1>OSMAN</h1>
//         <button
//           onClick={() => {
//             setCount(count + 1);
//             setHeartVisible(true);
//           }}
//         >
//           Click me to add one and show heart
//         </button>
//         <p>Count: {count} ❤️💕</p>
//       </p>
//     </>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import './App.css';

// type aui = {
//   text: string;
// };

// function HAMDI(props: aui) {
//   return (
//     <h1>{props.text}</h1>
//   );
// }

// function Heart() {
//   return (
//     <h1>💕❤️💕❤️</h1>
 
//   );
// }

// function App() {
//   const [heartVisible, setHeartVisible] = useState(false);
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       {heartVisible && <Heart />}
//       <p>
//         I LOVE YOU GEDO <HAMDI text="HAMDI" /> AND <h1>OSMAN</h1>
//         <button
//           onClick={() => {
//             setCount(count + 1);
//             setHeartVisible(true);
//           }}
//         >
//           Click me to add one and show heart
//         </button>
//         <p>Count: {count} ❤️</p>
//       </p>
//     </>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';

type aui = {
  text: string;
};

function HAMDI(props: aui) {
  return (
    <h1>{props.text}</h1>
  );
}

function Heart() {
  return (
    <h1>❤️💕💕❤️</h1>
 
  );
}

function App() {
  const [heartVisible, setHeartVisible] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <>
      {heartVisible && React.createElement(Heart)}
      <p>
        I LOVE YOU GEDO <HAMDI text="HAMDI" /> AND <h1>OSMAN</h1>
        <button
          onClick={() => {
            setCount(count + 1);
            setHeartVisible(true);
          }}
        >
          Click me to add one and show heart
        </button>
        <p>❤️ {count} ❤️ </p>
      </p>
    </>
  );
}

export default App;
