import { NavLink } from "react-router-dom";

import { cn } from "@/libs/utils";

const navMenus = [
  { label: "도서 검색", to: "/", end: true },
  { label: "내가 찜한 책", to: "/wishlist" },
];

export default function Header() {
  return (
    <header className="relative mx-auto flex h-20 w-full max-w-[1920px] items-center">
      <div className="absolute top-1/2 left-8 -translate-y-1/2 tracking-tight select-none">
        <h1 className="text-title-1 text-text-primary">CERTICOS BOOKS</h1>
      </div>
      <nav className="mx-auto flex gap-8">
        {navMenus.map((menu) => (
          <NavLink
            key={menu.to}
            to={menu.to}
            className={({ isActive }) =>
              cn("group pb-1", isActive ? "border-primary border-b-1" : "")
            }
            end={menu.end}
          >
            <span className="text-body-1 text-text-primary group-hover:text-primary transition-colors">
              {menu.label}
            </span>
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
