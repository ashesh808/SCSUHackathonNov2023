import PyPDF2

class PdfParser:
    def __init__(self, file_name):
        self.pdf_path = 'documents/' + file_name

    def pdf_to_text(self):
        text = ""
        try:
            with open(self.pdf_path, "rb") as file:
                pdf_reader = PyPDF2.PdfReader(file)

                # Iterate through all the pages in the PDF
                for page_number in range(len(pdf_reader.pages)):
                    # Extract text from each page
                    page = pdf_reader.pages[page_number]
                    text += page.extract_text()
        except Exception as e:
            print(f"An error occurred: {str(e)}")
            
        # Split the text into lines
        lines = text.splitlines()

        # Join the lines back together with spaces
        cleaned_text = ' '.join(lines)

        return cleaned_text

if __name__ == "__main__":
    file_name = 'test.pdf'
    pdf_parser = PdfParser(file_name)
    extracted_text = pdf_parser.pdf_to_text()
    print(extracted_text)
