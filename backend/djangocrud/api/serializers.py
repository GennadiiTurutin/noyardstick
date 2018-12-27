from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Post, Tag, Comment, Image, Category, Subscriber
from django.db import models

from django.contrib.contenttypes.models import ContentType
from django.contrib.auth import get_user_model
from rest_framework.request import Request

from rest_framework.serializers import (
    HyperlinkedIdentityField,
    ModelSerializer,
    SerializerMethodField,
    ValidationError
    )

class ImageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta: 
        model = Image
        fields = ('__all__')

class UserSerializer(serializers.ModelSerializer):
    class Meta: 
        model = User
        fields = ('__all__')
        extra_kwargs = {'password' : {'write_only': True, 'required': True}}

class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = ('content', 'date_posted', 'post', 'author')

class CommentDetailSerializer(serializers.HyperlinkedModelSerializer):
    author = UserSerializer(read_only=True)
    class Meta:
        model = Comment
        fields = ('content', 'date_posted', 'post', 'author')

class PostSerializer_(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'subtitle', 'content', 'categories')


class TagSerializer(serializers.HyperlinkedModelSerializer):
    posts = PostSerializer_(many=True, read_only=True)
    class Meta:
        model = Tag
        fields = ('name', 'posts')

class CategorySerializer(serializers.HyperlinkedModelSerializer):
    posts = PostSerializer_(many=True, read_only=True)
    class Meta:
        model = Category
        fields = ('name', 'posts')

class PostSerializer(serializers.HyperlinkedModelSerializer):
    tags = TagSerializer(many=True, read_only=True)
    categories = CategorySerializer(many=True, read_only=True)
    comments = CommentDetailSerializer(many=True, read_only=True)
    post_images = ImageSerializer(many=True, read_only=True)
    
    class Meta:
        model = Post
        fields = ('id', 'title', 'subtitle', 'content', 'tags', 'categories', 
                  'comments', 'post_images', 'date_posted', 'long_read', 'super_important')

class SubscriberSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Subscriber
        fields = ('email', 'date_subscribed')











