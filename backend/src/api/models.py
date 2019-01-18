from django.db import models
from django.utils import timezone
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.urls import reverse

from django.core.mail import send_mail, send_mass_mail
from django.template import loader 

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

class UserManager(BaseUserManager):
    use_in_migrations = True

    def create_user(self, 
        username, 
        email, 
        password, 
        is_active=True, 
        is_staff=False, 
        is_admin=False 
        ):
        user_obj = self.model(email=email, username=username, password=password)
        user_obj.set_password(password)
        user_obj.is_staff = is_staff
        user_obj.is_admin = is_admin
        user_obj.is_active = is_active
        user_obj.save(using=self._db)
        return user_obj

    def create_superuser(self, username, email, password):
        user = self.create_user(
            username, 
            email,
            password=password,
            is_staff=True,
            is_admin=True)
        user.save(using=self._db)
        return user

class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=255,unique=True)
    email = models.EmailField(max_length=255,unique=True)
    date_joined = models.DateTimeField('date joined', auto_now_add=True)
    is_active = models.BooleanField('active', default=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']


    objects = UserManager()

    def __str__(self):           
        return self.username

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    def save(self, *args, **kwargs):
        super().set_password(self.password)
        super().save(*args, **kwargs)


"""
class MyUser(User):
    def save(self, *args, **kwargs):
        super().set_password(self.password)
        super().save(*args, **kwargs)
"""

class Image(models.Model):
    image = models.ImageField('Uploaded image')

class Tag(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name
        
class Archive(models.Model):
    month = models.TextField(max_length=20)
    year = models.TextField(max_length=10)
    date_created = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.month + self.year 

class Category(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Post(models.Model):
    title = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=500)
    content = models.TextField()
    super_important = models.BooleanField(default=True)
    date_posted = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    tags = models.ManyToManyField(Tag, related_name='posts')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="posts")
    search_fields = ('title', 'subtitle', 'content')
    post_images = models.ManyToManyField(Image, related_name='posts')
    archive = models.ForeignKey(Archive, on_delete=models.CASCADE, related_name="posts")

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        html_message = loader.render_to_string(
            BASE_DIR + '/static/templates/news.html'
            )
        subject = 'NoYardstick News'
        from_email = 'gennadii.turutin@gmail.com'
        recipient_list  = ['gennadii.turutin@gmail.com']
        send_mail( subject,
                   message=None,
                   from_email=from_email, 
                   fail_silently=True,
                   html_message=html_message,
                   recipient_list=recipient_list)

class Comment(models.Model):
    content = models.TextField(max_length=500)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    date_posted = models.DateTimeField(default=timezone.now)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="comments")

    def __str__(self):
        return self.content 

class Subscriber(models.Model):
    id = models.AutoField(primary_key=True)
    email = models.EmailField()
    date_subscribed = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.email

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        html_message = loader.render_to_string(
            BASE_DIR + '/static/templates/subscription.html',
            {'email': self.email, 'id': self.id})
        subject = 'NoYardstick Subscription'
        from_email = 'gennadii.turutin@gmail.com'
        recipient_list  = [self.email]
        send_mail( subject,
                   message=None,
                   from_email=from_email, 
                   fail_silently=True,
                   html_message=html_message,
                   recipient_list=recipient_list)



