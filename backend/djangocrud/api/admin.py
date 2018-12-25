from django.contrib import admin
from .models import Post, Comment, Tag, Image, Category

# Register your models here.

admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(Tag)
admin.site.register(Category)
admin.site.register(Image)