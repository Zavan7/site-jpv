from django.urls import path
from home_jpv.views import home

urlpatterns = [
    path('', home),
]
