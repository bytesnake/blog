+++
title = "Preview unread/total number of emails in i3status"
date = "2021-07-01"
+++

I recently added a small section to my `i3status` bar with the number of unread emails and total emails. In order to avoid having thunderbird open all the time, I also added a wrapper which puts it into headless mode.

<!-- more -->

## Extending status bar

The vanilla `i3status` is a bit inflexible when it comes to the extendibility. You can add content from a file, but not from a command output. Because of that I went for the combination of `crontab` and a small script which writes the bar snippet to a file.

The script looks into thunderbird's user directory and counts the number of unread/total emails (this only works for a single folder and a single email address). The following script does:
1. look into `.thunderbird/c9rt7s6i.default-release/ImapMail/groupware.fau.de/INBOX.msf` and counts the number of mails
2. if no new mail arrived writes `M: <unread>/<total>` into `/tmp/mail_counter`
3. if new emails arrived colors the output in green

```bash
#!/bin/bash

new_mails=$(grep '(^A2=' .thunderbird/c9rt7s6i.default-release/ImapMail/groupware.fau.de/INBOX.msf | tail -n1 | sed -r 's/.*\(\^A2=(\w+)\).*/\1/' | xargs -n1 -L1 --replace=__ printf '%d\n' '0x__')
total_mails=$(grep '(^A1=' .thunderbird/c9rt7s6i.default-release/ImapMail/groupware.fau.de/INBOX.msf | tail -n1 | sed -r 's/.*\(\^A1=(\w+)\).*/\1/' | xargs -n1 -L1 --replace=__ printf '%d\n' '0x__')

if [ $new_mails -eq 0 ]; then
    echo "M: "$new_mails"/"$total_mails > /tmp/mail_counter
else
    echo "<span color='#00FF00'>M: "$new_mails"/"$total_mails"</span>" > /tmp/mail_counter
fi;
```

After putting it to a reachable location (for me it is `~/.local/bin/check-email.sh`) and making the script executable, add a new crontab rule with `$ crontab -e` and decide how often you want to look this up:
```
*/5  *    * * *	lorenz	/home/lorenz/.local/bin/check-email.sh
```

You know have to add a section to your i3 status bar for this file:
```
order += "read_file mailcounter"

...

read_file mailcounter {
    path = "/tmp/mail_counter"
    color_good = "#FFFFFF"
}
```
which looks in every update cycle into your generated file. And voilà you have an email counter in you status bar.

## Start thunderbird in headless mode during login

I don't want to have thunderbird open all the time, but then the script doesn't work anymore. Unfortunately there is no way to mix headless and GUI mode in thunderbird, so I wrote a small wrapper which does this:

```bash
#!/bin/bash

# kill old session (we can't do `killall thunderbird` here, that would kill this script)
TB_PID=$(ps faux | grep '/usr/lib/thunderbird/thunderbird' | grep -vw grep | awk '{ print $2 }' );
kill ${TB_PID}

# start thunderbird with head and after that start headless mode again
/usr/bin/thunderbird; /usr/bin/thunderbird --headless
```

It basically looks up the PID of headless thunderbird and kills it, then starts in GUI mode and afterwards restarts it into headless mode. I put this script to `/usr/local/bin/thunderbird` so that it overwrites the default path.

You still have to start thunderbird in headless mode during login, I extended my `~/.profile` with

```bash
/usr/bin/thunderbird --headless &
```

and you should be good to go.
