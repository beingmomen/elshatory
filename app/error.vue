<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
definePageMeta({
  layout: 'error-layout'
});

// const error = useError();

const handleError = () => {
  clearError({
    redirect: "/",
  });
};
</script>

<template>
  <main
    class="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 overflow-hidden"
  >
    <!-- Animated background circles -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute -left-4 -top-4 w-24 h-24 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
      />
      <div
        class="absolute -right-4 -top-4 w-24 h-24 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
      />
      <div
        class="absolute -bottom-4 left-1/2 w-24 h-24 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
      />
    </div>

    <div
      class="relative bg-white dark:bg-gray-800 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:rounded-lg sm:px-10 z-10"
    >
      <div class="mx-auto max-w-md">
        <div class="divide-y divide-gray-300/50">
          <div
            class="space-y-6 py-8 text-base leading-7 text-gray-600 dark:text-gray-300"
          >
            <div class="text-center">
              <p
                class="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 animate-pulse"
              >
                404
              </p>
              <h1
                class="mt-4 text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight"
              >
                Page not found
              </h1>
              <p class="mt-4 text-lg">
                Oops! Looks like you've wandered into uncharted territory.
              </p>
            </div>

            <!-- Decorative element -->
            <div class="relative mt-8 flex justify-center">
              <span
                class="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
              />
              <span class="relative bg-white dark:bg-gray-800 px-4">
                <svg
                  class="h-5 w-5 text-indigo-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>

            <div class="text-center mt-8">
              <NuxtLink
                class="inline-flex items-center cursor-pointer px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition hover:scale-105"
                @click="handleError"
              >
                <svg
                  class="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Return Home
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}

@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}
</style>
