<script>
  import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from 'shadcn-svelte';
  import { indexStore, expiryDateStore, strikePriceStore } from '../stores';

  let strikePrices = [];
  let selectedStrikePrice = $strikePriceStore;

  // Fetch strike prices based on selected index and expiry date
  $: {
    const index = $indexStore;
    const expiryDate = $expiryDateStore;
    // Here you would fetch strikePrices based on index and expiryDate
    // For demonstration, assume strikePrices are already fetched
  }

  function handleSelect(event) {
    selectedStrikePrice = event.target.value;
    strikePriceStore.set(selectedStrikePrice);
  }
</script>

<Select on:change={handleSelect} value={selectedStrikePrice}>
  <SelectTrigger>
    <SelectValue placeholder="Select Strike Price" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      {#each strikePrices as price}
        <SelectItem value={price}>{price}</SelectItem>
      {/each}
    </SelectGroup>
  </SelectContent>
</Select>