import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu"
import { ModeToggle } from "../ui/mode-toggle";

// Reusable component for navigation links
const NavLink = ({ href, label }: { href: string; label: string }) => (
  <NavigationMenuItem>
    <NavigationMenuLink asChild>
      <a href={href} className={navStyles.link}>
        {label}
      </a>
    </NavigationMenuLink>
  </NavigationMenuItem>
)

export default function Component() {
  return (
    <header className={navStyles.header}>
      <div className={navStyles.container}>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#" className={navStyles.brand}>
                  <span className="sr-only">Acme Inc</span>
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <nav className={navStyles.navGroup}>
              <NavLink href="/" label="Home" />
              <NavLink href="/Aboutus" label="About Us" />
              <NavLink href="/Projects" label="Projects" />
              <NavLink href="/Ourwhy" label="Our Why" />
            </nav>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="ml-auto mr-4 flex items-center space-x-3">
        <Button className={navStyles.button} variant="outline">
          Sign up
        </Button>
        <Button className={navStyles.button} variant="outline">
          Login
        </Button>
        <ModeToggle />
      </div>
    </header>
  )
}

const navStyles = {
  link: "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-900",
  header:
    "sticky top-0 z-10 flex h-16 w-full items-center bg-white shadow dark:bg-gray-900",
  container: "mx-4 flex items-center md:mx-6",
  navGroup: "hidden space-x-4 md:flex",
  brand: "mr-6 flex items-center",
  button:
    "inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300",
}
