from django.shortcuts import render, HttpResponse
from . import models

# Create your views here.

def login(request):
    if request.method == 'POST':
        print('进入登录页面')
        player_name = request.POST['username']
        password = request.POST['password']
        player = models.Player.objects.filter(username=player_name).first()
        # TODO: 检查
        if player is None:
            return render(request, 'login/log_in.html', {'error_message' : '用户不存在',})
        if player.username == player_name and player.password == password:
            return render(request, 'login/success.html')
        else:
            return render(request, 'login/log_in.html', {'error_message' : '密码错误',})
    return render(request, 'login/log_in.html')

def register(request):
    if request.method == 'POST':
        print('进入注册页面')
        player_name = request.POST['username']
        password = request.POST['password']
        repassword = request.POST['repassword']
        # TODO: 检验
        if models.Player.objects.filter(username=player_name).first() != None:
            return render(request, 'login/register.html', {'existed_player' : '用户名已被使用'})
        player = models.Player(username=player_name, password=password)
        player.save()
        return render(request, 'login/register_successfully.html')
    return render(request, 'login/register.html')

def logout(request):
    return HttpResponse("Logout successfully")

def index(request):
    return render(request, 'login/index.html')

def test(request):
    return render(request, 'login/register_successfully.html')

def success(request):
    return render(request, 'login/successfully.html')