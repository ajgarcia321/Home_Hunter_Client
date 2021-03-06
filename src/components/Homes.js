import React, { Component } from 'react'
import Form from './Form'
let baseURL = process.env.REACT_APP_BASEURL

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000'
} else {
  baseURL = 'https://home-hunter-api.herokuapp.com/'
}
console.log('Current base URL:', baseURL)

export default class Homes extends Component {
  constructor() {
    super()
    this.state = {
      homes: []
    }
    this.handleAddHome = this.handleAddHome.bind(this)
    this.deleteHome = this.deleteHome.bind(this)
  }

  async getHomes() {
    try {
      let response = await fetch(baseURL+'/homes')
      let data = await response.json()
      let homes = [...data]
      this.setState({
        homes: homes
      })
    } catch (e) {
      console.log(e)
    }
  }

  async handleAddHome(e, home) {
    e.preventDefault()
    try {
      let response = await fetch(baseURL+'/homes', {
        body: JSON.stringify(home),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      let data = await response.json()
      let copyhome = [...this.state.homes]
      this.setState({
          homes: [...copyhome, data]
      })
      console.log(home)
      alert('Home added!')
    } catch (e) {
      console.log(e)
    }
  }

  componentDidMount() {
    this.getHomes()
  }

 async deleteHome(id){
     console.log(`I made a delete rquest to here:` + baseURL+'homes'+`${id}`)
try {
  let response = await fetch(baseURL + '/homes/' + id, {
    method: 'DELETE'
  })
  let data = await response.json()
  const foundHome = this.state.homes.findIndex(home => home._id === id)
  const copyHomes = [...this.state.homes]
  copyHomes.splice(foundHome, id)
  this.setState({
    homes: copyHomes
  })
} catch(e){
  console.error(e);
}
}


  render() {
    return (
      <>
        <main>
        <h1>Track all your housing options!</h1>
         <Form handleAddHome={this.handleAddHome} />
         <div className="cards">
            {this.state.homes.map(home => (
                <div className="home">
                <h3>Address: {home.address}</h3>
                <h4>Price: {home.price}</h4>
                <h4>Sq.Ft.: {home.sqft}</h4>
                <h4>Bedrooms: {home.bedrooms}</h4>
                <h4>Bathrooms: {home.bathrooms}</h4>
                <h4>Year: {home.year}</h4>
                <h4>Lot Size: {home.lot}</h4>
                <h4>Monthly: {home.monthly}</h4>
                <h4>Extras: {home.extras}</h4>
                <h4>Mortgage: {home.mortgage}</h4>
                <button onClick={()=> {this.deleteHome(home.id)}}>Delete</button>
                </div>
            ))}
            </div>
        </main>
      </>
    )
  }
}
