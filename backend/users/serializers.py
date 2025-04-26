from rest_framework import serializers
# from django.contrib.auth import get_user_model # Cách lấy Custom User Model an toàn
from .models import CustomUser as User # Nếu dùng CustomUser và đã set AUTH_USER_MODEL

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        # model = get_user_model() # Cách tốt hơn nếu dùng get_user_model()
        model = User # Sử dụng CustomUser bạn đã tạo
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'date_joined') # Các trường muốn hiển thị
        read_only_fields = ('id', 'date_joined') # Các trường chỉ đọc

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True) # Chỉ cho phép ghi, không đọc

    class Meta:
        # model = get_user_model()
        model = User
        fields = ('username', 'email', 'password', 'first_name', 'last_name') # Các trường cho form đăng ký

    def create(self, validated_data):
        # Ghi đè phương thức create để hash mật khẩu trước khi lưu
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            email=validated_data.get('email', ''), # email là tùy chọn
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