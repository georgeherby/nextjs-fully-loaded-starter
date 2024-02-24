"use client";

import {signIn, signOut, useSession} from "next-auth/react";
import React from "react";
import Link from "next/link";

interface LogInOutButtonProps {
  isLoggedIn: boolean

}

const LogInOutButton: React.FC<LogInOutButtonProps> = ( { isLoggedIn }) => {
  if (isLoggedIn){
    return (
      <button
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    )
  }else {
    return (
      <Link href={'/api/auth/signin'}>
        Log In
      </Link>
    )
  }
}

export default LogInOutButton
