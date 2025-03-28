"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import NavigationMenu from "./NavigationMenu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import FacebookIcon from "./ui/icon/FacebookIcon";
import InstagramIcon from "./ui/icon/InstagramIcon";

export default function Header() {
  const { setTheme } = useTheme();

  return (
    <header className="fixed w-full backdrop-blur-sm top-0 right-0 left-0 p-5 z-50">
      <section className="flex gap-4 m-auto max-w-5xl">
        <div className="flex-[1] flex gap-2 items-center">
          <Avatar>
            <AvatarImage src="profile-pic.jpeg" alt="photo-profil" />
            <AvatarFallback>AL</AvatarFallback>
          </Avatar>
          <div className="hidden md:block text-lg font-semibold">
            Aloïs Le Breton
          </div>
        </div>
        <NavigationMenu />
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
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className=" hover:shadow-md hover:shadow-purple-500/10"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>
    </header>
  );
}
