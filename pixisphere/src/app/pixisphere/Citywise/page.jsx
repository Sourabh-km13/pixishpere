
import React, { Suspense } from "react";
import Citywise from "../../../components/Citywise/Citywise";



const CitywisePage = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <div>
      <Citywise />
    </div>
    </Suspense>
  );
};

export default CitywisePage;
