// Importiere das Script
$gameload = (https://nativclint.black-host.eu/source/spiel/doodle-jump)
$serv = (https://nativclint.black-host.eu/source/load/serv)

// Lade die Spielcookies von der IP
$game = get(ip)
   load * from serv(cache)
sleep(?) while load;

// PHP Text
<php>
<iframe src="$gameload" datasrc="$game"></iframe>
<?php>

catch($error);
serv.console display $error
