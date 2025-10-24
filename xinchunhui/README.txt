新春会 - 静态网站（可部署到 Cloudflare Pages）

项目结构：
- index.html          首页（活动宣传）
- products.html       商品页（12 个商品占位）
- assets/css/style.css 样式文件
- assets/img/placeholder_1..12.png 占位图片（可替换）
- js/script.js        简单交互（购买按钮弹窗、锚点平滑滚动）

部署到 Cloudflare Pages：
1. 在本地解压 xinchunhui.zip。
2. 将文件夹内容上传到你的 Git 仓库并连接到 Cloudflare Pages，或直接在 Pages 控制台上传构建目录。
3. 如果需要接入支付/后台，请将按钮链接替换为真实支付链接并添加所需后端服务或第三方支付脚本。

说明：
- 颜色变量在 assets/css/style.css :root 中定义，方便统一调整。
- 所有文本均为占位，便于日后替换。