import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import HeaderSeo from '@/components/header-seo';

const Home: NextPage = () => {
  return (
    <>
      <HeaderSeo entryTitle='We bring the gravy!' entryDescription='Page description under 160 characters' />
      <h1>Hello World</h1>
    </>
  );
};

export default Home;
