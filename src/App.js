import React, { Component } from 'react'
import Homes from './components/Homes'
import Map from './components/Map'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>Home Hunter!</h1>
        </header>
        <nav>
        <h1>Use our affiliated sites to find more options:</h1>
        <ul>
         <li><a href="https://www.zillow.com/">Zillow</a></li>
         <li><a href="https://www.apartments.com/">Apartments</a></li>
         <li><a href="https://www.homes.com/">Homes</a></li>
         <li><a href="https://www.realtor.com/">Realtor</a></li>
     </ul>
     </nav>
        <Homes />
        <aside>
        <Map
        google={this.props.google}
        center={{lat: 39.8283, lng: 98.5795}}
        height='300px'
        zoom={15}
        />
        </aside>
      </div>
    )
  }
}
