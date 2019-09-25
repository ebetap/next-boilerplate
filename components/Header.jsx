import Link from "next/link";

const Header = () => (
  <div>
    <Link href="/">
      <a title="Home">Home</a>
    </Link>
    <Link href="/about">
      <a title="About">About</a>
    </Link>
  </div>
);

export default Header;
