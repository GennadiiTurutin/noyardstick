from django.contrib import admin
from django.contrib.auth.models import User
from .models import Post, Comment, Tag, Image, Category, Subscriber, Archive

# Register your models here.
#admin.site.register(MyUser)
admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(Tag)
admin.site.register(Category)
admin.site.register(Image)
admin.site.register(Subscriber)
admin.site.register(Archive)