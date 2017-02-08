#!/bin/bash

sudo apt-get install -qq ncftp

ncftp -u "$USERNAME" -p "$PASSWORD" $HOST<<EOF
rm -rf site/wwwroot
mkdir site/wwwroot
EOF

cd _site
ncftpput -R -v -u "$USERNAME" -p "$PASSWORD" $HOST /site/wwwroot .
