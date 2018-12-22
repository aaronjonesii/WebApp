from .models import Movie
from rest_framework import serializers


class Movieserializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Movie

        # Dynamic way of adding all fields manually instead of '__all__'
        immutable_list = Movie._meta.get_fields()
        fields_list = []
        for field in immutable_list:
            fields_list.append(field.attname)

        fields = fields_list


class Ipserializer(serializers.Serializer):
    ip = serializers.IPAddressField()
    response = serializers.JSONField()
