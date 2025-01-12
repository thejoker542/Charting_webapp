<script>
  import { onMount } from 'svelte';
  import { IndexSelect } from './components/IndexSelect.svelte';
  import { ExpiryDateSelect } from './components/ExpiryDateSelect.svelte';
  import { StrikePriceSelect } from './components/StrikePriceSelect.svelte';
  import { ChartButton } from './components/ChartButton.svelte';
  import { indexStore, expiryDateStore, strikePriceStore } from './stores';
  import Papa from 'papaparse';
  import { fetchChartData } from './api';

  let indexes = ['NIFTY', 'BANKNIFTY', 'MIDCAPNIFTY', 'SENSEX', 'BANKEX'];
  let selectedIndex = 'NIFTY';
  let expiryDates = [];
  let strikePrices = [];
  let historicalData = [];

  // Fetch data on mount
  onMount(async () => {
    // Fetch expiry dates
    const masterFileData = await fetch('master_file.csv').then(res => res.text());
    const parsedMasterFile = Papa.parse(masterFileData, { header: true }).data;
    expiryDates = Array.from(new Set(parsedMasterFile.filter(row => row.exsymbol === selectedIndex).map(row => row.expiryDate))).sort();
    const latestExpiryDate = expiryDates[0];
    expiryDateStore.set(latestExpiryDate);

    // Fetch strike prices
    const masterInstrumentData = await fetch('master_instrument.csv').then(res => res.text());
    const parsedMasterInstrument = Papa.parse(masterInstrumentData, { header: true }).data;
    const filteredStrikePrices = parsedMasterInstrument.filter(row => row.exsymbol === selectedIndex && row.expiryDate === latestExpiryDate).map(row => parseFloat(row.strikePrice));
    // Find closest strike price to quote price (replace with actual quote price fetch)
    const quotePrice = 18000; // Example value
    const closestStrike = findClosest(filteredStrikePrices, quotePrice);
    strikePrices = getRangeStrikePrices(filteredStrikePrices, closestStrike);
    strikePriceStore.set(closestStrike);

    // Fetch historical data for chart
    historicalData = await fetchChartData(selectedIndex, latestExpiryDate, closestStrike);
  });

  function findClosest(arr, target) {
    return arr.reduce((prev, curr) => Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev);
  }

  function getRangeStrikePrices(arr, target) {
    arr.sort((a, b) => a - b);
    const index = arr.indexOf(target);
    const lower = Math.max(0, index - 5);
    const upper = Math.min(arr.length - 1, index + 5);
    return arr.slice(lower, upper + 1);
  }
</script>

<div class="container">
  <h1>Straddle Chart App</h1>
  <IndexSelect />
  <ExpiryDateSelect />
  <StrikePriceSelect />
  <ChartButton />
</div>