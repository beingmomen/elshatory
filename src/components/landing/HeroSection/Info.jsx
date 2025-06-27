import CheckIcon from "../../../assets/icons/Check.jsx";

const InfoData = [
  {
    title: "تطبيقات ويب فائقة الأداء تلبي احتياجات عملائك",
  },
  {
    title: "تصاميم متجاوبة تضمن تجربة مثالية على جميع الأجهزة",
  },
  {
    title: "حلول مبتكرة باستخدام أحدث التقنيات مثل Nuxt 3 و TailwindCSS",
  },
];

function Info() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
        خبير في تطوير الواجهات الأمامية مع Vue.js و Nuxt.js ✨
      </h2>
      <p className="text-xl mb-8 text-white">
        أحول رؤيتك إلى واقع رقمي مبهر. بفضل خبرتي المتخصصة في Vue.js و Nuxt.js،
        أقدم:
      </p>
      <ul className="space-y-4 mt-8">
        {InfoData.map((item) => (
          <li className="flex gap-2 items-center">
            <CheckIcon />
            <span className="text-xl text-gray-200">{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Info;
