from django.shortcuts import render
from .serializers import PersonaSerializer
from rest_framework import generics
from .models import Persona

# Create your views here.

class PersonaCreateView(generics.ListCreateAPIView):
    queryset = Persona.objects.filter(is_deleted=False)
    serializer_class = PersonaSerializer

class PersonaCreate(generics.CreateAPIView):
     queryset = Persona.objects.filter(is_deleted=False)
     serializer_class = PersonaSerializer


class PersonaUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Persona.objects.filter(is_deleted=False)
    serializer_class = PersonaSerializer
