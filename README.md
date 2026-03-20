
##Project Description

The Music Playlist App is a simple and interactive React application that displays a list of songs by Ed Sheeran. Users can search for songs using a search bar and delete tracks from the playlist dynamically. The app updates in real-time based on user actions, providing a smooth and responsive experience. 

##Features

🔍 Search Functionality
Filter songs instantly based on user input.

🗑 Delete Songs
Remove any track from the playlist with a single click.

📃 Dynamic Rendering
UI updates automatically when songs are searched or deleted.

🚫 No Songs Found State
Displays a message when no matching songs are found.

🎨 Responsive UI
Clean and user-friendly interface.

#Technologies Used

⚛️ React JS – For building UI components

🎨 CSS – For styling and layout

🧠 JavaScript (ES6) – Logic and state management

🔗 react-icons – For search and delete icons 

##Installation Steps

1. Clone the repository git clone https://github.com/PANJAMYNASAIRAM/EdSheeran-PlayList.git
2. Go to project folder "cd EdSheeran-PlayList"
3. Install dependencies "npm install"
4. Start the project "npm start"

##Live Demo

https://PANJAMYNASAIRAM.github.io/EdSheeran-PlayList


##⚙️ How It Works
1. Initial Data Setup

You start with a list of songs (initialTracksList) of Ed Sheeran

This data contains:

Song name

Image

Genre

Duration

2. State Management (Brain of the App)

You use React’s state:

const [tracksList, setTracksList] = useState(initialTracksList)
const [searchInput, setSearchInput] = useState('')
👉 What these do:

tracksList → stores current songs

searchInput → stores what user types

3. Searching Songs 🔍

When user types in search box:

const onChangeSearch = event => {
  setSearchInput(event.target.value)
}

Then filtering happens:

const filteredTracks = tracksList.filter(each =>
  each.name.toLowerCase().includes(searchInput.toLowerCase()),
)
👉 Result:

Only matching songs are shown

Search is case-insensitive

4. Deleting a Song 🗑

When delete button is clicked:

const onDeleteTrack = id => {
  const filteredList = tracksList.filter(each => each.id !== id)
  setTracksList(filteredList)
}
👉 What happens:

Selected song is removed

UI updates instantly

5. Conditional Rendering 🚫
const showNoSongs =
  (searchInput !== '' && filteredTracks.length === 0) ||
  tracksList.length === 0
👉 Logic:

If no songs match search OR all songs deleted
➡️ Show "No Songs Found"

6. Displaying Songs 📃
filteredTracks.map(each => (
  <li key={each.id}>
👉 What happens:

Each song is rendered as a list item

Shows:

Image

Name

Genre

Duration

Delete button

🎯 Final Flow

App loads → shows all songs

User types → list filters instantly

User deletes → song removed

No matches → shows message

🧠 In Simple Words

👉 It’s a dynamic list app where:

Data is stored in state

UI updates automatically

User controls everything (search + delete)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
