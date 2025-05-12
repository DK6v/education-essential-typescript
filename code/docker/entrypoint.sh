#!/usr/bin/env bash
set -e

umask 002

printf '%s\n' \
  "PS1='\[\e[38;5;5m\]\[\e[1m\]TS\[\e[m\] \[\e[34m\]\[\e[1m\]\W\[\e[m\] \$ \033[0m'" \
  >> ~/.bashrc

printf '%s\n' \
  "alias ll='ls -al'" \
  >> ~/.bash_aliases

exec "$@"
