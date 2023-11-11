from yt_dlp import YoutubeDL
import os

class Youtube:

    def __init__(self, fileName='test', URL='https://www.youtube.com/watch?v=dQw4w9WgXcQ'):
        self.file = fileName
        self.url = URL
        self.path = {'home' : 'backend\\data\\youtuberawdata'}

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

if __name__ == '__main__':
    Test = Youtube(URL='https://www.youtube.com/watch?v=LfaMVlDaQ24&pp=ygUMaGFydmFyZCBjczUw')
    Test.Download()
    