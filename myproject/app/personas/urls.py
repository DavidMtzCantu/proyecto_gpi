
from django.contrib import admin
from django.urls import include,path
from .views import PersonaCreateView,PersonaUpdateDeleteView,PersonaCreate
urlpatterns = [
    path('personas/',PersonaCreateView.as_view() ),
    path('persona/',PersonaCreate.as_view()),
]
