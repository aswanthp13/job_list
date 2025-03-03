   <template>
    <div class="container mx-auto p-6">
      <h1 class="text-4xl font-bold mb-6">Job Listings</h1>
  
      <div class="flex space-x-4 mb-6">
        <button @click="filterJobs('Frontend')" class="btn">Frontend</button>
        <button @click="filterJobs('Full Stack')" class="btn">Full Stack</button>
        <button @click="filterJobs('Backend')" class="btn">Backend</button>
        <button @click="filterJobs(null)" class="btn">All</button>
      </div>
  
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="job in filteredJobs" :key="job.id" class="job-card">
          <h2 class="text-xl font-semibold">{{ job.title }}</h2>
          <p>{{ job.company }}</p>
          <p>{{ job.category }}</p>
          <p>{{ job.salary }}</p>
          <!-- <NuxtLink :to="`/jobs/${job.id}`" class="btn mt-4">View Details</NuxtLink> -->
          <button @click="viewJobDetails(job.id)" class="btn mt-4">View Details</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

  
  const jobs = ref([]);
  const filteredJobs = ref([]);
  
  onMounted(async () => {
    const res = await fetch('/jobs.json');
    jobs.value = await res.json();
    filteredJobs.value = jobs.value; // Initially, show all jobs
  });
  
  const filterJobs = (category) => {
    filteredJobs.value = category ? jobs.value.filter(job => job.category === category) : jobs.value;
  };

  // Navigate to detail-page with jobId as a query parameter
const viewJobDetails = (jobId) => {
    console.log("hello");
    
  router.push({ path: '/detailPage', query: { jobId } });
};
  </script>
  
  <style scoped>
  .job-card {
    padding: 20px;
    border-radius: 10px;
    box-shadow: var(--tw-shadow-custom);
    background-color: white;
    transition: all 0.3s;
  }
  
  .job-card:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
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