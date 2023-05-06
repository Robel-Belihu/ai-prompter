"use client";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useState, useEffect } from "react";

const Nav = () => {
  const signOut = () => {};

  const [isLogged, setIsLogged] = useState(true);
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          className="object-contain"
          src="/assets/images/logo.svg"
          width={64}
          height={64}
          alt="ap-logo"
        />
        <p className="logo_text">ai-prompter</p>
      </Link>
      <div className="sm:flex hidden">
        {isLogged ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="purple_btn">
              Create a new Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              <Image src="/assets/images/logo.svg" width="40" height="40" />
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Nav;
