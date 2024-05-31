import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={350}
    height={370}
    viewBox="0 0 370 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="30" y="40" rx="12" ry="12" width="350" height="370" />
  </ContentLoader>
);

export default Skeleton;
