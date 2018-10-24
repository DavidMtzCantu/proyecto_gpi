from django.db import models
from app.models import BaseModel
# Create your models here.
class Persona(BaseModel):
    nombre=models.CharField(max_length=100)
    apellido_paterno=models.CharField(max_length=100)
    apellido_materno=models.CharField(max_length=100)
    fecha_nacimiento=models.DateField()

    def __str__(self):
        return self.nombre

  # Here's where to take a look
    def soft_delete(self):
        self.is_deleted = True
        self.deleted_at = timezone.now()
        self.save()
