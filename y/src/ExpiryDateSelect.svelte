<script>
  import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from 'shadcn-svelte';
  import { indexStore, expiryDateStore } from '../stores';

  let expiryDates = [];
  let selectedExpiryDate = $expiryDateStore;

  // Fetch expiry dates based on selected index
  $: selectedIndex = $indexStore;
  // Here you would fetch the expiry dates based on selectedIndex
  // For demonstration, assume expiryDates are already fetched

  function handleSelect(event) {
    selectedExpiryDate = event.target.value;
    expiryDateStore.set(selectedExpiryDate);
  }
</script>

<Select on:change={handleSelect} value={selectedExpiryDate}>
  <SelectTrigger>
    <SelectValue placeholder="Select Expiry Date" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      {#each expiryDates as date}
        <SelectItem value={date}>{date}</SelectItem>
      {/each}
    </SelectGroup>
  </SelectContent>
</Select>