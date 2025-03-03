 <template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <button @click="toggleDarkMode" class="p-3 rounded-full text-white bg-blue-500 dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-800 transition-all fixed top-4 right-4 z-10">
      <span v-if="colorMode.preference === 'dark'">
        🌞 Light Mode
      </span>
      <span v-else>
        🌙 Dark Mode
      </span>
    </button>
    <NuxtPage />
  </div>
</template>

<script setup>
const colorMode = useColorMode()

const toggleDarkMode = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

