alias proj="cd /root/WebApp/frontend/angularSPA2"
. proj
npm i
nohup ng s --host 93.188.164.182 --disable-host-check >> testing_angular.log &
