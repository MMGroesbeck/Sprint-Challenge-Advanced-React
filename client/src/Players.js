import React from "react";
import PlayerList from "./PlayerList";
import { useSearch } from "./useSearch";
import { useForm } from "react-hook-form";

const Players = () => {
  const [country, updateCountry] = useSearch("");
  const { register, errors, handleSubmit, reset } = useForm({
    mode: "onBlur"
  });
  const onSubmit = data => {
      console.log(data);
      updateCountry(data);
  }
  return (
    <div>
        {/* <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="country" ref={register({ required: false })}>Search by Player Country:</label>
            <input id="country" name="country" />
            <input type="submit" />
        </form> */}
      <h1>Players:</h1>
      <PlayerList country={country} />
    </div>
  )
};

export default Players;
