import Link from "next/link";

export const navPaths = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "#projects",
    name: "Projects",
  },
  {
    path: "#contact",
    name: "Contact",
  },
];

export default function NavBar() {
  return (
    <div className="flex flex-col items-center p-16 text-gray-500/70">
      <nav className="flex space-x-8">
        {navPaths.map((navItem, index) => {
          return (
            <Link key={index} href={navItem.path}>
              <span className="hover:text-gray-700">{navItem.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
