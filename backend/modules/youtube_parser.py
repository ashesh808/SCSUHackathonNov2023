import speech_recognition as sr
import os
from pydub import AudioSegment
from pydub.silence import split_on_silence
from modules.youtube import Youtube
import time
import shutil


class YoutubeParser(Youtube):

    def __init__(self, file, Url):
        Youtube.__init__(self, file, Url)
        self.extaud = self.file + '.wav'
        self.readaud = os.path.join('modules/data/youtuberawdata',self.extaud)
        self.saveaud = ('modules/data/youtubeparseddata')
    
    
    def ParseAudio(self, path):
        r = sr.Recognizer()

        with sr.AudioFile(path) as source:
            audioListened = r.record(source)

            text = r.recognize_google(audioListened)
            return(text)
        
    
    def LargeAudioParse(self):
        sound = AudioSegment.from_file(self.readaud)

        chunks = split_on_silence(sound,
                                  min_silence_len = 500,
                                  silence_thresh = sound.dBFS-14,
                                  keep_silence = 500,
                                  )
        FolderName = 'AudioChunks'
        tempfolder = os.path.join('modules/data/youtuberawdata', FolderName)
        if not os.path.isdir(tempfolder):
            os.mkdir(tempfolder)
        WholeText = ''

        for i, AuidoChunk in enumerate(chunks, start=1):
            chunk_filename = os.path.join(tempfolder, f'chunk{i}.wav')
            AuidoChunk.export(chunk_filename, format='wav')

            try:        
                print(chunk_filename)
                text = self.ParseAudio(chunk_filename)
            except sr.UnknownValueError as e:
                print("Error", str(e))
            else:
                text = f'{text.capitalize()}. '
                #print(chunk_filename, ':', text)
                WholeText += text
        self.text = WholeText
        #return(WholeText)

    def WriteToFile(self):
        file = self.file + 'audio.txt'
        path = os.path.join(self.saveaud, file)
        f = open(path, 'a')
        f.write(self.text)
        f.close()
        shutil.rmtree('modules/data/youtuberawdata/AudioChunks')
        os.remove(self.readaud)
    

if __name__ == '__main__':
    start_time = time.time()
    test = YoutubeParser(file='LPL', Url='https://www.youtube.com/watch?v=tJI2e8V1tNI')
    #test.file = 'Rickroll'
    #test.url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    test.Download()
    print(test.read)
    test.ReadCaptions() 
    test.LargeAudioParse() #Speech to text
    test.WriteToFile()
    print("--- %s seconds ---" % (time.time() - start_time))
