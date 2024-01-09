<template>
  <div>
    <!-- <button @click="fetchData">Fetch Data</button> -->
    <div v-if="loading" class="loading-overlay">
      <div class="loader"></div>
    </div>
    <div v-if="!loading && data">{{ data }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      data: null
    };
  },
  methods: {
    fetchData() {
      this.loading = true;
      // 模拟数据加载
      setTimeout(() => {
        this.data = "Data loaded";
        this.loading = false;
      }, 2000);
    }
  }
};
</script>

<style>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loader {
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>