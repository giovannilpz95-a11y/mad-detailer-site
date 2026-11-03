THE MAD DETAILER WEBSITE
========================

WHAT'S IN THIS FOLDER
  index.html      the home page
  thank-you.html  shown after someone sends the quote form
  404.html        shown for a bad link
  css/site.css    colors and styles (accent color is at the very top)
  js/site.js      the Square booking link goes here (top of the file)
  images/         all photos, the logo and the hero video

1. PUT IT ONLINE (Netlify, about 5 minutes)
  a. Log in at app.netlify.com.
  b. Sites > Add new site > Deploy manually.
  c. Drag THIS WHOLE FOLDER (the one with index.html in it) onto the page.
  d. Netlify gives you a link like random-name-123.netlify.app. Open it and check it.
  e. Site configuration > Change site name > something like "maddetailer".
  To update later: Deploys tab > drag the folder in again.

2. TURN ON THE QUOTE FORM EMAILS
  a. In the site: Forms > Enable form detection. Then drag the folder in again
     (Netlify only finds the form on a deploy after detection is on).
  b. Forms > Form notifications > Add notification > Email notification.
     Event "New form submission", form "quote", email maddetailermobile@gmail.com.
  c. Send a test from the live site and check that the email arrives
     (check spam the first time).
  Free plan covers 100 form submissions a month.

3. CONNECT HER GODADDY DOMAIN
  a. Netlify: Domain management > Add a domain > type the domain (e.g. maddetailer.com)
     > Verify > Add domain.
  b. GoDaddy: My Products > the domain > DNS (Manage DNS).
     - Edit the "A" record with Name "@": Value 75.2.60.5. Delete any other "@" A records
       (GoDaddy's "Parked" one included).
     - Edit the "CNAME" record with Name "www": Value maddetailer.netlify.app
       (use the real Netlify site name from step 1e).
     - Save. Don't touch MX records (those are for email).
  c. Back in Netlify, wait 10 min to a few hours. HTTPS turns on by itself once DNS
     is detected (Domain management > HTTPS > Verify DNS if it hasn't).

4. WHEN SQUARE APPOINTMENTS IS READY
  Open js/site.js, paste the booking link between the quotes on the
  BOOKING_URL line, save, and drag the folder into Netlify again.
  Until then every "Book Now" button goes to the quote form.

5. SWITCH TO HOT PINK (or any color)
  Preview it first: add ?accent=pink to the end of the site link.
  To make it permanent: open css/site.css and change the two ACCENT lines at the
  top (the pink values are written right there in the comment).

6. SWAP PHOTOS
  Replace a file in images/ with a new one using the SAME file name.
  Best size: tall (portrait) 720 x 960 JPG, under 200 KB.
