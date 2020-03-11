import React, { useEffect } from "react";
import ReactDOM from "react-dom";

// Let's create a Modal component that is an abstraction around
// the portal API.
const demoRoot = document.getElementById("demo-portal");

const DemoPortal = props => {
  // Create a div that we'll render the modal into. Because each
  // Modal component has its own element, we can render multiple
  // modal components into the modal container.
  const el = document.createElement("div");

  useEffect(() => {
    // Append the element into the DOM on mount. We'll render
    // into the modal container element (see the HTML tab).
    el.style.cssText =
      "position: fixed;top: 0;left: 0;width: 100%;height: 100vh;background: black;opacity:1;";
    demoRoot.appendChild(el);
  }, [el]);

  useEffect(() => {
    return () => {
      console.log("cleaned up");
      // Remove the element from the DOM when we unmount
      demoRoot.removeChild(el);
    };
  }, []);

  // Use a portal to render the children into the element
  return ReactDOM.createPortal(
    // Any valid React child: JSX, strings, arrays, etc.
    props.children,
    // A DOM element
    el
  );
};

export default DemoPortal;
