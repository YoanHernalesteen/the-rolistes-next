import { useEffect } from "react";
import GondoLayout from "../../Layout/GondoLayout/GondoLayout";

function GondoPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return <GondoLayout />;
}

// export async function getStaticProps() {
//   return {
//     props: {
//       events: "Paris Gondo",
//     },
//     revalidate: 1800,
//   };
// }

export default GondoPage;
