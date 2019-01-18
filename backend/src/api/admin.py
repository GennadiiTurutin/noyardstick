from django.contrib import admin
from .models import User, Post, Comment, Tag, Image, Category, Subscriber, Archive
from django.contrib import admin
from django.contrib.auth.models import Group

# Register your models here.
admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(Tag)
admin.site.register(Category)
admin.site.register(Image)
admin.site.register(Subscriber)
admin.site.register(Archive)
admin.site.register(User)
admin.site.unregister(Group)