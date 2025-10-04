# Location Autocomplete API Integration Guide

## Current Implementation
Currently using a static list of 200+ Indian cities stored in `client/src/utils/indianCities.js`

## Future API Integration Options

### Option 1: Google Places Autocomplete API (Recommended)
**Pros:** Most accurate, real-time, global coverage
**Cons:** Paid service (with free tier)

#### Setup:
1. Get API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Enable Places API
3. Install package:
```bash
npm install @react-google-maps/api
```

#### Implementation Example:
```javascript
import { LoadScript, Autocomplete } from '@react-google-maps/api';

const libraries = ['places'];

function LocationInput() {
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autocomplete) => {
    setAutocomplete(autocomplete);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      console.log(place.formatted_address);
    }
  };

  return (
    <LoadScript
      googleMapsApiKey="YOUR_API_KEY"
      libraries={libraries}
    >
      <Autocomplete
        onLoad={onLoad}
        onPlaceChanged={onPlaceChanged}
      >
        <input
          type="text"
          placeholder="Enter location"
        />
      </Autocomplete>
    </LoadScript>
  );
}
```

### Option 2: Free Cities API
**Pros:** Free, no API key needed
**Cons:** Limited coverage, slower

#### Using CountryStateCity API:
```bash
npm install country-state-city
```

```javascript
import { City } from 'country-state-city';

// Get all Indian cities
const indianCities = City.getCitiesOfCountry('IN');

// Map to format
const cityList = indianCities.map(city => 
  `${city.name}, ${city.stateCode}`
);
```

### Option 3: Custom Backend API
Create your own API endpoint that queries a cities database

#### Backend (Node.js/Express):
```javascript
// routes/locationRouter.js
router.get('/cities/search', async (req, res) => {
  const { query } = req.query;
  
  // Query database or external API
  const cities = await City.find({
    name: { $regex: query, $options: 'i' }
  }).limit(10);
  
  res.json(cities);
});
```

#### Frontend Implementation:
```javascript
import { useState, useEffect } from 'react';
import { debounce } from 'lodash';

function LocationAutocomplete() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const fetchCities = debounce(async (searchQuery) => {
    if (searchQuery.length < 2) return;
    
    try {
      const response = await fetch(
        `/api/v1/locations/cities/search?query=${searchQuery}`
      );
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  }, 300);

  useEffect(() => {
    fetchCities(query);
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter city name"
      />
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((city) => (
            <li key={city.id} onClick={() => setQuery(city.name)}>
              {city.name}, {city.state}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

### Option 4: react-select with Async Loading
**Pros:** Great UX, built-in features
**Cons:** Requires API backend

```bash
npm install react-select
```

```javascript
import AsyncSelect from 'react-select/async';

const loadOptions = async (inputValue) => {
  const response = await fetch(
    `/api/v1/locations/search?q=${inputValue}`
  );
  const cities = await response.json();
  
  return cities.map(city => ({
    value: city.name,
    label: `${city.name}, ${city.state}`
  }));
};

function LocationSelect() {
  return (
    <AsyncSelect
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions
      placeholder="Search for a city..."
    />
  );
}
```

## Recommended Approach

**For Production:**
1. Use Google Places Autocomplete API for the best UX
2. Implement caching to reduce API calls
3. Add fallback to static list if API fails

**Implementation Steps:**
1. Set up Google Places API
2. Create environment variable for API key
3. Implement autocomplete component
4. Add error handling and fallback
5. Monitor API usage and costs

## Cost Estimation (Google Places)
- Free tier: $200 credit per month
- Autocomplete: $2.83 per 1,000 requests (first 100K)
- For small-medium apps: Usually stays within free tier

## Migration Path
1. Keep current static list as fallback
2. Add API integration alongside
3. Test thoroughly
4. Switch to API as primary
5. Remove static list if desired (or keep as backup)

