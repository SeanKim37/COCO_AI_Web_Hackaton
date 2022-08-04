"""COCO_92 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from .views import Main, Vision, About
from winlose.views import WinningRate, UploadWar92
from kbo_team.views import KboTeam


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', Main.as_view()),
    path('winlose/', WinningRate.as_view()),
    path('kbo-team/', KboTeam.as_view()),
    path('ability/', include('appWAR.urls')),
    path('vision92/', Vision.as_view()),
    path('about92/', About.as_view()),
    path('winlose/upload/', UploadWar92.as_view())
]