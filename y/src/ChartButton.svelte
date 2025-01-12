<script>
  import { Button } from 'shadcn-svelte';
  import { indexStore, expiryDateStore, strikePriceStore } from '../stores';
  import { fetchChartData } from '../api';

  function handleClick() {
    const index = $indexStore;
    const expiryDate = $expiryDateStore;
    const strikePrice = $strikePriceStore;
    // Fetch chart data and update the chart
    fetchChartData(index, expiryDate, strikePrice).then(data => {
      // Update chart with data
    });
  }
</script>

<Button on:click={handleClick}>Load Chart</Button>