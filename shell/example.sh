#!/bin/bash
file=$(zenity --width=360 --height=320 --list --title "Favourites" --text "Open..." --column File "Current accounts" "2012 Christmas letter" "Flecktones – Cheeseballs in Cowtown" "Free Software Magazine")



if [ "$file" = "Current accounts" ]; then

    xdg-open /home/bob/money/2011-12_accounts.gnumeric



elif [ "$file" = "2012 Christmas letter" ]; then

    xdg-open /home/bob/personal/2012_Xmas_letter.odt



elif [ "$file" = "Flecktones – Cheeseballs in Cowtown" ]; then

    xdg-open /home/bob/music/Fleck/Cheeseballs_in_Cowtown.ogg



elif [ "$file" = "Free Software Magazine" ]; then

    xdg-open http://www.freesoftwaremagazine.com/



else

    exit 0



fi