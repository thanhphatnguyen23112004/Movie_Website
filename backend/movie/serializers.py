from rest_framework import serializers
from .models import Movie
from category.models import Category

class MovieSerializer(serializers.ModelSerializer):
    categories = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Category.objects.all()
    )

    class Meta:
        model = Movie
        fields = '__all__'