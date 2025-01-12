// Mock function to fetch chart data
export async function fetchChartData(index, expiryDate, strikePrice) {
  // Implement actual data fetching logic here
  // For demonstration, return sample data
  return [
    { time: '2023-10-01 10:00', close: 150 },
    { time: '2023-10-01 10:05', close: 155 },
    // ...
  ];
}