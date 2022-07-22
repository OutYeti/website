import Link from "next/link";
import React from "react";

const Navigation: React.FC = () => {
  return (
    <div className="flex flex-col items-center my-10 mx-4 lg:mx-20 cursor-pointer">
      <Link href="/">
        <div className="flex flex-col items-center">
          <img
            src="/profile.png"
            alt="Jamie Hughes"
            className="h-20 w-20 rounded-full border-2 border-slate-400"
          />
          <p className="font-bold text-2xl text-slate-400 hover:underline mt-3">
            JAMIE HUGHES
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Navigation;
