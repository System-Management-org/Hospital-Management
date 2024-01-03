#seialization
from rest_framework import serializers


class PatientSerializer(serializers.Serializer):

    class Meta:
        fields = '__all__'


class DoctorSerializer(serializers.Serializer):

    class Meta:
        fields = '__all__'


class PharmacistSerializer(serializers.Serializer):

    class Meta:
        fields = '__all__'


class NurseSerializer(serializers.Serializer):

    class Meta:
        fields = '__all__'


class CashierSerializer(serializers.Serializer):

    class Meta:
        fields = '__all__'


class CheckInSerializer(serializers.Serializer):

    class Meta:
        fields = '__all__'


class AppointmentSerializer(serializers.Serializer):

    class Meta:
        fields = '__all__'