from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer, ApplicantSerializer
from .models import Todo, Applicant

# Create your views here.
class TodoView(viewsets.ModelViewSet):
  serializer_class = TodoSerializer
  queryset = Todo.objects.all()

class ApplicantView(viewsets.ModelViewSet):
  serializer_class = ApplicantSerializer
  queryset = Applicant.objects.all()