from rest_framework import viewsets
from rest_framework.response import Response

from .models import Client
from .serializers import ClientSerializer

class ClientViewSet(viewsets.ModelViewSet):
    serializer_class = ClientSerializer
    queryset = Client.objects.all()

    def create(self, request):
        Client.objects.create(**request.data)
        return Response({'status': 'criado'})

    def retrieve(self, request, pk=None):
        client = Client.objects.get(id=pk)
        client = ClientSerializer(client).data
        return Response(client)

    def update(self, request, pk=None):
        return Response({'status': 'atualizado'})

    def partial_update(self, request, pk=None):
        return Response({'status': 'atualizado partial'})

    def destroy(self, request, pk=None):
        Client.objects.filter(id=pk).delete()
        return Response({'status': 'deletado'})