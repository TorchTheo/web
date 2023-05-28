# web
NJU网络应用技术学期项目，与同学合作，个人负责登录注册功能的全栈

## 技术栈
python Django html CSS JS JQuery

## 程序结构
- login/中存放网页的有关信息和代码
- web/中存放Django的框架代码
- db.sqlite3为用户数据文件，使用Django内置的sqlite来存储
- `manage.py`控制程序运行模式，`python3 manage.py runserver`即可运行，`python3 manage.py shell`以interpret模式运行，可以在命令行中写python代码

## 网页有关文件
- login/static/中放置静态文件，如CSS、JS以及图片和网页的文件。
- login/static/templates/login/中为所有页面文件，`index.html`为首页界面，`log_in.html`为登陆界面，其他同理
- login/views.py中写了功能函数
- login/urls.py负责将views.py中的函数与网页路径绑定
- login/models.py中写了可以写到数据库中的数据的结构