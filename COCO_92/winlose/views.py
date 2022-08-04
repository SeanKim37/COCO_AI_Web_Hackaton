import os

from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.views import APIView

from winlose.models import War92


class WinningRate(APIView):
    def get(self, request):
        players_list = War92.objects.all().order_by('-war')
        return render(request, "winlose/winningRate.html", context=dict(players=players_list))


class UploadWar92(APIView):
    def post(self, request):
        return Response(status=200)

