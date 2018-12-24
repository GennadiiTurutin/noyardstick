from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from djangocrud.api import views
from djangocrud.api import urls as urls_2
from django.conf.urls.static import static
from django.conf import settings
from djangocrud.api.views import CustomObtainAuthToken

router = routers.DefaultRouter()
router.register('posts', views.PostViewSet)
router.register('tags', views.TagViewSet)
router.register('tags', views.CategoryViewSet)
router.register('comments', views.CommentViewSet)
router.register('users', views.UserViewSet)
router.register('images', views.ImageViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    url('', include(router.urls)),
    url('authenticate/', CustomObtainAuthToken.as_view()),
    url('tags/search/(?P<tagname>.+)/$', views.PostList.as_view()),
    url('categories/search/(?P<category>.+)/$', views.PostListCategory.as_view()),
    ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)