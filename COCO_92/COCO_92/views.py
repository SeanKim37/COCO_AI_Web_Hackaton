from django.shortcuts import render
from rest_framework.views import APIView


class Main(APIView):
    def get(self, request):
        print("Main GET 호출")
        return render(request, "sports_92/main.html")

    def post(self, request):
        print("Main POST 호출")
        return render(request, "sports_92/main.html")