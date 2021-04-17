from django.db import models

# Create your models here.

class Todo(models.Model):
  title = models.CharField(max_length=120)
  description = models.TextField()
  completed = models.BooleanField(default=False)

  def _str_(self):
    return self.title

class Applicant(models.Model):
  first_name = models.CharField(max_length=100)
  last_name = models.CharField(max_length=100)

  def _str_(self):
    return self.first_name + self.last_name
