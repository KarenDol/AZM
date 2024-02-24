from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.models import User
# Create your views here.

def home(request):
    return render(request, 'index.html')

def login_user(request):
    if request.user.is_authenticated:
        return redirect('home')
    else:
        if request.method == "POST":
            username = request.POST['username']
            password = request.POST['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('home')
            else:
                return redirect('login_user')
        else:
            return render(request, 'login.html')

def logout_user(request):
    logout(request)
    return redirect('home')

def create_order(request):
    return render(request, 'create_order.html')
