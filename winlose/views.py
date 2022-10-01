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
        play_id = request.data.get('play_id')
        name = request.data.get('name')
        pit_hit = request.data.get('pit_hit')
        position = request.data.get('position')
        team = request.data.get('team')
        war = request.data.get('war')

        War92.objects.create(play_id=play_id, name=name, pit_hit=pit_hit, position=position, team=team, war=war)

        return Response(status=200)

