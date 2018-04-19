import vlc
instance = vlc.Instance()

#Create a MediaPlayer with the default instance
player = instance.media_player_new()
player.stop()