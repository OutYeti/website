import Link from "next/link";
import React from "react";

const Navigation: React.FC = () => {
  return (
    <div className="flex flex-row items-center my-4 mx-4 lg:mx-20">
      <Link href="/">
        <div className="flex flex-row items-center">
          <img
            src="/profile.png"
            alt="Jamie Hughes"
            className="h-20 w-20 rounded-full"
          />
          <p>Jamie Hughes</p>
        </div>
      </Link>
    </div>
  );
};

export default Navigation;
