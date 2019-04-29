#!/bin/bash
set -e

cd /var/www/hero
pm2 stop hero || true