document.getElementById("customerBtn").addEventListener("click", () => {
  document.querySelector(".vendor-fields").style.display = "none";
  document.querySelector(".customer-fields").style.display = "block";
  document.getElementById("customerBtn").classList.add("active");
  document.getElementById("vendorBtn").classList.remove("active");
});

document.getElementById("vendorBtn").addEventListener("click", () => {
  document.querySelector(".vendor-fields").style.display = "block";
  document.querySelector(".customer-fields").style.display = "none";
  document.getElementById("vendorBtn").classList.add("active");
  document.getElementById("customerBtn").classList.remove("active");
});