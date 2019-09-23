import { Container } from 'reactstrap';
import Link from "next/link";

const Header = () => (
  <a>
    <Container>
      <Link href="/">
        <a title="Home">Home</a>
      </Link>
      <Link href="/about">
        <a title="About">About</a>
      </Link>
    </Container>
  </a>
);

export default Header;
