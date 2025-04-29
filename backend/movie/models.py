from django.db import models
from category.models import Category

class Movie(models.Model):
    ID_movie = models.BigAutoField(primary_key=True)
    Name_movie = models.CharField(max_length=255)
    Linkaddress_Poster = models.URLField(max_length=500)
    Year_of_manufacture = models.IntegerField()
    Country_of_origin = models.CharField(max_length=100)
    Number_of_episodes = models.IntegerField()
    categories = models.ManyToManyField(Category, related_name='movies')

    def __str__(self):
        return self.Name_movie
