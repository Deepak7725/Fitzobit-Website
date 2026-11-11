/*
  Fitzobit website settings — the ONLY file to edit for numbers, prices, pincodes and contact details.
  Lines marked  PLACEHOLDER  still need the real value from the owner.
  After editing, reload the page (Ctrl+F5).
*/
window.FITZ = {
  // WhatsApp number that receives orders: country code 91 + 10 digits, no spaces or +.
  whatsapp: '917010479248',
  // Shown in the footer; the Call button rings the WhatsApp number.
  phone: '+91 70104 79248',
  email: 'fitzobit@gmail.com',
  address: 'Thanjavur, Tamil Nadu',                                                      // PLACEHOLDER: full kitchen address later
  fssai: '',                                                                             // PLACEHOLDER: 14 digits; empty = line hidden
  instagram: 'https://www.instagram.com/fitzobit/',
  // Up to 6 Instagram posts for the strip: img = cover picture in assets/img, url = the post it opens.
  // Picked by the owner on 2026-11-11 (reel covers saved from Instagram). Empty list = drawn placeholders.
  instagramPhotos: [
    { img: 'assets/img/ig-1.jpg', url: 'https://www.instagram.com/fitzobit/reel/DeR1AW-p4CX/' },
    { img: 'assets/img/ig-2.jpg', url: 'https://www.instagram.com/uzhavanxpress/reel/Def0AU9i7Zp/' },
    { img: 'assets/img/ig-3.jpg', url: 'https://www.instagram.com/thanjavur_citizen_/reel/DfCeBACSLpB/' },
    { img: 'assets/img/ig-4.jpg', url: 'https://www.instagram.com/fitzobit/reel/Desz9SCpXA6/' },
    { img: 'assets/img/ig-5.jpg', url: 'https://www.instagram.com/vjpraveen_vlogs/reel/DeswNWyI3Ie/' },
    { img: 'assets/img/ig-6.jpg', url: 'https://www.instagram.com/fitzobit/reel/DesvAUNJOXQ/' },
  ],
  // Samsung Internet dark-mode correction (Samsung darkens the page even though it is light-only; this flips it back).
  // 'test' = only with ?samsungfix=1 in the address (for checking on a Samsung phone), 'on' = for every Samsung Internet
  // visitor in dark mode, 'off' = never. Add ?samsungfix=info to see what the phone reports.
  samsungDarkFix: 'test',

  // Wide food photo for the banner at the top on laptops/desktops (phones open straight on the menu),
  // e.g. 'assets/img/banner.webp' (about 1200 × 700). Empty = drawn meals.                        PLACEHOLDER
  bannerImage: '',

  // Pincodes we deliver to (Thanjavur city; owner kept this list on 2026-11-11).
  pincodes: ['613001', '613002', '613003', '613004', '613005', '613006', '613007', '613008', '613009', '613010'],

  // Delivery time choices in the order form (owner chose 1-hour slots on 2026-11-11).
  deliveryTimes: ['6:00 – 7:00 AM', '7:00 – 8:00 AM', '8:00 – 9:00 AM'],

  // Packages: delivery days per package (Sundays are never delivery days).
  plans: [
    { id: 'monthly', days: 26, name: { en: 'Monthly', ta: 'மாதம்' } },
    { id: 'weekly', days: 6, name: { en: 'Weekly', ta: 'வாரம்' } },
    { id: 'trial', days: 1, name: { en: 'Trial', ta: 'சோதனை' } },
  ],

  // Menu. Prices = whole package in rupees (same for veg and with egg), copied from the app's Money page on 2026-11-10.
  // egg: true = customer chooses Veg or With egg; false = no choice shown.
  // Descriptions are DRAFTS until checked against the WhatsApp catalogue.                PLACEHOLDER
  // icon: meal | bowl | oats | drink (the drawing on the tile).
  // photo: optional real photo for the tile, e.g. photo: 'assets/img/regular.webp' (square, about 600 × 600).
  //        When a meal has a photo it is shown instead of the drawing.                           PLACEHOLDER
  menu: [
    { id: 'regular', icon: 'meal', egg: true, prices: { monthly: 2999, weekly: 899, trial: 189 },
      name: { en: 'Regular Meal', ta: 'ரெகுலர் மீல்' },
      desc: { en: 'Our everyday balanced meal box — grains, vegetables, greens and protein.',
              ta: 'தினசரி சமச்சீர் உணவுப் பெட்டி — தானியம், காய்கறி, கீரை மற்றும் புரதம்.' } },
    { id: 'medium', icon: 'meal', egg: true, prices: { monthly: 3499, weekly: 999, trial: 189 },
      name: { en: 'Medium Meal', ta: 'மீடியம் மீல்' },
      desc: { en: 'A bigger portion of the balanced box for active days.',
              ta: 'சுறுசுறுப்பான நாட்களுக்கு கூடுதல் அளவு சமச்சீர் உணவு.' } },
    { id: 'large', icon: 'meal', egg: true, prices: { monthly: 3999, weekly: 1149, trial: 189 },
      name: { en: 'Large Meal', ta: 'லார்ஜ் மீல்' },
      desc: { en: 'Our biggest portion, for training days and big appetites.',
              ta: 'உடற்பயிற்சி நாட்களுக்கும் அதிக பசிக்கும் எங்கள் பெரிய அளவு.' } },
    { id: 'mealbowl', icon: 'bowl', egg: true, prices: { monthly: 2899, weekly: 894, trial: 189 },
      name: { en: 'Protein Salad Bowl', ta: 'புரோட்டீன் சாலட் பவுல்' },
      desc: { en: 'Fresh vegetables, greens and protein in one light bowl.',
              ta: 'புதிய காய்கறி, கீரை மற்றும் புரதம் — ஒரு லேசான பவுலில்.' } },
    { id: 'oats', icon: 'oats', egg: false, prices: { monthly: 3499, weekly: 999, trial: 189 },
      name: { en: 'Oats & Muesli', ta: 'ஓட்ஸ் & மியூஸ்லி' },
      desc: { en: 'Oats and muesli with fruit and nuts — a filling start to the day.',
              ta: 'பழம் மற்றும் கொட்டைகளுடன் ஓட்ஸ், மியூஸ்லி — நிறைவான காலை தொடக்கம்.' } },
    { id: 'wheyoats', icon: 'oats', egg: false, prices: { monthly: 3849, weekly: 1199, trial: 189 },
      name: { en: 'Protein Oats Bowl (with whey)', ta: 'புரோட்டீன் ஓட்ஸ் பவுல் (வே உடன்)' },
      desc: { en: 'Oats with whey protein for extra protein after a workout.',
              ta: 'உடற்பயிற்சிக்குப் பின் கூடுதல் புரதத்திற்கு வே புரோட்டீனுடன் ஓட்ஸ்.' } },
    { id: 'detox', icon: 'drink', egg: false, prices: { monthly: 1049, weekly: 333, trial: 189 },
      name: { en: 'Detox Drink', ta: 'டீடாக்ஸ் பானம்' },
      desc: { en: 'A fresh, light detox drink to go with your day.',
              ta: 'உங்கள் நாளுக்கு ஒரு புதிய, லேசான டீடாக்ஸ் பானம்.' } },
  ],
};
