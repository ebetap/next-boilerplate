import Link from 'next/link';
import Layout from '../components/Layout';

const Index = () => (
  <Layout>
    <div>
      <h1>Hello world</h1>
      <ul>
        <li>
          <Link href="/post/[id]" as="/post/lorem">
            <a>Lorem</a>
          </Link>
        </li>
        <li>
          <Link href="/post/[id]" as="/post/ipsum">
            <a>Ipsum</a>
          </Link>
        </li>
        <li>
          <Link href="/post/[id]" as="/post/dolor">
            <a>Dolor</a>
          </Link>
        </li>
      </ul>
    </div>
  </Layout>
);

export default Index;
