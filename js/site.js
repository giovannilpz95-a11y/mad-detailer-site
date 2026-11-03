/* =========================================================
   ONLINE BOOKING LINK
   When Square Appointments is set up, paste the booking page
   link between the quotes below, e.g.
     var BOOKING_URL = "https://book.squareup.com/appointments/xxxx";
   While it is empty, every "Book Now" button scrolls down to
   the quote form instead, so nothing on the site is broken.
   ========================================================= */
var BOOKING_URL = "";

/* =========================================================
   QUOTE FORM EMAILS (Web3Forms)
   Paste the access key Web3Forms emailed to her between the
   quotes. With a key, quote requests are emailed straight to
   her Gmail. Without one, the form uses Netlify Forms.
   ========================================================= */
var WEB3FORMS_KEY = "";

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

  // Send the quote form through Web3Forms when a key is set
  var form = document.getElementById("quote-form");
  if (form && WEB3FORMS_KEY) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var data = {};
      new FormData(form).forEach(function (v, k) { data[k] = v; });
      if (data["company-website"]) return; // spam bot filled the hidden box
      delete data["company-website"];
      delete data["form-name"];
      data.access_key = WEB3FORMS_KEY;
      data.subject = "New quote request: " + (data.service || "") + " (" + (data.name || "") + ")";
      data.from_name = "Mad Detailer website";
      if (data.email) data.replyto = data.email;
      btn.disabled = true; btn.textContent = "Sending...";
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data)
      }).then(function (r) { return r.json(); }).then(function (res) {
        if (!res.success) throw new Error(res.message);
        location.href = "thank-you.html";
      }).catch(function () {
        btn.disabled = false; btn.textContent = "Request my quote";
        alert("Sorry, that didn't send. Please call or text (469) 632-6633.");
      });
    });
  }

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
