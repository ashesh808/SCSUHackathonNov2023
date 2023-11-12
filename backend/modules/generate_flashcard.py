from pdf_parser import PdfParser
from gpt_client_wrapper import GPTClientWrapper
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
            pdf_parser = PdfParser(file_name=self.id)
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
        response_id = str(uuid.uuid4())
        filename = f"{prefixID}_response_{response_id}.json"
        filepath = os.path.join('data/rawgptdata', filename)
        with open(filepath, 'w') as json_file:
            json.dump(jsonResponse, json_file, indent=2)
        return filename
    
    def merge_json_response(self, prefixID):
        return "Not implemented"
    
    def parse_string_to_json(self,input_string):
        data_list = []
        sets = input_string.split("<questions>")
        for set_part in sets[1:]:
            set_parts = set_part.split("<answer>")
            if len(set_parts) == 2:
                question, answer = set_parts
                question = question.strip()
                answer = answer.strip()
            data_list.append({"question": question, "answer": answer})
        return data_list


    def send_query(self):
        prefixID = str(uuid.uuid4())
        gpt_wrapper = GPTClientWrapper()
        substrings = self.batch_strings()
        name = ":not executed"
        for i, substring in enumerate(substrings):
            #Get response from GPT client
            gptResponse = gpt_wrapper.get_flashcards_with_tags(substring)
            #Convert string response to json
            jsonResponse = self.parse_string_to_json(gptResponse)
            #Save the file as Json
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

    input_string = "<questions> What is the capital of France? <answer> Paris<questions> Who is the president of the USA? <answer> Joe Biden"
    parsed_data = flashcard_generator.parse_string_to_json(input_string)
    print(parsed_data)


