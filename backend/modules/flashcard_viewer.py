import os
import json

class FlashCardViewer:
    def __init__(self, ID):
        self.FlashID = ID
        self.path = self.ReturnPath()

    def ReturnPath(self):
        self.FlashID = str(self.FlashID)
        return os.path.join('/Users/ashesh808/Documents/BSCinCS/Fall23/Hackathon/SCSUHackathonNov2023/backend/modules/data/flashcarddata', f"{self.FlashID}.json")

    def ReadJson(self):
        try:
            with open(self.path, "r") as file:
                data = json.load(file)
            return data
        except FileNotFoundError:
            return "File does not exist"
        except json.JSONDecodeError as e:
            return f"Error decoding JSON: {str(e)}"
        except Exception as e:
            return f"An unexpected error occurred: {str(e)}"

if __name__ == "__main__":
    # Replace 'test' with the actual ID you want to test
    viewer = FlashCardViewer(ID="test")

    # Test case 1: Read an existing JSON file
    try:
        json_data = viewer.ReadJson()
        print("Test Case 1 Result:", json_data)
    except Exception as e:
        print("Test Case 1 Error:", str(e))

    # Test case 2: Read a non-existing JSON file
    viewer.FlashID = "non_existing_file"
    try:
        json_data = viewer.ReadJson()
        print("Test Case 2 Result:", json_data)
    except Exception as e:
        print("Test Case 2 Error:", str(e))
