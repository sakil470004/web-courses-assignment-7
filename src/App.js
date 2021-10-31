import { React, useEffect, useState } from 'react';
import './App.css';
import Navigation from './component/Navigation/Navigation';
import fakeData from './fakeData/index'
import 'tachyons';
import CardList from './component/Card/CardList';
import SearchBox from './component/SearchBox/SearchBox'

function App() {
  const [data, setData] = useState([])
  // const [cost, setCost] = useState(0)
  const [cost, setCost] = useState(0);

  const handleAddToCart = newCost => {
    setCost(cost + newCost);
    setCourseEnrolled(courseEnrolled + 1)
  }


  const [courseEnrolled, setCourseEnrolled] = useState(0)
  const [searchField, setsearchField] = useState('')
  useEffect(() => {
    setData(fakeData);

  }, [])
  const filteredSearch = data.filter(dt => {
    return dt.courseName.toLowerCase().includes(searchField.toLowerCase());
  })

  const onSearchChange = (event) => {
    setsearchField(event.target.value)
    // console.log(event.target.value)
  }
  return (

    <div className="App">
      {/* navigation */}
      <Navigation></Navigation>
      {/* topbar ::here is div for flex */}
      <div className='search-total-wrapper tc'>
        {/* searchbar */}
        <SearchBox searchField={searchField}
          searchChange={onSearchChange}
        />
        <div>
          <h2>Total Price <span className='dark-red' >{cost} </span>$
          </h2>
          <h4>Course Enrolled <span className='dark-red'>{courseEnrolled} </span></h4>
        </div>
      </div>
      {/* home page all list it will be saparate a home page for batter readablity */}
      <CardList data={filteredSearch}
        handleAddToCart={handleAddToCart}
      />


    </div>
  );
}

export default App;
