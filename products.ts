
import type { Product, LocalizedString } from './data/galleryData';

// --- IMAGE ASSETS ---
export const IMAGE_ASSETS = {
  hero_backgrounds: [
    'https://i.postimg.cc/sDnT67k8/decorative-bedding-0010.jpg',  
    'https://i.postimg.cc/kMssGWg4/decorative-bedding-005.jpg',  
    'https://i.postimg.cc/6pyYDTwQ/decorative-bedding-009.jpg',  
    'https://i.postimg.cc/8zJmZ3BJ/decorative-bedding-001.jpg',  
    'https://i.postimg.cc/VkHKmhTL/decorative00013.jpg',  
    'https://i.postimg.cc/SRSGVxDk/decorative-bedding-006.jpg',  
    'https://i.postimg.cc/P5MPbgFJ/Bed000309.jpg',  
    'https://i.postimg.cc/qqXmrvf9/decorative0007.jpg',  
    'https://i.postimg.cc/HLw3XLnj/white_plain_0008_Large.jpg',  
    'https://i.postimg.cc/15YKcP61/decorative_bedding_002.jpg'
  ],
  white_striped: [ 'https://i.postimg.cc/HkmWYSq5/white-striped-001.jpg', 'https://i.postimg.cc/s2KkRKzV/white-striped-0010.jpg', 'https://i.postimg.cc/6pVsMt14/white-striped-0011.jpg', 'https://i.postimg.cc/T3vMjpQX/white-striped-0012.jpg', 'https://i.postimg.cc/3JvQDgXB/white-striped-0013.jpg', 'https://i.postimg.cc/rybLmhrs/white-striped-0014.jpg', 'https://i.postimg.cc/Fz2tBR43/white-striped-0015.jpg', 'https://i.postimg.cc/WzDL8ZQs/white-striped-0016.jpg', 'https://i.postimg.cc/fLqQYCqH/white-striped-0017.jpg', 'https://i.postimg.cc/RFZz3yd6/white-striped-0018.jpg', 'https://i.postimg.cc/QMb3dhQZ/white-striped-0019.jpg', 'https://i.postimg.cc/65n5Nsmt/white-striped-002.jpg', 'https://i.postimg.cc/bv8PPs2R/white-striped-0020.jpg', 'https://i.postimg.cc/zGTN4n3B/white-striped-0021.jpg', 'https://i.postimg.cc/Yq5kXXrZ/white-striped-0022.jpg', 'https://i.postimg.cc/gkXmH9W3/white-striped-0023.jpg', 'https://i.postimg.cc/c15d3xVs/white-striped-0024.jpg', 'https://i.postimg.cc/pr7xMCD9/white-striped-0025.jpg' ],
  white_plain: [ 'https://i.postimg.cc/NfFNSYJP/white-plain-0001-Large.jpg', 'https://i.postimg.cc/QtSbYnp3/white-plain-00010-Large.jpg', 'https://i.postimg.cc/sxXJk9cZ/white-plain-00011-Large.jpg', 'https://i.postimg.cc/hv50czyZ/white-plain-00012-Large.jpg', 'https://i.postimg.cc/44LPzqfv/white-plain-00013-Large.jpg', 'https://i.postimg.cc/281wTGys/white-plain-00014-Large.jpg', 'https://i.postimg.cc/28gxtWBV/white-plain-00015-Large.jpg', 'https://i.postimg.cc/jSNhYjzv/white-plain-00016-Large.jpg', 'https://i.postimg.cc/jjb4xrcT/white-plain-00017-Large.jpg', 'https://i.postimg.cc/tgNt7mvx/white-plain-00018-Large.jpg', 'https://i.postimg.cc/cH173MP5/white-plain-00019-Large.jpg', 'https://i.postimg.cc/wMTW6d6M/white-plain-0002-Large.jpg' ],
  color_plain: ['https://i.postimg.cc/MHZsH24B/Bed000363.jpg', 'https://i.postimg.cc/P5MPbgFJ/Bed000309.jpg', 'https://i.postimg.cc/25PTQLtC/Bed000242.jpg', 'https://i.postimg.cc/DZJHFK9w/Bed000222.jpg', 'https://i.postimg.cc/C19yfKG8/Bed000213.jpg', 'https://i.postimg.cc/1R6Rrx8S/Bed000325.jpg'],
  towel: ['https://i.postimg.cc/sxYkwQr8/hotel-towel-0023.jpg', 'https://i.postimg.cc/DzD3Z36C/hotel-towel-0020.jpg', 'https://i.postimg.cc/dQGcqXyB/hotel-towel-0024.jpg', 'https://i.postimg.cc/vBVFx2SG/hotel-towel-0021.jpg'],
  bolster: ['https://i.postimg.cc/sxrVw97p/bolster-pillow20.jpg', 'https://i.postimg.cc/TwmdVHLd/bolster-pillow21.jpg'],
  decorative_bedding: [ 'https://i.postimg.cc/8zJmZ3BJ/decorative-bedding-001.jpg', 'https://i.postimg.cc/sDnT67k8/decorative-bedding-0010.jpg', 'https://i.postimg.cc/Xv5xYhrS/decorative-bedding-0011.jpg', 'https://i.postimg.cc/T3FCGGYJ/decorative-bedding-0012.jpg', 'https://i.postimg.cc/15YKcP61/decorative_bedding_002.jpg', 'https://i.postimg.cc/BQvgKtjC/decorative-bedding-003.jpg', 'https://i.postimg.cc/ZnwxQzM3/decorative-bedding-004.jpg', 'https://i.postimg.cc/kMssGWg4/decorative-bedding-005.jpg', 'https://i.postimg.cc/SRSGVxDk/decorative-bedding-006.jpg', 'https://i.postimg.cc/sX9cphPT/decorative-bedding-007.jpg', 'https://i.postimg.cc/TwX0L9by/decorative-bedding-008.jpg', 'https://i.postimg.cc/6pyYDTwQ/decorative-bedding-009.jpg' ]
};

const getDeterministicImage = (category: keyof typeof IMAGE_ASSETS, id: string): string => {
  const images = IMAGE_ASSETS[category];
  if (!images || images.length === 0) return 'https://i.postimg.cc/Z5Py7B0T/Bed000399.jpg'; // Fallback image
  const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const index = hash % images.length;
  return images[index];
};


// --- TOWEL PRICING DESCRIPTIONS ---
const towelPriceDescriptions: Record<number, LocalizedString> = {
    12: {
        en: `At <strong>{price} Baht per dozen</strong>, you are investing in a durable, standard-weight towel, which typically commands higher prices given its substantial 12 lbs per dozen.`,
        th: `ราคา <strong>{price} บาทต่อโหล</strong> เป็นการลงทุนในผ้าขนหนูน้ำหนักมาตรฐานที่ทนทาน ซึ่งโดยทั่วไปมีราคาสูงกว่าเมื่อพิจารณาจากน้ำหนักที่มากถึง 12 ปอนด์ต่อโหล`,
        zh: `每打 <strong>{price} 泰铢</strong>，您投资的是耐用的标准重量毛巾，鉴于其每打 12 磅的厚实重量，通常价格更高。`,
        ar: `بسعر <strong>{price} بات للدزينة</strong>، أنت تستثمر في منشفة متينة ذات وزن قياسي، والتي عادة ما تكون أسعارها أعلى نظرًا لوزنها الكبير البالغ 12 رطلاً للدزينة.`,
        hi: `<strong>{price} बात प्रति दर्जन</strong> की कीमत पर, आप एक टिकाऊ, मानक वजन वाले तौलिये में निवेश कर रहे हैं, जिसकी कीमत आमतौर पर इसके 12 पाउंड प्रति दर्जन के भारी वजन को देखते हुए अधिक होती है।`
    },
    14: {
        en: `For <strong>{price} Baht per dozen</strong>, these 14 lbs towels deliver a premium feel that often comes at a much steeper cost, offering an elevated experience without the elevated price tag.`,
        th: `ราคา <strong>{price} บาทต่อโหล</strong> ผ้าขนหนูน้ำหนัก 14 ปอนด์นี้ให้ความรู้สึกพรีเมียมที่มักมาในราคาที่สูงกว่ามาก มอบประสบการณ์ที่เหนือกว่าในราคาที่เข้าถึงได้`,
        zh: `每打 <strong>{price} 泰铢</strong>，这款 14 磅的毛巾提供了一种通常伴随着更高成本的优质感觉，以更实惠的价格提供了提升的体验。`,
        ar: `مقابل <strong>{price} बात للدزينة</strong>، توفر هذه المناشف التي تزن 14 رطلاً إحساسًا فاخرًا غالبًا ما يأتي بتكلفة أعلى بكثير، مما يوفر تجربة راقية بسعر مناسب.`,
        hi: `<strong>{price} बात प्रति दर्जन</strong> में, ये 14 पाउंड के तौलिये एक प्रीमियम एहसास देते हैं जो अक्सर बहुत अधिक कीमत पर आते हैं, और एक उन्नत अनुभव प्रदान करते हैं।`
    },
    16: {
        en: `At <strong>{price} Baht per dozen</strong>, our 16 lbs Large Comfort Fit towels provide generous size and weight, qualities that reflect high material usage and comfort, yet remain exceptionally priced for their class.`,
        th: `ราคา <strong>{price} บาทต่อโหล</strong> ผ้าขนหนู Large Comfort Fit น้ำหนัก 16 ปอนด์ของเรามีขนาดและน้ำหนักที่ใหญ่พิเศษ สะท้อนถึงการใช้วัสดุคุณภาพสูงและความสบาย แต่ยังคงราคาที่คุ้มค่าอย่างยิ่งสำหรับระดับนี้`,
        zh: `每打 <strong>{price} 泰铢</strong>，我们的 16 磅大型舒适贴合毛巾提供了宽大的尺寸和重量，这些品质反映了高材料用量和舒适度，但在同类产品中价格仍然非常实惠。`,
        ar: `بسعر <strong>{price} बात للدزينة</strong>، توفر مناشفنا الكبيرة المريحة التي تزن 16 رطلاً حجمًا ووزنًا كبيرين، وهي صفات تعكس استخدامًا عاليًا للمواد والراحة، ومع ذلك تظل أسعارها استثنائية بالنسبة لفئتها.`,
        hi: `<strong>{price} बात प्रति दर्जन</strong> की कीमत पर, हमारे 16 पाउंड के बड़े कम्फर्ट फिट तौलिये उदार आकार और वजन प्रदान करते हैं, जो उच्च सामग्री उपयोग और आराम को दर्शाते हैं, फिर भी अपनी श्रेणी के लिए असाधारण रूप से कीमत वाले हैं।`
    },
    18: {
        en: `Priced at <strong>{price} Baht per dozen</strong>, these 18 lbs Luxury Grade towels stand out. Their substantial weight and premium feel rival those from top-tier suppliers, making our pricing highly attractive for such an exquisite product.`,
        th: `ราคา <strong>{price} บาทต่อโหล</strong> ผ้าขนหนู Luxury Grade น้ำหนัก 18 ปอนด์นี้โดดเด่นอย่างแท้จริง น้ำหนักที่มากและความรู้สึกพรีเมียมเทียบเท่ากับซัพพลายเออร์ชั้นนำ ทำให้ราคาของเราน่าสนใจอย่างยิ่งสำหรับผลิตภัณฑ์ที่สวยงามเช่นนี้`,
        zh: `每打 <strong>{price} 泰铢</strong>，这款 18 磅的豪华级毛巾脱颖而出。其厚实的重量和优质的感觉可与顶级供应商的产品相媲美，使我们的定价对于如此精致的产品极具吸引力。`,
        ar: `بسعر <strong>{price} बात للدزينة</strong>، تتميز هذه المناشف الفاخرة التي تزن 18 رطلاً. وزنها الكبير وملمسها الفاخر ينافسان منتجات كبار الموردين، مما يجعل أسعارنا جذابة للغاية لمثل هذا المنتج الرائع.`,
        hi: `<strong>{price} बात प्रति दर्जन</strong> की कीमत पर, ये 18 पाउंड के लक्जरी ग्रेड तौलिये सबसे अलग हैं। उनका पर्याप्त वजन और प्रीमियम एहसास शीर्ष आपूर्तिकर्ताओं से प्रतिस्पर्धा करता है, जो ऐसे उत्तम उत्पाद के लिए हमारी कीमत को अत्यधिक आकर्षक बनाता है।`
    }
};

