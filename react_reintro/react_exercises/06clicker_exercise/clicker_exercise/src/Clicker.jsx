function Clicker({ message, buttonText }) {

const handleClick = () => {
  alert(message)
}

  return (
    <div>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  )
}

export default Clicker