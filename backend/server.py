from flask import Flask, request, jsonify
from pdf_uploader import PDFUploader

app = Flask(__name__)


UPLOAD_FOLDER = 'documents'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

pdf_uploader = PDFUploader(app)


@app.route('/uploadpdf', methods=['POST'])
def upload_pdf():
     # Check if the post request has the file part
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['file']

    # If the user does not select a file, the browser might
    # submit an empty file without a filename
    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    result = pdf_uploader.upload_pdf(file)
    return jsonify(result)


@app.route('/generatecards', methods=['GET'])
def generate_flashcards():
    # Generate flashcards logic here
    # You may want to parse the PDF and create flashcards
    return jsonify({'message': 'Flashcards generated successfully'})

@app.route('/getflashcarddata', methods=['GET'])
def get_flashcard_data():
    # Get flashcard data logic here
    # You may want to retrieve flashcard data and return it
    return jsonify({'message': 'Flashcard data retrieved successfully'})

if __name__ == '__main__':
    app.run(debug=True)
