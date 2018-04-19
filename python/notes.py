import sqlite3
from datetime import datetime
def prendre_note(parole):
    conn=sqlite3.connect('memory.db')
    words_of_message = speech_text.split()
    words_of_message.remove('note')
    cleaned_message = ' '.join(words_of_message)
    conn.execute("INSERT INTO notes (notes, notes_date) VALUES (?, ?)",
    (cleaned_message, datetime.strftime(datetime.now(), '%d-%m-%Y')))
    conn.commit()
    conn.close()
    print('Your note has been saved.')
    
def show_all_notes():
    conn = sqlite3.connect('memory.db')
    tts('Your notes are as follows:')
    cursor = conn.execute("SELECT notes FROM notes")
    for row in cursor:
        tts(row[0])
        conn.close()

