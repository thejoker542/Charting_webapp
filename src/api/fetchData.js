export async function fetchIndices() {
  const response = await fetch('/master_instrument.csv');
  const data = await response.text();
  // Process CSV data
  return data;
}

export async function fetchExpiryDates(index) {
  const response = await fetch('/master_file.csv');
  const data = await response.text();
  // Process CSV data for expiry dates
  return data;
}
