import React from "react";
import View from "@/views";

const AuthLayout = (props) => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
        <View {...props} />
    </div>
  );
};

export default AuthLayout;
