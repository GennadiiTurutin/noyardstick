from django.contrib import admin
from django.contrib.auth.models import User
from .models import Post, Tag, Category, Subscriber, Archive
from django.contrib import admin
from django.contrib.auth.models import Group
from django.forms import TextInput, Textarea
from django.db import models

class MyPost(admin.ModelAdmin):
    formfield_overrides = {
        models.CharField: {'widget': Textarea(attrs={'size':'200','rows':3, 'cols':200})},
        models.TextField: {'widget': Textarea(attrs={'size':'2000','rows':30, 'cols':200})},
    }

# Register your models here.
admin.site.register(Post, MyPost)
admin.site.register(Tag)
admin.site.register(Category)
admin.site.register(Subscriber)
admin.site.register(Archive)
admin.site.unregister(Group)