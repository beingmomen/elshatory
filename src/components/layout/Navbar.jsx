import logoImage from "../../assets/logo.webp";

const links = [
  {
    name: "الرئيسية",
    href: "/",
  },
  {
    name: "خدامتنا",
    href: "/about",
  },
  {
    name: "المشاريع",
    href: "/projects",
  },
  {
    name: "العملاء",
    href: "/clients",
  },
  {
    name: "المقالات",
    href: "/blogs",
  },
  {
    name: "قم بتقييمنا",
    href: "/contact",
  },
];

function Navbar() {
  return (
    <nav className="pt-6">
      <div className="container mx-auto px-4 flex justify-center lg:justify-between items-center">
        <img className="aspect-4/2 w-[160px]" src={logoImage} alt="logo" />

        <ul className="hidden lg:flex gap-8">
          {links.map((link) => (
            <li className="text-xl text-slate-400 font-bold">
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
