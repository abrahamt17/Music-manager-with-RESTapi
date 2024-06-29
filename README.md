# Song Manager

A simple React and Redux application to manage a list of songs. This application allows you to add, edit, delete, and view a list of songs fetched from an external API.

## Features

- Fetch songs from an a jsonplaceholder (RESTApi)
- Add new songs to the list
- Edit existing songs
- Delete songs from the list
- View the list of songs with the ability to show more/less

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for JavaScript apps.
- **Emotion**: A library for writing CSS styles with JavaScript.
- **JavaScript (ES6+)**: The programming language used for developing the application.
- **HTML5**: The standard markup language for creating web pages.
- **CSS3**: The style sheet language used for describing the look and formatting of the application.
- **Redux-saga**: used redux-saga to fetch songs from jsonplaceholder(restApi).

## Usage

1. The application will start at `http://localhost:3000`.
2. Use the input field to add a new song to the list.
3. Use the "Edit" button to edit an existing song's title.
4. Use the "Delete" button to remove a song from the list.
5. Use the "Show All" button to toggle between showing all songs and showing a limited number of songs.

## Components

### AddSongForm

A form component to add new songs to the list.

### SongList

A component that displays the list of songs and allows editing and deleting songs.

### DynamicIslandButton

A styled button component with a dynamic island design.

## State Management

The application uses Redux for state management. The state is divided into the following slices:

- **songs**: Manages the list of songs, including fetching, adding, updating, and deleting songs.

### songsSlice.js

Defines the actions and reducers for managing the list of songs.

### src/services/api.js

Contains the function to fetch songs from the iTunes Search API.

## Styling

The application uses Emotion for styling components. Styles are defined using the `styled` function from `@emotion/styled` and the `css` function from `@emotion/react`.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/song-manager.git
   cd song-manager
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

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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


