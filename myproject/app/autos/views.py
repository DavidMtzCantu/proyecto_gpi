from django.shortcuts import render
from .serializers import AutoSerializer
from rest_framework import generics
from .models import Auto

# Create your views here.

class AutoCreateView(generics.ListCreateAPIView):
    queryset = Auto.objects.filter(is_deleted=False)
    serializer_class = AutoSerializer

class AutoCreate(generics.CreateAPIView):
     queryset = Auto.objects.filter(is_deleted=False)
     serializer_class = AutoSerializer


class AutoUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Auto.objects.filter(is_deleted=False)
    serializer_class = AutoSerializer
