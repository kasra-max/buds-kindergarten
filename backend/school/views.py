from rest_framework import generics
from rest_framework.throttling import AnonRateThrottle

from .models import ContactMessage, Enrollment, GalleryImage, NewsPost
from .serializers import (
    ContactMessageSerializer,
    EnrollmentSerializer,
    GalleryImageSerializer,
    NewsPostSerializer,
)


class FormThrottle(AnonRateThrottle):
    """Limits how often one visitor can submit forms (see settings)."""
    scope = "forms"


class NewsList(generics.ListAPIView):
    queryset = NewsPost.objects.filter(published=True)
    serializer_class = NewsPostSerializer


class GalleryList(generics.ListAPIView):
    queryset = GalleryImage.objects.all()
    serializer_class = GalleryImageSerializer


class EnrollmentCreate(generics.CreateAPIView):
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer
    throttle_classes = [FormThrottle]


class ContactCreate(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    throttle_classes = [FormThrottle]
