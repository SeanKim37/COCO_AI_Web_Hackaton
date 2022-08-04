import os

from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.views import APIView


class WinningRate(APIView):
    def get(self, request):

        # win_predict = os.path.dirname("C:/COCO_AI_Web_Hackaton/") + "\DNN_winningRate_model.h5"
        # winlose_model = tf.keras.models.load_mdel(win_predict)
        return render(request, "winlose/winningRate.html")


class UploadWar92(APIView):
    def post(self, request):
        return Response(status=200)

