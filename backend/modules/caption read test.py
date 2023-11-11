import webvtt

path = 'backend\\data\\youtuberawdata\\test.en.vtt'

cap = ''

for caption in webvtt.read(path):
    cap = cap + caption.text + ' '

print(cap)

f = open('test.txt', 'a')
f.write(cap)
f.close()