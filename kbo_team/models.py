from django.db import models


# Create your models here.
class KboTeam22(models.Model):
    team = models.TextField()
    play_id = models.TextField()
    name = models.TextField()
    position = models.TextField()
    war = models.TextField()