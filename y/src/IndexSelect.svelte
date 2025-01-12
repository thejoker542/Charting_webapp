<script>
  import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from 'shadcn-svelte';
  import { indexStore } from '../stores';

  let indexes = ['NIFTY', 'BANKNIFTY', 'MIDCAPNIFTY', 'SENSEX', 'BANKEX'];
  let selectedIndex = $indexStore;

  function handleSelect(event) {
    selectedIndex = event.target.value;
    indexStore.set(selectedIndex);
  }
</script>

<Select on:change={handleSelect} value={selectedIndex}>
  <SelectTrigger>
    <SelectValue placeholder="Select Index" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      {#each indexes as index}
        <SelectItem value={index}>{index}</SelectItem>
      {/each}
    </SelectGroup>
  </SelectContent>
</Select>