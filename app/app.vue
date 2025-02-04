<template>
  <UApp :locale="ar">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup>
import { ar } from "@nuxt/ui/locale";

const lang = computed(() => ar.code);
const dir = computed(() => ar.dir);

useHead({
  htmlAttrs: {
    lang,
    dir,
  },
});

useSeoMeta({
  title: "عبدالمؤمن الشطوري | Frontend Developer",
  ogTitle:
    "عبدالمؤمن الشطوري - مطور MEVN Stack | مشاريع واقعية لأكثر من +50 عميل",
  description:
    "مطور واجهات أمامية متخصص في MEVN Stack | خبرة 3+ سنوات في Vue.js و Nuxt.js. تصفح مشاريعي العملية، آراء العملاء، واتصل بي مباشرة لتنفيذ أفكارك التقنية.",
  ogDescription:
    "حلول برمجية مبتكرة بـ Vue.js/Nuxt.js - تصفح أعمالي واحصل على استشارة مجانية الآن",
  keywords:
    "مطور MEVN, Nuxt.js Developer, Vue.js Expert, عبدالمؤمن الشطوري, Elshatory, beingmomen, تطوير تطبيقات ويب, واجهات أمامية, MEVN Stack, مشاريع برمجية, تقييم عملاء",
});

useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["Person", "ProfessionalService"],
        name: "Abdelmomen Elshatory",
        alternateName: ["عبدالمؤمن الشطوري", "beingmomen"],
        jobTitle: "Frontend Developer & MEVN Stack Specialist",
        description: "مطور واجهات أمامية متخصص في MEVN Stack بخبرة 3 سنوات",
        url: "https://beingmomen.com",
        image: {
          "@type": "ImageObject",
          url: "https://res.cloudinary.com/dyqfclwdk/image/upload/v1725117794/beingmomen/fdr33lrypqxafnvpu1ql.jpg",
          width: "800",
          height: "600",
        },
        sameAs: [
          "https://github.com/beingmomen",
          "https://linkedin.com/in/beingmomen",
          "https://twitter.com/beingmomen",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "الخدمات",
          itemListElement: [
            { "@type": "Offer", name: "تطوير تطبيقات Vue.js" },
            { "@type": "Offer", name: "حلول Nuxt.js متكاملة" },
          ],
        },
      }),
    },
  ],
});
</script>