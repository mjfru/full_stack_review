import { useState } from "react";

function ProfileSearchForm({ search }) {
  const [term, setTerm] = useState("");

  function handleChange(e) {
    setTerm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    search(term);
    setTerm("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={term} onChange={handleChange} />
      <button>Search!</button>
    </form>
  );

}

export default ProfileSearchForm;