<template>
  <main class="flex flex-col justify-center h-full mx-auto max-w-600px">
    <section class="flex flex-col items-center leading-loose text-center">
      <div class="text-3xl">
        <span class="i-twemoji-christmas-tree"></span>
        {{ t("happyHolidays") }}
        <span class="i-twemoji-world-map"></span>
        <div>{{ current.flag }}</div>
        <button @click="next">Next</button>
        <div>
          {{
            t("christmasIsComing", {
              date: d(christmasDate, "long"),
              time: t("day", count),
            })
          }}
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from "vue";
import { useI18n } from "vue-i18n";

const christmasDate = new Date("2024/12/25");

const count = Math.ceil((+christmasDate - +new Date()) / (1000 * 60 * 60 * 24));

const locales = [
  { key: "en", flag: "🇺🇸" },
  { key: "ja-JP", flag: "🇯🇵" },
  { key: "de", flag: "🇩🇪" },
  {
    key: "km",
    flag: "🇰🇭",
  },
];

function useCycle<T>(list: T[]) {
  const i = ref(0);

  function next() {
    if (i.value >= list.length - 1) {
      i.value = 0;
    } else {
      i.value++;
    }
  }

  const current = computed(() => list[i.value]);

  return {
    next,
    current,
  };
}

const { current, next } = useCycle(locales);
const { locale, t, d } = useI18n();

watchEffect(() => {
  locale.value = current.value.key;
});
</script>

<style scoped>
button {
  @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
}
</style>
