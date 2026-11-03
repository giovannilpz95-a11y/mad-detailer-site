/* =========================================================
   ONLINE BOOKING LINK
   When Square Appointments is set up, paste the booking page
   link between the quotes below, e.g.
     var BOOKING_URL = "https://book.squareup.com/appointments/xxxx";
   While it is empty, every "Book Now" button scrolls down to
   the quote form instead, so nothing on the site is broken.
   ========================================================= */
var BOOKING_URL = "";

(function () {
  if (BOOKING_URL) {
    document.querySelectorAll("a.book").forEach(function (a) {
      a.href = BOOKING_URL;
      a.target = "_blank";
      a.rel = "noopener";
    });
  }

  // "Book this" on a package card pre-fills the form's service box
  var select = document.getElementById("service");
  document.querySelectorAll("[data-service]").forEach(function (a) {
    a.addEventListener("click", function () {
      if (select) select.value = a.getAttribute("data-service");
    });
  });

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
