# 徐州贤片网络科技有限公司官网

以视觉赋能品牌，为政企打造展厅、文化、数字网站作品。

纯静态单页企业官网（HTML + Tailwind CSS），无后端依赖，可部署到任意静态托管平台（Vercel / Netlify / 服务器）。

## 在线地址

- 线上演示（Vercel）：https://xianpian-website.vercel.app
- GitHub 仓库：https://github.com/wjww0727/xianpian-website

## 项目结构

```
贤片科技官网豆包/
├── index.html              # 官网主页（8大模块，单页）
├── assets/
│   ├── css/
│   │   ├── input.css       # Tailwind 源样式（改样式从这里改）
│   │   └── style.css       # 编译后的生产 CSS（已压缩，勿手改）
│   └── img/
│       └── logo-原图.png   # 公司logo原图（PNG，来自微信）
├── tailwind.config.js      # 品牌色等配置
├── vercel.json             # Vercel 静态部署配置
├── sitemap.xml             # 站点地图
├── robots.txt
└── README.md
```

## 本地开发 / 修改样式

```bash
npm install
# 修改 index.html 或 assets/css/input.css 后重新编译：
npx tailwindcss -i ./assets/css/input.css -o ./assets/css/style.css --minify
```

## 部署

### 方式一：Vercel（当前使用）
1. 推送到 GitHub 仓库
2. 打开 https://vercel.com/new ，导入本仓库
3. 框架选择 Other（静态），点击 Deploy 即可

### 方式二：任意静态托管 / 服务器
直接把整个项目文件夹上传到 Nginx / OSS 静态站点即可，入口为 `index.html`。

## 待补充资料（上线前建议替换）

| 项目 | 当前占位 | 说明 |
|------|---------|------|
| 公司地址 | 江苏省徐州市 | 补充详细地址后替换 `index.html` 中地址 |
| 公司邮箱 | info@xianpian-tech.com | 确认后替换 |
| 案例图片 | 渐变占位卡片 | 有真实案例图后替换 `#works` 区块卡片 |
| ICP备案号 | 未填写 | 备案通过后在页脚添加备案号 |
| 留言表单 | 前端演示 | 接入 Formspree / 飞书表单 / 后端接口后即可正式收信 |

## 品牌色

- 主蓝：`#2a46a1`
- 主红：`#ab1818`
- 金色：`#ffd900`
- 深蓝：`#15204a`

## 页面模块

1. 首屏 Banner（Slogan + 双按钮）
2. 关于我们（定位 + 四大优势）
3. 核心业务（展厅 / 文化墙 / 视频 / 官网 四卡片）
4. 案例展示（四大类案例占位）
5. 服务流程（五步标准流程）
6. 客户合作（政企客户定位）
7. 联系我们（联系方式 + 在线留言）
8. 页脚（导航 + 版权）

---
© 2026 徐州贤片网络科技有限公司 版权所有
