import { useEffect } from 'react';
import AboutUsLayout from '../../Layout/AboutUsLayout/AboutUsLayout';

function AboutPage(props) {

  useEffect(() => {
    window.scrollTo(0, 0);
  },)

    return (
      
        <AboutUsLayout/>
      
    );
  }
  
  export async function getStaticProps() {
    return {
      props: {
        events: "about",
      },
      revalidate: 1800
    };
  }
  
  export default AboutPage;
  