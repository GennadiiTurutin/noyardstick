from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse

from django.core.mail import send_mail
from django.template import loader 



class Image(models.Model):
    image = models.ImageField('Uploaded image')

class Tag(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Post(models.Model):
    title = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=500)
    content = models.TextField()
    super_important = models.BooleanField(default=True)
    long_read = models.BooleanField(default=True)
    date_posted = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    tags = models.ManyToManyField(Tag, related_name='posts')
    categories = models.ManyToManyField(Category, related_name='posts')
    search_fields = ('title', 'subtitle', 'content')
    post_images = models.ManyToManyField(Image, related_name='posts')

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        send_mail('Subject here',
                  'Here is the message.',
                  'gennadii.turutin@gmail.com',
                  ['gennadii.turutin@gmail.com'],
                  fail_silently=False,)

class Comment(models.Model):
    content = models.TextField(max_length=500)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    date_posted = models.DateTimeField(default=timezone.now)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="comments")

    def __str__(self):
        return self.content 

class Subscriber(models.Model):
    email = models.EmailField()
   # user = models.ForeignKey(User, on_delete=models.CASCADE, default='')
    date_subscribed = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.email

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        html_message = loader.render_to_string(
            '/subscription.html',
            {'email': self.email,})
        subject = 'NoYardstick Subscription'
        from_email = 'gennadii.turutin@gmail.com'
        to_email = [self.email]
        message = "Now you are subscribed"
        send_mail( subject, 
                   message, 
                   from_email, 
                   to_email, 
                   fail_silently=True,
                   html_message=html_message)



