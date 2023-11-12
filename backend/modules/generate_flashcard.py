from pdf_parser import PdfParser
from gpt_client_wrapper import GPTClientWrapper
import uuid
import json
import os

class FlashCardGenerator:
    def __init__(self, id):
        self.id = id
        self.parsed_data = None

    def ReadData(self, dataformat):
        if (dataformat == "pdf"):
            pdf_parser = PdfParser(file_name=self.id + ".pdf")
            parsed_data = pdf_parser.pdf_to_text()
            self.parsed_data = parsed_data
        else:
            raise NotImplementedError("Data format not supported yet")

    def batch_strings(self):
        if self.parsed_data is not None:
            max_length = 4000
            substrings = [self.parsed_data[i:i + max_length] for i in range(0, len(self.parsed_data), max_length)]
            return substrings
        else:
            raise ValueError("No data available. Call ReadData first to parse data.")
    
    def save_json_response_withprefix(self, jsonResponse, prefixID):
        #jsonResponse = json.loads(jsonResponse) Convert the response to proper json
        response_id = str(uuid.uuid4())
        filename = f"{prefixID}_response_{response_id}.json"
        filepath = os.path.join('data/rawgptdata', filename)
        with open(filepath, 'w') as json_file:
            json.dump(jsonResponse, json_file)
        return filename
    
    def merge_json_response(self, prefixID):
        # List JSON files in the 'data/rawgptdata' directory with the specified prefixID
        json_files = [file for file in os.listdir('data/rawgptdata') if file.startswith(prefixID) and file.endswith('.json')]

        # Initialize an empty list to store the merged JSON objects
        merged_data = []

        # Read and merge the contents of matching JSON files
        for json_file in json_files:
            filepath = os.path.join('data/rawgptdata', json_file)
            with open(filepath, 'r') as file:
                json_content = json.load(file)
                # Append the JSON content to the merged_data list
                merged_data.append(json_content)

        # Generate a unique filename for the merged JSON response
        merged_filename = f'merged_response_{prefixID}.json'
        merged_filepath = os.path.join('data/rawgptdata', merged_filename)

        # Write the merged JSON data to the unique JSON file
        with open(merged_filepath, 'w') as merged_file:
            json.dump(merged_data, merged_file)

        return "Merged JSON data for prefixID {} saved with name {}".format(prefixID, merged_filename)
    
    def send_query(self):
        prefixID = str(uuid.uuid4())
        gpt_wrapper = GPTClientWrapper()
        substrings = self.batch_strings()
        name = ":not executed"
        for i, substring in enumerate(substrings):
            jsonResponse = gpt_wrapper.get_flashcards_json(substring)
            name = self.save_json_response_withprefix(jsonResponse, prefixID)
        return "Last Json file saved with name " + name
    
if __name__ == "__main__":
    id = 'FS260-Paper-1'
    dataformat = 'pdf'
    flashcard_generator = FlashCardGenerator(id)
    flashcard_generator.ReadData(dataformat)
    flashcard_generator.batch_strings()
    response = flashcard_generator.send_query()
    print(response)


