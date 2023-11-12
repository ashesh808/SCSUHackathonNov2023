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
      "id": "your_file_unique_id"
    }
    ```
  - If error:
    ```json
    {
      "error": "No file part" 
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
  - `dataformat`: Format of data to be processed can be "pdf" or "yt".

### Response
- JSON Object:
  ```json
  {
    "id": "your-unique-id"
  }
  ```
### Note
- Flashcards are generated based on the PDF data specified by the `id` and `dataformat` parameters.

Certainly! Here's the updated documentation for the `/getflashcarddata` endpoint with the example data:

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
      "flashcard_data": [
        [
          {
            "question": "What is the movie being discussed in the text?",
            "answer": "Inception"
          },
          {
            "question": "Who is the director of the movie?",
            "answer": "Christopher Nolan"
          },
          {
            "question": "What is one of the unique auditory elements in the movie?",
            "answer": "The \"BRAAAM\" sound or \"Inception horn\""
          }
        ],
        [
          {
            "question": "What are three visual aspects that spark curiosity in the opening sequence?",
            "answer": "The starting sequence uses visuals to spark curiosity in the minds of viewers."
          },
          {
            "question": "How is the protagonist, Cobb, introduced in the movie?",
            "answer": "Cobb is introduced as a troubled person lost in the sea and later as a skilled professional selling his services."
          },
          {
            "question": "How does the director establish the motives of the characters in the exposition?",
            "answer": "The director efficiently establishes the motives of the characters through flashbacks, dialogue, and character interactions."
          }
        ],
        [
          {
            "question": "What movie is the text talking about?",
            "answer": "Inception."
          },
          {
            "question": "Who is the director of Inception?",
            "answer": "Christopher Nolan."
          },
          {
            "question": "How does the director hook the audience in the opening minutes?",
            "answer": "By raising a lot of questions and tying everything together by the end."
          }
        ]
      ]
    }
    ```
  - If error:
    ```json
    {
      "error": "ID parameter is missing"
    }
    ```

### Example
```bash
curl http://127.0.0.1:5000/getflashcarddata?id=1
```

```json
{
  "flashcard_data": [
    [
      {
        "question": "What is the movie being discussed in the text?",
        "answer": "Inception"
      },
      {
        "question": "Who is the director of the movie?",
        "answer": "Christopher Nolan"
      },
      {
        "question": "What is one of the unique auditory elements in the movie?",
        "answer": "The \"BRAAAM\" sound or \"Inception horn\""
      }
    ],
    [
      {
        "question": "What are three visual aspects that spark curiosity in the opening sequence?",
        "answer": "The starting sequence uses visuals to spark curiosity in the minds of viewers."
      },
      {
        "question": "How is the protagonist, Cobb, introduced in the movie?",
        "answer": "Cobb is introduced as a troubled person lost in the sea and later as a skilled professional selling his services."
      },
      {
        "question": "How does the director establish the motives of the characters in the exposition?",
        "answer": "The director efficiently establishes the motives of the characters through flashbacks, dialogue, and character interactions."
      }
    ],
    [
      {
        "question": "What movie is the text talking about?",
        "answer": "Inception."
      },
      {
        "question": "Who is the director of Inception?",
        "answer": "Christopher Nolan."
      },
      {
        "question": "How does the director hook the audience in the opening minutes?",
        "answer": "By raising a lot of questions and tying everything together by the end."
      }
    ]
  ]
}
```

## Running the Application

To run the application, execute the following command in the terminal:

```bash
python app.py
```

Ensure that Flask is installed (`pip install Flask`) before running the application.

The application will run in debug mode and can be accessed at `http://127.0.0.1:5000/` in your web browser.
