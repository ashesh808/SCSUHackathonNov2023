# SCSUHackathonNov2023
Certainly! Below is the documentation for your Flask application:

---

# Flashcard Generator API Documentation

## Overview

The Flashcard Generator API allows users to upload PDF documents, send YouTube video links, generate flashcards from uploaded PDFs, and retrieve flashcard data.

## Table of Contents

1. [Upload PDF](#upload-pdf)
2. [Send YouTube URL](#send-youtube-url)
3. [Generate Flashcards](#generate-flashcards)
4. [Get Flashcard Data](#get-flashcard-data)

## Upload PDF

**Endpoint:** `/uploadpdf`  
**Method:** `POST`  

### Request
- Form Data:
  - `file`: PDF file to be uploaded.

### Response
- JSON Object:
  - If successful:
    ```json
    {
      "message": "File uploaded successfully"
    }
    ```
  - If error:
    ```json
    {
      "error": "No file part"  // or "No selected file"
    }
    ```

## Send YouTube URL

**Endpoint:** `/sendyoutubeurl`  
**Method:** `POST`

### Request
- Query Parameter:
  - `url`: YouTube video URL.

### Response
- JSON Object:
  ```json
  {
    "message": "Youtube video link received successfully"
  }
  ```

## Generate Flashcards

**Endpoint:** `/generatecards`  
**Method:** `GET`

### Request
- Query Parameters:
  - `id`: Unique identifier for the flashcard generation.
  - `dataformat`: Format of data to be processed.

### Response
- JSON Object:
  ```json
  {
    "message": "Flashcards generated successfully"
  }
  ```
### Note
- Flashcards are generated based on the PDF data specified by the `id` and `dataformat` parameters.

## Get Flashcard Data

**Endpoint:** `/getflashcarddata`  
**Method:** `GET`

### Request
- Query Parameter:
  - `id`: Unique identifier for the flashcard data.

### Response
- JSON Object:
  - If successful:
    ```json
    {
      "flashcard_data": {
        // Flashcard data here
      }
    }
    ```
  - If error:
    ```json
    {
      "error": "ID parameter is missing"
    }
    ```

## Running the Application

To run the application, execute the following command in the terminal:

```bash
python your_file_name.py
```

Ensure that Flask is installed (`pip install Flask`) before running the application.

The application will run in debug mode and can be accessed at `http://127.0.0.1:5000/` in your web browser.

---

Replace `your_file_name.py` with the actual name of your Python script containing the Flask application.
