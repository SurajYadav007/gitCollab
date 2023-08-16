let price_details = JSON.parse(localStorage.getItem("order-pricing-details"));
if (price_details) {
  document.querySelector(".totalprice").textContent = price_details.totalMRP;
  document.querySelector(".filldiscount").textContent =
    "- " + price_details.discount;
  document.querySelector(".amount_pay").textContent = price_details.totalAmt;
}

// document.querySelector("#btn-PO1").addEventListener("click", function () {
//   window.location.href = "./payment-confirmation.html";
// });
document.querySelector("#btn-PO2").addEventListener("click", function () {
  window.location.href = "./payment-confirmation.html";
});
document.querySelector("#btn-PO3").addEventListener("click", function () {
  window.location.href = "./payment-confirmation.html";
});
document.querySelector("#first").addEventListener("click", function () {
  window.location.href = "../cart/index.html";
});

document.querySelector("#second").addEventListener("click", function () {
  window.location.href = "../cart/address.html";
});

document.getElementById("logo").addEventListener("click", function () {
  window.location.href = "../index.html";
});

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".giftcard-base-apply");
const closeModalBtn = document.querySelector(".btn-close");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

document
  .querySelector(".giftcard-base-apply")
  .addEventListener("click", openModal);

closeModalBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
document.querySelector(".btn").addEventListener("click", function () {
  let gfcnumber = document.querySelector("#gcNumber").value;
  let gfcpin = document.querySelector("#gcPin").value;

  if (!gfcnumber || !gfcpin) {
    alert("fill the details");
  } else if (gfcnumber == "Masai50" && gfcpin == "123456") {
    let totalprice = JSON.parse(price_details.totalAmt) - 50;
    price_details.totalAmt = totalprice;
    document.querySelector(".amount_pay").textContent = totalprice;
    localStorage.setItem(
      "order-pricing-details",
      JSON.stringify(price_details)
    );
  }
  closeModal();
});
const paymentMethods = document.querySelectorAll("#mode > div");
const paymentDiv = document.getElementById("paymentDiv");
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
});
// let button1 = document.querySelector("#btn-place-order");
let button2 = document.querySelector("#btn-place-order2");
let button3 = document.querySelector("#btn-place-order3");
// document
//   .querySelector('input[id="PhonePe"]')
//   .addEventListener("change", () => {
//     console.log(button1.classList)
//     button1.classList.remove("hidden");
//     button2.classList.add("hidden");
//     button1.classList.add("hidden");
//   });
document
  .querySelector('input[id="Gpay"]')
  .addEventListener("change", () => {
    button2.classList.remove("hidden");
    // button1.classList.add("hidden");
    button3.classList.add("hidden");
  });
document
  .querySelector('input[id="Cod"]')
  .addEventListener("change", () => {
    button3.classList.remove("hidden");
    button2.classList.add("hidden");
    // button1.classList.add("hidden");
  });
let reco = document.querySelector('#Recommended-div');

document.querySelector('#py_mode1').addEventListener('click', function () {
  console.log(reco.classList)
  reco.classList.remove('hidden');
})
paymentMethods.forEach((method) => {
  method.addEventListener("click", () => {
    paymentMethods.forEach((m) => {
      m.querySelector("i").style.color = "#000000";
      m.querySelector("h5").style.color = "#000000";
    });

    // Set styles for the clicked payment method
    method.querySelector("i").style.color = "red";
    method.querySelector("h5").style.color = "red";

    switch (method.id) {
      case "py_mode1":
        // code block
        //renderRecommandPayment(paymentdiv);
        break;
      case "py_mode2":
        // code block
        // renderCODPayment(paymentdiv);
        break;
      default:
      // code block
    }
  });
});
const btn_visible = function () {
  place_orderbtn.classList.remove("hidden");
};
const btn_hide = function () {
  place_orderbtn.classList.add("hidden");
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