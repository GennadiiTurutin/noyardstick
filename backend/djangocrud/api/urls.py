from django.conf.urls import url, include
from rest_framework import routers
from djangocrud.api import views


router = routers.DefaultRouter()

urlpatterns = [
    url('', include(router.urls))
    ]