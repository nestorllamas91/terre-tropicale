import Head from 'next/head';

import Layout from '../layout/component';

const Contact = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Contact | Terre Tropicale</title>
      </Head>
      <Layout>
        <span>Contact</span>
      </Layout>
    </div>
  );
};

export default Contact;
