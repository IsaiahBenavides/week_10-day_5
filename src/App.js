// All your imports should be at the top
// components
import Header from "./components/Header"
import Player from "./components/Player"
import Board from "./components/Board"

// css
import './App.css';

export default function App() {
  // What is JSX? JSX is a hybrid of JavaScript and HTML. In JSX, we can only return one parent element. Typically a div or you can use a React.Fragment
  return (
    <>
      <Header />
      <Player whichPlayer ="X"/>
      <Player whichPlayer ="O"/>
      <Board />
    </>

    // This is a fragment
    // <>
    // <Header />
    // <Header />
    // </>

    // This is the <div> way
    // <div>
    //   <Header />
    //   <Header />
    // </div>
  );
}

// const App = () => {
//   return (
//     <h1>
//       React Tac Toe
//     </h1>
//   )
// }

// export default App

// Vanilla JS
// function declarations using the function
// function expressions
// arrow functions6