from flask import Flask, request, jsonify
from modules.pdf_uploader import PDFUploader
from modules.generate_flashcard import FlashCardGenerator
from modules.flashcard_viewer import FlashCardViewer


app = Flask(__name__)


UPLOAD_FOLDER = '/Users/ashesh808/Documents/BSCinCS/Fall23/Hackathon/SCSUHackathonNov2023/backend/modules/data/pdfdocument'
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

@app.route('/sendyoutubeurl', methods=['POST'])
def send_youtube_url():
    youtube_url = request.args.get('url')
    return jsonify({'message': 'Youtube video link recieved successfully'})

@app.route('/generatecards', methods=['GET'])
def generate_flashcards():
    # Generate flashcards logic here
    id = request.args.get('id')
    dataformat = request.args.get('dataformat')
    flashcard_generator = FlashCardGenerator(id)
    flashcard_generator.ReadData(dataformat)
    flashcard_generator.batch_strings()
    response = flashcard_generator.send_query()
    print(response)
    # You may want to parse the PDF and create flashcards
    return jsonify({'message': 'Flashcards generated successfully'})

@app.route('/getflashcarddata', methods=['GET'])
def get_flashcard_data():
    flashcard_id = request.args.get('id')
    if not flashcard_id:
        return jsonify({'error': 'ID parameter is missing'})
    flashcard_viewer = FlashCardViewer(ID=flashcard_id)
    path = flashcard_viewer.ReturnPath()
    flashcard_data = flashcard_viewer.ReadJson()
    return flashcard_data

if __name__ == '__main__':
    app.run(debug=True)