// import { useEffect, useState } from "react"

import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSearch } from "@fortawesome/free-solid-svg-icons";
import './App.css';

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
  margin: 0;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;

  svg {
    font-size: 24px;
  }
`

const Title = styled.h2`
  margin: 0;
`

const ContainerSearch = styled.div`
  display: flex;
  margin: 0;

  svg {
    position: absolute;
    color: #c8c9de;
    font-size: 24px;
  }
`

const InputSearch = styled.input`
  border: 0;
  padding: 16px;
  border-radius: 12px;
  width: 100%;
  font-family: 'Nunito', sans-serif;
  outline: none;

  &::placeholder {
    font-style: italic;
    opacity: .5;
  }
`

function App() {
  return (
    <Container>
      <Header>
        <Title>DreamJournal</Title>
        <FontAwesomeIcon icon={faCog} />
      </Header>
      <ContainerSearch>
        <InputSearch 
          type="text" 
          placeholder="Looking for a dream?"
        />
        <FontAwesomeIcon icon={faSearch} />
      </ContainerSearch>
    </Container>
  )
}

export default App;
