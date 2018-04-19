#!/bin/bash
ans=$(zenity --list --title "Utility" --text "Choose what to do" --column Options "Create a bootable drive" "Make an iso" "About");
#ans=$(zenity  --list  --title="Utility" --text "Choose what to do" --radiolist  --column "Pick" --column "Options" TRUE "Create a bootable drive"  FALSE "Make an iso" );

if [ "$ans" = "Create a bootable drive" ] 
    then
    echo $ans;
    inputfile=$(zenity --file-selection  --title="Choose the iso file" --text="Choose the iso file " --file-filter=*.iso );
    echo "inputfile : $inputfile";
    device=$(df -h |  zenity  --list  --text "Choose the device to boot" --radiolist --column "Pick" --column "Devices" | grep -o '^/dev/sd[b-z][0-9]');
    echo "device : $device";
    outputfile=$device;
    echo "outputfile : $outputfile";
    if [ "$outputfile"=~'^/dev/sd[b-z][0-9]' ];
        then
        truncated="$outputfile" |tr -cd [:punct:][:alpha:];
        echo "truncated device : $truncated "
        $(umount $outputfile);
        (pv -n $inputfile | dd of=$outputfile |tr -cd [:punct:][:alpha:] bs=1M && sync) 2>&1 | zenity --progress  --auto-close --text="Booting in progress"


    else
        zenity --warning --text="Wrong Target Device, Please choose a good one, A good one must be like : /dev/sd[b-z][0-9]";
        exit
    fi


elif [ "$ans" = "Make an iso" ] 
    then
    echo $ans;
    anss=$(zenity  --list  --text "Choose from what you want to make an iso" --radiolist  --column "Pick" --column "Options" TRUE "From file"  FALSE "From CD/DVD");
    if [ "$anss" = "From file" ] 
        then
        echo $anss;
        file=$(zenity --file-selection  --title="Choose the file" --text="Choose the  file" --directory);
        echo "The choosen file/folder : $file";      
        directory=$(zenity --file-selection  --title="Choose the directory" --text="Choose where to save" --directory);
        echo "The choosen directory : $directory";        
        isoname=$(zenity --entry --title="iso name" --text="give the iso name");
        echo "The iso name : $isoname";        
        path="$directory""/$isoname"".iso";
        echo "The complete path : $path";
    
        $(mkisofs -o $path $file);
            

            elif [ "$anss" = "From CD/DVD" ]  
            then
            echo $anss;
            disk="/dev/cdrom";
            directory2=$(zenity --file-selection  --title="Choose the directory" --text="Choose where to save" --directory);
            $(pv -n $disk | dd of=$directory2 ) 2>&1 | zenity --progress  --auto-close --text=" Creating the iso file"
            exit

            
    fi
elif [ "$ans" = "About" ]  
    then
    zenity --info --text " <b>Utility</b>

    This is the simple tool that aims to help linux users 
    to easily create bootable devices from linux iso,
    making iso from file or from devices like cd or dvd.

    This is made by Christian KAKASU in collaboration
    with Pierre Mukisa.
    emails : chrisdany9@gmail.com;
           : mukisaonline2009@gmail.com;
    year   : 2018   
    "
    exit  
fi