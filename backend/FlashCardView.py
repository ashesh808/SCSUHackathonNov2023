import os
import json

class FlashCardID:
    def __init__(self, ID):
        self.FlashID = ID

    def ReturnPath(self):
        self.FlashID = str(self.FlashID)
        self.FlashID = self.FlashID + '.json'
        self.path = os.path.join('SCSUHackathonNov2023\\backend\\documents\\Json', self.FlashID)
        return (str(self.path))

    def ReadJson(self):
        try:
            file = open(self.path, "r")
            data = json.loads(file.read())
            return(data)
        except FileNotFoundError:
            return("File does not exist")

if __name__ == "__main__":
    Id = str(input())
    Card1 = FlashCardID(Id)
    Path = Card1.ReturnPath() ## returns the path of the flash card json file
    print(Path)
    data = Card1.ReadJson()
    print(data)
