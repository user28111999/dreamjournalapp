// import { useEffect, useState } from "react"

import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSearch, faAngleRight, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
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
  color: #c8c9de;
  margin: 16px 12px 8px 12px;

  svg {
    font-size: 22px;
    margin-top: -2px;
  }
`

const TitleApp = styled.h2`
  margin: 0;
  font-size: 18px;
`

const ContainerSearch = styled.div`
  display: flex;
  margin: 0;

  svg {
    position: absolute;
    right: 44px;
    top: 58px;
    font-size: 18px;
    color: #c8c9de;
  }
`

const InputSearch = styled.input`
  border: 0;
  padding: 16px;
  border-radius: 12px;
  width: 100%;
  outline: none;

  &::placeholder {
    font-style: italic;
    opacity: .5;
  }
`

const ContainerItem = styled.div`
  background: white;
  border-radius: 12px;
  padding: 18px 12px;
  border-left: 12px solid #4278df;
  margin: 16px 0px;
  display: flex;
  justify-content: space-between;

  svg {
    margin-top: auto;
    margin-bottom: auto;
    font-size: 24px;
    margin-right: 12px;
    color: #c8c9de;
  }
`

const TitleDream = styled.h2`
  margin: 0;
  font-family: "Inter", sans-serif;
  font-size: 18px;
`

const Date = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  opacity: .25;
`

const ButtonNewDream = styled.button`
  position: absolute;
  bottom: 12px;
  border-radius: 50%;
  /* border-top-left-radius: 12px;
  border-top-right-radius: 12px; */
  font-size: 24px;
  outline: none;

  background: blue;
  color: white;

  border: 0;
  padding: 24px 32px;
`

function App() {
  return (
    <Container>
      <ButtonNewDream>
        <FontAwesomeIcon icon={faPencilAlt} />
      </ButtonNewDream>
      <Header>
        <TitleApp>DreamJournal</TitleApp>
        <FontAwesomeIcon icon={faCog} />
      </Header>
      <ContainerSearch>
        <InputSearch 
          type="text" 
          placeholder="Looking for a dream?"
        />
        <FontAwesomeIcon icon={faSearch} />
      </ContainerSearch>
        <ContainerItem>
          <div>
            <TitleDream>Un rêve</TitleDream>
            <Date>Lundi 21 Décembre - 04:20</Date>
          </div>
          <FontAwesomeIcon icon={faAngleRight} /> 
        </ContainerItem>
    </Container>
  )
}

export default App;
