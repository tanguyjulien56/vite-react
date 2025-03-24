"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import GitHubIcon from "./ui/icon/GitHubIcon";
import LinkedInIcon from "./ui/icon/LinkedInIcon";
import NotionIcon from "./ui/icon/NotionIcon";
import InstagramIcon from "./ui/icon/InstagramIcon";
import FacebookIcon from "./ui/icon/FacebookIcon";

export default function Contact() {
  return (
    <div className="sticky w-full bottom-10 right-0 p-5 z-50 lg:hidden">
      <ul className=" hidden lg:flex items-start gap-2">
          <Link href="https://www.instagram.com/lebretonalois/">
            <Button
              variant="outline"
              className=" hover:shadow-md hover:shadow-purple-500/10"
            >
              <InstagramIcon
                size={16}
                className="text-foreground color-primary"
              />
            </Button>
          </Link>
          <Link href="https://www.facebook.com/alois.lebreton.9">
            <Button
              variant="outline"
              className=" hover:shadow-md hover:shadow-purple-500/10"
            >
              <FacebookIcon
                size={16}
                className="text-foreground color-primary"
              />
            </Button>
          </Link>
        </ul>
    </div>
  );
}
