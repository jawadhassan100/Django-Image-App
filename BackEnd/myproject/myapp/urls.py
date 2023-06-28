from django.urls import path
from .views import MyImageViewSet, MyImageDetailViewSet

urlpatterns = [
    path('images/', MyImageViewSet.as_view(), name='image-list'),
    path('images/<int:pk>/', MyImageDetailViewSet.as_view(), name='image-detail'),
]
