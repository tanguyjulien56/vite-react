import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

export default function NavigationMenu() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <Menubar className={cn("hidden lg:flex m-0 p-0")}>
        <MenubarMenu>
          <MenubarTrigger onClick={() => scrollToSection("section1")}>
            Accueil
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger onClick={() => scrollToSection("section2")}>
            Parcours
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger onClick={() => scrollToSection("section3")}>
            Stage
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger onClick={() => scrollToSection("section4")}>
            Skills
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      <DropdownMenu>
        <DropdownMenuTrigger className={cn("lg:hidden")} asChild>
          <Button variant="outline">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => scrollToSection("section1")}>
              Accueil
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => scrollToSection("section2")}>
              Parcours
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => scrollToSection("section3")}>
              Stage
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => scrollToSection("section4")}>
              Skills
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