const internalLinkClass = "text-brand-primary font-semibold hover:underline";

const descriptionContent: any = {
  en: {
    hooks: ["Transform your bedroom into a sanctuary of pure comfort.", "Elevate your sleep experience with our meticulously crafted bedding.", "Discover the perfect foundation for a restful night's sleep.", "Indulge in hotel-quality luxury, right in your own home."],
    towel_hooks: ["Elevate your bathing experience with our premium hotel towels.", "Wrap yourself in unparalleled softness and absorbency.", "Indulge in hotel-quality luxury, right in your own home.", "The perfect finishing touch for a spa-like bathroom."],
    fabric: {
      cotton100: { base: `Woven from 100% <a href='/#/materials#cotton' class='${internalLinkClass}'>long-staple cotton</a>, this fabric is the epitome of natural comfort. It's exceptionally breathable, helping to regulate your body temperature for a cool and dry sleep experience all year round.`, trivia: "<em>Did you know?</em> True long-staple cotton contains finer, stronger fibers that become even softer and more comfortable with every wash, making it a wise investment for years of quality sleep.", specs: { weave: "Sateen", features: "Highly Breathable, Durable, Softens with Use" } },
      cottonAntiDust: { base: `Specially treated for a healthier sleep environment, this <a href='/#/materials#cotton' class='${internalLinkClass}'>Anti-Dust Mite Cotton</a> is designed to inhibit the growth of allergens. While providing the natural softness and breathability of cotton, it offers an extra layer of protection for those with sensitivities.`, trivia: "Anti-dust mite treatments often involve a very tight weave structure that creates a physical barrier against mites, rather than using chemicals.", specs: { weave: "High-Density Plain Weave", features: "Hypoallergenic, Anti-Dust Mite, Breathable" } },
      cottonTowel: { base: `Woven from 100% premium <a href='/#/materials#cotton' class='${internalLinkClass}'>combed cotton</a> using a Double Loop Terry Weave, our hotel towels are engineered for maximum absorbency and a plush, luxurious feel. The dense loops create a soft, thick pile that feels incredibly soft against the skin while efficiently wicking away moisture.`, trivia: "<em>Did you know?</em> A towel's weight, measured in pounds (lbs) per dozen, is a key indicator of its quality. A higher weight means more cotton was used, resulting in a denser, more absorbent, and more durable towel.", specs: { weave: "Double Loop Terry Weave", features: "Highly Absorbent, Plush Texture, Durable, 100% Combed Cotton" } },
      softTex: { base: `Discover the remarkable softness of our <a href='/#/materials#soft-tex' class='${internalLinkClass}'>Soft-Tex™</a> fabric. Engineered using advanced microfiber technology, it delivers a plush, peach-skin feel that rivals high-end materials. It's designed for modern living, offering incredible durability and wrinkle-resistance.`, trivia: "The secret to Soft-Tex™ is its brushed finish, where fine metal brushes gently raise the fibers to create a velvety, ultra-soft surface that's delightful to touch.", specs: { weave: "Brushed Microfiber", features: "Ultra-Soft, Wrinkle-Resistant, Easy Care, Quick-Drying" } },
      cvc60: { base: `This <a href='/#/materials#cvc' class='${internalLinkClass}'>CVC (Chief Value Cotton)</a> fabric offers a smart blend of 60% natural cotton and 40% high-quality polyester. This combination provides the softness and breathability of cotton, enhanced with the strength, durability, and wrinkle-resistance of polyester.`, trivia: "CVC was developed to offer a 'best of both worlds' solution for commercial use, like in hotels, where both comfort and extreme durability are essential.", specs: { weave: "Plain Weave", features: "Durable Blend, Wrinkle-Resistant, Colorfast" } },
      cvc50: { base: `Our <a href='/#/materials#cvc' class='${internalLinkClass}'>CVC 50/50</a> fabric strikes a perfect balance between the comfort of cotton and the resilience of polyester. This 50% cotton, 50% polyester blend is engineered for both a soft touch and exceptional durability, making it ideal for frequent use.`, trivia: "The 50/50 blend is a workhorse in the hospitality industry, prized for its ability to withstand industrial laundering while remaining comfortable for guests.", specs: { weave: "Plain Weave", features: "Balanced Comfort & Durability, Wrinkle-Resistant, Very Durable" } }
    },
    pattern: { plain: "The timeless plain design offers a canvas of pure color, creating a serene and uncluttered look. It’s perfect for a minimalist aesthetic or for layering with more decorative pillows and throws to express your personal style.", striped: "Featuring a sophisticated 1-inch sateen stripe, this design adds a touch of classic hotel elegance and subtle texture to your bedding. The tone-on-tone pattern creates visual interest while maintaining a refined and luxurious look." },
    size: { s35_10: "Perfect for a child's room, a stylish guest room, or a compact city apartment. To maximize the sense of space, pair this twin-size bedding with light-colored walls and minimalist furniture to create an open, airy feel.", q50_10: "The versatile queen size is a popular choice for most bedrooms, offering ample space for couples without overwhelming the room. Style it with plush pillows and a textured throw to create a cozy and inviting retreat.", k60_12: "Ideal for a master bedroom, the expansive king size provides a luxurious and spacious foundation for ultimate comfort. Make it the centerpiece of your room with bold accent pillows and a statement headboard.", towel_std: "The standard 27\" x 54\" size is perfect for everyday luxury, providing excellent coverage and comfort after a shower. Its versatile dimensions make it an essential item for any bathroom.", towel_large: "Our large 30\" x 60\" towel offers a truly immersive, spa-like experience. The generous size provides complete wrap-around comfort, making it ideal for master bathrooms or for those who prefer a more substantial, luxurious towel.", bolster_14x44: "The classic bolster size, perfect for providing support and adding a decorative touch to your bedding arrangement.", bolster_27x40: "A supremely plush and large bolster case, designed for ultimate comfort and a grand, luxurious statement on your bed." },
    productType: { fittedSheet: { inclusions: "1 x Fitted Sheet", details: "Expertly tailored with deep pockets and a strong, continuous elastic hem to ensure a snug, smooth fit that stays securely in place all night." }, flatSheet: { inclusions: "1 x Flat Sheet", details: "Generously sized to provide ample coverage for a comfortable, layered bed. It can be tucked in for a crisp, hotel-style look or left to drape for a more relaxed, inviting feel." }, duvetCover: { inclusions: "1 x Duvet Cover", details: "Protect your duvet while adding a touch of elegance. Features a secure closure to keep your comforter in place and is easy to remove for washing." }, pillowCase: { inclusions: "1 x Pillowcase", details: "Provides a soft and comfortable surface for a restful sleep. The envelope closure ensures your pillow stays neatly tucked inside for a clean look." }, bolsterCase: { inclusions: "1 x Bolster Case", details: "Designed to perfectly fit your bolster pillow, providing a clean, protective layer and completing your bedding ensemble with a touch of sophistication." }, beddingSet: { inclusions: "1 x Fitted Sheet, 2 x Pillowcases", details: "This convenient set provides everything you need for a perfectly coordinated bed. All pieces are crafted from the same high-quality fabric for a harmonious look and feel." }, towel: { inclusions: "1 x Premium Hotel Towel", details: "Crafted for luxury and durability, our premium hotel towels offer exceptional absorbency and a plush feel. Perfect for creating a spa-like experience at home or for providing guests with unparalleled comfort." } },
    care: { cotton100: ["Machine wash warm (max 40°C) on a gentle cycle.", "Tumble dry on low or line dry to preserve fibers.", "Iron on a medium-high setting if desired."], cottonAntiDust: ["Machine wash warm (max 40°C) on a gentle cycle to maintain anti-allergen properties.", "Tumble dry on low or line dry.", "Iron on a medium-high setting if desired."], cottonTowel: ["Wash before first use to maximize absorbency.", "Machine wash warm (40-60°C).", "Tumble dry on medium heat. Avoid fabric softeners which can reduce absorbency."], softTex: ["Machine wash with cold or warm water.", "Tumble dry on low heat. It dries quickly!", "No ironing needed due to its wrinkle-resistant nature."], cvc60: ["Machine wash warm. Highly resistant to shrinking.", "Tumble dry on medium heat.", "Iron on a low-medium setting if needed."], cvc50: ["Machine wash warm. Highly resistant to shrinking.", "Tumble dry on medium heat.", "Iron on a low-medium setting if needed."] },
    closing: ["Invest in your rest with bedding that blends quality, comfort, and style.", "Bring home the 5-star experience and sleep beautifully every night.", "Crafted with care, designed for comfort."]
  },
  th: {
    hooks: ["เปลี่ยนห้องนอนของคุณให้เป็นสวรรค์แห่งการพักผ่อน", "ค้นพบรากฐานที่สมบูรณ์แบบเพื่อการนอนหลับที่ผ่อนคลาย", "ดื่มด่ำกับความหรูหราระดับโรงแรมในบ้านของคุณเอง"],
    towel_hooks: ["ยกระดับประสบการณ์การอาบน้ำของคุณด้วยผ้าขนหนูคุณภาพโรงแรม", "สัมผัสความนุ่มฟูและการซับน้ำที่เหนือกว่าในทุกๆ วัน", "ดื่มด่ำกับความหรูหราระดับโรงแรมในบ้านของคุณเอง", "เติมเต็มความสมบูรณ์แบบให้ห้องน้ำของคุณด้วยผ้าขนหนูระดับพรีเมียม"],
    fabric: {
      cotton100: { base: `ทอจาก <a href='/#/materials#cotton' class='${internalLinkClass}'>คอตตอน 100%</a> เส้นใยยาว ซึ่งเป็นที่สุดแห่งความสบายจากธรรมชาติ ระบายอากาศได้ดีเยี่ยม ช่วยควบคุมอุณหภูมิร่างกายให้เย็นสบายและแห้งตลอดทั้งคืน`, trivia: "<em>รู้หรือไม่?</em> ผ้าฝ้ายลองสเตเปิลแท้มีเส้นใยที่ละเอียดและแข็งแรงกว่า ซึ่งจะยิ่งนุ่มสบายขึ้นทุกครั้งที่ซัก ทำให้เป็นการลงทุนที่คุ้มค่าเพื่อการนอนหลับที่มีคุณภาพยาวนานหลายปี", specs: { weave: "ทอซาติน", features: "ระบายอากาศสูง, ทนทาน, ยิ่งซักยิ่งนุ่ม" } },
      cottonAntiDust: { base: `<a href='/#/materials#cotton' class='${internalLinkClass}'>ผ้าคอตตอนกันไรฝุ่น</a>นี้ผ่านกรรมวิธีพิเศษเพื่อสร้างสภาพแวดล้อมการนอนที่ดีต่อสุขภาพยิ่งขึ้น ออกแบบมาเพื่อยับยั้งการเจริญเติบโตของสารก่อภูมิแพ้ ในขณะที่ยังคงความนุ่มนวลและการระบายอากาศตามธรรมชาติของผ้าฝ้าย แต่เพิ่มชั้นการป้องกันพิเศษสำหรับผู้ที่มีผิวบอบบาง`, trivia: "การเคลือบกันไรฝุ่นมักเกี่ยวข้องกับโครงสร้างการทอที่แน่นมากซึ่งสร้างเกราะป้องกันไรฝุ่น แทนที่จะใช้สารเคมี", specs: { weave: "ทอธรรมดาความหนาแน่นสูง", features: "ไม่ก่อให้เกิดภูมิแพ้, กันไรฝุ่น, ระบายอากาศได้ดี" } },
      cottonTowel: { base: `ทอจาก<a href='/#/materials#cotton' class='${internalLinkClass}'>ผ้าฝ้ายพรีเมียม Combed Cotton 100%</a> ด้วยเทคนิค Double Loop Terry Weave ผ้าขนหนูโรงแรมของเราถูกออกแบบมาเพื่อการซับน้ำสูงสุดและให้สัมผัสที่นุ่มฟูหรูหรา ห่วงด้ายที่หนาแน่นสร้างขนผ้าที่นุ่มหนา ให้ความรู้สึกนุ่มนวลต่อผิวพร้อมซับความชื้นได้อย่างมีประสิทธิภาพ`, trivia: "<em>รู้หรือไม่?</em> น้ำหนักของผ้าขนหนู ซึ่งวัดเป็นปอนด์ (lbs) ต่อโหล เป็นตัวบ่งชี้คุณภาพที่สำคัญ น้ำหนักที่สูงขึ้นหมายถึงมีการใช้ฝ้ายมากขึ้น ส่งผลให้ผ้ามีความหนาแน่น ซับน้ำได้ดี และทนทานยิ่งขึ้น", specs: { weave: "ทอแบบขนคู่ (Double Loop Terry)", features: "ซับน้ำสูง, สัมผัสนุ่มฟู, ทนทาน, คอตตอน 100% Combed" } },
      softTex: { base: `ค้นพบความนุ่มนวลอันน่าทึ่งของผ้า <a href='/#/materials#soft-tex' class='${internalLinkClass}'>Soft-Tex™</a> ของเรา ผลิตด้วยเทคโนโลยีไมโครไฟเบอร์ขั้นสูง ให้สัมผัสที่นุ่มฟูเหมือนผิวลูกพีชซึ่งเทียบเท่ากับวัสดุระดับไฮเอนด์ ออกแบบมาเพื่อการใช้ชีวิตสมัยใหม่ ทนทานอย่างเหลือเชื่อและกันรอยยับ`, trivia: "ความลับของ Soft-Tex™ คือการขัดผิว ซึ่งใช้แปรงโลหะละเอียดปัดเส้นใยเบาๆ เพื่อสร้างพื้นผิวที่นุ่มนวลดุจกำมะหยี่และน่าสัมผัส", specs: { weave: "ไมโครไฟเบอร์ขัดผิว", features: "นุ่มพิเศษ, กันรอยยับ, ดูแลง่าย, แห้งเร็ว" } },
      cvc60: { base: `ผ้า <a href='/#/materials#cvc' class='${internalLinkClass}'>CVC (Chief Value Cotton)</a> นี้เป็นการผสมผสานอย่างชาญฉลาดของผ้าฝ้ายธรรมชาติ 60% และโพลีเอสเตอร์คุณภาพสูง 40% การผสมผสานนี้ให้ความนุ่มนวลและการระบายอากาศของผ้าฝ้าย พร้อมเสริมด้วยความแข็งแรง ความทนทาน และการกันรอยยับของโพลีเอสเตอร์`, trivia: "CVC ถูกพัฒนาขึ้นเพื่อเป็นโซลูชัน 'ดีที่สุดของทั้งสองโลก' สำหรับการใช้งานเชิงพาณิชย์ เช่น ในโรงแรม ที่ซึ่งทั้งความสบายและความทนทานสูงสุดเป็นสิ่งจำเป็น", specs: { weave: "ทอธรรมดา", features: "ส่วนผสมทนทาน, กันรอยยับ, สีไม่ตก" } },
      cvc50: { base: `ผ้า <a href='/#/materials#cvc' class='${internalLinkClass}'>CVC 50/50</a> ของเราสร้างสมดุลที่สมบูรณ์แบบระหว่างความสบายของผ้าฝ้ายและความทนทานของโพลีเอสเตอร์ ส่วนผสมผ้าฝ้าย 50% และโพลีเอสเตอร์ 50% นี้ถูกออกแบบมาเพื่อให้สัมผัสที่นุ่มนวลและทนทานเป็นพิเศษ เหมาะสำหรับการใช้งานบ่อยครั้ง`, trivia: "ส่วนผสม 50/50 เป็นที่นิยมในอุตสาหกรรมโรงแรม เนื่องจากทนทานต่อการซักในระดับอุตสาหกรรมได้ดี ในขณะที่ยังคงความสบายสำหรับแขก", specs: { weave: "ทอธรรมดา", features: "สมดุลความสบายและความทนทาน, กันรอยยับ, ทนทานมาก" } }
    },
    pattern: { plain: "ดีไซน์สีพื้นเรียบง่ายที่ไม่มีวันตกยุค เปรียบเสมือนผืนผ้าใบสำหรับแสดงออกถึงสไตล์ของคุณ เหมาะสำหรับลุคมินิมอล หรือใช้เป็นพื้นฐานในการตกแต่งด้วยหมอนหรือผ้าคลุมที่มีลวดลายมากขึ้น", striped: "โดดเด่นด้วยลายริ้วซาตินขนาด 1 นิ้วที่ดูซับซ้อน ดีไซน์นี้ช่วยเพิ่มสัมผัสของความหรูหราแบบโรงแรมคลาสสิกและมิติให้กับเครื่องนอนของคุณ ลวดลายโทนเดียวกันสร้างความน่าสนใจทางสายตาแต่ยังคงไว้ซึ่งความสง่างาม" },
    size: { s35_10: "เหมาะสำหรับห้องนอนเด็ก ห้องนอนแขก หรืออพาร์ตเมนต์ขนาดกะทัดรัดในเมือง หากต้องการให้ห้องดูกว้างขึ้น ลองจับคู่เครื่องนอนขนาด 3.5 ฟุตนี้กับผนังสีสว่างและเฟอร์นิเจอร์สไตล์มินิมอลเพื่อสร้างความรู้สึกโปร่งสบาย", q50_10: "ขนาดควีนไซส์ 5 ฟุตเป็นขนาดที่ได้รับความนิยมสูงสุดสำหรับห้องนอนส่วนใหญ่ ให้พื้นที่กว้างขวางสำหรับสองคนโดยไม่ทำให้ห้องดูอึดอัด ตกแต่งด้วยหมอนนุ่มๆ และผ้าคลุมที่มีเท็กซ์เจอร์เพื่อสร้างบรรยากาศที่อบอุ่นและน่าดึงดูดใจ", k60_12: "เหมาะสำหรับห้องนอนมาสเตอร์ ขนาดคิงไซส์ 6 ฟุตที่กว้างขวางนี้มอบพื้นที่แห่งความหรูหราเพื่อความสบายสูงสุด ทำให้เป็นจุดเด่นของห้องด้วยหมอนอิงสีตัดกันและหัวเตียงที่โดดเด่น", towel_std: "ขนาดมาตรฐาน 27\" x 54\" เหมาะสำหรับความหรูหราในทุกๆ วัน ให้การปกคลุมและความสบายที่ยอดเยี่ยมหลังอาบน้ำ ขนาดที่ใช้งานได้หลากหลายทำให้เป็นของใช้จำเป็นสำหรับห้องน้ำทุกห้อง", towel_large: "ผ้าขนหนูขนาดใหญ่ 30\" x 60\" ของเรามอบประสบการณ์ที่ดื่มด่ำเหมือนสปาอย่างแท้จริง ขนาดที่ใหญ่โตให้ความสบายในการพันรอบตัวอย่างสมบูรณ์ ทำให้เหมาะสำหรับห้องน้ำหลักหรือสำหรับผู้ที่ชื่นชอบผ้าขนหนูที่ใหญ่และหรูหรากว่า", bolster_14x44: "ขนาดหมอนข้างคลาสสิก เหมาะสำหรับให้การรองรับและเพิ่มสัมผัสการตกแต่งให้กับการจัดเตียงของคุณ", bolster_27x40: "ปลอกหมอนข้างขนาดใหญ่พิเศษและนุ่มฟู ออกแบบมาเพื่อความสบายสูงสุดและสร้างความโดดเด่นหรูหราบนเตียงของคุณ" },
    productType: { fittedSheet: { inclusions: "ผ้าปูที่นอนรัดมุม 1 ชิ้น", details: "ตัดเย็บอย่างประณีตด้วยขอบที่ลึกและยางยืดรอบผืนที่แข็งแรง เพื่อให้แน่ใจว่าผ้าปูจะพอดีกับที่นอนอย่างเรียบตึงและไม่เลื่อนหลุดตลอดคืน" }, flatSheet: { inclusions: "ผ้าปูที่นอนไม่รัดมุม 1 ชิ้น", details: "มีขนาดใหญ่เพียงพอที่จะคลุมเตียงได้อย่างสบายและสวยงาม สามารถสอดชายผ้าใต้ที่นอนเพื่อลุคแบบโรงแรมที่เนี้ยบ หรือปล่อยชายผ้าเพื่อสไตล์ที่ดูผ่อนคลาย" }, duvetCover: { inclusions: "ปลอกผ้านวม 1 ชิ้น", details: "ช่วยปกป้องผ้านวมของคุณพร้อมทั้งเพิ่มความสวยงาม มีเชือกผูกด้านในและซิปปิดที่แน่นหนาเพื่อยึดผ้านวมให้อยู่กับที่ และง่ายต่อการถอดซัก" }, pillowCase: { inclusions: "ปลอกหมอน 1 ชิ้น", details: "มอบพื้นผิวที่นุ่มสบายเพื่อการพักผ่อนที่ดีที่สุด รูปแบบการปิดแบบซองจดหมายช่วยให้หมอนของคุณอยู่ข้างในอย่างเรียบร้อยและสวยงาม" }, bolsterCase: { inclusions: "ปลอกหมอนข้าง 1 ชิ้น", details: "ออกแบบมาเพื่อให้พอดีกับหมอนข้างของคุณอย่างสมบูรณ์แบบ ให้การปกป้องที่สะอาดและเติมเต็มชุดเครื่องนอนของคุณให้สมบูรณ์ด้วยสัมผัสแห่งความสง่างาม" }, beddingSet: { inclusions: "ผ้าปูที่นอนรัดมุม 1 ชิ้น, ปลอกหมอน 2 ชิ้น", details: "ชุดที่สะดวกสบายนี้มีทุกสิ่งที่คุณต้องการสำหรับเตียงที่เข้าชุดกันอย่างสมบูรณ์แบบ ทุกชิ้นผลิตจากผ้าคุณภาพสูงชนิดเดียวกันเพื่อลุคและความรู้สึกที่กลมกลืน" }, towel: { inclusions: "ผ้าขนหนูโรงแรมพรีเมียม 1 ผืน", details: "สร้างสรรค์ขึ้นเพื่อความหรูหราและความทนทาน ผ้าขนหนูโรงแรมพรีเมียมของเราให้การซับน้ำที่ดีเยี่ยมและสัมผัสที่นุ่มฟู เหมาะสำหรับการสร้างประสบการณ์เหมือนสปาที่บ้าน หรือมอบความสบายที่เหนือกว่าให้แก่แขกผู้เข้าพัก" } },
    care: { cotton100: ["ซักเครื่องด้วยน้ำอุ่น (ไม่เกิน 40°C) ในโหมดถนอมผ้า", "อบผ้าด้วยความร้อนต่ำหรือตากในที่ร่มเพื่อถนอมเส้นใย", "รีดด้วยไฟปานกลางถึงสูงหากต้องการ"], cottonAntiDust: ["ซักเครื่องด้วยน้ำอุ่น (ไม่เกิน 40°C) ในโหมดถนอมผ้าเพื่อรักษาคุณสมบัติกันแพ้", "อบผ้าด้วยความร้อนต่ำหรือตากในที่ร่ม", "รีดด้วยไฟปานกลางถึงสูงหากต้องการ"], cottonTowel: ["ซักก่อนใช้งานครั้งแรกเพื่อเพิ่มการซับน้ำ", "ซักเครื่องด้วยน้ำอุ่น (40-60°C)", "อบผ้าด้วยความร้อนปานกลาง หลีกเลี่ยงน้ำยาปรับผ้านุ่มซึ่งอาจลดการซับน้ำ"], softTex: ["ซักเครื่องด้วยน้ำเย็นหรือน้ำอุ่น", "อบผ้าด้วยความร้อนต่ำ ซึ่งแห้งเร็วมาก!", "ไม่จำเป็นต้องรีดเนื่องจากมีคุณสมบัติกันรอยยับ"], cvc60: ["ซักเครื่องด้วยน้ำอุ่น ทนทานต่อการหดตัวสูง", "อบผ้าด้วยความร้อนปานกลาง", "รีดด้วยไฟอ่อนถึงปานกลางหากจำเป็น"], cvc50: ["ซักเครื่องด้วยน้ำอุ่น ทนทานต่อการหดตัวสูง", "อบผ้าด้วยความร้อนปานกลาง", "รีดด้วยไฟอ่อนถึงปานกลางหากจำเป็น"] },
    closing: ["ลงทุนในการพักผ่อนของคุณด้วยเครื่องนอนที่ผสมผสานคุณภาพ ความสบาย และสไตล์", "นำประสบการณ์ระดับ 5 ดาวกลับบ้านและนอนหลับอย่างมีความสุขทุกคืน", "สร้างสรรค์ด้วยความใส่ใจ ออกแบบเพื่อความสบาย"]
  }
};
// Add placeholder for other languages to avoid errors
for (const lang of ['zh', 'ar', 'hi']) {
  descriptionContent[lang] = JSON.parse(JSON.stringify(descriptionContent.th)); // Base on Thai for better context
  descriptionContent[lang].hooks = JSON.parse(JSON.stringify(descriptionContent.en.hooks));
  descriptionContent[lang].towel_hooks = JSON.parse(JSON.stringify(descriptionContent.en.towel_hooks));
  descriptionContent[lang].closing = JSON.parse(JSON.stringify(descriptionContent.en.closing));
}

