
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

const ContactInfoItem: React.FC<{ icon: React.ElementType; labelKey: string; value: string; href?: string; isHtml?: boolean; }> = ({ icon: Icon, labelKey, value, href, isHtml }) => {
  const { t } = useTranslation();
  
  const renderValue = (val: string, link?: string) => {
    const content = isHtml ? <span dangerouslySetInnerHTML={{ __html: val }} /> : val;
    if (link) {
      return <a href={link} className="hover:text-brand-primary transition-colors" target="_blank" rel="noopener noreferrer">{content}</a>;
    }
    return content;
  };

  return (
    <div className="flex items-start space-x-5 rtl:space-x-reverse">
      <Icon className="h-7 w-7 text-brand-primary flex-shrink-0 mt-1" aria-hidden="true" />
      <div>
        <h3 className="text-base font-semibold text-neutral-500 uppercase tracking-wider mb-1">{t(labelKey)}</h3>
        <div className="text-neutral-900 text-lg font-medium">
            <p>
              {renderValue(value, href)}
            </p>
        </div>
      </div>
    </div>
  );
};

const ContactPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const labels: Record<string, {eyebrow:string;heroAlt:string;detailAlt:string;detailTitle:string;detailText:string;caption:string}> = {
    th:{eyebrow:'เริ่มต้นจากความสบายที่คุณต้องการ',heroAlt:'แสงอุ่นบนเตียงสีงาช้างและตัวอย่างผ้าบนโต๊ะไม้',detailAlt:'เครื่องนอนพับและสายวัดบนโต๊ะไม้',detailTitle:'คุยเรื่องขนาด เนื้อผ้า และการใช้งาน',detailText:'บอกขนาดที่นอน จำนวนชิ้น และลักษณะการใช้งาน หรือส่งรหัสสินค้าที่สนใจ เพื่อให้เราช่วยตรวจรายละเอียดและเสนอราคาได้ตรงกับความต้องการ',caption:'ภาพบรรยากาศจำลอง'},
    en:{eyebrow:'Comfort begins with a conversation',heroAlt:'Warm daylight on an ivory bed and fabric swatches on a wooden table',detailAlt:'Folded bedding and a measuring tape on a wooden table',detailTitle:'Let’s talk size, fabric and everyday use',detailText:'Share your mattress measurements, quantities and intended use, or the product codes you are considering, so we can help check the details and prepare a suitable quotation.',caption:'Illustrative setting'},
    zh:{eyebrow:'从一次交流，找到适合的舒适感',heroAlt:'暖阳下的象牙白床品与木桌上的布样',detailAlt:'木桌上叠放的床品与软尺',detailTitle:'聊聊尺寸、面料和使用需求',detailText:'告诉我们床垫尺寸、所需数量与用途，或提供感兴趣的产品编号，方便我们核对细节并准备合适的报价。',caption:'场景示意图'},
    ar:{eyebrow:'الراحة تبدأ بالحوار',heroAlt:'ضوء دافئ على سرير عاجي وعينات قماش على طاولة خشبية',detailAlt:'مفروشات مطوية وشريط قياس على طاولة خشبية',detailTitle:'لنتحدث عن المقاس والقماش والاستخدام',detailText:'شاركنا مقاسات المرتبة والكميات وطبيعة الاستخدام، أو رموز المنتجات التي تهمك، لنساعدك في مراجعة التفاصيل وإعداد عرض سعر مناسب.',caption:'مشهد توضيحي'},
    hi:{eyebrow:'सुकून की शुरुआत एक बातचीत से',heroAlt:'हल्की धूप में हाथीदाँत रंग का बिस्तर और लकड़ी की मेज़ पर कपड़े के नमूने',detailAlt:'लकड़ी की मेज़ पर तह किए बिस्तर के कपड़े और मापने का फीता',detailTitle:'आकार, कपड़े और उपयोग पर बात करें',detailText:'गद्दे के माप, आवश्यक संख्या और उपयोग बताएं, या पसंद आए उत्पादों के कोड भेजें, ताकि हम विवरण जाँचकर आपकी ज़रूरत के अनुसार कोटेशन तैयार कर सकें।',caption:'प्रतीकात्मक दृश्य'}
  };
  const c=labels[i18n.language]||labels.en;
  return (
    <div className="contact-editorial">
      <div className="contact-welcome">
        <header className="contact-welcome-copy">
          <p className="contact-eyebrow">SLUMBA ZEN / {c.eyebrow}</p>
          <h1>{t('contactPage.mainTitle')}</h1>
          <p>{t('contactPage.subtitle')}</p>
          <a className="contact-call" href="tel:+66818519922"><PhoneIcon aria-hidden="true"/>{t('contactPage.callLabel')} · +66 81 851 9922</a>
        </header>
        <figure className="contact-hero-photo">
          <img src="/assets/editorial/contact-linen-800.webp" srcSet="/assets/editorial/contact-linen-480.webp 480w, /assets/editorial/contact-linen-800.webp 800w, /assets/editorial/contact-linen-1280.webp 1280w" sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1360px) 52vw, 680px" width={1280} height={853} alt={c.heroAlt} fetchPriority="high"/>
          <figcaption>{c.caption}</figcaption>
        </figure>
      </div>
      <div className="contact-details-grid">
        <section className="contact-details-card">
          <h2>{t('contactPage.detailsTitle')}</h2>
          <ContactInfoItem icon={MapPinIcon} labelKey="contactPage.addressLabel" value={t('contactPage.address')}/>
          <ContactInfoItem icon={PhoneIcon} labelKey="contactPage.callLabel" value="+66 81 851 9922" href="tel:+66818519922"/>
          <div className="contact-map-link"><h3>{t('contactPage.mapTitle')}</h3>
            <a className="button secondary" href="https://www.google.com/maps/search/?api=1&query=919%2F1%20Jewelry%20Trade%20Center%20Silom%20Road%20Bang%20Rak%20Bangkok%2010500%20Thailand" target="_blank" rel="noopener noreferrer">{t('contactPage.mapAriaLabel')}</a>
          </div>
        </section>
        <aside className="contact-preparation">
          <figure><img src="/assets/editorial/selection-details.webp" srcSet="/assets/editorial/selection-details-640.webp 640w, /assets/editorial/selection-details.webp 1200w" sizes="(max-width: 767px) calc(100vw - 32px), 520px" width={1200} height={900} loading="lazy" decoding="async" alt={c.detailAlt}/><figcaption>{c.caption}</figcaption></figure>
          <div><h2>{c.detailTitle}</h2><p>{c.detailText}</p></div>
        </aside>
      </div>
    </div>
  );
};
export default ContactPage;
