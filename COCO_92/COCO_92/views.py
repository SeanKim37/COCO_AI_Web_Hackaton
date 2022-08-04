from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView


class Main(APIView):

    def get(self, request):
        print("Main GET 호출")
        return render(request, "COCO_92/main.html")

    def post(self, request):
        print("Main POST 호출")
        return Response(status=200)


class Vision(APIView):

    def get(self, request):
        print("Vision GET 호출")
        return render(request, "COCO_92/vision.html")


class About(APIView):

    def get(self, request):
        print("About GET 호출")
        return render(request, "COCO_92/about.html")
