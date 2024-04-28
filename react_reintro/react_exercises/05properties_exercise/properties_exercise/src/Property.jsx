import './PropertyStyle.css'

function Property( { name, rating, price } ) {
  return (
    <div className="property">
      <h2>{name}</h2>
      <h4>{rating}⭐</h4>
      <h4>${price} a night</h4>
    </div>
  )
}

export default Property