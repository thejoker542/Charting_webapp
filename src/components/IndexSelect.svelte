<script>
  import { selectedIndex } from '../stores/indexStore';
  import ExpiryDateSelect from './ExpiryDateSelect.svelte';
  
  let indices = ['NIFTY', 'BANKNIFTY'];
</script>

<div class="select-container">
  <select bind:value={$selectedIndex}>
    <option value="">Select Index</option>
    {#each indices as index}
      <option value={index}>{index}</option>
    {/each}
  </select>
  
  {#if $selectedIndex}
    <ExpiryDateSelect />
  {/if}
</div>

<style>
  .select-container {
    margin-bottom: 1rem;
  }
</style>
