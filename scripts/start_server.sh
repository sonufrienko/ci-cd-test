#!/bin/bash
set -e

cd /var/www/hero
pm2 start index.js -n hero -i 1