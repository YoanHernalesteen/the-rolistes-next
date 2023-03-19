import { useEffect } from 'react';

function NewsListPage(props) {

  useEffect(() => {
    window.scrollTo(0, 0);
  },)


    return (
      <div>
        {props.events}
      </div>
    );
  }
  
  // export async function getStaticProps() {
  //   return {
  //     props: {
  //       events: "news list",
  //     },
  //     revalidate: 1800
  //   };
  // }
  
  export default NewsListPage;
  