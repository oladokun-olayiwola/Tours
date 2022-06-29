import React, { useEffect, useState } from "react";
import Tour from "./Tour";
const Tours = ({tours, setTours}) => {
  return <Tour tours={tours} setTours={setTours}/>

};

export default Tours;
