from rest_framework.routers import SimpleRouter
from frontend.views import UserViewSet
from frontend.auth.viewsets import LoginViewSet, RegistrationViewSet, RefreshViewSet


router = SimpleRouter()

# AUTHENTICATION
router.register(r'auth/login', LoginViewSet, basename='auth-login')
router.register(r'auth/user', RegistrationViewSet, basename='auth-register')
router.register(r'auth/refresh', RefreshViewSet, basename='auth-refresh')

# USER
router.register(r'user', UserViewSet, basename='user')

urlpatterns = router.urls


#urlpatterns = [
#    *router.urls
#]
