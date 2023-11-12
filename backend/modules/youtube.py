from yt_dlp import YoutubeDL
import os
import webvtt
import time

class Youtube:

    def __init__(self, file='test', URL='https://www.youtube.com/watch?v=dQw4w9WgXcQ'):
        self.file = str(file)
        self.url = URL
        self.path = {'home' : 'backend\\data\\youtuberawdata'}
        self.ext = self.file + '.en.vtt'
        self.read = os.path.join('backend\\data\\youtuberawdata', self.ext)
        self.savepath = ('backend\\data\\youtubeparseddata')


    def Download(self):
        output = {'default' : self.file}

        ydl_opts = {
            'format' : 'wav/bestaudio/best',
            'postprocessors': [{
                'key': 'FFmpegExtractAudio',
                'preferredcodec' : 'wav',
            }],
            'writesubtitles' : True,
            'writeautomaticsub' : True,
            'forcefilename' : True,
            'skip_download' : False,
            'paths' : self.path,
            'outtmpl' : output
        }

        URL = [self.url]

        with YoutubeDL(ydl_opts) as ydl :
            ydl.download(URL)

    def ReadCaptions(self):
        time.sleep(1)
        cap =''
        for caption in webvtt.read(self.read):
            cap = cap + caption.text + ' '
        savename = self.file + '.txt'
        location = os.path.join(self.savepath, savename)
        cap.strip('\n')
        f = open(location, 'a')
        f.write(cap)
        f.close
        #os.remove(self.read)

if __name__ == '__main__':
    Test = Youtube(fileName='Rickroll')
    Test.Download()
    Test.ReadCaptions()
    time.sleep(2)