import vlc
import time
file="/home/chris/Musique/black.mp3"
# p=vlc.MediaPlayer(file)
# def play(file):
# 	p.play()
# def stop():
# 	p.stop()


# play(file)

instance = vlc.Instance()

#Create a MediaPlayer with the default instance
player = instance.media_player_new()

#Load the media file
media = instance.media_new(file)

#Add the media to the player
player.set_media(media)

#Play for 10 seconds then exit
player.play()
time.sleep(60)