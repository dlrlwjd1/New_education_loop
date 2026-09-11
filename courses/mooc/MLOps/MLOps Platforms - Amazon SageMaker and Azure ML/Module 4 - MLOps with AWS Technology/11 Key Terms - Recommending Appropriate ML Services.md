# Key Terms — Recommending and Implementing Appropriate Machine Learning Services

## 개요
- Lesson 2 핵심 용어 정리. EC2, EBS, Auto Scaling, Elastic Load Balancing, AMI 등 AWS 컴퓨트·스토리지 인프라 개념을 다룬다.

## 내용

| 용어 | 설명 |
|---|---|
| **Elastic Compute Cloud(EC2)** | AWS 클라우드의 확장 가능한 컴퓨트 용량. 설정 가능한 가상 머신 인스턴스를 제공. |
| **Elastic Block Store(EBS)** | EC2 인스턴스에 연결할 수 있는 영구 블록 스토리지 볼륨. 데이터 드라이브 연결을 가능하게 함. |
| **Auto Scaling** | CPU 사용률 같은 지표에 따라 EC2 인스턴스를 자동으로 시작·종료해 애플리케이션 가용성을 유지하는 서비스. |
| **Elastic Load Balancing** | 여러 가용 영역에 걸친 EC2 인스턴스 같은 다수의 타깃에 애플리케이션 트래픽을 분산시켜 장애 허용성을 개선하는 서비스. |
| **Amazon Machine Image(AMI)** | EC2 인스턴스를 시작하는 데 사용되는 사전 구성된 가상 머신 이미지. 소프트웨어 구성을 결정. |

## 예시
```python
import boto3

# Launch an EC2 instance
ec2 = boto3.client('ec2')
ec2.run_instances(ImageId="ami-abc123", InstanceType="t2.micro")
```

```python
# Create and attach an EBS volume
ec2.create_volume(Size=50, AvailabilityZone='us-east-1a')
ec2.attach_volume(VolumeId='vol-123abc', InstanceId='i-abc456')
```

```python
# Launch instance from custom AMI
ec2.run_instances(ImageId='ami-custom123', InstanceType='t2.micro')
```

## 요약
- 이번 레슨은 EC2(컴퓨트), EBS(블록 스토리지), Auto Scaling(자동 확장), Elastic Load Balancing(트래픽 분산), AMI(사전 구성 이미지)까지, 적절한 ML 인프라 서비스를 선택·구현하는 기초가 되는 AWS 컴퓨트 개념들을 다룬다.
