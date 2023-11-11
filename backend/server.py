from flask import Flask, request, jsonify
from pdf_uploader import PDFUploader
from flashcard_viewer import FlashCardViewer


app = Flask(__name__)


UPLOAD_FOLDER = 'documents'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

pdf_uploader = PDFUploader(app)


@app.route('/uploadpdf', methods=['POST'])
def upload_pdf():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})
    
    file = request.files['file']

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
    flashcard_id = request.args.get('id')

    if not flashcard_id:
        return jsonify({'error': 'ID parameter is missing'})

    flashcard_viewer = FlashCardViewer(flashcard_id)
    path = flashcard_viewer.ReturnPath()
    flashcard_data = flashcard_viewer.ReadJson()

    return jsonify({'message': 'Flashcard data retrieved successfully', 'path': path, 'data': flashcard_data})

if __name__ == '__main__':
    app.run(debug=True)
