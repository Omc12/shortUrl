# ShortUrl

ShortUrl is a lightweight URL shortening service built with **JavaScript** and **EJS**. It allows users to generate short, user-friendly links and redirect them to the original long URLs.

## Features

- Create short URLs from long links.
- Redirect short URLs to their original destinations.
- Simple and clean user interface using EJS templating.
- Easy to set up and run on any Node.js environment.

## Tech Stack

- **JavaScript**: Used for backend logic.
- **EJS**: Templating engine for rendering dynamic HTML content.
- **Node.js**: Server-side runtime environment.
- **Express.js**: Web framework for routing and handling requests.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [Git](https://git-scm.com/) for cloning the repository.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Omc12/shortUrl.git
   cd shortUrl
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

4. Open the application in your browser:
   ```
   http://localhost:3000
   ```

## Usage

1. Enter a long URL in the input field on the homepage.
2. Click the "Shorten" button to generate a short URL.
3. Use the generated short URL to access the original link.

## Project Structure

```
shortUrl/
├── public/         # Static assets (CSS, JS, images)
├── views/          # EJS templates
├── routes/         # Application routes
├── app.js          # Main server file
├── package.json    # Project metadata and dependencies
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add a new feature"
   ```
4. Push the changes:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or suggestions, feel free to contact [Omc12](https://github.com/Omc12).
