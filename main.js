console.log("it's linked");

// grab the form element
let sneakerForm = document.querySelector("#sneaker-form");

// listen for the form being submitted
sneakerForm.addEventListener("submit", function (event) {
  console.log("event listener working as expected");
  // first prevent default to keep page from reloading immediately
  event.preventDefault();
  // then grab the input field(s) you are interested in
  let sneakerType = sneakerForm.querySelector("#sneaker-type");
  // get the value from the input field
  assessSneakerChoice(sneakerType.value);
});

function assessSneakerChoice(choice) {
  // given input from the form, gives feedback on the sneaker choice
  let response = document.createElement("div");
  let main = document.querySelector("#main-form");
  if (choice === "Beef and Broccoli New Balance") {
    response.innerText = `You want ${choice} sneakers?????? Great pick! You have excellent taste!`;
  } else {
    response.innerText = `${choice} are ok, but have you seen the Beef and Broccoli New Balance?`;
  }
  response.classList.add("bg-hot-pink");
  main.appendChild(response);
}
