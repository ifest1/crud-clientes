from rest_framework import viewsets
from rest_framework.response import Response

from .models import Client
from .serializers import ClientSerializer

class ClientViewSet(viewsets.ModelViewSet):
    serializer_class = ClientSerializer
    queryset = Client.objects.all()

    def create(self, request):
        Client.objects.create(**request.data)
        return Response({'status': 'Criado novo cliente'})

    def retrieve(self, request, pk=None):
        client = Client.objects.get(id=pk)
        client = ClientSerializer(client).data
        return Response(client)

    def partial_update(self, request, pk=None):
        Client.objects.filter(id=pk).update(**request.data)
        return Response({'status': 'Dados do cliente atualizados com sucesso.'})

    def destroy(self, request, pk=None):
        Client.objects.filter(id=pk).delete()
        return Response({'status': 'Cliente deletado com sucesso.'})