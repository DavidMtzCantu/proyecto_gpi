from django.db import models
from app.models import BaseModel
from app.personas.models import Persona
from django.db import models
from django.utils import timezone

# Create your models here.
class Auto(BaseModel):
    marca=models.CharField(max_length=100)
    modelo=models.CharField(max_length=100)
    anio=models.IntegerField()
    id_Persona=models.ForeignKey(Persona,on_delete=models.CASCADE)

    def __str__(self):
        return self.marca

    def soft_delete(self):
        self.is_deleted = True
        self.deleted_at = timezone.now()
        self.save()
