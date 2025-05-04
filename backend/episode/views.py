from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Episode
from .serializers import EpisodeSerializer

class EpisodeViewSet(ModelViewSet):
    queryset = Episode.objects.all()
    serializer_class = EpisodeSerializer

# Create your views here.
