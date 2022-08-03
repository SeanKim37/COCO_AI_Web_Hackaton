from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.views import APIView


class WinningRate(APIView):
    def get(self, request):
        return render(request, "winlose/winningRate.html")


class UploadWar92(APIView):
    def post(self, request):
        return Response(status=200)