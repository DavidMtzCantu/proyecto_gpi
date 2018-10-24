
from django.contrib import admin
from django.urls import include,path
from .views import AutoCreateView,AutoUpdateDeleteView,AutoCreate
urlpatterns = [
    path('autos/',AutoCreateView.as_view() ),
    path('auto/',AutoCreate.as_view()),
]
