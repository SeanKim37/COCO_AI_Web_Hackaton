from django.db import models


# Create your models here.
class War92(models.Model):
    play_id = models.TextField() # 선수 id
    name = models.TextField() # 선수명
    pit_hit = models.TextField() # 투수 or 타자
    position = models.TextField() # 포지션 (투수/내야수/외야수/포수)
    team = models.TextField() # 팀
    war = models.TextField() # war