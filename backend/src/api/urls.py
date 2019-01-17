from django.conf.urls import url, include
from rest_framework import routers
from src.api import views

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
    url('', include(router.urls)),
    url('tags/search/(?P<tagname>.+)/$', views.PostList.as_view()),
    url('category/search/(?P<category>.+)/$', views.PostListCategory.as_view()),
    url('posts/important', views.PostImportantViewSet.as_view()),
    url('archive/search/(?P<year>.+)/(?P<month>.+)$', views.PostListArchive.as_view()),
    ]