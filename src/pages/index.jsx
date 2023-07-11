import dynamic from "next/dynamic";
import SEO from "../components/seo";
import Homepage from "../components/MainHome/index"

 const index = () => {
    return(
        <>
        <SEO pageTitle="home" />
        <Homepage />
        </>
    );
 };

 export default dynamic(()=> Promise.resolve(index), {ssr: false});