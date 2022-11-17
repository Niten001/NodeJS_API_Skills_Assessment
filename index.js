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

// Get data from API
const getData = () => new Promise(async (resolve, reject) => {
  const response = await fetch("https://api.publicapis.org/entries");
  if (response.status == 200) {
    resolve(await response.json());
  } else {
    reject(Error(`API request failed with error code: ${response.status}`));
  }
});

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

// Wait for the API data to be returned then perform manipulations
getData().catch((err) => {
  console.error(err);
}).then((data) => {
  if (!data) {
    return;
  }

  // Manipulate API data to determine matching entries
  const validData = data.entries.filter((item) => item.Category == category).slice(0, limit).map((item) => item.API);

  // Output the requested entries in the appropriate format
  if (validData.length == 0) {
    console.log("No results");
  } else {
    console.log({
      count: validData.length,
      entries: validData
    });
  }
});
