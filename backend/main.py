import PyPDF2
import requests

def download_pdf(url, output_file):
    try:
        # Send an HTTP GET request to the server
        response = requests.get(url)
        
        # Check if the request was successful (HTTP status code 200)
        if response.status_code == 200:
            # Open the output file in binary write mode
            with open(output_file, 'wb') as pdf_file:
                # Write the content of the response to the file
                pdf_file.write(response.content)
            print(f"Downloaded PDF saved as {output_file}")
        else:
            print(f"Failed to download PDF. Status code: {response.status_code}")
    except Exception as e:
        print(f"An error occurred: {str(e)}")

if __name__ == "__main__":
    pdf_path = 'documents/test.pdf'
    extracted_text = pdf_to_text(pdf_path)
    # Output the extracted text
    print(extracted_text)