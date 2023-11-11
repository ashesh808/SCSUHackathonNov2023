import PyPDF2

def pdf_to_text(pdf_path):
    text = ""
    try:
        with open(pdf_path, "rb") as file:
            pdf_reader = PyPDF2.PdfReader(file)
            # Iterate through all the pages in the PDF
            for page_number in range(len(pdf_reader.pages)):
                # Extract text from each page
                page = pdf_reader.pages[page_number]
                text += page.extract_text()
    except Exception as e:
        print(f"An error occurred: {str(e)}")
    return text

if __name__ == "__main__":
    # Replace 'your_pdf_file.pdf' with the actual path to your PDF file
    pdf_path = 'documents/test.pdf'

    extracted_text = pdf_to_text(pdf_path)

    # Output the extracted text
    print(extracted_text)
