import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import ModeToggle from "./ModeToggle";
import {
  Sheet,
  SheetDescription,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { APP_NAME } from "@/lib/constants";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
const NavMobile = () => {
  return (
    <div className="md:hidden ml-auto">
      <nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" aria-label="Open Navigation Menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="flex h-full items-center justify-center"
          >
            <SheetTitle className="text-center">{APP_NAME}</SheetTitle>
            <VisuallyHidden>
              <SheetDescription>Mobile navigation menu</SheetDescription>
            </VisuallyHidden>
            <SheetClose asChild>
              <Button asChild variant="ghost" className="w-full justify-center">
                <Link href="/">Home</Link>
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button asChild variant="ghost" className="w-full justify-center">
                <Link href="/menu">Menu</Link>
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button asChild variant="ghost" className="w-full justify-center">
                <Link href="/locations">Locations</Link>
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button asChild variant="ghost" className="w-full justify-center">
                <Link href="/about">About</Link>
              </Button>
            </SheetClose>
            <ModeToggle />
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default NavMobile;
