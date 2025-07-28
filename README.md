# Rick and Morty Characters ([App](https://rnm-app.vercel.app/))

Search, browse, and favorite your favorite Rick and Morty characters. <br/>
Built with React, TypeScript, Chakra UI, Legend-State App, Axios. <br/>
Project using Pnpm and Vite, Deploy to Vercel. <br/>
Tested with Jest.

Link to the app: [App](https://rnm-app.vercel.app/) <br /> <br/>

## Mobile (Dark + Light Mode)
<img width="200" height="400" alt="mobile" src="https://github.com/user-attachments/assets/7498a7e5-157a-4e54-b802-a84261ab3500" />
<img width="200" height="400" alt="mobile 2" src="https://github.com/user-attachments/assets/8e3bebdb-adbe-46cf-8cc8-5676824d3dad" />
<br/>

## Desktop (Dark + Light Mode)
<img width="900" height="450" alt="light modal details" src="https://github.com/user-attachments/assets/57b36f18-416c-4e07-84b0-53247afeefff" />
<img width="900" height="450" alt="dark home pic" src="https://github.com/user-attachments/assets/86ed4ef3-495b-4426-83db-25cf2b63d946" />

## Running the App

1. If you don't have pnpm installed on your machine:
see more details of pnpm installation here: [install pnpm](https://pnpm.io/installation) 
```bash
npm install -g pnpm
```
2. Run these commands to run the app:

```bash
pnpm i
pnpm dev
```

* Run tests:
```bash
pnpm test
```
## Breakdown of Components

### CharacterGallery
Displays the list of characters fetched from API, supports search and pagination.

### CharacterCard
Shows an individual character's image, name, status, and favorite toggle button.

### SearchInput
Input box component with debounced search input handling.

### FavoritesList
Displays the list of favorite characters, supports removal and UI customization.

### CharacterModal
Modal that opens on clicking a character, showing detailed info including origin details fetched separately, and favorite toggle button.

## API Services
### characterService
Handles all Rick and Morty API calls:
```js
characterService.query({name, status, page})
```
fetches paginated character data with filters, such as name and status.

### locationService 
Fetches origin location details by ID.
```js
locationService.getById(locationId)
```
## State Management
Using Legend State App ([mode details](https://legendapp.com/open-source/state/v3/)) for global reactive state management:
Stores the selected character, favorites list.

### characterStore
set the seleceted charecter and a boolean flag 'isSelected' to open / close the modal charecters details
```js
characterStore$ = {
  selected,
  isSelected
};
```

### favoriteStore
the favorite charecters store hold the charecters favorite list and provide a function to toggle favorite charecter:
```js
favoriteStore$ = {
  characters,
};

function toggleFavoriteCharacter(character)
```
## Data Flow Diagram

<img width="3083" height="1793" alt="dffd (5)" src="https://github.com/user-attachments/assets/666bebd9-d5e2-467c-8a3a-94d3259f853c" />

## Components Diagram

<img width="1920" height="1080" alt="dffd (4)" src="https://github.com/user-attachments/assets/4019c176-50ad-4f82-b4b6-b79dedfb9a69" />


## APP Data Entities

### The Character Entity

```js
type ICharacter = {
  id: number;
  name: string;
  episodes: number;
  image: string;
  originId: number;
  species: string;
  gender: string;
  status: enum ["Alive", "Dead", "unknown"];
};
```
### The Location Entity
```js
type ILocation = {
  id: number;
  name: string;
  type: string;
  dimension: string;
};
```
