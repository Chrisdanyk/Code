
import os
import sys
import random

path="/home/chris/Musique"
def mp3gen(path):
    list=[]
    for root,dirs,files in os.walk(path):
        for filename in files:
            if os.path.splitext(filename)[1] == ".mp3":
                list.append(os.path.join(root, filename.lower()))
    #print list

    return list

def music_player(file_name):
	"""
	This function takes the name of a music file as an argument and plays it
	depending on the OS.
	"""
	if sys.platform == 'darwin':
		player = "mpv --no-video '" + file_name + "'"
		return os.system(player)
	elif sys.platform == 'linux2' or sys.platform == 'linux':
		player = "mpv --no-video '" + file_name + "'"
		return os.system(player)

def play_random(path):
	try:
		music_listing = mp3gen(path)
		music_playing = random.choice(music_listing)
		#tts("Now playing: " + music_playing)
		music_player(music_playing)
	except IndexError as e:
		#tts('No music files found.')
		print("No music files found: {0}".format(e))

def play_specific_music(path):
	#words_of_message = speech_text.split()
	#words_of_message.remove('play')
	#cleaned_message = ' '.join(words_of_message)
	music_listing = mp3gen(path)
	for i in range(0, len(music_listing)):
	#if cleaned_message in music_listing[i]:
		music_player(music_listing[i])


play_random(path)