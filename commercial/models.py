from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Order(models.Model):
    executor = models.ForeignKey(User, on_delete=models.CASCADE) #исполнитель
    organization = models.CharField(max_length=30) #Заказчик
    phone = models.CharField(max_length=20, null=True) #Контакты заказчика
    email = models.CharField(max_length=20, null=True)  #Почта заказчика
    subject = models.CharField(max_length=50) #Предмет закупа
    status = models.CharField(max_length=20) #Статус заказа
    comment = models.CharField(max_length=150, null=True)
    cp_numb = models.CharField(max_length=20, null=True) #номер коммерческого предложения
    creation_date = models.DateField() #Дата создания заявка

