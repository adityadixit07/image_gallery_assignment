# Cat Image Gallery

This project is a React-based web application that displays a gallery of cat images fetched from an external API. It features infinite scrolling, lazy loading of images, and a responsive design.

## Features

- Infinite scrolling: Load more cat images as you scroll down the page
- Lazy loading: Images are loaded only when they come into view, improving performance
- Responsive design: Looks great on both desktop and mobile devices
- Shimmer effect: Provides visual feedback while images are loading
- Error handling: Displays user-friendly error messages if something goes wrong

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/your-username/cat-image-gallery.git
   ```

2. Navigate to the project directory:

   ```
   cd cat-image-gallery
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your API base URL:

   ```
   REACT_APP_BASE_URL=https://your-api-base-url.com/
   ```

5. Start the development server:
   ```
   npm start
   ```

The application should now be running on `http://localhost:3000`.

## Usage

Once the application is running, you can:

- Scroll through the gallery to view cat images
- Click the "Load More" button at the bottom to manually load more images
- Enjoy the smooth lazy loading of images as you scroll

## Project Structure

- `src/components/ImageGallery.js`: Main component for the cat image gallery
- `src/assets/css/ImageGallery.css`: Styles for the image gallery
- `src/config.js`: Configuration file for API endpoints

## Contributing

Contributions are welcome! Please feel free to submit a Pull Re
