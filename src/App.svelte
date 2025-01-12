<script>
  import IndexSelect from './components/IndexSelect.svelte';
  import Chart from './components/Chart.svelte';
</script>

<main>
  <div class="container">
    <IndexSelect />
    <Chart />
  </div>
</main>

<style>
  .container {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
