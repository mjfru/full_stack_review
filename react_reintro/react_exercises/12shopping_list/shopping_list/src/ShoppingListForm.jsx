import { useState } from "react"

function ShoppingListForm( { addItem } ) {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });

  const handleChange = (event) => {
    setFormData(currentData => {
      return {
        ...currentData,
        [event.target.name]: event.target.value
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted!");
    addItem(formData);
    setFormData({product: "", quantity: 0})
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="product">Product Name: </label>
      <input 
        type="text" 
        placeholder="Product Name" 
        name="product"
        id="product"
        onChange={handleChange}
        value={formData.product}
        />
        
      <label htmlFor="quantity">Quantity: </label>
      <input 
        type="number" 
        placeholder="1" 
        name="quantity"
        id="quantity"
        onChange={handleChange}
        value={formData.quantity}
        />
      <button>Add Item</button>
    </form>
  )
}
export default ShoppingListForm