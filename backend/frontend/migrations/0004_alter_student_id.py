# Generated by Django 4.0.4 on 2022-05-06 16:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0003_student'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]