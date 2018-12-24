from django.contrib.auth.models import User
from rest_framework import viewsets
from .serializers import ( 
    PostSerializer, 
    PostSerializer_, 
    TagSerializer, 
    CategorySerializer,
    CommentSerializer, 
    CommentDetailSerializer,
    UserSerializer, 
    ImageSerializer
    )

from .models import Post, Tag, Comment, Image, Category
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.generics import (
    CreateAPIView
    )

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken

from rest_framework import generics

from django.db.models import Q

from rest_framework.filters import (
    SearchFilter, 
    OrderingFilter
    )

from rest_framework.pagination import (
    LimitOffsetPagination,
    PageNumberPagination
    )

class UserViewSet(viewsets.ModelViewSet, generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer   
    authentication_classes = (TokenAuthentication, )
    permission_classes = ()

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = [SearchFilter]
    search_fields = ('title', 'subtitle', 'content')

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CommentViewSet(viewsets.ModelViewSet, APIView):
    authentication_classes = (TokenAuthentication, SessionAuthentication )
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

class CustomObtainAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super(CustomObtainAuthToken, self).post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        user = User.objects.get(id=token.user_id)
        serializer = UserSerializer(user, many=False)
        return Response({'token': token.key, 'user': serializer.data})


class PostList(generics.ListAPIView):
    serializer_class = TagSerializer

    def get_queryset(self):
        tagname = self.kwargs['tagname']
        return Tag.objects.filter(name=tagname)

class PostListCategory(generics.ListAPIView):
    serializer_class = TagSerializer

    def get_queryset(self):
        category = self.kwargs['category']
        return Category.objects.filter(name=category)





