document.getElementById("navbar-open-button").addEventListener("click", () => {
  const navbarShadowRoot = document.getElementsByTagName("m-navbar")[0].shadowRoot;
  navbarShadowRoot.getElementById("navbar").classList.remove("close");
  document.getElementsByTagName("html")[0].classList.add("no-scroll");
});

// document.addEventListener("readystatechange", (event) => {
//   console.log(`readystate: ${document.readyState}\n`)
// });

// document.onreadystatechange = () => {
//   if(document.readyState === "complete") {
//     const navbarShadowRoot = document.getElementsByTagName("m-navbar")[0].shadowRoot;
//     navbarShadowRoot.getElementById("navbar-close-button").addEventListener("click", () => {
//       document.getElementById("navbar").classList.add("close");
//       console.log(document.getRootNode().host)
//     });
//   }
// }
// document.getElementById("navbar-close-button").addEventListener("click", () => {
//   const navbarShadowRoot = document.getElementsByTagName("m-navbar")[0].shadowRoot;
//   console.log("close button clicked");
//   navbarShadowRoot.getElementById("navbar").classList.add("close");
// });



// $("#navbar-open-button").click(() => console.log("open button clicked"))
