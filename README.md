# Song Manager

A simple React and Redux application to manage a list of songs. This application allows you to add, edit, delete, and view a list of songs fetched from RESTapi.

## Features

- Fetch songs from a JSONPlaceholder (REST API)
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
- **Redux-saga**: Used redux-saga to fetch songs from JSONPlaceholder (REST API).

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
