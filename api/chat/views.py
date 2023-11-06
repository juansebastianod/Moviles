from django.contrib.auth import  authenticate
from django.shortcuts import render
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers  import UserSerializer

# Create your views here.

def get_auth_for_user(user):
    tokens = RefreshToken.for_user(user)
    print(tokens)
    return {
        'user':UserSerializer(user).data
    }
    
    
class SignInView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        if not username or not password:  # Corregí la condición lógica aquí
            return Response(status=400)

        user = authenticate(username=username, password=password)
        if not user:
            return Response(status=401)

        user_data = get_auth_for_user(user)

        return Response(user_data)