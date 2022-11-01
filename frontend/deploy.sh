function box_echo() {
    echo "------------------------------------"
    echo $1
    echo "------------------------------------"
}


box_echo "Pulling latest changes from GitHub"
git pull

box_echo "Installing dependencies"
yarn install

box_echo "Building project"
yarn build

box_echo "Restarting server"
pm2 restart all

echo "Done!"


  


