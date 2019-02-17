from rest_framework import viewsets
from .serializers import (
    PostSerializer,
    TagSerializer,
    CategorySerializer,
    SubscriberSerializer,
    ArchiveSerializer,
    )

from .models import (
    Post,
    Tag,
    Category,
    Subscriber,
    Archive,
    )

from rest_framework import generics
from rest_framework.filters import SearchFilter



# Post - GET, POST

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all().order_by("-date_posted")
    serializer_class = PostSerializer
    filter_backends = [SearchFilter]
    search_fields = ('title', 'subtitle', 'content')

# Post Important - GET

class PostImportantViewSet(generics.ListAPIView):
    serializer_class = PostSerializer

    def get_queryset(self):
        return Post.objects.filter(super_important=True)

# Post for Tag - GET

class PostList(generics.ListAPIView):
    serializer_class = TagSerializer

    def get_queryset(self):
        tagname = self.kwargs['tagname']
        return Tag.objects.filter(name=tagname)

# Post for Category - GET

class PostListCategory(generics.ListAPIView):
    serializer_class = CategorySerializer

    def get_queryset(self):
        category = self.kwargs['category']
        return Category.objects.filter(name=category)

# Post Archive - GET

class PostListArchive(generics.ListAPIView):
    serializer_class = ArchiveSerializer

    def get_queryset(self):
        year = self.kwargs['year']
        month = self.kwargs['month']
        return Archive.objects.filter(year=year, month=month)

# Tag - GET

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

# Category - GET

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

# Archive - GET

class ArchiveViewSet(viewsets.ModelViewSet):
    queryset = Archive.objects.all()
    serializer_class = ArchiveSerializer

# Subscriber - GET, POST


class SubscriberViewSet(viewsets.ModelViewSet):
    queryset = Subscriber.objects.all()
    serializer_class = SubscriberSerializer
    permission_classes = ()