// Manually add high-quality translations for specific parts
descriptionContent.zh.hooks = ["将您的卧室变成纯粹舒适的避难所。", "用我们精心制作的床上用品提升您的睡眠体验。", "为宁静的夜晚睡眠找到完美的基础。", "在自己家中尽享酒店品质的奢华。"];
descriptionContent.zh.towel_hooks = ["用我们的高级酒店毛巾提升您的沐浴体验。", "将自己包裹在无与伦比的柔软和吸水性中。", "在自己家中尽享酒店品质的奢华。", "打造温泉般浴室的点睛之笔。"];
descriptionContent.ar.hooks = ["حوّل غرفة نومك إلى ملاذ من الراحة الخالصة.", "ارتقِ بتجربة نومك مع مفروشاتنا المصنوعة بدقة.", "اكتشف الأساس المثالي لنوم هادئ ليلاً.", "استمتع بفخامة تضاهي جودة الفنادق، في منزلك مباشرة."];
descriptionContent.ar.towel_hooks = ["ارتقِ بتجربة استحمامك مع مناشفنا الفندقية الفاخرة.", "اغمُر نفسك بنعومة وامتصاص لا مثيل لهما.", "استمتع بفخامة تضاهي جودة الفنادق، في منزلك مباشرة.", "اللمسة النهائية المثالية لحمام يشبه المنتجع الصحي。"];
descriptionContent.hi.hooks = ["अपने शयनकक्ष को शुद्ध आराम के अभयारण्य में बदलें।", "हमारे सावधानीपूर्वक तैयार किए गए बिस्तर के साथ अपने नींद के अनुभव को बेहतर बनाएं।", "एक आरामदायक रात की नींद के लिए सही आधार खोजें।", "अपने घर में ही होटल-गुणवत्ता वाली लक्जरी का आनंद लें।"];
descriptionContent.hi.towel_hooks = ["हमारे प्रीमियम होटल तौलियों के साथ अपने स्नान के अनुभव को बेहतर बनाएं।", "अपने आप को अद्वितीय कोमलता और अवशोषण क्षमता में लपेटें।", "अपने घर में ही होटल-गुणवत्ता वाली लक्जरी का आनंद लें।", "स्पा जैसे बाथरूम के लिए एकदम सही अंतिम स्पर्श।"];

