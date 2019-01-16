from django.contrib.auth import get_user_model
from django.core.management.base import Basecommand

class Command(BaseCommand):
	def handle(self, *args, **options):
		User = get_user_model()
		if not User.objects.filter(username="Gennadii").exists():
			User.objects.create_superuser("Gennadii", "gennadii.turutin@gmail.com", "1234")