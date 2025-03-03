<template>
    <div class="container mx-auto p-6">
      <h1 class="text-4xl font-bold mb-6">{{ job?.title }}</h1>
      <p class="text-gray-600">{{ job?.company }}</p>
      <p class="text-sm text-gray-500">{{ job?.category }}</p>
      <p class="text-sm text-gray-500">{{ job?.salary }}</p>
      <p class="mt-4">{{ job?.description }}</p>
      <button @click="goBack" class="btn mt-4">Back to Jobs</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  const route = useRoute();
  const router = useRouter();
  const job = ref(null);
  
  onMounted(async () => {
    // Get jobId from query parameters
    const jobId = route.query.jobId;
  
    if (jobId) {
      // Fetch job data
      const res = await fetch('/jobs.json');
      const jobs = await res.json();
      job.value = jobs.find(j => j.id === Number(jobId));
    }
  });
  
  // Function to go back to the job listings page
  const goBack = () => {
    router.push('/jobs');
  };
  </script>
  
  <style scoped>
  .btn {
    background-color: #1e40af;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #1d3a8d;
  }
  </style>