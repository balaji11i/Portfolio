import dynamic from 'next/dynamic';
import AboutMain from '../components/AboutMe'
import SEO from '../components/seo';
import Header from '../components/MainHome/Header';

const About = () => {
  return (
    <>
      <SEO pageTitle="About" />
      <AboutMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(About), { ssr: false });