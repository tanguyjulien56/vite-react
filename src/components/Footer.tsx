"use client";

import Code from "./ui/Code";

const actualYear = new Date().getFullYear();

export default function Header() {
  return (
    <footer className=" my-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm  sm:text-center text-muted-foreground">
          © {actualYear} Created by Julien TANGUY with
          <Code className="inline-flex items-center gap-1 rounded">
            Next.js
          </Code>
        </span>
      </div>
    </footer>
  );
}
