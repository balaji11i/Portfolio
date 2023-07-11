import dynamic from 'next/dynamic';
import AboutMain from '../components/About'
import SEO from '../components/seo';
import Header from '../components/MainHome/Header';

const About = () => {
  return (
    <>
      <SEO pageTitle="About" />
      <Header />
      <AboutMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(About), { ssr: false });