# JSCollection

A Next.js web app that provides jumpscare videos with easy integration options.

## Overview

JSCollection is a platform that hosts various jumpscare content and provides multiple ways to integrate them into your projects. Each jumpscare includes a demo page, direct video access, and iframe embedding options. This means you can either embed this into HTML or just download the video.

## Features

-   Browse available jumpscares with preview images
-   View interactive demos for each jumpscare (this is how an implementation COULD look like)
-   Multiple integration methods:
    -   Embed via iframe
    -   Direct video URL access
    -   Download video files
-   User review system with ratings & bad word filtering
-   Search functionality to filter jumpscares (very basic)

## Tech Stack

-   **Framework**: Next.js
-   **Language**: TypeScript
-   **Styling**: Tailwind
-   **Database**: Mongoose

## Getting Started

### Prerequisites

-   Node.js 20 or higher
-   MongoDB database (you can get one for free at [MongoDB.com](https://www.mongodb.com/))

### Installation

1. Clone the repository
2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a .env file with your MongoDB connection string:

    ```
    MONGO_URI=your_mongodb_connection_string
    ```

4. Run the dev server:

    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

6. (Optional) Build the project:

    ```bash
    npm run build
    ```
