from rest_framework.serializers import ModelSerializer
from .models import Auto

class AutoSerializer(ModelSerializer):
    class Meta:
        model = Auto
        fields = ('marca','modelo','anio','id_Persona')
