/*
  Website text in English and Tamil. Each key is used by an element with data-i18n="key" in index.html
  (data-i18n-ph = placeholder text, data-i18n-aria = aria-label). {pin} is replaced by the pincode.
  Tamil text was written by Claude — please have it checked.
*/
window.FITZ_TEXT = {
  en: {
    'nav.menu': 'Menu', 'nav.how': 'How it works', 'nav.area': 'Delivery area', 'nav.faq': 'FAQ', 'nav.contact': 'Contact',
    'nav.order': 'Order now', 'cart.open': 'Open cart',
    'pref.veg': 'Veg', 'pref.egg': 'With egg', 'pref.eggShort': 'With egg',

    'hero.eyebrow': 'Meal delivery · Thanjavur', 'hero.h1a': 'Eat well.', 'hero.h1b': 'Every day.',
    'intro.lede': 'Fresh, balanced meal boxes at your door, Monday to Saturday. Order on WhatsApp.',
    'help.open': 'How it works', 'help.go': 'Got it — show the menu', 'help.ask': 'Ask us on WhatsApp',
    'fact.days': 'Mon–Sat delivery', 'fact.pref': 'Veg or with egg', 'fact.upi': 'Pay by UPI', 'fact.pause': 'Pause when you need',

    'how.eyebrow': 'Simple as that', 'how.h': 'How it works',
    'how.1h': 'Choose', 'how.1p': 'Pick your meals and a monthly, weekly or trial package.',
    'how.2h': 'Order on WhatsApp', 'how.2p': 'Fill in your address and start date. WhatsApp opens with your order ready — just press Send.',
    'how.3h': 'We confirm, you pay', 'how.3p': 'We check your area and start date, then send a UPI link or QR.',
    'how.4h': 'Fresh at your door', 'how.4p': 'Your meals arrive at your chosen time, Monday to Saturday.',

    'menu.eyebrow': 'Menu & packages', 'menu.h': 'Pick your box', 'menu.sub': 'Prices are for the whole package. Same price for veg and with egg.',
    'menu.days': '{n} delivery days', 'menu.day1': '1 box', 'menu.perbox': '≈ ₹{n} a box', 'menu.add': 'Add to cart', 'menu.added': 'Added ✓',
    'menu.qty': 'Quantity', 'menu.addShort': 'Add', 'menu.howlink': 'How does ordering work?',

    'area.eyebrow': 'Delivery area', 'area.h': 'Do we deliver to you?', 'area.p': 'We deliver in Thanjavur city, Monday to Saturday. Sundays are off.',
    'area.ph': 'Your 6-digit pincode', 'area.btn': 'Check',
    'area.yes': 'Yes! We deliver to {pin}.', 'area.no': 'We don’t deliver to {pin} yet. Message us on WhatsApp and we’ll let you know.',
    'area.bad': 'Please enter a 6-digit pincode.',

    'insta.eyebrow': 'From our kitchen', 'insta.h': 'Follow us on Instagram', 'insta.btn': 'Follow @fitzobit', 'insta.soon': 'Photos coming soon',

    'faq.eyebrow': 'Good to know', 'faq.h': 'Questions',
    'faq.q1': 'Which days do you deliver?', 'faq.a1': 'Monday to Saturday. There is no delivery on Sundays, and Sundays are not counted in your package.',
    'faq.q2': 'Can I pause a day?', 'faq.a2': 'Yes, for monthly and weekly packages. Tell us on WhatsApp and the paused day is added to the end of your package.',
    'faq.q3': 'What happens on festival holidays?', 'faq.a3': 'If we close for a festival, that day is added to the end of every package, so you don’t lose a meal.',
    'faq.q4': 'How do I pay?', 'faq.a4': 'After we confirm your order on WhatsApp, we send you a UPI link or QR code.',
    'faq.q5': 'Can I try before I subscribe?', 'faq.a5': 'Yes. Order a Trial: one box of any meal for ₹189.',
    'faq.q6': 'How do I renew?', 'faq.a6': 'We remind you on WhatsApp a few days before your package ends. Just reply to renew.',

    'foot.tag': 'Fresh, balanced meals delivered in Thanjavur.', 'foot.wa': 'WhatsApp', 'foot.call': 'Call', 'foot.email': 'Email',
    'foot.insta': 'Instagram', 'foot.fssai': 'FSSAI Lic. No.', 'foot.rights': '© 2026 Fitzobit',

    'cart.h': 'Your order', 'cart.close': 'Close', 'cart.empty': 'Your cart is empty. Add a meal from the menu.', 'cart.total': 'Total',
    'cart.next': 'Continue', 'cart.back': 'Back', 'cart.remove': 'Remove', 'cart.items': 'items',
    'form.h': 'Delivery details', 'form.name': 'Name', 'form.phone': 'Mobile number', 'form.address': 'Address',
    'form.pincode': 'Pincode', 'form.map': 'Google Maps location (optional)', 'form.mapBtn': 'Use my location', 'form.mapBusy': 'Finding you…',
    'form.mapFail': 'Could not get your location. You can paste a Google Maps link instead.',
    'form.start': 'Start date', 'form.time': 'Delivery time', 'form.note': 'Note (optional)',
    'form.send': 'Order on WhatsApp',
    'form.help': 'WhatsApp opens with your order typed. Press Send there. We’ll confirm and send a UPI link.',
    'form.err.name': 'Enter your name.', 'form.err.phone': 'Enter a 10-digit mobile number.', 'form.err.address': 'Enter your address.',
    'form.err.pincode': 'Enter a 6-digit pincode.', 'form.err.start': 'Pick a start date.', 'form.err.sunday': 'Sundays are not delivery days. Pick Monday to Saturday.',
    'form.err.past': 'Pick a date from tomorrow onwards.',
    'form.warn.pin': 'This pincode is outside our usual area — we’ll check and tell you.',
    'form.noNumber': 'The order WhatsApp number is not set yet (placeholder in config.js).',
    'done.h': 'WhatsApp opened', 'done.p': 'Press Send in WhatsApp to place your order. We’ll reply to confirm.',
    'done.clear': 'Clear cart', 'done.again': 'Open WhatsApp again',
    'cursor.add': 'Add', 'cursor.order': 'Order', 'cursor.scroll': 'Scroll', 'cursor.chat': 'Chat', 'cursor.check': 'Check',
  },
  ta: {
    'nav.menu': 'மெனு', 'nav.how': 'எப்படி செயல்படுகிறது', 'nav.area': 'டெலிவரி பகுதி', 'nav.faq': 'கேள்விகள்', 'nav.contact': 'தொடர்பு',
    'nav.order': 'ஆர்டர் செய்', 'cart.open': 'கார்ட்டைத் திற',
    'pref.veg': 'சைவம்', 'pref.egg': 'முட்டையுடன்', 'pref.eggShort': 'முட்டை',

    'hero.eyebrow': 'உணவு டெலிவரி · தஞ்சாவூர்', 'hero.h1a': 'நன்றாக சாப்பிடுங்கள்.', 'hero.h1b': 'தினமும்.',
    'intro.lede': 'புதிய, சமச்சீரான உணவுப் பெட்டிகள் உங்கள் வீட்டுக்கே, திங்கள் முதல் சனி வரை. WhatsApp-ல் ஆர்டர் செய்யுங்கள்.',
    'help.open': 'எப்படி செயல்படுகிறது', 'help.go': 'புரிந்தது — மெனுவைக் காட்டு', 'help.ask': 'WhatsApp-ல் கேளுங்கள்',
    'fact.days': 'திங்கள்–சனி டெலிவரி', 'fact.pref': 'சைவம் அல்லது முட்டை', 'fact.upi': 'UPI-ல் பணம்', 'fact.pause': 'தேவைக்கு இடைநிறுத்தம்',

    'how.eyebrow': 'மிக எளிது', 'how.h': 'எப்படி செயல்படுகிறது',
    'how.1h': 'தேர்வு செய்யுங்கள்', 'how.1p': 'உங்கள் உணவையும் மாத, வார அல்லது சோதனை பேக்கேஜையும் தேர்ந்தெடுங்கள்.',
    'how.2h': 'WhatsApp-ல் ஆர்டர்', 'how.2p': 'முகவரி மற்றும் தொடக்க தேதியை நிரப்புங்கள். உங்கள் ஆர்டருடன் WhatsApp திறக்கும் — Send அழுத்தினால் போதும்.',
    'how.3h': 'நாங்கள் உறுதிசெய்கிறோம்', 'how.3p': 'உங்கள் பகுதி மற்றும் தொடக்க தேதியைச் சரிபார்த்து, UPI இணைப்பு அல்லது QR அனுப்புவோம்.',
    'how.4h': 'புதிதாக உங்கள் வாசலில்', 'how.4p': 'நீங்கள் தேர்ந்த நேரத்தில், திங்கள் முதல் சனி வரை உணவு வந்து சேரும்.',

    'menu.eyebrow': 'மெனு & பேக்கேஜ்கள்', 'menu.h': 'உங்கள் பெட்டியைத் தேர்ந்தெடுங்கள்', 'menu.sub': 'விலை முழு பேக்கேஜுக்கு. சைவம், முட்டை இரண்டுக்கும் ஒரே விலை.',
    'menu.days': '{n} டெலிவரி நாட்கள்', 'menu.day1': '1 பெட்டி', 'menu.perbox': 'ஒரு பெட்டி ≈ ₹{n}', 'menu.add': 'கார்ட்டில் சேர்', 'menu.added': 'சேர்க்கப்பட்டது ✓',
    'menu.qty': 'எண்ணிக்கை', 'menu.addShort': 'சேர்', 'menu.howlink': 'ஆர்டர் எப்படி செய்வது?',

    'area.eyebrow': 'டெலிவரி பகுதி', 'area.h': 'உங்கள் பகுதிக்கு டெலிவரி உண்டா?', 'area.p': 'தஞ்சாவூர் நகரில், திங்கள் முதல் சனி வரை டெலிவரி செய்கிறோம். ஞாயிறு விடுமுறை.',
    'area.ph': 'உங்கள் 6 இலக்க பின்கோடு', 'area.btn': 'சரிபார்',
    'area.yes': 'ஆம்! {pin} பகுதிக்கு டெலிவரி செய்கிறோம்.', 'area.no': '{pin} பகுதிக்கு இன்னும் டெலிவரி இல்லை. WhatsApp-ல் கேளுங்கள், தெரிவிக்கிறோம்.',
    'area.bad': '6 இலக்க பின்கோடை உள்ளிடுங்கள்.',

    'insta.eyebrow': 'எங்கள் சமையலறையிலிருந்து', 'insta.h': 'Instagram-ல் எங்களைப் பின்தொடருங்கள்', 'insta.btn': '@fitzobit-ஐப் பின்தொடருங்கள்', 'insta.soon': 'புகைப்படங்கள் விரைவில்',

    'faq.eyebrow': 'தெரிந்துகொள்ளுங்கள்', 'faq.h': 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
    'faq.q1': 'எந்த நாட்களில் டெலிவரி?', 'faq.a1': 'திங்கள் முதல் சனி வரை. ஞாயிறு டெலிவரி இல்லை; ஞாயிறு உங்கள் பேக்கேஜில் கணக்கில் வராது.',
    'faq.q2': 'ஒரு நாள் நிறுத்த முடியுமா?', 'faq.a2': 'ஆம், மாத மற்றும் வார பேக்கேஜ்களுக்கு. WhatsApp-ல் சொல்லுங்கள்; நிறுத்திய நாள் பேக்கேஜின் இறுதியில் சேர்க்கப்படும்.',
    'faq.q3': 'பண்டிகை விடுமுறை நாட்களில்?', 'faq.a3': 'பண்டிகைக்காக நாங்கள் விடுமுறை எடுத்தால், அந்த நாள் எல்லா பேக்கேஜ்களின் இறுதியிலும் சேர்க்கப்படும் — உணவு இழப்பு இல்லை.',
    'faq.q4': 'எப்படி பணம் செலுத்துவது?', 'faq.a4': 'WhatsApp-ல் உங்கள் ஆர்டரை உறுதிசெய்த பிறகு UPI இணைப்பு அல்லது QR குறியீடு அனுப்புவோம்.',
    'faq.q5': 'சந்தாவுக்கு முன் முயற்சிக்கலாமா?', 'faq.a5': 'ஆம். சோதனை பேக்கேஜ்: எந்த உணவிலும் ஒரு பெட்டி ₹189.',
    'faq.q6': 'எப்படி புதுப்பிப்பது?', 'faq.a6': 'பேக்கேஜ் முடிவதற்கு சில நாட்கள் முன் WhatsApp-ல் நினைவூட்டுவோம். பதில் அனுப்பினால் போதும்.',

    'foot.tag': 'தஞ்சாவூரில் புதிய, சமச்சீரான உணவு டெலிவரி.', 'foot.wa': 'WhatsApp', 'foot.call': 'அழைக்க', 'foot.email': 'மின்னஞ்சல்',
    'foot.insta': 'Instagram', 'foot.fssai': 'FSSAI உரிம எண்', 'foot.rights': '© 2026 Fitzobit',

    'cart.h': 'உங்கள் ஆர்டர்', 'cart.close': 'மூடு', 'cart.empty': 'கார்ட் காலியாக உள்ளது. மெனுவிலிருந்து ஒரு உணவைச் சேருங்கள்.', 'cart.total': 'மொத்தம்',
    'cart.next': 'தொடரவும்', 'cart.back': 'பின்செல்', 'cart.remove': 'நீக்கு', 'cart.items': 'பொருட்கள்',
    'form.h': 'டெலிவரி விவரங்கள்', 'form.name': 'பெயர்', 'form.phone': 'மொபைல் எண்', 'form.address': 'முகவரி',
    'form.pincode': 'பின்கோடு', 'form.map': 'Google Maps இருப்பிடம் (விருப்பம்)', 'form.mapBtn': 'என் இருப்பிடம்', 'form.mapBusy': 'தேடுகிறது…',
    'form.mapFail': 'இருப்பிடம் கிடைக்கவில்லை. Google Maps இணைப்பை ஒட்டலாம்.',
    'form.start': 'தொடக்க தேதி', 'form.time': 'டெலிவரி நேரம்', 'form.note': 'குறிப்பு (விருப்பம்)',
    'form.send': 'WhatsApp-ல் ஆர்டர் செய்',
    'form.help': 'உங்கள் ஆர்டருடன் WhatsApp திறக்கும். அங்கே Send அழுத்துங்கள். நாங்கள் உறுதிசெய்து UPI இணைப்பு அனுப்புவோம்.',
    'form.err.name': 'பெயரை உள்ளிடுங்கள்.', 'form.err.phone': '10 இலக்க மொபைல் எண்ணை உள்ளிடுங்கள்.', 'form.err.address': 'முகவரியை உள்ளிடுங்கள்.',
    'form.err.pincode': '6 இலக்க பின்கோடை உள்ளிடுங்கள்.', 'form.err.start': 'தொடக்க தேதியைத் தேர்ந்தெடுங்கள்.', 'form.err.sunday': 'ஞாயிறு டெலிவரி நாள் அல்ல. திங்கள்–சனி தேர்ந்தெடுங்கள்.',
    'form.err.past': 'நாளை முதல் ஒரு தேதியைத் தேர்ந்தெடுங்கள்.',
    'form.warn.pin': 'இந்த பின்கோடு எங்கள் வழக்கமான பகுதிக்கு வெளியே உள்ளது — சரிபார்த்துச் சொல்வோம்.',
    'form.noNumber': 'ஆர்டர் WhatsApp எண் இன்னும் அமைக்கப்படவில்லை (config.js).',
    'done.h': 'WhatsApp திறந்தது', 'done.p': 'ஆர்டர் செய்ய WhatsApp-ல் Send அழுத்துங்கள். உறுதிசெய்து பதில் அனுப்புவோம்.',
    'done.clear': 'கார்ட்டைக் காலி செய்', 'done.again': 'WhatsApp-ஐ மீண்டும் திற',
    'cursor.add': 'சேர்', 'cursor.order': 'ஆர்டர்', 'cursor.scroll': 'உருட்டு', 'cursor.chat': 'அரட்டை', 'cursor.check': 'சரிபார்',
  },
};
