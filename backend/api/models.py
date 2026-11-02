from django.db import models

# Create your models here.
class Item(models.Model):
    name = models.TextField(max_length=50, unique=True)
    picture = models.ImageField()
    price = models.DecimalField(max_digits=5, decimal_places=0)

    def __str__(self):
        return self.name
