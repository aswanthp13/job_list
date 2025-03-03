<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <button @click="toggleDarkMode" class="p-2"
    >
      {{ colorMode.preference === 'dark' ? 'Light Mode' : 'Dark Mode' }}
    </button>
    <NuxtPage />
  </div>
</template>

<script setup>
const colorMode = useColorMode();
const toggleDarkMode = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};
</script>