function generateEnhancedDescription(product: Product): LocalizedString {
    const descriptions: Partial<LocalizedString> = {};

    const specLabels: Record<string, Record<string, string>> = {
        en: { included: "What's Included", tc: "Thread Density", weight: "Weight", weave: "Weave", material: "Material", features: "Key Features", care: "Care Instructions", specs: "Specifications", productId: "Product ID", tcUnit: "threads per 10 cm²", weightUnit: "lbs / dozen", pattern: "Pattern" },
        th: { included: "สินค้าในชุดประกอบด้วย", tc: "ความหนาแน่นเส้นด้าย", weight: "น้ำหนัก", weave: "การทอ", material: "วัสดุ", features: "คุณสมบัติเด่น", care: "คำแนะนำการดูแล", specs: "ข้อมูลจำเพาะ", productId: "รหัสสินค้า", tcUnit: "เส้น ต่อตาราง 10 ซม.", weightUnit: "ปอนด์ / โหล", pattern: "ลวดลาย" },
        zh: { included: "包含物品", tc: "纱线密度", weight: "重量", weave: "织法", material: "材料", features: "主要特点", care: "保养说明", specs: "规格", productId: "产品编号", tcUnit: "每 10 厘米² 股", weightUnit: "磅/打", pattern: "图案" },
        ar: { included: "محتويات العبوة", tc: "كثافة الخيوط", weight: "الوزن", weave: "النسيج", material: "المادة", features: "الميزات الرئيسية", care: "تعليمات العناية", specs: "المواصفات", productId: "رقم المنتج", tcUnit: "خيطًا لكل 10 سم²", weightUnit: "رطل / دزينة", pattern: "النمط" },
        hi: { included: "क्या शामिल है", tc: "धागा घनत्व", weight: "वजन", weave: "बुनाई", material: "सामग्री", features: "मुख्य विशेषताएं", care: "देखभाल गाइड", specs: "विशेष विवरण", productId: "उत्पाद आईडी", tcUnit: "10 सेमी² पर धागे", weightUnit: "पाउंड / दर्जन", pattern: "पैटर्न" },
    };

    for (const lang of Object.keys(descriptionContent)) {
        const T = descriptionContent[lang] || descriptionContent.en;
        const L = specLabels[lang] || specLabels.en;
        const isTowel = product.productType.key === 'towel';
        
        const fabricKey = product.fabricType.key;
        const fabricInfo = T.fabric[fabricKey];

        if (!fabricInfo) {
          console.error(`Missing description content for fabric key: ${fabricKey} in language: ${lang}`);
          descriptions[lang as keyof LocalizedString] = "Description not available.";
          continue;
        }

        const hooksSource = isTowel && T.towel_hooks && T.towel_hooks.length > 0 ? T.towel_hooks : T.hooks;
        const hook = hooksSource[Math.floor(Math.random() * hooksSource.length)];
        
        let fabricDetails;
        if (isTowel && product.originalThreadCount) {
            const dozenPrice = product.price.toLocaleString();
            const priceDescTemplate = towelPriceDescriptions[product.originalThreadCount as keyof typeof towelPriceDescriptions]?.[lang as keyof LocalizedString];
            const priceText = priceDescTemplate ? priceDescTemplate.replace('{price}', dozenPrice) : '';
            fabricDetails = `<p>${fabricInfo.base}</p><p>${priceText}</p><p>${fabricInfo.trivia || ''}</p>`;
        } else {
            fabricDetails = `<p>${fabricInfo.base} ${fabricInfo.trivia || ''}</p>`;
        }
        
        const patternInfo = T.pattern[product.pattern.key as keyof typeof T.pattern];
        const patternDetails = `<p>${patternInfo}</p>`;
        
        const sizeKey = product.size.key as keyof typeof T.size;
        const sizeInfo = T.size[sizeKey];
        const stylingDetails = sizeInfo ? `<p>${sizeInfo}</p>` : '';

        const productTypeInfo = T.productType[product.productType.key as keyof typeof T.productType];
        const inclusions = productTypeInfo.inclusions;

        const weightOrTcSpec = isTowel
            ? `<li><strong>${L.weight}:</strong> ${product.originalThreadCount} ${L.weightUnit}</li>`
            : `<li><strong>${L.tc}:</strong> ${product.threadCount} ${L.tcUnit}</li>`;

        const patternSpec = isTowel ? '' : `<li><strong>${L.pattern}:</strong> ${product.pattern[lang as keyof LocalizedString]}</li>`;

        const specList = [
            `<li><strong>${L.productId}:</strong> ${product.id}</li>`,
            `<li><strong>${L.included}:</strong> ${inclusions}</li>`,
            weightOrTcSpec,
            `<li><strong>${L.weave}:</strong> ${fabricInfo.specs.weave}</li>`,
            patternSpec,
            `<li><strong>${L.material}:</strong> ${product.fabricType[lang as keyof LocalizedString]}</li>`,
            `<li><strong>${L.features}:</strong> ${fabricInfo.specs.features}</li>`,
        ].filter(Boolean).join('');
        const specs = `<p><strong>${L.specs}:</strong></p><ul>${specList}</ul>`;

        const careList = T.care[fabricKey].map((item: string) => `<li>${item}</li>`).join('');
        const care = `<p><strong>${L.care}:</strong></p><ul>${careList}</ul>`;

        const closing = `<p><em>${T.closing[Math.floor(Math.random() * T.closing.length)]}</em></p>`;

        descriptions[lang as keyof LocalizedString] = [hook, fabricDetails, patternDetails, stylingDetails, specs, care, closing].join('<br/>');
    }
    return descriptions as LocalizedString;
}


