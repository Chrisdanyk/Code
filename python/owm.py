# -*- coding: utf-8 -*-
import pyowm
import datetime


owm_fr= pyowm.OWM('5630d31ff79f04a71abfa4522db37200')
owm_fr.set_language("fr")
observation = owm_fr.weather_at_place('Goma,CD')
w = observation.get_weather()
tim = datetime.datetime.now()

print("Meteo pour ce "+str(tim.day))
print(w.get_detailed_status())
t=w.get_temperature(unit='celsius')
print("temperature est "+str(t.get('temp'))+" celsius")
print("temperature maximale "+str(t.get('temp_max'))+" celsius")
print("temperature minimale "+str(t.get('temp_min'))+" celsius")

print("Avec une humidité de  " +str(w.get_humidity())+"%" )
print( "Le soleil se levera à "+w.get_sunrise_time(timeformat='iso'))
print("Le soleil se couchera à "+w.get_sunset_time(timeformat='iso'))
win=w.get_wind(unit='meters_sec')
print("vitesse du vent "+ str(win.get('speed'))+" mètre par seconde")
