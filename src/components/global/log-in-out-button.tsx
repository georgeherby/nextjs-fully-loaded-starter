"use client";

import {signIn, signOut, useSession} from "next-auth/react";
import React from "react";
import Link from "next/link";
import {Button, buttonVariants} from "@/components/ui/button";

interface LogInOutButtonProps {
  isLoggedIn: boolean

}

const LogInOutButton: React.FC<LogInOutButtonProps> = ( { isLoggedIn }) => {
  if (isLoggedIn){
    return (
      <Button variant="link"
        onClick={() => signOut()}
      >
        Sign Out
      </Button>
    )
  }else {
    return (
      <Link className={buttonVariants({ variant: "link" })} href={'/api/auth/signin'}>
        Log In
      </Link>
    )
  }
}

export default LogInOutButton
