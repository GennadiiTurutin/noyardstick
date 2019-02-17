from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.template import loader
import os
from django.db.models.signals import pre_delete


# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

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
    archive = models.ForeignKey(Archive, on_delete=models.CASCADE, related_name="posts")

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        html_message = loader.render_to_string(
            'news.html',
            {'id': self.id, 'title': self.title,
            'subtitle': self.subtitle})
        subject = 'NoYardstick News'
        from_email = 'gennadii.turutin@gmail.com'
        recipient_list  = Subscriber.instances
        send_mail( subject,
                   message=None,
                   from_email=from_email,
                   fail_silently=True,
                   html_message=html_message,
                   recipient_list=recipient_list)

# You can see a record of this email in your logs: https://app.mailgun.com/app/logs

# You can send up to 300 emails/day from this sandbox server.
# Next, you should add your own domain so you can send 10,000 emails/month for free.

class Subscriber(models.Model):
    id = models.AutoField(primary_key=True)
    email = models.EmailField(max_length=255,unique=True)
    date_subscribed = models.DateTimeField(default=timezone.now)
    instances = []

    def __str__(self):
        return self.email

    def save(self, *args, **kwargs):
        Subscriber.instances.append(self.email)
        super().save(*args, **kwargs)
        html_message = loader.render_to_string(
            'subscription.html',
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

    def delete_subscriber(instance, **kwargs):
        Subscriber.instances.remove(instance.email)

pre_delete.connect(Subscriber.delete_subscriber, sender=Subscriber)

