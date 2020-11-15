from rest_framework import serializers
from .models import Client

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ('id', 'name', 'phone', 'email', 'birth', 'cep', 'address','state', 'city', 'neighborhood', 'reference_point')