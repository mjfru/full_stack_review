import ShoppingListItem from "./ShoppingListItem";

function ShoppingList({ items }) {
  return (
    <ul>
      { items.map(item => (
        <ShoppingListItem
          key={item.id}
          item={item.item} 
          quantity={item.quantity} 
          completed={item.completed}/>
         //! Since the names are exactly the same, we can use the spread operator, taking all the values from item and passes them through.
        // <ShoppingListItem key={item.id} {...item}/>
    ))}
    </ul>
  )
}

export default ShoppingList;