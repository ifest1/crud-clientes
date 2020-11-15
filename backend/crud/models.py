from django.db import models

class Client(models.Model):
    name = models.CharField(max_length=70, blank=False)
    phone = models.CharField(max_length=70, blank=False)
    birth = models.DateField()
    email = models.EmailField()
    cep = models.CharField(max_length=10, blank=False)
    address = models.CharField(max_length=10, blank=False)
    city = models.CharField(max_length=70, blank=False)
    state = models.CharField(max_length=70, blank=False)
    neighborhood = models.CharField(max_length=70, blank=False)
    reference_point = models.CharField(max_length=250, blank=False)