#!/usr/bin/env bash
echo '格式化dist文件夹'

rm -rf ./public/dist

echo '格式化完成'

echo 'webpack 开始打包'

export NODE_ENV=production&& webpack -p --config ./webpack.config/webpack.config.prod.js

echo '打包完成'

host=45.32.44.86
path=:/data/web/ju1234

echo '开始上传'


scp ./public/dist/index.html root@${host}${path}/public/dist/
#scp -r ./middleware ./script ./routes ./package.json ./utils ./service root@${host}${path}

export NODE_ENV=production & node qiniu.config.js

echo '文件上传成功'

