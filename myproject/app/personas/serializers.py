from rest_framework.serializers import ModelSerializer
from .models import Persona

class PersonaSerializer(ModelSerializer):
    class Meta:
        model = Persona
        fields = ('nombre','apellido_paterno','apellido_materno','fecha_nacimiento')
