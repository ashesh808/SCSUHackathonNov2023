from yt_dlp import YoutubeDL
import os
import webvtt
import time

class Youtube:

    def __init__(self, fileName='test', URL='https://www.youtube.com/watch?v=dQw4w9WgXcQ'):
        self.file = str(fileName)
        self.url = URL
        self.path = {'home' : 'backend\\data\\youtuberawdata'}
        self.ext = self.file + '.en.vtt'
        self.read = os.path.join('backend\\data\\youtuberawdata', self.ext)
        self.savepath = ('backend\\data\\youtubeparseddata')


    def Download(self):
        output = {'default' : self.file}

        ydl_opts = {
            'writesubtitles' : True,
            'writeautomaticsub' : True,
            'forcefilename' : True,
            'skip_download' : True,
            'paths' : self.path,
            'outtmpl' : output
        }

        URL = [self.url]

        with YoutubeDL(ydl_opts) as ydl :
            ydl.download(URL)

    def ReadCaptions(self):
        cap =''
        for caption in webvtt.read(self.read):
            cap = cap + caption.text + ' '
        savename = self.file + '.txt'
        location = os.path.join(self.savepath, savename)
        print(location)
        print(savename)
        f = open(location, 'a')
        f.write(cap)
        f.close



        


if __name__ == '__main__':
    Test = Youtube(URL='https://www.youtube.com/watch?v=j3OqAN4ISOw&t=11s&pp=ygUJdG9tIHNjb3R0')
    Test.Download()
    time.sleep(1)
    Test.ReadCaptions()