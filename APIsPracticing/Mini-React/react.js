let globalState = null; // Holds our component's reactive data
let rootContainer = null; // Saves the <div id="root"> element reference
let appComponentFn = null; // Saves the function blueprint of our App

export function createElement(type, props, ...children) {
  props = props || {};
  const MappedChildrenArray = children.map((child) => {
    if (typeof child === "object") {
      return child;
    } else {
      return {
        type: "TEXT_ELEMENT",
        props: { nodeValue: child, children: [] },
      };
    }
  });
  return {
    type,
    props: {
      ...props,
      children: MappedChildrenArray,
    },
  };
}

export function render(vNode, container) {
  if (container && rootContainer === null) {
    rootContainer = container;
  }
  if (vNode.type === "TEXT_ELEMENT") {
    const textNode = document.createTextNode(vNode.props.nodeValue);
    container.appendChild(textNode);
  } else {
    const domElement = document.createElement(vNode.type);
    Object.keys(vNode.props)
      .filter((key) => key !== "children")
      .forEach((key) => {
        if (key.startsWith("on")) {
          const eventType = key.slice(2).toLowerCase();
          domElement.addEventListener(eventType, vNode.props[key]);
          return;
        } else {
          domElement[key] = vNode.props[key];
        }
      });
    vNode.props.children.forEach((child) => render(child, domElement));
    container.appendChild(domElement);
  }
}

export function useState(initialValue) {
    if(globalState===null){
        globalState=initialValue;
    }
    function setState(newValue){
        globalState=newValue;
        rootContainer.innerHTML="";
        render(appComponentFn(), rootContainer);    
    }
    return [globalState, setState];
}

export function setAppFn(fn) {
    appComponentFn = fn;
}