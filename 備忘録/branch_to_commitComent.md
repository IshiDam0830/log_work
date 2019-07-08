# コミットコメントに自動でブランチ名が入るように
## 概要
コミットコメントに自動でブランチ名が入るようにするための設定

## 格納先
- .git > hooks > commit-msg

## code
	#!/bin/bash -u
	current_branch=$(git branch | grep '*' | sed -e 's/\*//')

	#Insert Issue ID at the beginning of the commit message if it doesn't exist
	if [ ! `grep "$issue_id" $1` ]; then
		sed -i -e '1 s@\(.*\)@'"${current_branch}"' \1@' $1
	fipush

