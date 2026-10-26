
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import InlineImage from '../components/InlineImage';
import OriginalGallery from '../OriginalGallery';

const ImageSlideshow: React.FC<{ images: string[]; alt: string; interval?: number; aspectRatio?: '4/3' | '16/9' | '1/1' | '4/5'; }> = ({ images, alt, interval = 2000, aspectRatio = '4/5' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const aspectClasses = {
    '4/3': 'aspect-[4/3]',
    '16/9': 'aspect-[16/9]',
    '1/1': 'aspect-square',
    '4/5': 'aspect-[4/5]',
  };

  return (
    <div className={`my-8 sm:my-10`}>
      <div className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ${aspectClasses[aspectRatio]} p-0.5 bg-brand-gold`}>
        <div className="w-full h-full relative rounded-xl overflow-hidden">
          {images.slice(0,1).map((src, index) => (
            <img
              key={src + index}
              src={src}
              alt={`${alt} - slide ${index + 1}`}
              loading={index === 0 ? 'eager' : 'lazy'}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-xl pointer-events-none"></div>
      </div>
    </div>
  );
};


const InfoCard: React.FC<{ titleKey: string; children: React.ReactNode; className?: string }> = ({ titleKey, children, className }) => {
  const { t } = useTranslation();
  return (
    <div className={`bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 text-start ${className}`}>
      <h3 className="text-2xl font-semibold text-brand-primary mb-4 flex items-center">
        <CheckBadgeIcon className="h-7 w-7 me-3" />
        {t(titleKey)}
      </h3>
      <div className="space-y-3 text-neutral-700 text-base">
        {children}
      </div>
    </div>
  );
};

const HotelInfoTable: React.FC<{ headerKeys: string[]; data: (string | React.ReactElement)[][]; captionKey?: string }> = ({ headerKeys, data, captionKey }) => {
  const { t } = useTranslation();
  return (
    <div role="region" tabIndex={0} aria-label={t(captionKey || headerKeys[0])} className="data-table-shell overflow-x-auto rounded-xl shadow-xl border border-neutral-200/80">
      
      <table className="content-table min-w-full bg-white/80 backdrop-blur-sm text-base">
        <thead className="bg-brand-secondary/70 text-brand-dark">
          <tr>
            {headerKeys.map(headerKey => (
              <th scope="col" key={headerKey} className="text-start py-4 px-6 font-semibold tracking-wider">{t(headerKey)}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-neutral-700">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={`${rowIndex === 0 ? '' : 'border-t'} border-neutral-200 hover:bg-brand-light/70 transition-colors duration-200`}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="py-5 px-6">
                  {typeof cell === 'string' && (cell.startsWith('hotelsPage.')) ? t(cell) : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const hospitalityGalleryCopy: Record<string, { title: string; intro: string; items: { title: string; alt: string; description: string }[] }> = {
  th: {
    title: 'ภาพบรรยากาศสำหรับงานบริการที่พัก',
    intro: 'ภาพประกอบเพื่อช่วยให้เห็นบริบทการเลือกเครื่องนอนและผ้าห้องน้ำสำหรับที่พัก ภาพเหล่านี้สื่อบรรยากาศ ไม่ได้ระบุว่าเป็นผลงานของโรงแรมหรือภาพสินค้ารุ่นใดโดยเฉพาะ',
    items: [
      { title: 'ห้องพักพร้อมเตียงที่จัดเตรียมแล้ว', alt: 'ห้องพักโรงแรมโทนอบอุ่นพร้อมเตียงปูผ้าสีขาวและแสงธรรมชาติ', description: 'พิจารณาผิวสัมผัส สี และขนาดที่เหมาะกับภาพรวมของห้องพัก' },
      { title: 'การจัดผ้าปูในห้องพัก', alt: 'มือพนักงานจัดผ้าปูสีขาวและสอดชายผ้าไว้ใต้ที่นอน', description: 'การเลือกผ้าปูควรคำนึงถึงขนาดเตียงและวิธีจัดเตียงที่ใช้งานจริง' },
      { title: 'ผ้าขนหนูในห้องน้ำ', alt: 'ผ้าขนหนูสีขาวพับวางบนเคาน์เตอร์หินในห้องน้ำโรงแรม', description: 'เลือกขนาดและปริมาณให้สอดคล้องกับการใช้งานและรอบซักของที่พัก' },
    ],
  },
  en: {
    title: 'Hospitality settings, considered',
    intro: 'Editorial images to help place bedding and bath linen choices in a guest accommodation context. These are illustrative scenes, not named hotel projects or photographs of a specific product SKU.',
    items: [
      { title: 'A guest room, ready for arrival', alt: 'Warm hotel guest room with a white made bed and natural window light', description: 'Consider how textile texture, color and scale sit within the room.' },
      { title: 'Preparing the bed', alt: 'Room attendant’s hands tucking a white flat sheet beneath a mattress', description: 'Choose linen with the bed dimensions and your real bed-making routine in mind.' },
      { title: 'Bath linen in context', alt: 'White towels folded on a stone counter in a hotel bathroom', description: 'Match towel dimensions and quantities to guest use and laundry cycles.' },
    ],
  },
  zh: {
    title: '酒店客房场景参考',
    intro: '这些编辑摄影用于展示住宿空间中床品与浴室布草的使用情境。图片仅作氛围示意，不代表特定酒店项目或具体 SKU 商品实拍。',
    items: [
      { title: '准备妥当的客房', alt: '暖色调酒店客房，白色床铺与自然窗光', description: '结合房间整体效果考虑织物质感、颜色与尺寸比例。' },
      { title: '铺床整理', alt: '客房工作人员将白色平铺床单塞入床垫下方', description: '选择床品时请结合床垫尺寸和实际铺床流程。' },
      { title: '浴室布草情境', alt: '白色毛巾整齐叠放在酒店浴室石材台面上', description: '按宾客用途和洗涤周期确认毛巾尺寸与数量。' },
    ],
  },
  ar: {
    title: 'مشاهد إرشادية لقطاع الضيافة',
    intro: 'صور تحريرية توضح سياق اختيار مفروشات الأسرّة ومناشف الحمام لأماكن الإقامة. الصور توضيحية ولا تمثل مشروع فندق محدداً أو تصويراً لرمز منتج بعينه.',
    items: [
      { title: 'غرفة جاهزة لاستقبال الضيوف', alt: 'غرفة فندقية دافئة بسرير أبيض وضوء طبيعي من النافذة', description: 'راعِ ملمس الأقمشة وألوانها ومقاسها ضمن تصميم الغرفة.' },
      { title: 'ترتيب السرير', alt: 'يدا موظف يطويان شرشفاً أبيض مسطحاً تحت المرتبة', description: 'اختر المفروشات وفق مقاس السرير وطريقة ترتيبه الفعلية.' },
      { title: 'مناشف الحمام في سياقها', alt: 'مناشف بيضاء مطوية على سطح حجري في حمام فندقي', description: 'طابق مقاسات المناشف وكمياتها مع استخدام الضيوف ودورات الغسيل.' },
    ],
  },
  hi: {
    title: 'आतिथ्य स्थलों के लिए दृश्य संदर्भ',
    intro: 'ये संपादकीय चित्र ठहरने की जगहों में बिस्तर और स्नान लिनन के उपयोग का संदर्भ दिखाते हैं। ये केवल उदाहरणात्मक दृश्य हैं; किसी होटल परियोजना या विशिष्ट SKU की वास्तविक तस्वीर नहीं।',
    items: [
      { title: 'अतिथि के लिए तैयार कमरा', alt: 'सफेद बिस्तर और प्राकृतिक खिड़की की रोशनी वाला गर्मजोशी भरा होटल कमरा', description: 'कमरे में कपड़े की बनावट, रंग और आकार के मेल पर विचार करें।' },
      { title: 'बिस्तर तैयार करना', alt: 'कर्मचारी के हाथ सफेद फ्लैट शीट को गद्दे के नीचे दबाते हुए', description: 'बिस्तर के माप और वास्तविक बिस्तर बनाने की प्रक्रिया के अनुसार लिनन चुनें।' },
      { title: 'बाथ लिनन का संदर्भ', alt: 'होटल बाथरूम के पत्थर के काउंटर पर तह किए सफेद तौलिए', description: 'तौलियों का आकार और मात्रा अतिथि उपयोग तथा धुलाई चक्र से मिलाएँ।' },
    ],
  },
};

export default function HotelsPage() {
  const { t, i18n } = useTranslation();
  const langPrefix = `/${i18n.language}`;
  const galleryCopy = hospitalityGalleryCopy[i18n.language] || hospitalityGalleryCopy.en;
  const siteName = "Slumbazen";
  const pageTitle = t('seo.hotels.title', { siteName });
  const pageDescription = t('seo.hotels.description');
  const pageKeywords = t('seo.hotels.keywords');
  const canonicalUrl = `${'https://www.slumbazen.com'}${'/'}#/hotels`;
  
  const slideshowImages = [
    "/assets/restored-f12d2f42cb89.webp",
    "/assets/restored-afe0e45f73f8.webp",
    "/assets/restored-f7c92a7fe9f0.webp",
    "/assets/restored-95b676b8efa1.webp",
    "/assets/restored-8f158b62f061.webp",
    "/assets/restored-000d1e2d1f6c.webp",
    "/assets/restored-5f74694d0e25.webp",
    "/assets/restored-3ca48e9246fc.webp",
    "/assets/restored-fc4d229c0e5b.webp"
  ];

  const expertAdviceDataContent = [
    { useCaseKey: "hotelsPage.expertAdvice.row1.useCase", recommendationKey: "hotelsPage.expertAdvice.row1.recommendation", reasonKey: "hotelsPage.expertAdvice.row1.reason" },
    { useCaseKey: "hotelsPage.expertAdvice.row2.useCase", recommendationKey: "hotelsPage.expertAdvice.row2.recommendation", reasonKey: "hotelsPage.expertAdvice.row2.reason" },
    { useCaseKey: "hotelsPage.expertAdvice.row3.useCase", recommendationKey: "hotelsPage.expertAdvice.row3.recommendation", reasonKey: "hotelsPage.expertAdvice.row3.reason" },
    { useCaseKey: "hotelsPage.expertAdvice.row4.useCase", recommendationKey: "hotelsPage.expertAdvice.row4.recommendation", reasonKey: "hotelsPage.expertAdvice.row4.reason" },
    { useCaseKey: "hotelsPage.expertAdvice.row5.useCase", recommendationKey: "hotelsPage.expertAdvice.row5.recommendation", reasonKey: "hotelsPage.expertAdvice.row5.reason" },
  ];
  const expertAdviceTableData = expertAdviceDataContent.map(item => [t(item.useCaseKey), t(item.recommendationKey), t(item.reasonKey)]);

  const whyChooseUsCards = [
    { titleKey: "hotelsPage.whyChooseUs.card1.title", contentKey: "hotelsPage.whyChooseUs.card1.content" },
    { titleKey: "hotelsPage.whyChooseUs.card2.title", contentKey: "hotelsPage.whyChooseUs.card2.content", linkTo: "/materials", linkKey: "hotelsPage.whyChooseUs.card2.link" },
    { titleKey: "hotelsPage.whyChooseUs.card3.title", contentKey: "hotelsPage.whyChooseUs.card3.content" },
    { titleKey: "hotelsPage.whyChooseUs.card4.title", contentKey: "hotelsPage.whyChooseUs.card4.content" },
    { titleKey: "hotelsPage.whyChooseUs.card5.title", contentKey: "hotelsPage.whyChooseUs.card5.content" },
    { titleKey: "hotelsPage.whyChooseUs.card6.title", contentKey: "hotelsPage.whyChooseUs.card6.content", buttonTo: "/contact?subject=RequestSamplesB2B", buttonKey: "hotelsPage.whyChooseUs.card6.button" },
  ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle, "description": pageDescription, "url": canonicalUrl, "keywords": pageKeywords,
     "mainEntity": { "@type": "Service", "serviceType": t('hotelsPage.mainTitle'), 
      "provider": { "@type": "Organization", "name": siteName, "url": `${'https://www.slumbazen.com'}${'/'}#/` },
      "areaServed": { "@type": "Country", "name": "Thailand" }, "description": pageDescription,
      "serviceOutput": { "@type": "Product", "name": "Hotel Bedding (Cotton, Tencel, CVC, Soft-Tex)" }
    },
    "breadcrumb": { "@context": "https://schema.org", "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": t('nav.home'), "item": `${'https://www.slumbazen.com'}${'/'}#${langPrefix}` },
        { "@type": "ListItem", "position": 2, "name": t('nav.hotelB2B'), "item": `${'https://www.slumbazen.com'}${'/'}#${langPrefix}/hotels` }
      ]
    },
    "publisher": { "@type": "Organization", "name": siteName, "logo": { "@type": "ImageObject", "url": "/assets/logo.png" } }
  };

  return (
    <>
      
      <div className="bg-brand-light relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/assets/restored-b0f9cb299859.webp')" }}></div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-brand-secondary/20 backdrop-blur-sm" />
        
        <header 
          className="relative text-center py-20 sm:py-28 text-white overflow-hidden bg-brand-dark bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/restored-f08369169e9f.webp')" }}
        >
          <div className="absolute inset-0 bg-brand-dark/70"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              {t('hotelsPage.mainTitle')}
            </h1>
            <p className="text-lg text-neutral-200 max-w-3xl mx-auto">
              {t('hotelsPage.mainDescription')}
            </p>
          </div>
        </header>
        
        <div className="py-20 sm:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <section id="why-choose-us-b2b" aria-labelledby="why-choose-us-heading" className="mb-20 sm:mb-28 p-8 -m-8 relative overflow-hidden rounded-2xl bg-brand-light/50">
                <div className="relative z-10">
                    <h2 id="why-choose-us-heading" className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-16 text-center">
                        {t('hotelsPage.whyChooseUs.title')}
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <InlineImage
                                src="/assets/editorial/hospitality-room.webp"
                                alt={t('hotelsPage.whyChooseUs.slideshowAlt')}
                                aspectRatio="4/3"
                            />
                            <InlineImage src="/assets/editorial/hotel-twin-room.webp" alt={galleryCopy.items[0].title} aspectRatio="4/3" />
                            <InlineImage src="/assets/editorial/hotel-linen-shelf.webp" alt={galleryCopy.items[1].title} aspectRatio="4/3" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {whyChooseUsCards.map(card => (
                                <InfoCard key={card.titleKey} titleKey={card.titleKey}>
                                    <p>{t(card.contentKey)}</p>
                                    {card.linkTo && <Button to={`${langPrefix}${card.linkTo}`} variant="link" size="small" className="!px-0 mt-3">{t(card.linkKey!)} <span className="inline-block rtl:rotate-180">&rarr;</span></Button>}
                                    {card.buttonTo && <Button to={`${langPrefix}${card.buttonTo}`} variant="outline" size="small" className="mt-4">{t(card.buttonKey!)}</Button>}
                                </InfoCard>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <OriginalGallery images={slideshowImages} title={t('hotelsPage.whyChooseUs.slideshowAlt')} />
            <section id="hospitality-gallery" aria-labelledby="hospitality-gallery-heading" className="mb-20 sm:mb-28 p-6 sm:p-8 relative overflow-hidden rounded-2xl border border-[#d7c8b4] bg-white/55">
              <div className="relative z-10">
                <h2 id="hospitality-gallery-heading" className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4 text-center">{galleryCopy.title}</h2>
                <p className="max-w-4xl mx-auto text-center text-neutral-700 mb-8">{galleryCopy.intro}</p>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                  {[
                    { image: 'hotel-guest-room', item: galleryCopy.items[0] },
                    { image: 'hotel-linen-prep', item: galleryCopy.items[1] },
                    { image: 'hotel-bath-towels', item: galleryCopy.items[2] },
                  ].map(({ image, item }) => (
                    <figure key={image} className="overflow-hidden rounded-xl border border-[#d7c8b4] bg-white p-1 shadow-sm">
                      <img
                        src={`/assets/editorial/${image}.webp`}
                        srcSet={image === 'hotel-bath-towels' ? undefined : `/assets/editorial/${image}-640.webp 640w, /assets/editorial/${image}.webp 1200w`}
                        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                        alt={item.alt}
                        width="1200"
                        height="900"
                        loading="lazy"
                        decoding="async"
                        className="aspect-[4/3] w-full rounded-lg object-cover"
                      />
                      <figcaption className="px-4 py-4">
                        <h3 className="text-lg font-semibold text-neutral-900">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-700">{item.description}</p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </section>
            <section id="expert-hotel-advice" aria-labelledby="expert-advice-heading" className="mb-20 sm:mb-28 p-8 -m-8 relative overflow-hidden rounded-2xl bg-brand-light/50">
              <div className="relative z-10">
                  <h2 id="expert-advice-heading" className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-12 text-center">
                    {t('hotelsPage.expertAdvice.title')}
                  </h2>
                  <HotelInfoTable
                      headerKeys={["hotelsPage.expertAdvice.header1", "hotelsPage.expertAdvice.header2", "hotelsPage.expertAdvice.header3"]}
                      data={expertAdviceTableData}
                  />
              </div>
            </section>
            
            <section 
              id="b2b-contact-cta" 
              aria-labelledby="b2b-cta-heading" 
              className="text-center py-20 bg-brand-dark text-white rounded-2xl relative overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: "url('/assets/catalogue-04.webp')" }}
            >
              <div className="absolute inset-0 bg-brand-dark/70"></div>
               <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 id="b2b-cta-heading" className="text-4xl sm:text-5xl font-bold mb-6">
                  {t('hotelsPage.cta.title')}
                </h2>
                <p className="text-lg text-neutral-200 mb-10 max-w-2xl mx-auto">
                  {t('hotelsPage.cta.description')}
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 rtl:space-x-reverse">
                  <Button to={`${langPrefix}/contact?subject=B2BInquiry`} variant="secondary" size="large">
                    {t('hotelsPage.cta.button1')}
                  </Button>
                  <Button to="tel:+66818519922" variant="outline" size="large" className="!border-white !text-white hover:!bg-white hover:!text-brand-dark">
                    {t('hotelsPage.cta.button2')}
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

