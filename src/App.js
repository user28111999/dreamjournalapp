// import { useEffect, useState } from "react"

import styled from "styled-components"

import "./app.scss"

// function App() {
//   const [dreams, setDreams] = useState([])
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     fetch("http://localhost:3001/dreams", {
//       method: "GET"
//     })
//     .then(res => res.json())
//     .then(response => {
//       setDreams(response)
//       setIsLoading(false)
//     })
//     .catch(err => console.log(err))
//   }, [])

//   return (
//     <div className="App">
//      {isLoading && <p>Please wait...</p>}
//      {dreams.map((dream, index) => (
//         <div key={index}>
//           <h2>{dream.title}</h2>
//         </div>
//      ))}
//     </div>
//   );
// }

const Container = styled.div`
	width: 90%;
	height: 100vh;
	margin-left: auto;
	margin-right: auto;
`

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 12px;
`

const App = () => {
	return (
		<Container>
			<Header></Header>
		</Container>
	)
}

export default App
