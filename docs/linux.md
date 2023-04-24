<img class="logo" src="https://user-images.githubusercontent.com/29161635/97378317-7b708780-1898-11eb-9b68-96ad0c62b162.png" width="100px" height="100px">

# Linux

## Bash

The 'Born Again Shell'.  This page is not intended to be a history lesson, but it is helpful to understand the lineage of this particular piece of software.  If you don't do any further reading on the topic, just realize that many systems now use 'dash', which is of course related, but not identical software.  This is complicated by the fact that many systems will use a login shell of `/usr/bin/bash` which is often not a binary executable itself, but a symlink to `/usr/bin/dash`, so you may be using `dash` without even realizing it. 


## Getting Help

`which <command>` tells you where an executable is found.

`whatis <cmd>` provides a high level summary of what the command does.

`man <command>` shows the man-page


## Official resources

- [Bash Reference Manual (html)](https://www.gnu.org/software/bash/manual/bash.html)

## Terminal shortcuts

|Shortcut|Description|
|---|---|
|`ctrl+a`|Move cursor to the beginning of the line.|
|`ctrl+e`|Move cursor to the end of the line.|
|`ctrl+c`|Kill the current process.|
|`ctrl+r`|Search history based on entered keywords.|
|`ctrl+u`|Delete the current line.|
|`ctrl+k`|Delete the text at the right side of the cursor.|
|`ctrl+w`|Delete the text before the cursor.|
|`ctrl+l`|Clear the output of terminal commands.|
|`alt+f`|Move the cursor forward one word.|
|`alt+b`|Move the cursor backware one word.|
|<letter><tab><tab>|Enter a letter then hit `tab` twice to list all commands beginning with that letter.|

## Third party resources

- https://repl.it/languages/bash#main.sh

- http://linuxsig.org/files/bash_scripting.html

## Terminal text editors

The most popular text editors are probably `nano` and `vim`.

### A quick intro to Vim

Review [Vim 101](https://linuxfoundation.org/blog/classic-sysadmin-vim-101-a-beginners-guide-to-vim/).  Key points are to know that when you start Vim, you will be in command mode.  You can use arrow keys to navigate but navigation is much easier once you learn some basic commands (keyboard shortcuts).  Hit `i` to change to insert mode.  Hit `Esc` to leave insert mode and go back to `command mode`.  Hit `:` to chnage to `last line mode` which is where you'll usually use ':wq' to write the changes to disk and quit.

## Common tasks

### Add a user

Check out the walkthrough [here](https://linuxhint.com/create-new-user-ubuntu22-04/#:~:text=You%20can%20add%20a%20new,this%20command%20%24%20sudo%20adduser%20username.).  Use `sudo adduser <username>`.  If the new user should be allowed to use `sudo` then run this next: `sudo usermod -aG sudo <user>`.

### Update packages

This is probably a good time to `exit` and ssh back in as the new user.  Now run `sudo apt update` followed by `sudo apt upgrade`

### Shutdown / restart the system

*Reboot*

- Use `sudo reboot` to reboot immidiately.
- Use `shutdown -r` to reboot.

https://vitux.com/3-ways-to-reboot-ubuntu-through-the-command-line/

*Shutdown*

- Use `shutdown now` to shutdown immidiately.
- Use `sudo shutdown +1` to shutdown in 1 minute.


### Running services

https://linuxconfig.org/how-to-start-service-on-boot-on-ubuntu-22-04

### Setting the time zone 

https://www.tecmint.com/set-time-timezone-and-synchronize-time-using-timedatectl-command/

`timedatectl list-timezones` followed by `timedatectl set-timezone "America/New_York"`
  
### Setting a custom NTP address
  
https://wiki.archlinux.org/title/Systemd-timesyncd
  
```
  sudo nano /etc/systemd/timesyncd.conf
  sudo timedatectl set-ntp off
  # timedatectl status
  sudo timedatectl set-ntp on
  # timedatectl status
  # systemctl status systemd-timesyncd
 ```

### File permissions

File permissions attributes are represented with a 10-character string.  The string is logically broken into 4 substrings: the first character constitutes a substring and the following 9 characters are divided into sets of 3.

The concept is: `----------` = `-` + `---` + `---` + `---`

Each character represents a bit, a `-` represents `0` while a letter (d, r, w, or x) represents a `1`.  The first character (`-` or a `d`) indicates if the "file" is a directory.  Each set of 3 (`---` or `rwx`) indicates read/write/execute permissions.  The first set of three indicates permissions for the *owner*, the second for the *group* and the third for anyone else, aka *other*.

Permissions are set using the `chmod` command.  Use something like `chmod +x <file>` to turn on the executable bit for all three levels, owner, group, and other.  Use `chmod -x <file>` to turn off the ability to execute.  Use `chmod u+x <file>` to make the file executable, but only for the owner.  Replace `u` with `g` or `o` to set attributes for the group or other.

### Managing Processes

Understanding foreground and background processes. https://linuxconfig.org/bash-background-process-management

- https://linuxconfig.org/understanding-foreground-and-background-linux-processes

- https://linuxconfig.org/bash-background-process-management

- https://manpages.ubuntu.com/manpages/xenial/man1/ps.1.html

- https://wiki.ubuntu.com/systemd

### iptables

- https://www.cyberciti.biz/faq/linux-port-redirection-with-iptables/
- https://www.hostinger.com/tutorials/iptables-tutorial

### cron jobs

- The `/etc/crontab` file can be used to run scripts on a custom schedule.  There are defaults set for hourly, daily, weekly, and monthly.  Drop scripts into the appropriate directory, for example `/etc/cron.daily/some_script1`.
- You can test to verify which scripts will be picked up and run using `sudo run-parts --report --test /etc/cron.daily`
- [Function of /etc/cron.hourly](https://askubuntu.com/questions/7676/function-of-etc-cron-hourly)
