Update the existing SaaS design by renaming the platform from “Viral Pics” to “Vital FT Pics” and applying the following improvements and structural fixes. Do NOT redesign from scratch — modify and enhance the current layout.

--------------------------------------

0. GLOBAL NAME CHANGE:

- Replace ALL instances of “Viral Pics” with “Vital FT Pics”
- Update:
  - Logo text
  - Page titles
  - Headers
  - Metadata (if shown in design)
  - Footer branding
- Ensure naming is consistent across all pages

--------------------------------------

1. FIX NAVIGATION FLOW:

- Ensure “View Predictions” button on the landing page navigates to a fully functional "Predictions Page"
- Replace “Get Started” button with:
  - “Sign Up” (for new users)
  - “Sign In” (for existing users)
- Ensure both buttons navigate to authentication pages

--------------------------------------

2. CREATE / FIX PREDICTIONS PAGE (VERY IMPORTANT):

Design a dedicated Predictions Page that displays real match data driven by an API.

Page should include:

- Page title: “Predictions”
- Filter/search bar (by league or team)

Prediction cards for each match:
- Match: Team A vs Team B
- Date/time
- Final Prediction (bold and large)
- Confidence percentage
- Odds (Home / Draw / Away)

Expandable section inside each card:
- “View Breakdown” button
- When expanded, show:
  - Team form analysis
  - Home vs away performance
  - Odds-based probability insight
  - Final reasoning summary

Ensure this page looks dynamic and data-driven (like it is powered by a live API)

--------------------------------------

3. CONNECT UI TO API CONCEPT (VISUALLY):

Update UI elements to clearly reflect that data is coming from APIs:

- Add small label/tag on match cards: “Live Data”
- Add loading/sync indicators
- Show last updated timestamp

--------------------------------------

4. ADMIN DASHBOARD – PAYSTACK INTEGRATION:

Add a new section under “System Settings” or “Payments”:

Title: “Payment Integration (Paystack)”

Fields:
- Paystack Public Key (input field)
- Paystack Secret Key (input field, masked)
- Toggle: Enable/Disable Paystack
- Save button

Add note text:
“Keys are securely stored and used for subscription payments”

--------------------------------------

5. PRICING PAGE IMPROVEMENT:

Ensure pricing page is clearly structured and accessible from navigation

Plans:
- Day Pass – ₦100
- 1 Month – ₦500
- 3 Months – ₦1000 (highlight as best value)

Each plan should have:
- Subscribe button
- Clean card layout

--------------------------------------

6. HERO SECTION IMPROVEMENT:

Enhance the hero section with a background football visual:

- Add a large, full-width background image of a footballer kicking a ball
- The image should be placed BEHIND all hero content (text, buttons, etc.)
- Apply a strong dark overlay so the image appears faded and does not overpower the text
- The image should blend with the charcoal background using gradient overlay
- Ensure text remains highly readable and sharp

Design intent:
- The footballer image should feel subtle, atmospheric, and premium
- It should not look like a banner or foreground image
- It should feel like part of the background texture

--------------------------------------

7. UX IMPROVEMENTS:

- Ensure all buttons have clear navigation behavior
- Remove any dead clicks or non-functional elements
- Maintain fast, clean, minimal interaction design
- Keep everything within 2–3 clicks max

--------------------------------------

8. OVERALL GOAL:

The platform should now feel:
- Fully connected (UI ↔ API logic)
- Functional (no dead pages)
- Easy to navigate
- Ready for real backend integration (Supabase + APIs)

Do NOT change the color system or overall design style — only improve structure, usability, and functionality.