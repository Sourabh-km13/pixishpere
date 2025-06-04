import React, { Suspense } from "react";
import Pixisphere from "../../components/pixisphere/Pixisphere";
const PixispherePage = () => {
  return (
    <Suspense fallback={<div>loading...</div>}
    
    >
    <div>
      <Pixisphere />
    </div>
    </Suspense>
  );
};

export default PixispherePage;
