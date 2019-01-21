from rest_framework import viewsets
from django.contrib.auth.models import User
from .serializers import ( 
    PostSerializer,  
    PostSerializer_,
    TagSerializer, 
    CategorySerializer,
    UserSerializer, 
    ImageSerializer,
    SubscriberSerializer,
    ArchiveSerializer,
    UserSerializer
    )

from .models import ( 
    Post, 
    Tag, 
    Image, 
    Category, 
    Subscriber, 
    Archive
    )

from rest_framework.authentication import TokenAuthentication
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from django.db.models import Q
from rest_framework.filters import SearchFilter, OrderingFilter

from django.conf import settings
from django.shortcuts import render
from django.contrib import messages
from django.core.mail import send_mail


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

# Image - GET

class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

# Subscriber - GET, POST

class SubscriberViewSet(viewsets.ModelViewSet):
    queryset = Subscriber.objects.all()
    serializer_class = SubscriberSerializer
   # authentication_classes = (TokenAuthentication, )
    permission_classes = ()






