#!/bin/sh

# this is my personal installer
# it setups rust, bombadil and uv
# after that my dot files are cloned and installed
# but no profile linked yet

# check if Cargo is installed
if ! command -v cargo &> /dev/null
then
	echo "Could not find cargo! Installing ..."
	curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
	source $HOME/.cargo/env
fi

# check if bombadil is installed
if ! command -v bombadil &> /dev/null
then
	echo "Could not find bombadil! Installing ..."
	if [ -f "/etc/arch-release" ]; then
		sudo pacman -S toml-bombadil
	else
		cargo install toml-bombadil
	fi
fi

# check if uv is installed
if ! command -v uv &> /dev/null
then
	echo "Could not find uv! Installing ..."

	curl -LsSf https://astral.sh/uv/install.sh | sh
fi

# clone configuration of bombadil and activate
git clone git@github.com:bytesnake/scidots.git $HOME/.bombadil/

# bombadil install $HOME/.bombadil/
bombadil install $HOME/.bombadil/

# list all available profiles
echo "Available profiles for bombadil"
bombadil get profiles
printf "\n\n## Select with \`bombadil link <profile>\`\n"
