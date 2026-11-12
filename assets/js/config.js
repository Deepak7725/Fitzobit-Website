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

  // Menu. Prices = whole package in rupees (same for veg and with egg), from the WhatsApp catalogue on 2026-11-12
  // (Trial ₹189 is not in the catalogue, kept by the owner; Detox weekly ₹399 set by the owner on 2026-11-12).
  // egg: true = customer chooses Veg or With egg; false = no choice shown.
  // Descriptions: the three Fit Boxes follow the catalogue; the rest are DRAFTS for the owner to check.   PLACEHOLDER
  // icon: meal | bowl | oats | drink (the drawing on the tile).
  // photo: real photo for the tile (square, 600 × 600), shown instead of the drawing. Taken from the photos in the Fitzobit
  //        WhatsApp chat on 2026-11-12 (owner picked them). Detox Drink has no photo yet, so it keeps its drawing.
  menu: [
    { id: 'regular', icon: 'meal', photo: 'assets/img/meal-regular.webp', egg: true, prices: { monthly: 3499, weekly: 899, trial: 189 },
      name: { en: 'Regular Fit Box', ta: 'ரெகுலர் ஃபிட் பாக்ஸ்' },
      desc: { en: '3-compartment healthy meal box — our everyday balanced meal.',
              ta: '3 பகுதி ஆரோக்கிய உணவுப் பெட்டி — தினசரி சமச்சீர் உணவு.' } },
    { id: 'medium', icon: 'meal', photo: 'assets/img/meal-medium.webp', egg: true, prices: { monthly: 3999, weekly: 999, trial: 189 },
      name: { en: 'Medium Fit Box', ta: 'மீடியம் ஃபிட் பாக்ஸ்' },
      desc: { en: '5-compartment complete meal box for active days.',
              ta: 'சுறுசுறுப்பான நாட்களுக்கு 5 பகுதி முழு உணவுப் பெட்டி.' } },
    { id: 'large', icon: 'meal', photo: 'assets/img/meal-large.webp', egg: true, prices: { monthly: 4599, weekly: 1149, trial: 189 },
      name: { en: 'Large Fit Box', ta: 'லார்ஜ் ஃபிட் பாக்ஸ்' },
      desc: { en: '8-compartment high-protein box for training days and big appetites.',
              ta: 'உடற்பயிற்சி நாட்களுக்கும் அதிக பசிக்கும் 8 பகுதி அதிக புரத பெட்டி.' } },
    { id: 'proteinsalad', icon: 'bowl', photo: 'assets/img/meal-proteinsalad.webp', egg: false, prices: { monthly: 3799, weekly: 949, trial: 189 },
      name: { en: 'Protein Salad Bowl', ta: 'புரோட்டீன் சாலட் பவுல்' },
      desc: { en: 'Fuel your body, boost your protein: a big fresh salad bowl packed with protein.',
              ta: 'உடலுக்கு ஆற்றல், கூடுதல் புரதம்: புரதம் நிறைந்த பெரிய புதிய சாலட் பவுல்.' } },
    { id: 'proteinpunch', icon: 'meal', photo: 'assets/img/meal-proteinpunch.webp', egg: false, prices: { monthly: 3799, weekly: 949, trial: 189 },
      name: { en: 'Protein Punch Meal Box', ta: 'புரோட்டீன் பஞ்ச் மீல் பாக்ஸ்' },
      desc: { en: 'Fuel your body, boost your protein: a balanced meal box with an extra protein punch.',
              ta: 'உடலுக்கு ஆற்றல், கூடுதல் புரதம்: கூடுதல் புரதத்துடன் சமச்சீர் உணவுப் பெட்டி.' } },
    { id: 'mealbowl', icon: 'bowl', photo: 'assets/img/meal-mealbowl.webp', egg: true, prices: { monthly: 2899, weekly: 894, trial: 189 },
      name: { en: 'Standalone Protein Salad', ta: 'ஸ்டாண்ட்அலோன் புரோட்டீன் சாலட்' },
      desc: { en: 'Fresh daily protein salad in an eco-friendly bowl.',
              ta: 'சூழலுக்கு உகந்த பவுலில் தினமும் புதிய புரோட்டீன் சாலட்.' } },
    { id: 'oats', icon: 'oats', photo: 'assets/img/meal-oats.webp', egg: false, prices: { monthly: 3599, weekly: 999, trial: 189 },
      name: { en: 'Oats & Muesli Breakfast', ta: 'ஓட்ஸ் & மியூஸ்லி காலை உணவு' },
      desc: { en: 'Fresh, high-fibre breakfast bowl of oats and muesli with fruit and nuts.',
              ta: 'பழம், கொட்டைகளுடன் நார்ச்சத்து நிறைந்த ஓட்ஸ், மியூஸ்லி காலை உணவு.' } },
    { id: 'wheyoats', icon: 'oats', photo: 'assets/img/meal-wheyoats.webp', egg: false, prices: { monthly: 4299, weekly: 1199, trial: 189 },
      name: { en: 'Protein Oats Bowl (25 g protein)', ta: 'புரோட்டீன் ஓட்ஸ் பவுல் (25 கி புரதம்)' },
      desc: { en: 'Oats with whey protein, a different variation every day.',
              ta: 'வே புரோட்டீனுடன் ஓட்ஸ் — தினமும் ஒரு புதிய வகை.' } },
    { id: 'detox', icon: 'drink', egg: false, prices: { monthly: 1199, weekly: 399, trial: 189 },
      name: { en: 'Daily Detox Drink', ta: 'தினசரி டீடாக்ஸ் பானம்' },
      desc: { en: 'A fresh, light detox drink to go with your day.',
              ta: 'உங்கள் நாளுக்கு ஒரு புதிய, லேசான டீடாக்ஸ் பானம்.' } },
  ],
};
