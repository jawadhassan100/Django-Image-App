from rest_framework import serializers
from .models import MyImage


class MyImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyImage
        fields = '__all__'
