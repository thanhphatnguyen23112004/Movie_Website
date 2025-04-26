from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated # Import IsAuthenticated
from .serializers import RegisterSerializer, UserSerializer
# from django.contrib.auth import get_user_model # Nếu dùng get_user_model()

# User = get_user_model() # Nếu dùng get_user_model()
from .models import CustomUser as User # Sử dụng CustomUser bạn đã tạo


class RegisterView(generics.CreateAPIView):
    # Endpoint: POST /api/auth/register/
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

class ManageUserView(generics.RetrieveUpdateAPIView):
    # Endpoint: GET, PUT, PATCH /api/auth/me/
    # Lấy thông tin user đang đăng nhập và cho phép cập nhật
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        # Trả về user đang gửi request
        return self.request.user

    # Nếu chỉ muốn GET thông tin user, dùng generics.RetrieveAPIView