from django.shortcuts import render, HttpResponse
from . import models

# Create your views here.

def login(request):
    if request.method == 'POST':
        print('进入登录页面')
        player_name = request.POST['username']
        password = request.POST['password']
        player = models.Player.objects.filter(username=player_name).first()
        print('获取到信息')
        if player.username == player_name and player.password == password:
            print('登录成功')
            return HttpResponse('登录成功')
        else:
            print('登录失败')
            return HttpResponse('登录失败')
    return render(request, 'login/log_in.html')

def register(request):
    if request.method == 'POST':
        print('进入注册页面')
        player_name = request.POST['username']
        password = request.POST['password']
        repassword = request.POST['repassword']
        # TODO: 检验
        player = models.Player(username=player_name, password=password)
        player.save()
        return HttpResponse('注册成功')
    return render(request, 'login/register.html')

def logout(request):
    return HttpResponse("Logout successfully")

def index(request):
    return render(request, 'login/index.html')