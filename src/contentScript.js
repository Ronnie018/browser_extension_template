(() => {
  // your code must be inside this function

  const elementConfig = {
    color: "#ffffff",
    bgColor: "#333333",
  };

  function elementAttributeSetter(element) {
    element.style.backgroundColor = elementConfig.bgColor;
    element.style.color = elementConfig.color;
    return element;
  }

  const htmlTag = document.getElementById("someDiv");

  const newElement = elementAttributeSetter(
    document.createElement("div")
  );

  htmlTag.appendChild(newElement);
  
})();
