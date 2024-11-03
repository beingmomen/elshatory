<template>
  <div
    class="flex flex-col lg:flex-row items-center justify-between lg:container xl:container mx-auto px-4 md:px-32"
  >
    <!--  h-[40rem] -->
    <div class="min-h-full pt-8 sm:pt-32 w-full xl:w-2/3">
      <div>
        <TheUiBlurReveal :delay="0">
          <h2
            class="text-gray-400 font-bold text-2xl text-center xl:text-start"
          >
            مرحبا بالجميع 👋
          </h2>
        </TheUiBlurReveal>
        <TheUiBlurReveal :delay="200">
          <p
            class="font-bold text-6xl bg-custom-gradient bg-clip-text mt-6 text-white dark:text-white text-center xl:text-start"
          >
            أنا
          </p>
        </TheUiBlurReveal>
      </div>

      <p
        id="typed"
        class="font-bold text-5xl sm:text-6xl bg-custom-gradient bg-clip-text main-title mt-6 min-h-[96px] sm:min-h-[100px] text-center xl:text-start py-5"
      >
        <span ref="typedText" class="cursor"></span>
      </p>

      <div class="px-10 xl:px-0 py-14 xl:p-0 flex justify-center lg:hidden">
        <div
          class="hero-img flex justify-center min-w-[180px] w-full max-w-[340px] lg:max-w-[700px] h-[323px] lg:w-[472.31px] lg:h-[510.45px] rounded-[28px] border-2 border-pro-100 hover:border-pro-50 rotate-[4.29deg] hover:rotate-0 transition-all duration-300"
        >
          <NuxtImg
            provider="cloudinary"
            src="beingmomen/edisxdkamb8dn3z0bhez"
            alt="الشطوري"
            class="w-full h-full object-cover rounded-3xl"
          />
          <!-- format="webp"
            width="400"
            height="400"
            :modifiers="{
              c: 'limit',
            }" -->
        </div>
      </div>

      <div class="container mx-auto px-4 mt-10 text-gray-400">
        <TheUiRadiantText
          class="inline-flex items-center justify-center py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
          :duration="0"
        >
          <h2 class="text-2xl md:text-3xl font-semibold mb-6">
            خبير في تطوير الواجهات الأمامية مع Vue.js و Nuxt.js ✨
          </h2>
        </TheUiRadiantText>

        <p class="text-xl mb-8">
          أحول رؤيتك إلى واقع رقمي مبهر. بفضل خبرتي المتخصصة في Vue.js و
          Nuxt.js، أقدم:
        </p>

        <ul class="text-lg mb-8 space-y-2">
          <li class="flex items-center">
            <svg
              class="w-6 h-6 me-2 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            تطبيقات ويب فائقة الأداء تلبي احتياجات عملائك
          </li>
          <li class="flex items-center">
            <svg
              class="w-6 h-6 me-2 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            تصاميم متجاوبة تضمن تجربة مثالية على جميع الأجهزة
          </li>
          <li class="flex items-center">
            <svg
              class="w-6 h-6 me-2 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            حلول مبتكرة باستخدام أحدث التقنيات مثل Nuxt 3 و TailwindCSS
          </li>
        </ul>

        <p class="text-xl mb-8">
          أنا لست مجرد مطور، بل شريك في نجاحك. دعنا نحول أفكارك إلى تجارب ويب
          تفاعلية تترك انطباعًا لا يُنسى.
        </p>

        <div
          class="mt-10 flex flex-wrap justify-center xl:justify-start gap-4 items-center"
        >
          <NuxtLink
            to="https://www.linkedin.com/in/beingmomen/"
            target="_blank"
            aria-label="الشطوري | LinkedIn"
          >
            <UIcon name="i-skill-icons-linkedin" class="w-8 h-8" />
          </NuxtLink>
          <NuxtLink
            to="https://github.com/beingmomen"
            target="_blank"
            aria-label="الشطوري | Github"
          >
            <UIcon name="i-skill-icons-github-dark" class="w-8 h-8" />
          </NuxtLink>
          <NuxtLink
            to="https://qabilah.com/profile/beingmomen/posts"
            target="_blank"
            aria-label="linkedin Profile"
          >
            <NuxtImg
              provider="cloudinary"
              src="beingmomen/icons/rfq6c4v71eb49k6btf7r"
              alt="الشطوري | قبيلة"
              class="w-8 h-8 object-cover"
              preload
            />
          </NuxtLink>

          <UButton
            class="font-bold main-title"
            color="blue"
            :ui="{ rounded: 'rounded-full' }"
            size="xl"
            icon="i-material-symbols-download"
            trailing
            variant="outline"
            target="_blank"
            to="https://drive.google.com/file/d/157_ZQjba7KZopZzMTVhEfcndqMif0APG/view?usp=sharing"
          >
            تحميل السيرة الذاتية
          </UButton>
        </div>

        <div class="mt-10 text-center xl:text-start">
          <UChip
            size="md"
            position="top-left"
            inset
            :ui="{ base: '-mx-2 rounded-none ring-0', background: '' }"
          >
            <template #content>
              <UAvatar icon="i-ic-baseline-launch" size="xs" />
            </template>
            <div class="flex justify-center items-center flex-col px-4">
              <p class="text-xl md:text-3xl max-w-3xl mx-auto mb-10">
                <TheUiLinkPreview
                  :url="`${url.origin}/contact`"
                  class="bg-white text-[13px] md:text-xl text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300"
                >
                  هل أنت مستعد لإطلاق مشروعك التالي؟ دعنا نبدأ!
                </TheUiLinkPreview>
              </p>
            </div>
            <!-- <NuxtLink
              to="contact"
              aria-label="Navigate to contact page"
              class="bg-white text-[13px] md:text-xl text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300"
            >
              هل أنت مستعد لإطلاق مشروعك التالي؟ دعنا نبدأ!
            </NuxtLink> -->
          </UChip>
        </div>
      </div>

      <!-- <p
        class="text-gray-400 font-bold text-2xl sm:w-[600px] mt-6 min-w-[301.5px]"
      >
        {{ $t("description") }}
      </p> -->
    </div>
    <div class="py-14 xl:p-0 hidden lg:block">
      <div
        class="hero-img flex justify-center h-[323px] lg:w-[472.31px] lg:h-[510.45px] rounded-[28px] border-2 border-pro-100 hover:border-pro-50 rotate-[4.29deg] hover:rotate-0 transition-all duration-300"
      >
        <NuxtImg
          provider="cloudinary"
          src="beingmomen/edisxdkamb8dn3z0bhez"
          alt="الشطوري"
          class="w-full h-full object-cover rounded-3xl"
          format="webp"
          preload
        />
      </div>
    </div>
    <div>
      <!-- <img src="/Morgan.gif" alt="animation logo" /> -->
    </div>
  </div>
</template>

<script setup>
const url = useRequestURL();
console.warn("url", url);

const typedTextSpan = ref(null);
const cursorSpan = ref(null);
const textArray = [
  "عبدالمؤمن الشطوري",
  "Frontend Developer | Nuxt",
  "Abdelmo’men Elshatory",
];
const typingDelay = 100; // 100
const erasingDelay = 100; // 100
const newTextDelay = 500;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.value.classList.contains("typing"))
      cursorSpan.value.classList.add("typing");
    typedTextSpan.value.textContent +=
      textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.value.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.value.classList.contains("typing"))
      cursorSpan.value.classList.add("typing");
    typedTextSpan.value.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.value.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

onMounted(() => {
  typedTextSpan.value = document.getElementById("typed");
  cursorSpan.value = document.querySelector(".cursor");
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
</script>

<style lang="scss" scoped>
.cursor::after {
  content: "|";
  display: inline;
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
