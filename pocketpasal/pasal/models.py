from django.db import models
from django.contrib.auth.models import User


def upload_path(instance, filename):
    return '/'.join(['images', str(instance.name), filename])


class Item(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    description = models.TextField()
    image = models.ImageField(upload_to=upload_path)
    created_at = models.DateTimeField(auto_now_add=True)
    seller = models.ForeignKey(
        User, related_name="items", on_delete=models.CASCADE, null=True)
