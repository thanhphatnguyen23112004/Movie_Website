# backend/users/urls.py

from django.urls import path
from .views import RegisterView, ManageUserView

urlpatterns = [
    path('auth/register/', RegisterView.as_view(), name='auth_register'),
    # path('auth/login/' ... TokenObtainPairView ở urls.py gốc),
    # path('auth/refresh/' ... TokenRefreshView ở urls.py gốc),
    path('auth/me/', ManageUserView.as_view(), name='auth_me'),
]