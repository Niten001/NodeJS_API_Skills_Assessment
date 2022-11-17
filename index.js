const allowedCategories = [
  "animals",
  "anime",
  "blockchain",
  "books",
  "business",
  "calendar",
  "weather",
  "transportation",
  "health",
  "jobs",
  "music",
];

// Parse arguments from input
let category, limit;
try {
  category = process.argv[2];
  if (!allowedCategories.includes(category.toLowerCase())) {
    throw RangeError(`${category} is not an allowed category value. Please check your input and try again.`);
  }

  limit = parseInt(process.argv[3]);
  if (Number.isNaN(limit)) {
    throw TypeError(`The value you entered for the limit is invalid. Please ensure you entered an integer and try again.`);
  }
} catch (err) {
  console.error(`Error: Invalid input. Please check your input arguments and try agian.\n${err}`);
  return;
}

// Get data from API

// Wait for the API data to be returned then perform manipulations

// Manipulate API data to determine matching entries

// Output the requested entries in the appropriate format