// --- RAW DATA & MAPPINGS ---
const rawProductData = [
    // --- Bedding Data ---
    { code: 'FS-S35-ST370P-001', type: 'Fitted Sheet', size: '3.5 ฟุต x 10 นิ้ว', fabric: 'Soft tex', spec: '370 Thread Count / Plain Pattern / White', price: 245 },
    { code: 'FS-S35-ST370S-002', type: 'Fitted Sheet', size: '3.5 ฟุต x 10 นิ้ว', fabric: 'Soft tex', spec: '370 Thread Count / Striped Pattern / White', price: 255 },
    { code: 'FS-S35-C260S-003', type: 'Fitted Sheet', size: '3.5 ฟุต x 10 นิ้ว', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 505 },
    { code: 'FS-S35-C230P-004', type: 'Fitted Sheet', size: '3.5 ฟุต x 10 นิ้ว', fabric: 'Cotton 100%', spec: '230 Thread Count / Plain Pattern', price: 290 },
    { code: 'FS-S35-C260P-005', type: 'Fitted Sheet', size: '3.5 ฟุต x 10 นิ้ว', fabric: 'Cotton 100%', spec: '260 Thread Count / Plain Pattern', price: 305 },
    { code: 'FS-S35-C260S-006', type: 'Fitted Sheet', size: '3.5 ฟุต x 10 นิ้ว', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 315 },
    { code: 'FS-S35-C310P-007', type: 'Fitted Sheet', size: '3.5 ฟุต x 10 นิ้ว', fabric: 'Cotton 100%', spec: '310 Thread Count / Plain Pattern', price: 330 },
    { code: 'FS-S35-C310S-008', type: 'Fitted Sheet', size: '3.5 ฟุต x 10 นิ้ว', fabric: 'Cotton 100%', spec: '310 Thread Count / 1" Striped Pattern', price: 330 },
    { code: 'FS-S35-CVC50-195P-009', type: 'Fitted Sheet', size: '3.5 ฟุต x 10 นิ้ว', fabric: 'CVC 50/50', spec: '195 Thread Count / Plain Pattern', price: 250 },
    { code: 'FS-S35-CVC60-260S-010', type: 'Fitted Sheet', size: '3.5 ฟุต x 10 นิ้ว', fabric: 'CVC 60/40', spec: '260 Thread Count / 1" Striped Pattern', price: 315 },
    { code: 'FS-Q50-ST370P-011', type: 'Fitted Sheet', size: '5 ฟุต x 10 นิ้ว', fabric: 'Soft tex', spec: '370 Thread Count / Plain Pattern / White', price: 290 },
    { code: 'FS-Q50-ST370S-012', type: 'Fitted Sheet', size: '5 ฟุต x 10 นิ้ว', fabric: 'Soft tex', spec: '370 Thread Count / Striped Pattern / White', price: 300 },
    { code: 'FS-Q50-C260S-013', type: 'Fitted Sheet', size: '5 ฟุต x 10 นิ้ว', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 630 },
    { code: 'FS-Q50-C230P-014', type: 'Fitted Sheet', size: '5 ฟุต x 10 นิ้ว', fabric: 'Cotton 100%', spec: '230 Thread Count / Plain Pattern', price: 370 },
    { code: 'FS-Q50-C260P-015', type: 'Fitted Sheet', size: '5 ฟุต x 10 นิ้ว', fabric: 'Cotton 100%', spec: '260 Thread Count / Plain Pattern', price: 385 },
    { code: 'FS-Q50-C260S-016', type: 'Fitted Sheet', size: '5 ฟุต x 10 นิ้ว', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 395 },
    { code: 'FS-Q50-C310P-017', type: 'Fitted Sheet', size: '5 ฟุต x 10 นิ้ว', fabric: 'Cotton 100%', spec: '310 Thread Count / Plain Pattern', price: 410 },
    { code: 'FS-Q50-C310S-018', type: 'Fitted Sheet', size: '5 ฟุต x 10 นิ้ว', fabric: 'Cotton 100%', spec: '310 Thread Count / 1" Striped Pattern', price: 415 },
    { code: 'FS-Q50-CVC50-195P-019', type: 'Fitted Sheet', size: '5 ฟุต x 10 นิ้ว', fabric: 'CVC 50/50', spec: '195 Thread Count / Plain Pattern', price: 310 },
    { code: 'FS-Q50-CVC60-260S-020', type: 'Fitted Sheet', size: '5 ฟุต x 10 นิ้ว', fabric: 'CVC 60/40', spec: '260 Thread Count / 1" Striped Pattern', price: 395 },
    { code: 'FS-K60-ST370P-021', type: 'Fitted Sheet', size: '6 ฟุต x 12 นิ้ว', fabric: 'Soft tex', spec: '370 Thread Count / Plain Pattern / White', price: 330 },
    { code: 'FS-K60-ST370S-022', type: 'Fitted Sheet', size: '6 ฟุต x 12 นิ้ว', fabric: 'Soft tex', spec: '370 Thread Count / Striped Pattern / White', price: 340 },
    { code: 'FS-K60-C260S-023', type: 'Fitted Sheet', size: '6 ฟุต x 12 นิ้ว', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 675 },
    { code: 'FS-K60-C230P-024', type: 'Fitted Sheet', size: '6 ฟุต x 12 นิ้ว', fabric: 'Cotton 100%', spec: '230 Thread Count / Plain Pattern', price: 390 },
    { code: 'FS-K60-C260P-025', type: 'Fitted Sheet', size: '6 ฟุต x 12 นิ้ว', fabric: 'Cotton 100%', spec: '260 Thread Count / Plain Pattern', price: 445 },
    { code: 'FS-K60-C260S-026', type: 'Fitted Sheet', size: '6 ฟุต x 12 นิ้ว', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 455 },
    { code: 'FS-K60-C310P-027', type: 'Fitted Sheet', size: '6 ฟุต x 12 นิ้ว', fabric: 'Cotton 100%', spec: '310 Thread Count / Plain Pattern', price: 470 },
    { code: 'FS-K60-C310S-028', type: 'Fitted Sheet', size: '6 ฟุต x 12 นิ้ว', fabric: 'Cotton 100%', spec: '310 Thread Count / 1" Striped Pattern', price: 485 },
    { code: 'FS-K60-CVC50-195P-029', type: 'Fitted Sheet', size: '6 ฟุต x 12 นิ้ว', fabric: 'CVC 50/50', spec: '195 Thread Count / Plain Pattern', price: 365 },
    { code: 'FS-K60-CVC60-260S-030', type: 'Fitted Sheet', size: '6 ฟุต x 12 นิ้ว', fabric: 'CVC 60/40', spec: '260 Thread Count / 1" Striped Pattern', price: 454 },
    { code: 'FL-S35-ST370P-031', type: 'Flat Sheet', size: '72" x 110" (for 3.5 ft)', fabric: 'Soft tex', spec: '370 Thread Count / Plain Pattern / White', price: 325 },
    { code: 'DC-K60-CVC60-260S-090', type: 'Duvet Cover', size: '100"x90" (for 6 ft)', fabric: 'CVC 60/40', spec: '260 Thread Count / 1" Striped Pattern', price: 915 },
    { code: 'PC-STD-ST370P-091', type: 'Pillow Case', size: '20"x30"x6"', fabric: 'Soft tex', spec: '370 Thread Count / Plain Pattern / White', price: 50 },
    { code: 'PC-STD-ST370S-092', type: 'Pillow Case', size: '20"x30"x6"', fabric: 'Soft tex', spec: '370 Thread Count / Striped Pattern / White', price: 55 },
    { code: 'PC-STD-C260S-093', type: 'Pillow Case', size: '20"x30"x6"', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 125 },
    { code: 'PC-STD-C230P-094', type: 'Pillow Case', size: '20"x30"x6"', fabric: 'Cotton 100%', spec: '230 Thread Count / Plain Pattern', price: 60 },
    { code: 'PC-STD-C260P-095', type: 'Pillow Case', size: '20"x30"x6"', fabric: 'Cotton 100%', spec: '260 Thread Count / Plain Pattern', price: 65 },
    { code: 'PC-STD-C260S-096', type: 'Pillow Case', size: '20"x30"x6"', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 65 },
    { code: 'PC-STD-C310P-097', type: 'Pillow Case', size: '20"x30"x6"', fabric: 'Cotton 100%', spec: '310 Thread Count / Plain Pattern', price: 70 },
    { code: 'PC-STD-C310S-098', type: 'Pillow Case', size: '20"x30"x6"', fabric: 'Cotton 100%', spec: '310 Thread Count / 1" Striped Pattern', price: 70 },
    { code: 'PC-STD-CVC50-195P-099', type: 'Pillow Case', size: '20"x30"x6"', fabric: 'CVC 50/50', spec: '195 Thread Count / Plain Pattern', price: 50 },
    { code: 'PC-STD-CVC60-260S-100', type: 'Pillow Case', size: '20"x30"x6"', fabric: 'CVC 60/40', spec: '260 Thread Count / 1" Striped Pattern', price: 65 },
    { code: 'FL-S35-ST370S-101', type: 'Flat Sheet', size: '72" x 110" (for 3.5 ft)', fabric: 'Soft tex', spec: '370 Thread Count / Striped Pattern / White', price: 335 },
    { code: 'FL-S35-C260S-102', type: 'Flat Sheet', size: '72" x 110" (for 3.5 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 610 },
    { code: 'FL-S35-C230P-103', type: 'Flat Sheet', size: '72" x 110" (for 3.5 ft)', fabric: 'Cotton 100%', spec: '230 Thread Count / Plain Pattern', price: 310 },
    { code: 'FL-S35-C260P-104', type: 'Flat Sheet', size: '72" x 110" (for 3.5 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / Plain Pattern', price: 345 },
    { code: 'FL-S35-C260S-105', type: 'Flat Sheet', size: '72" x 110" (for 3.5 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 350 },
    { code: 'FL-S35-C310P-106', type: 'Flat Sheet', size: '72" x 110" (for 3.5 ft)', fabric: 'Cotton 100%', spec: '310 Thread Count / Plain Pattern', price: 355 },
    { code: 'FL-S35-C310S-107', type: 'Flat Sheet', size: '72" x 110" (for 3.5 ft)', fabric: 'Cotton 100%', spec: '310 Thread Count / 1" Striped Pattern', price: 370 },
    { code: 'FL-S35-CVC50P-108', type: 'Flat Sheet', size: '72" x 110" (for 3.5 ft)', fabric: 'CVC 50/50', spec: '195 Thread Count / Plain Pattern', price: 270 },
    { code: 'FL-S35-CVC60S-109', type: 'Flat Sheet', size: '72" x 110" (for 3.5 ft)', fabric: 'CVC 60/40', spec: '260 Thread Count / 1" Striped Pattern', price: 350 },
    { code: 'FL-Q50-ST370P-110', type: 'Flat Sheet', size: '90" x 110" (for 5 ft)', fabric: 'Soft tex', spec: '370 Thread Count / Plain Pattern / White', price: 325 },
    { code: 'FL-Q50-ST370S-111', type: 'Flat Sheet', size: '90" x 110" (for 5 ft)', fabric: 'Soft tex', spec: '370 Thread Count / Striped Pattern / White', price: 335 },
    { code: 'FL-Q50-C260S-112', type: 'Flat Sheet', size: '90" x 110" (for 5 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 775 },
    { code: 'FL-Q50-C230P-113', type: 'Flat Sheet', size: '90" x 110" (for 5 ft)', fabric: 'Cotton 100%', spec: '230 Thread Count / Plain Pattern', price: 375 },
    { code: 'FL-Q50-C260P-114', type: 'Flat Sheet', size: '90" x 110" (for 5 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / Plain Pattern', price: 420 },
    { code: 'FL-Q50-C260S-115', type: 'Flat Sheet', size: '90" x 110" (for 5 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 425 },
    { code: 'FL-Q50-C310P-116', type: 'Flat Sheet', size: '90" x 110" (for 5 ft)', fabric: 'Cotton 100%', spec: '310 Thread Count / Plain Pattern', price: 435 },
    { code: 'FL-Q50-C310S-117', type: 'Flat Sheet', size: '90" x 110" (for 5 ft)', fabric: 'Cotton 100%', spec: '310 Thread Count / 1" Striped Pattern', price: 445 },
    { code: 'FL-Q50-CVC50P-118', type: 'Flat Sheet', size: '90" x 110" (for 5 ft)', fabric: 'CVC 50/50', spec: '195 Thread Count / Plain Pattern', price: 325 },
    { code: 'FL-Q50-CVC60S-119', type: 'Flat Sheet', size: '90" x 110" (for 5 ft)', fabric: 'CVC 60/40', spec: '260 Thread Count / 1" Striped Pattern', price: 425 },
    { code: 'FL-K60-ST370P-120', type: 'Flat Sheet', size: '110" x 110" (for 6 ft)', fabric: 'Soft tex', spec: '370 Thread Count / Plain Pattern / White', price: 395 },
    { code: 'FL-K60-ST370S-121', type: 'Flat Sheet', size: '110" x 110" (for 6 ft)', fabric: 'Soft tex', spec: '370 Thread Count / Striped Pattern / White', price: 405 },
    { code: 'FL-K60-C260S-122', type: 'Flat Sheet', size: '110" x 110" (for 6 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 880 },
    { code: 'FL-K60-C230P-123', type: 'Flat Sheet', size: '110" x 110" (for 6 ft)', fabric: 'Cotton 100%', spec: '230 Thread Count / Plain Pattern', price: 425 },
    { code: 'FL-K60-C260P-124', type: 'Flat Sheet', size: '110" x 110" (for 6 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / Plain Pattern', price: 490 },
    { code: 'FL-K60-C260S-125', type: 'Flat Sheet', size: '110" x 110" (for 6 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 500 },
    { code: 'FL-K60-C310P-126', type: 'Flat Sheet', size: '110" x 110" (for 6 ft)', fabric: 'Cotton 100%', spec: '310 Thread Count / Plain Pattern', price: 510 },
    { code: 'FL-K60-C310S-127', type: 'Flat Sheet', size: '110" x 110" (for 6 ft)', fabric: 'Cotton 100%', spec: '310 Thread Count / 1" Striped Pattern', price: 515 },
    { code: 'FL-K60-CVC50P-128', type: 'Flat Sheet', size: '110" x 110" (for 6 ft)', fabric: 'CVC 50/50', spec: '195 Thread Count / Plain Pattern', price: 380 },
    { code: 'FL-K60-CVC60S-129', type: 'Flat Sheet', size: '110" x 110" (for 6 ft)', fabric: 'CVC 60/40', spec: '260 Thread Count / 1" Striped Pattern', price: 500 },
    { code: 'DC-S35-ST370P-130', type: 'Duvet Cover', size: '70"x90" (for 3.5 ft)', fabric: 'Soft tex', spec: '370 Thread Count / Plain Pattern / White', price: 435 },
    { code: 'DC-S35-ST370S-131', type: 'Duvet Cover', size: '70"x90" (for 3.5 ft)', fabric: 'Soft tex', spec: '370 Thread Count / Striped Pattern / White', price: 565 },
    { code: 'DC-S35-C260S-132', type: 'Duvet Cover', size: '70"x90" (for 3.5 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 960 },
    { code: 'DC-S35-C230P-133', type: 'Duvet Cover', size: '70"x90" (for 3.5 ft)', fabric: 'Cotton 100%', spec: '230 Thread Count / Plain Pattern', price: 585 },
    { code: 'DC-S35-C260P-134', type: 'Duvet Cover', size: '70"x90" (for 3.5 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / Plain Pattern', price: 670 },
    { code: 'DC-S35-C260S-135', type: 'Duvet Cover', size: '70"x90" (for 3.5 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 680 },
    { code: 'DC-S35-C310P-136', type: 'Duvet Cover', size: '70"x90" (for 3.5 ft)', fabric: 'Cotton 100%', spec: '310 Thread Count / Plain Pattern', price: 695 },
    { code: 'DC-S35-C310S-137', type: 'Duvet Cover', size: '70"x90" (for 3.5 ft)', fabric: 'Cotton 100%', spec: '310 Thread Count / 1" Striped Pattern', price: 710 },
    { code: 'DC-S35-CVC50P-138', type: 'Duvet Cover', size: '70"x90" (for 3.5 ft)', fabric: 'CVC 50/50', spec: '195 Thread Count / Plain Pattern', price: 540 },
    { code: 'DC-S35-CVC60S-139', type: 'Duvet Cover', size: '70"x90" (for 3.5 ft)', fabric: 'CVC 60/40', spec: '260 Thread Count / 1" Striped Pattern', price: 680 },
    { code: 'DC-Q50-ST370P-140', type: 'Duvet Cover', size: '90"x90" (for 5 ft)', fabric: 'Soft tex', spec: '370 Thread Count / Plain Pattern / White', price: 575 },
    { code: 'DC-Q50-ST370S-141', type: 'Duvet Cover', size: '90"x90" (for 5 ft)', fabric: 'Soft tex', spec: '370 Thread Count / Striped Pattern / White', price: 695 },
    { code: 'DC-Q50-C260S-142', type: 'Duvet Cover', size: '90"x90" (for 5 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 1180 },
    { code: 'DC-Q50-C230P-143', type: 'Duvet Cover', size: '90"x90" (for 5 ft)', fabric: 'Cotton 100%', spec: '230 Thread Count / Plain Pattern', price: 730 },
    { code: 'DC-Q50-C260P-144', type: 'Duvet Cover', size: '90"x90" (for 5 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / Plain Pattern', price: 835 },
    { code: 'DC-Q50-C260S-145', type: 'Duvet Cover', size: '90"x90" (for 5 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 860 },
    { code: 'DC-Q50-C310P-146', type: 'Duvet Cover', size: '90"x90" (for 5 ft)', fabric: 'Cotton 100%', spec: '310 Thread Count / Plain Pattern', price: 870 },
    { code: 'DC-Q50-C310S-147', type: 'Duvet Cover', size: '90"x90" (for 5 ft)', fabric: 'Cotton 100%', spec: '310 Thread Count / 1" Striped Pattern', price: 885 },
    { code: 'DC-Q50-CVC50P-148', type: 'Duvet Cover', size: '90"x90" (for 5 ft)', fabric: 'CVC 50/50', spec: '195 Thread Count / Plain Pattern', price: 675 },
    { code: 'DC-Q50-CVC60S-149', type: 'Duvet Cover', size: '90"x90" (for 5 ft)', fabric: 'CVC 60/40', spec: '260 Thread Count / 1" Striped Pattern', price: 860 },
    { code: 'DC-K60-ST370P-150', type: 'Duvet Cover', size: '100"x90" (for 6 ft)', fabric: 'Soft tex', spec: '370 Thread Count / Plain Pattern / White', price: 595 },
    { code: 'DC-K60-ST370S-151', type: 'Duvet Cover', size: '100"x90" (for 6 ft)', fabric: 'Soft tex', spec: '370 Thread Count / Striped Pattern / White', price: 695 },
    { code: 'DC-K60-C260S-152', type: 'Duvet Cover', size: '100"x90" (for 6 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 1295 },
    { code: 'DC-K60-C230P-153', type: 'Duvet Cover', size: '100"x90" (for 6 ft)', fabric: 'Cotton 100%', spec: '230 Thread Count / Plain Pattern', price: 780 },
    { code: 'DC-K60-C260P-154', type: 'Duvet Cover', size: '100"x90" (for 6 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / Plain Pattern', price: 895 },
    { code: 'DC-K60-C260S-155', type: 'Duvet Cover', size: '100"x90" (for 6 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 915 },
    { code: 'DC-K60-C310P-156', type: 'Duvet Cover', size: '100"x90" (for 6 ft)', fabric: 'Cotton 100%', spec: '310 Thread Count / Plain Pattern', price: 930 },
    { code: 'DC-K60-C310S-157', type: 'Duvet Cover', size: '100"x90" (for 6 ft)', fabric: 'Cotton 100%', spec: '310 Thread Count / 1" Striped Pattern', price: 950 },
    { code: 'DC-K60-CVC50P-158', type: 'Duvet Cover', size: '100"x90" (for 6 ft)', fabric: 'CVC 50/50', spec: '195 Thread Count / Plain Pattern', price: 720 },
    // --- Towel Data ---
    { code: 'TWL-STD-12LBS-WHT-01', type: 'Towel', size: '27" x 54"', fabric: 'Cotton 100% Towel', spec: '12 lbs / Plain Pattern / White', price: 220 },
    { code: 'TWL-MED-14LBS-WHT-02', type: 'Towel', size: '27" x 54"', fabric: 'Cotton 100% Towel', spec: '14 lbs / Plain Pattern / White', price: 250 },
    { code: 'TWL-LRG-16LBS-WHT-03', type: 'Towel', size: '30" x 60"', fabric: 'Cotton 100% Towel', spec: '16 lbs / Plain Pattern / White', price: 280 },
    { code: 'TWL-LUX-18LBS-WHT-04', type: 'Towel', size: '30" x 60"', fabric: 'Cotton 100% Towel', spec: '18 lbs / Plain Pattern / White', price: 800 },
    // --- New Bolster Data ---
    { code: 'BC-C100-406S-01', type: 'Bolster Case', size: '14″ x 44″', fabric: 'Cotton 100%', spec: '406 Thread Count / Striped Pattern / White', price: 580 },
    { code: 'BC-CAD-500S-02', type: 'Bolster Case', size: '27″ x 40″', fabric: 'Anti-Dust Mite Cotton', spec: '500 Thread Count / Striped Pattern / White', price: 690 },
];

const MAPPINGS = {
    productType: { 'Fitted Sheet': { key: 'fittedSheet', th: 'ผ้าปูที่นอนรัดมุม', en: 'Fitted Sheet', zh: '床笠', ar: 'شرشف بمطاط', hi: 'फिटेड शीट' }, 'Flat Sheet': { key: 'flatSheet', th: 'ผ้าปูที่นอนไม่รัดมุม', en: 'Flat Sheet', zh: '床单', ar: 'شرشف عادي', hi: 'फ्लैट शीट' }, 'Duvet Cover': { key: 'duvetCover', th: 'ปลอกผ้านวม', en: 'Duvet Cover', zh: '被套', ar: 'غطاء لحاف', hi: 'डुवेट कवर' }, 'Pillow Case': { key: 'pillowCase', th: 'ปลอกหมอน', en: 'Pillow Case', zh: '枕套', ar: 'غطاء وسادة', hi: 'तकिया कवर' }, 'Bedding Set': { key: 'beddingSet', th: 'ชุดเครื่องนอน', en: 'Bedding Set', zh: '床上用品套装', ar: 'طقم مفروشات', hi: 'बिस्तर सेट' }, 'Towel': { key: 'towel', th: 'ผ้าขนหนู', en: 'Towel', zh: '毛巾', ar: 'منشفة', hi: 'तौलिया' }, 'Bolster Case': { key: 'bolsterCase', th: 'ปลอกหมอนข้าง', en: 'Bolster Case', zh: '长枕套', ar: 'غطاء وسادة أسطوانية', hi: 'बोलस्टर केस' } },
    fabricType: { 'Soft tex': { key: 'softTex', th: 'ซอฟท์เท็กซ์', en: 'Soft-Tex', zh: '软泰克斯', ar: 'سوفت تكس', hi: 'सॉफ्ट टेक्स' }, 'Cotton 100%': { key: 'cotton100', th: 'คอตตอน 100%', en: 'Cotton 100%', zh: '100%纯棉', ar: 'قطن 100%', hi: '100% कॉटन' }, 'CVC 50/50': { key: 'cvc50', th: 'CVC 50/50', en: 'CVC 50/50', zh: 'CVC 50/50', ar: 'CVC 50/50', hi: 'सीवीसी 50/50' }, 'CVC 60/40': { key: 'cvc60', th: 'CVC 60/40', en: 'CVC 60/40', zh: 'CVC 60/40', ar: 'CVC 60/40', hi: 'सीवीसी 60/40' }, 'Cotton 100% Towel': { key: 'cottonTowel', th: 'ผ้าขนหนูคอตตอน 100%', en: 'Cotton 100% Towel', zh: '100%纯棉毛巾', ar: 'منشفة قطن 100%', hi: '100% कॉटन तौलिया' }, 'Anti-Dust Mite Cotton': { key: 'cottonAntiDust', th: 'คอตตอนกันไรฝุ่น', en: 'Anti-Dust Mite Cotton', zh: '防螨棉', ar: 'قطن مضاد لعث الغبار', hi: 'धूल के कण रोधी कॉटन' } },
    size: { '3.5 ฟุต x 10 นิ้ว': { key: 's35_10', th: '3.5 ฟุต (สูง 10 นิ้ว)', en: '3.5 ft (10" depth)', zh: '3.5英尺 (10英寸高)', ar: '3.5 قدم (عمق 10 بوصة)', hi: '3.5 फुट (10" गहराई)' }, '5 ฟุต x 10 นิ้ว': { key: 'q50_10', th: '5 ฟุต (สูง 10 นิ้ว)', en: '5 ft (10" depth)', zh: '5英尺 (10英寸高)', ar: '5 قدم (عمق 10 بوصة)', hi: '5 फुट (10" गहराई)' }, '6 ฟุต x 12 นิ้ว': { key: 'k60_12', th: '6 ฟุต (สูง 12 นิ้ว)', en: '6 ft (12" depth)', zh: '6英尺 (12英寸高)', ar: '6 قدم (عمق 12 بوصة)', hi: '6 फुट (12" गहराई)' }, '72" x 110" (for 3.5 ft)': { key: 'flat_s35', th: '72"x110" (สำหรับ 3.5 ฟุต)', en: '72"x110" (for 3.5 ft)', zh: '72"x110" (适用3.5英尺)', ar: '72"x110" (لـ 3.5 قدم)', hi: '72"x110" (3.5 फुट के लिए)' }, '90" x 110" (for 5 ft)': { key: 'flat_q50', th: '90"x110" (สำหรับ 5 ฟุต)', en: '90"x110" (for 5 ft)', zh: '90"x110" (适用5英尺)', ar: '90"x110" (لـ 5 قدم)', hi: '90"x110" (5 फुट के लिए)' }, '110" x 110" (for 6 ft)': { key: 'flat_k60', th: '110"x110" (สำหรับ 6 ฟุต)', en: '110"x110" (for 6 ft)', zh: '110"x110" (适用6英尺)', ar: '110"x110" (لـ 6 قدم)', hi: '110"x110" (6 फुट के लिए)' }, '70"x90" (for 3.5 ft)': { key: 'duvet_s35', th: '70"x90" (สำหรับ 3.5 ฟุต)', en: '70"x90" (for 3.5 ft)', zh: '70"x90" (适用3.5英尺)', ar: '70"x90" (لـ 3.5 قدم)', hi: '70"x90" (3.5 फुट के लिए)' }, '90"x90" (for 5 ft)': { key: 'duvet_q50', th: '90"x90" (สำหรับ 5 ฟุต)', en: '90"x90" (for 5 ft)', zh: '90"x90" (适用5英尺)', ar: '90"x90" (لـ 5 قدم)', hi: '90"x90" (5 फुट के लिए)' }, '100"x90" (for 6 ft)': { key: 'duvet_k60', th: '100"x90" (สำหรับ 6 ฟุต)', en: '100"x90" (for 6 ft)', zh: '100"x90" (适用6英尺)', ar: '100"x90" (لـ 6 قدم)', hi: '100"x90" (6 फुट के लिए)' }, '20"x30"x6"': { key: 'pillow_std', th: 'ปลอกหมอนมาตรฐาน', en: 'Standard Pillowcase', zh: '标准枕套', ar: 'غطاء وسادة قياسي', hi: 'मानक तकिया कवर' }, '27" x 54"': { key: 'towel_std', th: '27" x 54"', en: '27" x 54"', zh: '27" x 54"', ar: '27" x 54"', hi: '27" x 54"' }, '30" x 60"': { key: 'towel_large', th: '30" x 60"', en: '30" x 60"', zh: '30" x 60"', ar: '30" x 60"', hi: '30" x 60"' }, '14″ x 44″': { key: 'bolster_14x44', th: '14″ x 44″', en: '14″ x 44″', zh: '14″ x 44″', ar: '14″ × 44″', hi: '14″ x 44″' }, '27″ x 40″': { key: 'bolster_27x40', th: '27″ x 40″', en: '27″ x 40″', zh: '27″ x 40″', ar: '27″ × 40″', hi: '27″ x 40″' } },
    pattern: { 'Plain': { key: 'plain', th: 'สีพื้น', en: 'Plain', zh: '纯色', ar: 'سادة', hi: 'सादा' }, 'Striped': { key: 'striped', th: 'ลายริ้ว', en: 'Striped', zh: '条纹', ar: 'مخطط', hi: 'धारीदार' } },
    color: { 'White': { key: 'white', th: 'สีขาว', en: 'White', zh: '白色', ar: 'أبيض', hi: 'सफ़ेद' } }
};


// --- BUSINESS LOGIC ---
const calculateAdjustedPrice = (originalPrice: number): number => {
    const basePrice = (originalPrice * 3) * 1.07 + 150;
    const roundedUp = Math.ceil(basePrice / 10) * 10;
    return roundedUp + 20;
};

const convertTc = (originalTc: number): number => {
    if (originalTc <= 0) return 0;
    const newTc = originalTc / 0.625;
    // Round to nearest 10 for more precise values, e.g., for 650TC
    return Math.round(newTc / 10) * 10;
};

// --- DATA TRANSFORMATION ---
const singleProducts: Product[] = rawProductData.map(item => {
    const isTowel = item.type === 'Towel';
    const isBolster = item.type === 'Bolster Case';
    const specParts = item.spec.split(' / ');
    const originalThreadCount = parseInt(specParts[0].match(/\d+/)?.[0] || '0', 10);
    const threadCount = isTowel ? originalThreadCount : convertTc(originalThreadCount);
    const patternKey: 'Plain' | 'Striped' = item.spec.toLowerCase().includes('stripe') ? 'Striped' : 'Plain';
    const colorKey: 'White' = 'White';

    const productType = MAPPINGS.productType[item.type as keyof typeof MAPPINGS.productType];
    const fabricType = MAPPINGS.fabricType[item.fabric as keyof typeof MAPPINGS.fabricType] || MAPPINGS.fabricType['CVC 60/40']; // Fallback
    const size = MAPPINGS.size[item.size as keyof typeof MAPPINGS.size];
    const pattern = MAPPINGS.pattern[patternKey];
    const color = MAPPINGS.color[colorKey];

    let imageUrl: string | undefined = undefined;
    if (isTowel) {
        imageUrl = getDeterministicImage('towel', item.code);
    } else if (isBolster) {
        imageUrl = getDeterministicImage('bolster', item.code);
    } else if (color.key === 'white') {
        imageUrl = pattern.key === 'striped' ? getDeterministicImage('white_striped', item.code) : getDeterministicImage('white_plain', item.code);
    } else {
        imageUrl = getDeterministicImage('color_plain', item.code);
    }

    const name: LocalizedString = {
        th: isTowel ? `${productType.th} ${fabricType.th} ${threadCount} ปอนด์ (${size.th})` : `${productType.th} ${fabricType.th} ${threadCount}เส้น ${pattern.th} (${size.th})`,
        en: isTowel ? `Premium ${threadCount}lbs ${fabricType.en} ${productType.en} (${size.en})` : `Luxury ${threadCount}T ${fabricType.en} ${pattern.en} ${productType.en} (${size.en})`,
        zh: isTowel ? `高级 ${threadCount}磅 ${fabricType.zh} ${productType.zh} (${size.zh})` : `${fabricType.zh} ${threadCount}针 ${pattern.zh} ${productType.zh} (${size.zh})`,
        ar: isTowel ? `${productType.ar} ${fabricType.ar} فاخر ${threadCount} رطل (${size.ar})` : `${productType.ar} ${fabricType.ar} ${threadCount} ${pattern.ar} (${size.ar})`,
        hi: isTowel ? `प्रीमियम ${threadCount}lbs ${fabricType.hi} ${productType.hi} (${size.hi})` : `${productType.hi} ${fabricType.hi} ${threadCount} ${pattern.hi} (${size.hi})`,
    };
    
    // Calculate the final price. For towels, it's price per dozen.
    const price = isTowel ? item.price * 12 : (isBolster ? item.price : calculateAdjustedPrice(item.price));


    const tempProductHolder: Product = { id: item.code, name, productType, size, fabricType, threadCount, originalThreadCount, pattern, color, price, description: name, imageUrl };
    const description = generateEnhancedDescription(tempProductHolder);

    return { ...tempProductHolder, description };
});

// --- SET CREATION LOGIC ---
const productsByStyle = new Map<string, { fittedSheets: Product[], pillowCases: Product[] }>();
singleProducts.forEach(p => {
    if (p.productType.key === 'fittedSheet' || p.productType.key === 'pillowCase') {
        const styleKey = `${p.fabricType.key}-${p.originalThreadCount}-${p.pattern.key}-${p.color.key}`;
        if (!productsByStyle.has(styleKey)) {
            productsByStyle.set(styleKey, { fittedSheets: [], pillowCases: [] });
        }
        const group = productsByStyle.get(styleKey)!;
        if (p.productType.key === 'fittedSheet') group.fittedSheets.push(p);
        if (p.productType.key === 'pillowCase') group.pillowCases.push(p);
    }
});

const beddingSets: Product[] = [];
const originalPriceMap = new Map<string, number>(rawProductData.map(i => [i.code, i.price]));

productsByStyle.forEach((group) => {
    if (group.pillowCases.length > 0 && group.fittedSheets.length > 0) {
        const pillowCase = group.pillowCases[0];
        const originalPillowPrice = originalPriceMap.get(pillowCase.id) || 0;

        group.fittedSheets.forEach(sheet => {
            const originalSheetPrice = originalPriceMap.get(sheet.id) || 0;
            const originalSetPrice = originalSheetPrice + (2 * originalPillowPrice);
            const price = calculateAdjustedPrice(originalSetPrice);

            const name: LocalizedString = {
                th: `ชุดเครื่องนอน ${sheet.fabricType.th} ${sheet.threadCount}เส้น ${sheet.pattern.th} (ครบเซ็ต ${sheet.size.th})`,
                en: `${sheet.fabricType.en} ${sheet.threadCount}T ${sheet.pattern.en} Bedding Set (${sheet.size.en})`,
                zh: `${sheet.fabricType.zh} ${sheet.threadCount}针 ${sheet.pattern.zh}床上用品套装 (${sheet.size.zh})`,
                ar: `طقم مفروشات ${sheet.fabricType.ar} ${sheet.threadCount} ${sheet.pattern.ar} (${sheet.size.ar})`,
                hi: `${sheet.fabricType.hi} ${sheet.threadCount} ${sheet.pattern.hi} बिस्तर सेट (${sheet.size.hi})`,
            };
            
            const tempSetHolder: Product = { ...sheet, id: `SET-${sheet.id}`, productType: MAPPINGS.productType['Bedding Set'], name, price };
            const description = generateEnhancedDescription(tempSetHolder);

            beddingSets.push({ ...tempSetHolder, description });
        });
    }
});

export const products: Product[] = [...singleProducts, ...beddingSets];
