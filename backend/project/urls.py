  
from django.urls import path

from rest_framework.routers import DefaultRouter

from crud import views

router = DefaultRouter()
router.register(r'clients', views.ClientViewSet, basename='client')
urlpatterns = router.urls