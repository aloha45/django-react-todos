from rest_framework import serializers
from .models import Todo, Applicant

class TodoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Todo
    fields = ('id', 'title', 'description', 'completed')

class ApplicantSerializer(serializers.ModelSerializer):
  class Meta:
    model = Applicant
    field=('first_name', 'last_name')