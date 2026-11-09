from rest_framework import serializers

from .models import ContactMessage, Enrollment, GalleryImage, NewsPost


class NewsPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsPost
        fields = ["id", "title_en", "title_ar", "body_en", "body_ar", "image", "created"]


class GalleryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImage
        fields = ["id", "caption_en", "caption_ar", "image"]


class EnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enrollment
        fields = [
            "child_name", "birth_date", "age_group",
            "parent_name", "phone", "email", "notes",
        ]


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ["name", "email", "phone", "message"]
