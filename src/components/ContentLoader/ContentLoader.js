import React, { useEffect } from "react";
import ContentLoader from "react-content-loader";
import { useMeasure } from "react-use";
const Loader = () => {
  const [svgElement, { width }] = useMeasure();

  useEffect(() => {}, [width]);

  return (
    <React.Fragment>
      <span ref={svgElement} style={{ width: "100%" }} />
      {width && (
        <ContentLoader
          speed={1.5}
          width={width}
          height={325}
          viewBox={`0 0 ${width} 325`}
          position="absolute"
          className="fadeInUp"
          backgroundColor="#eee"
          foregroundColor="#eee"
        >
          <rect
            x={width / 2 - 60}
            y="10"
            rx="5"
            ry="5"
            width="120"
            height="32"
          />
          <rect
            x={width / 2 + 70}
            y="18"
            rx="100"
            ry="100"
            width="15"
            height="15"
          />
          <rect x="10" y="80" rx="5" ry="5" width="85" height="32" />
          <rect x="100" y="80" rx="5" ry="5" width="65" height="32" />
          <rect x="10" y="130" rx="5" ry="5" width={width - 20} height="172" />
        </ContentLoader>
      )}
    </React.Fragment>
  );
};

export default Loader;
