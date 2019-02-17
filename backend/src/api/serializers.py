from rest_framework import serializers
from django.contrib.auth.models import User
from .models import (
    Post,
    Tag,
    Category,
    Subscriber,
    Archive
    )


class PostSerializer_(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'subtitle', 'content', 'category', 'archive')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('__all__')
        extra_kwargs = {'password' : {'write_only': True, 'required': True}}


class TagSerializer(serializers.HyperlinkedModelSerializer):
    posts = PostSerializer_(many=True, read_only=True)
    class Meta:
        model = Tag
        fields = ('name', 'posts')

class CategorySerializer(serializers.HyperlinkedModelSerializer):
    posts = PostSerializer_(many=True, read_only=True)
    class Meta:
        model = Category
        fields = ('id','name', 'posts')


class PostSerializer(serializers.HyperlinkedModelSerializer):
    tags = TagSerializer(many=True, read_only=True)
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Post
        fields = ('id', 'title', 'subtitle', 'content', 'tags', 'category',
                   'date_posted', 'super_important')

class SubscriberSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Subscriber
        fields = ('id', 'email', 'date_subscribed')

class ArchiveSerializer(serializers.HyperlinkedModelSerializer):
    posts = PostSerializer_(many=True, read_only=True)
    class Meta:
        model = Archive
        fields = ('month', 'year', 'posts')









