#!/bin/bash
jenkins-plugin-cli --plugins blueocean json-path-api favorite token-macro github git github-branch-source

exec jenkins.sh
