from rest_framework import serializers
# from django.contrib.auth import get_user_model
from .models import CustomUser as User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        # model = get_user_model()
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'date_joined')
        read_only_fields = ('id', 'date_joined')

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True) 

    class Meta:
        # model = get_user_model()
        model = User
        fields = ('username', 'email', 'password', 'first_name', 'last_name')

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            email=validated_data.get('email', ''),
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', '')
        )
        return user

    # def validate_email(self, value):
    #     # Kiểm tra email đã tồn tại chưa (nếu email là unique)
    #     qs = User.objects.filter(email=value)
    #     if qs.exists():
    #          raise serializers.ValidationError("Email already exists")
    #     return value