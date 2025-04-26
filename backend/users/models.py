# backend/users/models.py

from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    # Add any custom fields here in the future, e.g.:
    # date_of_birth = models.DateField(null=True, blank=True)
    # avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)
    # address = models.CharField(max_length=255, blank=True)

    # Required for AbstractUser, but you can define custom managers here
    # objects = CustomUserManager()

    # Add 'related_name' to avoid clashes with auth.User group/permissions
    # if you ever have both models in the same project history (unlikely here)
    # Although not strictly necessary if you define AUTH_USER_MODEL from start
    # groups = models.ManyToManyField(
    #     'auth.Group',
    #     verbose_name='groups',
    #     blank=True,
    #     help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
    #     related_name="customuser_set", # <--- Example of related_name
    #     related_query_name="user",
    # )
    # user_permissions = models.ManyToManyField(
    #     'auth.Permission',
    #     verbose_name='user permissions',
    #     blank=True,
    #     help_text='Specific permissions for this user.',
    #     related_name="customuser_set", # <--- Example of related_name
    #     related_query_name="user",
    # )


    def __str__(self):
        return self.username