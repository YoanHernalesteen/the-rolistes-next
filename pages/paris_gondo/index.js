import { useEffect } from 'react';

function GondoPage(props) {

  useEffect(() => {
    window.scrollTo(0, 0);
  },)


    return (
      <div>
        {props.events}
      </div>
    );
  }
  
  export async function getStaticProps() {
    return {
      props: {
        events: "Paris Gondo",
      },
      revalidate: 1800
    };
  }
  
  export default GondoPage;
  