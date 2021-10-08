const buyNow = document.querySelector(".buy-now-button");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup-close");
const popupOverlay = document.querySelector(".popup-overlay");

buyNow.addEventListener("click", changeBookingTickets);
popupClose.addEventListener("click", changeBookingTickets);
popupOverlay.addEventListener("click", changeBookingTickets);

function changeBookingTickets() {
    popup.classList.toggle("active");
    popupOverlay.classList.toggle("active");
}

