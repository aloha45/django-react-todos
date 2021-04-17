from django.contrib import admin
from .models import Todo, Applicant

class TodoAdmin(admin.ModelAdmin):
  list_display = ('title', 'description', 'completed')

class ApplicantAdmin(admin.ModelAdmin):
  list_display = ('first_name', 'last_name')

# Register your models here.

admin.site.register(Todo, TodoAdmin)
admin.site.register(Applicant, ApplicantAdmin)