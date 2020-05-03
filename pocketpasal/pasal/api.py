from .models import Item
from rest_framework import viewsets, permissions
from .serializers import ItemSerializer
from django.http import HttpResponse


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = ItemSerializer

    def get_queryset(self):
        return self.request.user.items.all()

    def post(self, request, *args, **kwargs):
        name = request.data['name']
        price = request.data['price']
        description = request.data['description']
        image = request.data['image']
        Item.objects.create(name=name, price=price,
                            description=description, image=image)
        return HttpResponse({'message': 'Item Created'}, status=200)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
