from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from src.api import views, urls
from django.conf.urls.static import static
from django.conf import settings
from src.api.views import CustomObtainAuthToken
from django.views.generic import TemplateView

router = routers.DefaultRouter()

urlpatterns = [
    path('admin/', admin.site.urls),
    url('api/', include('src.api.urls')),
    url('authenticate/', CustomObtainAuthToken.as_view()),
   # url('authenticate/', CustomRegisterView.as_view()),
    url('^.*', TemplateView.as_view(template_name='templates/ng.html'), name='home')
    ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)