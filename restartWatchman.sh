#!/bin/sh

### This is a script to restart watchman
### Sometimes, watchman has some bugs
### And we need this script to restart and get things back to work

echo 256 | sudo tee -a /proc/sys/fs/inotify/max_user_instances
echo 32768 | sudo tee -a /proc/sys/fs/inotify/max_queued_events
echo 65536 | sudo tee -a /proc/sys/fs/inotify/max_user_watches
watchman shutdown-server
