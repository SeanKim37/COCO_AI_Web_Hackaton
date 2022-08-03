from django.shortcuts import render


# Create your views here.
from rest_framework.views import APIView
from kbo_team.models import KboTeam22


class KboTeam(APIView):
    def get(self, request, team_select):
        team_player = KboTeam22.objects.filter(team=team_select)
        return render(request, 'winlose/winningRate.html', context=dict(teamPlayer=team_player))
