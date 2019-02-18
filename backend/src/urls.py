from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from src.api import urls
from django.conf.urls.static import static
from django.conf import settings
from django.views.generic import TemplateView
from django.views.defaults import page_not_found


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(urls)),
    url('', TemplateView.as_view(template_name='ng.html'), name='home'),
    ]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)