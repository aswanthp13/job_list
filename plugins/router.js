export default defineNuxtPlugin((nuxtApp) => {
    // Ensure the router is ready before trying to access it
    nuxtApp.hook('app:mounted', () => {
      const currentRoute = nuxtApp.$router.currentRoute.value; // This ensures we have a valid route object
  
      if (currentRoute.path === '/') {
        nuxtApp.$router.replace('/jobs'); // Redirect to '/jobs'
      }
    });
  });
  