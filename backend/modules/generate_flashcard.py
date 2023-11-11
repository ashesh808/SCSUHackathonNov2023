from pdf_parser import PdfParser

class FlashCardGenerator:
    def __init__(self, id):
        self.id = id
        self.parsed_data = None

    def ReadData(self, dataformat):
        if (dataformat == "pdf"):
            pdf_parser = PdfParser(file_name=f"{self.id}.pdf")
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
    
    def send_query(self):
        return "Not implemented"
    
    def merge_response(self):
        return "Not implemented"
