from django.db import models
from django.utils import timezone


class NewsPost(models.Model):
    title_en = models.CharField(max_length=200)
    title_ar = models.CharField(max_length=200)
    body_en = models.TextField()
    body_ar = models.TextField()
    image = models.ImageField(upload_to="news/", blank=True)
    published = models.BooleanField(default=True)
    created = models.DateField(default=timezone.localdate)

    class Meta:
        ordering = ["-created", "-id"]

    def __str__(self):
        return self.title_en


class GalleryImage(models.Model):
    caption_en = models.CharField(max_length=200, blank=True)
    caption_ar = models.CharField(max_length=200, blank=True)
    image = models.ImageField(upload_to="gallery/")
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created", "-id"]

    def __str__(self):
        return self.caption_en or f"Photo {self.pk}"


class Enrollment(models.Model):
    AGE_GROUPS = [
        ("seeds", "Little Seeds (2-3)"),
        ("sprouts", "Sprouts (3-4)"),
        ("blossoms", "Blossoms (4-6)"),
    ]
    child_name = models.CharField(max_length=150)
    birth_date = models.DateField()
    age_group = models.CharField(max_length=20, choices=AGE_GROUPS)
    parent_name = models.CharField(max_length=150)
    phone = models.CharField(max_length=40)
    email = models.EmailField(blank=True)
    notes = models.TextField(blank=True)
    handled = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created"]

    def __str__(self):
        return f"{self.child_name} ({self.parent_name})"


class ContactMessage(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=40, blank=True)
    message = models.TextField()
    handled = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created"]

    def __str__(self):
        return f"{self.name} - {self.created:%Y-%m-%d}"
