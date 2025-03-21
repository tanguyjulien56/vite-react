"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import GitHubIcon from "./ui/icon/GitHubIcon";
import LinkedInIcon from "./ui/icon/LinkedInIcon";
import NotionIcon from "./ui/icon/NotionIcon";

export default function Contact() {
  return (
    <div className="sticky w-full bottom-10 right-0 p-5 z-50 lg:hidden">
      <ul className="flex gap-4 justify-end">
        <Link href="https://github.com/tanguyjulien56">
          <Button
            variant="outline"
            className=" hover:shadow-md hover:shadow-purple-500/10"
          >
            <GitHubIcon size={16} className="text-foreground color-primary" />
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/in/julientanguy56/">
          <Button
            variant="outline"
            className=" hover:shadow-md hover:shadow-purple-500/10"
          >
            <LinkedInIcon size={16} className="text-foreground color-primary" />
          </Button>
        </Link>
        <Link href="https://www.notion.so/D-veloppeur-Web-React-Next-js-NestJS-Docker-1a68dfa1b0544ddab03469846cb2f959">
          <Button
            variant="outline"
            className=" hover:shadow-md hover:shadow-purple-500/10"
          >
            <NotionIcon
              size={16}
              className="text-foreground color-primary text-white"
            />
          </Button>
        </Link>
      </ul>
    </div>
  );
}
