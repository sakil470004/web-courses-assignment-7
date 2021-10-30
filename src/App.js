import { React, useEffect, useState } from 'react';
import './App.css';
import Navigation from './component/Navigation/Navigation';
import fakeData from './fakeData/index'
import 'tachyons';
import CardList from './component/Card/CardList';
import SearchBox from './component/SearchBox/SearchBox'

function App() {
  const [data, setData] = useState([])
  const [searchField, setsearchField] = useState('')
  useEffect(() => {
    setData(fakeData);

  }, [])
  const filteredSearch = data.filter(dt => {
    return dt.courseName.toLowerCase().includes(searchField.toLowerCase());
  })

 const onSearchChange = (event) => {
    setsearchField( event.target.value )
    // console.log(event.target.value)
  }
  return (

    <div className="App">

      <Navigation></Navigation>
      <SearchBox searchField={searchField} 
        searchChange={onSearchChange}
      />
      <CardList data={filteredSearch} />

      {/* {console.log(data)} */}

      {/* <header className="App-header">
     
        <img src={fakeData[9].img} className="app" alt="web" />
        {console.log(fakeData[1].img)}
        <p>
          {
            fakeData.map(data => <li> {data.courseName}</li>)
          }
        </p>
        {console.log(fakeData)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
