from rest_framework import routers
from .viewsets import BookViewSet

router = routers.SimpleRouter()
router.register('book', BookViewSet)
urlpatterns = router.urls
