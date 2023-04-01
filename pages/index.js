import { useEffect } from 'react';
import HomeLayout from "../Layout/HomeLayout/HomeLayout";

function HomePage(props) {

  useEffect(() => {
    window.scrollTo(0, 0);
  },)

  
  return <HomeLayout />;
}

// export async function getStaticProps() {
//   return {
//     props: {
//       events: "featuredEvents",
//     },
//     revalidate: 1800
//   };
// }

export default HomePage;
