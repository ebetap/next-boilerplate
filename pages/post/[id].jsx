import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const Post = () => {
  const router = useRouter();

  return (
  <Layout>
    <h1>{router.query.id}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium incidunt dolorem sunt tempore voluptate.</p>
  </Layout>
  );
};

export default Post;
