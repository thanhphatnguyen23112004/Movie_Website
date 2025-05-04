from django.db import models
from movie.models import Movie

class Episode(models.Model):
    ID_ep = models.BigAutoField(primary_key=True)
    ID_movie = models.ForeignKey(Movie, on_delete=models.CASCADE, related_name='episodes')
    Linkaddress_ep = models.URLField(max_length=500)
    Name_ep = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.Name_ep} - {self.ID_movie.Name_movie}"
