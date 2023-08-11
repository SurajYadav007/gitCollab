var amount = localStorage.getItem("amount");

document.querySelector(".amount_pay").innerText = amount;

var MRP = localStorage.getItem("MRP");
document.querySelector(".totalprice").innerText = MRP;

var discount = localStorage.getItem("discount");
document.querySelector(".filldiscount").innerText = "- " + discount;

var itemcount = localStorage.getItem("itemcount");
document.querySelector(
  ".pricedets"
).innerText = `PRICE DETAILS ( ${itemcount} Items)`;

document.querySelector("#first").addEventListener("click", function () {
  window.location.href = "../wishlist/cart.html";
});

document.querySelector("#second").addEventListener("click", function () {
  window.location.href = "../payment/address.html";
});

const paymentMethods = document.querySelectorAll("#mode > div");
const paymentDiv = document.getElementById("paymentDiv");

paymentMethods.forEach((method) => {
  method.addEventListener("click", () => {
    let paymentdiv = document.getElementById("paymentDiv");
    paymentdiv.innerHTML = "";
    // console.log(method.id)
    // Reset styles for all payment methods
    paymentMethods.forEach((m) => {
      m.querySelector("i").style.color = "#000000";
      m.querySelector("h5").style.color = "#000000";
    });

    // Set styles for the clicked payment method
    method.querySelector("i").style.color = "red";
    method.querySelector("h5").style.color = "red";

    // // Display content in paymentDiv
    // paymentDiv.innerHTML = `<h4>${method.querySelector('h5').textContent}</h4><p>Additional content here...</p>`;

    switch (method.id) {
      case "py_mode1":
        console.log(`1`);
        // code block
        renderRecommandPayment(paymentdiv);
        break;
      case "py_mode2":
        // code block
        renderCODPayment(paymentdiv);
        break;
      default:
      // code block
    }
  });
});
renderRecommandPayment = (parentElement) => {
  let title = document.createElement("h4");
  title.innerHTML = "Recommended Payment Options";

  const form = document.createElement("form");

  const radioButton1 = document.createElement("input");
  radioButton1.type = "radio";
  radioButton1.name = "paymentOptions";

  const label1 = document.createElement("label");
  label1.innerHTML = "PhonePe";
  const br1 = document.createElement("br");
  form.append(radioButton1, label1, br1);

  const radioButton2 = document.createElement("input");
  radioButton2.type = "radio";
  radioButton2.name = "paymentOptions";

  const label2 = document.createElement("label");
  label2.innerHTML = "GPay";
  const br2 = document.createElement("br");

  form.append(radioButton2, label2, br2);

  const radioButton3 = document.createElement("input");
  radioButton3.type = "radio";
  radioButton3.name = "paymentOptions";

  const label3 = document.createElement("label");
  label3.innerHTML = "Cash On Delivery";
  form.append(radioButton3, label3);

  parentElement.append(title, form);
};

renderCODPayment = (parentElement) => {
  let title = document.createElement("h4");
  title.innerHTML = "Cash On Delivery (Cash/UPI)";

  const form = document.createElement("form");

  const radioButton1 = document.createElement("input");
  radioButton1.type = "radio";
  radioButton1.name = "paymentOptions";
  const label1 = document.createElement("label");
  label1.innerHTML = "Cash on Delivery (Cash/UPI)";
  form.append(radioButton1, label1);
  parentElement.append(title, form);
};

const showMoreLink = document.getElementById("showMore");
const showLessLink = document.getElementById("showLess");
const additionalOffers = document.getElementById("additionalOffers");

showMoreLink.addEventListener("click", () => {
  additionalOffers.style.display = "block";
  showMoreLink.style.display = "none";
  showLessLink.style.display = "block";
});

showLessLink.addEventListener("click", () => {
  additionalOffers.style.display = "none";
  showMoreLink.style.display = "block";
  showLessLink.style.display = "none";
});

function createRadioButton(labelText) {
  const radioButton = document.createElement("input");
  radioButton.type = "radio";
  radioButton.name = "paymentOptions";

  const label = document.createElement("label");
  label.textContent = labelText;

  paymentDiv.appendChild(radioButton);
  paymentDiv.appendChild(label);
  paymentDiv.appendChild(document.createElement("br"));
}
