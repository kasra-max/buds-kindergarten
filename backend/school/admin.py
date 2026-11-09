from django.contrib import admin

from .models import ContactMessage, Enrollment, GalleryImage, NewsPost


@admin.register(NewsPost)
class NewsPostAdmin(admin.ModelAdmin):
    list_display = ("title_en", "title_ar", "created", "published")
    list_filter = ("published",)


@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ("caption_en", "caption_ar", "created")


@admin.register(Enrollment)
class EnrollmentAdmin(admin.ModelAdmin):
    list_display = ("child_name", "age_group", "parent_name", "phone", "created", "handled")
    list_filter = ("age_group", "handled")
    search_fields = ("child_name", "parent_name", "phone")


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "created", "handled")
    list_filter = ("handled",)
