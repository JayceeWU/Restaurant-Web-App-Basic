import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
const NAV_TEXT_STYLE = "uppercase text-xl font-medium";

const NavDesktop = () => {
  return (
    <div className="hidden md:flex ml-auto items-center">
      <NavigationMenu className="max-w-full ml-10">
        <NavigationMenuList className="flex flex-wrap items-center gap-x-8">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/">
                <span className={NAV_TEXT_STYLE}>Home</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/menu">
                <span className={NAV_TEXT_STYLE}>Menu</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/locations">
                <span className={NAV_TEXT_STYLE}>Locations</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/about">
                <span className={NAV_TEXT_STYLE}>About</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavDesktop;
