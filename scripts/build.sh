#!/bin/bash

jekyll build --config _config.yml
htmlproofer ./_site
