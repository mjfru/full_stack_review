import Property from "./Property"
import "./PropertyListStyle.css"

// 'props' must match whatever you called it in App.jsx
function PropertyList({ props }) {
  return (
    <div className="display">
      { props.map(p => (
        <Property
        // the value must match the child component and data key
          key={p.id}
          name={p.name}
          rating={p.rating}
          price={p.price}
        />
      )) }
    </div>
  )
}

export default PropertyList