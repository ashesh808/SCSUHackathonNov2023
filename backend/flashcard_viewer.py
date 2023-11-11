import os
import json

class FlashCardViewer:
    def __init__(self, ID):
        self.FlashID = ID

    def ReturnPath(self):
        self.FlashID = str(self.FlashID)
        self.FlashID = self.FlashID + '.json'
        self.path = 'documents/Json/' + self.FlashID
        return (str(self.path))

    def ReadJson(self):
        try:
            file = open(self.path, "r")
            data = json.loads(file.read())
            return data
        except FileNotFoundError:
            return "File does not exist"
        except Exception as e:
            return f"Error reading JSON: {str(e)}"
