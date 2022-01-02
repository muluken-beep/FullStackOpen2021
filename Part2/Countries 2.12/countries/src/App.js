import react, {useState, useEffect} from 'react';
import axios from 'axios'


function App() {
  const [searchFilter, setSearchFilter] = useState('')
  const [countries, setCountries] = useState([])
 
   
  
  useEffect(() => {
       axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)        
      })
  }, []) 

 const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchFilter.toLowerCase()))
  
 const ShowResults = ({filteredCountries}) =>{
  if(filteredCountries.length > 10) return <div>Too many matches, specify another filter </div>
  if(filteredCountries.length === 1){
    const country = filteredCountries[0]
    return(<div>
        <h1>{country.name.common}</h1>
        <div>capital {country.capital}</div>
         <div>population {country.population}</div>
         <img src={country.flags} alt={country.name}/>    

    </div>
      )
  }

   return filteredCountries.map(country => <div key={country.name.common}>{country.name.common}</div>)     
 }
          
  return (    
    <div>
          find countries 
            <input value = {searchFilter} onChange={e => setSearchFilter(e.target.value)}/>
          <ShowResults filteredCountries={filteredCountries}/>             
      </div>  
  );
}

export default App;
