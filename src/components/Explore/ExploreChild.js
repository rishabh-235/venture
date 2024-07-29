import React from "react";
import { useSelector } from "react-redux";
import Navegators from "./Navegators";
import SignupInv from "../SignupInv";

export default function Explore() {
  // Assuming 'auth' slice contains 'userData' which is null if user is not signed in
  const userData = useSelector((state) => state.auth.userData);
  
  return (
    <div className="flex flex-col items-center justify-center">
      <Navegators />
      {!userData && (
        <div className="mt-[5rem] -mb-16">
          <SignupInv />
        </div>
      )}
    </div>
  );
}

