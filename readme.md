MQTT Implementation of Verisure-api for Raspberry Pi
============

Verisure API written by suhajdab (https://github.com/suhajdab/verisure-api)

I have packaged and modified code from The_Pal on m.nu (http://forum.m.nu/post28277.html), without that information I wouldn't have been able to create the MQTT implementation.

If you don't have Mosquitto installed yet, see guide at http://andreasahrens.se/setting-up-mosquitto-on-raspian-jessie/

To install, get code from verisure.items and verisure.sitemap and paste into your own sitemap and items files. Modify as needed
Add all files from scripts, rules and transform folders to the same folders in your configurations folder
See example config in openhab.cfg but set up the appropriate MQTT settins in your own file - DON'T just copy and paste the whole config file
Add files from images folder to your openHAB home, webapps, images folder

Set up two cron jobs that run your connections to Verisure (see https://www.raspberrypi.org/documentation/linux/usage/cron.md on installation)

My example crontab jobs:

*/5 * * * * node /usr/share/openhab/configurations/scripts/verisure-alarm.js | mosquitto_pub -d -t /hemgatan/verisure/status -s

0 */1 * * * node /usr/share/openhab/configurations/scripts/verisure-climate.js | mosquitto_pub -d -t /hemgatan/verisure/climate -s


This will run verisure alarm every 5 minutes and verisure climate every one hour

Full guide will be available on http://andreasahrens.se