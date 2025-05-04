from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/auth/verify/', TokenVerifyView.as_view(), name='token_verify'),
    # path('auth/login/' ... TokenObtainPairView ở urls.py gốc),
    # path('auth/refresh/' ... TokenRefreshView ở urls.py gốc),
    path('api/category/', include('category.urls')),
    path('api/movie/', include('movie.urls')),
    path('api/episode/', include('episode.urls')),
    path('api/', include('users.urls')),
]