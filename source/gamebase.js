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
