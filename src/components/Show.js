import React from 'react'

class Show extends React.Component {
  render () {
    return (
    <div className="home">
        <h3>Address: {this.props.home.address}</h3>
        <h4>Price: {this.props.home.price}</h4>
        <h4>Sq.Ft.: {this.props.home.sqft}</h4>
        <h4>Bedrooms: {this.props.home.bedrooms}</h4>
        <h4>Bathrooms: {this.props.home.bathrooms}</h4>
        <h4>Year: {this.props.home.year}</h4>
        <h4>Lot Size: {this.props.home.lot}</h4>
        <h4>Monthly: {this.props.home.monthly}</h4>
        <h4>Extras: {this.props.home.extras}</h4>
        <h4>Mortgage: {this.props.home.mortgage}</h4>
        <button handleEdit={this.handleEdit}>Edit</button>
        <button handleDelete={this.handleDelete}>Delete</button>
    </div>
    )
  }
 }
export default Show
