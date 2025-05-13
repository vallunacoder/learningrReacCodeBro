// props = read-only properties that are shared between components.
//  A parent component can send data to a child component.
//  <Component key=value />

//(*defaultProps are now deprecated in React 19+ )

import Student from "./student"


function App() {

  return (
    <>
      <Student name="Spongebob" age="30" isStudent={true}></Student>
      <Student name="Natalia" age={29} isStudent={false}></Student>
      <Student name="Vale" age={29} isStudent={true}></Student>
      <Student name="Juli" age={18} isStudent={true}></Student>
      <Student></Student>

    </>
  )
}

export default App
