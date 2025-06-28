import ServicesCard from "./ServicesCard";

// Import images
import frontendImage from "@assets/images/services/lytbtwlosaepmeid7dkv.webp";
import mevnStackImage from "@assets/images/services/kgo8oojtlvyzgcb4l2ap.webp";
import seoImage from "@assets/images/services/nw7gtm1bm5nxlmhyeu7v.webp";
import supportImage from "@assets/images/services/yvtcbzwhxqpfdcmdrzzw.webp";

function ServicesSection() {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl text-white font-bold">خدمات متنوعة</p>
          <h3 className="text-6xl font-bold text-sky-400 mt-6">
            ما الذي أقدمه لك؟
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-10 mt-10">
          {services.map((service) => (
            <ServicesCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

const services = [
  {
    title: "تطوير واجهات المستخدم (Frontend Developer)",
    image: frontendImage,
    description:
      "أقدم حلول تطوير واجهات المستخدم باستخدام تقنيات حديثة مثل Vue.js و Nuxt.js، مع التركيز على تصميم واجهات مستخدم متجاوبة وسهلة الاستخدام. أضمن تجربة مستخدم متميزة على جميع الأجهزة والمتصفحات من خلال تطبيق أفضل الممارسات في تطوير الويب.",
  },
  {
    title: "تطوير التطبيقات باستخدام MEVN Stack",
    image: mevnStackImage,
    description:
      "أختص في بناء تطبيقات ويب كاملة باستخدام MongoDB و Express و Vue.js و Node.js (MEVN). أعمل على تصميم وتطوير الأنظمة الكاملة من الواجهة الأمامية إلى الخلفية، مما يتيح لك حلولاً مرنة وقابلة للتوسع تتناسب مع احتياجات عملك.",
  },
  {
    title: "تحسين الأداء وتهيئة SEO للمواقع",
    image: seoImage,
    description:
      "أساعد في تحسين أداء المواقع عبر تقنيات مثل تحسين السرعة و التحميل المسبق للموارد، مع التركيز على تحسين SEO لضمان ظهور موقعك في أعلى نتائج محركات البحث. سواء كان تحسين الصور أو تحسين المحتوى أو إضافة بيانات مهيكلة، أضمن لموقعك أفضل أداء وتحسين للرؤية.",
  },
  {
    title: "خدمات الدعم الفني والصيانة",
    image: supportImage,
    description:
      "أقدم خدمات دعم فني وصيانة مستمرة للمشاريع التقنية والتطبيقات. سواء كان الأمر يتعلق بحل المشكلات التقنية أو تحسين الأداء أو إجراء التحديثات الدورية، أعمل على ضمان استمرارية عمل المشروع بسلاسة دون انقطاع أو مشاكل.",
  },
];
