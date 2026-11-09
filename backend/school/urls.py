from django.urls import path

from . import views

urlpatterns = [
    path("news/", views.NewsList.as_view()),
    path("gallery/", views.GalleryList.as_view()),
    path("enrollments/", views.EnrollmentCreate.as_view()),
    path("contact/", views.ContactCreate.as_view()),
]
