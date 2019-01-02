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
router.register('categories', views.CategoryViewSet)
router.register('comments', views.CommentViewSet)
router.register('_comments', views.CommentDetailViewSet)
router.register('users', views.UserViewSet)
router.register('images', views.ImageViewSet)
router.register('subscribers', views.SubscriberViewSet)
router.register('archive', views.ArchiveViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    url('', include(router.urls)),
    url('authenticate/', CustomObtainAuthToken.as_view()),
    url('tags/search/(?P<tagname>.+)/$', views.PostList.as_view()),
    url('category/search/(?P<category>.+)/$', views.PostListCategory.as_view()),
    url('posts/long', views.PostLongReadViewSet.as_view()),
    url('posts/important', views.PostImportantViewSet.as_view()),
    url('archive/search/(?P<year>.+)/(?P<month>.+)$', views.PostListArchive.as_view())
    ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)