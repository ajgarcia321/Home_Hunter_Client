import React, { Component } from 'react'

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      address: '',
      price: 0,
      sqft: 0,
      bedrooms: 0,
      bathrooms: 0,
      year: 0,
      lot: 0,
      monthly: 0,
      mortgage: 0,
      extras: '',
      show: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.toggleShow = this.toggleShow.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  toggleShow() {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div className="form">
        <h1 onClick={this.toggleShow}>Add a Listing</h1>
        {this.state.show ? (
          <form
            onSubmit={e => {
              this.props.handleAddHome(e, this.state)
              this.toggleShow()
            }}
          >
            <input
              type="text"
              placeholder="Address"
              name="address"
              onChange={this.handleChange}
            />
            <input
              type="number"
              placeholder="Price"
              name="price"
              onChange={this.handleChange}
            />
            <input
              type="number"
              placeholder="Sq.Ft."
              name="sqft"
              onChange={this.handleChange}
            />
            <input
              type="number"
              placeholder="Bedrooms"
              name="bedrooms"
              onChange={this.handleChange}
            />
            <input
              type="number"
              placeholder="Bathrooms"
              name="bathrooms"
              onChange={this.handleChange}
            />
            <input
              type="number"
              placeholder="Year"
              name="year"
              onChange={this.handleChange}
            />
            <input
              type="number"
              placeholder="Lot"
              name="lot"
              onChange={this.handleChange}
            />
            <input
              type="number"
              placeholder="Monthly"
              name="monthly"
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="Extras"
              name="extras"
              onChange={this.handleChange}
            />
            <input
              type="number"
              placeholder="Mortgage"
              name="mortgage"
              onChange={this.handleChange}
            />
            <input type="submit" />
          </form>
        ) : (
          ''
        )}
      </div>
    )
  }
}
