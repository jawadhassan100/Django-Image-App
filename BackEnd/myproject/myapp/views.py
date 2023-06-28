from rest_framework import generics
from .models import MyImage
from .serializers import MyImageSerializer


class MyImageViewSet(generics.ListCreateAPIView):
    queryset = MyImage.objects.all()
    serializer_class = MyImageSerializer


class MyImageDetailViewSet(generics.RetrieveUpdateDestroyAPIView):
    queryset = MyImage.objects.all()
    serializer_class = MyImageSerializer
