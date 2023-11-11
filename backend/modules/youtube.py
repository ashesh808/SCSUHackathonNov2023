from yt_dlp import YoutubeDL
import os

## args writesubtitles, subtitleformat, skip_download

dlpath = {
    'home' : 'backend\\documents\\Youtube Data'
}

ydl_opts = {
    'writesubtitles' : True,
    'forcefilename' : True,
    'skip_download' : True,
    'paths' : dlpath
}

URL = ['https://www.youtube.com/watch?v=j3OqAN4ISOw']
with YoutubeDL(ydl_opts) as ydl :
    ydl.download(URL)
    